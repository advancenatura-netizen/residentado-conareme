/* ============================================================
   MOTOR SRS — Repetición espaciada (algoritmo SM-2, el mismo
   principio que usa Anki) para MiResidentado / Momar.
   Guarda el estado de cada tarjeta/pregunta en localStorage,
   calcula cuándo "toca" repasarla de nuevo, y expone utilidades
   para construir una cola de repaso intercalada (interleaving)
   priorizando lo vencido y las áreas más débiles.
   ============================================================ */
(function(window){
  const KEY = "conareme_srs_v1";

  function loadState(){
    try{ return JSON.parse(localStorage.getItem(KEY) || "{}"); }
    catch(e){ return {}; }
  }
  function saveState(state){ localStorage.setItem(KEY, JSON.stringify(state)); }

  // Registro por defecto de una tarjeta nunca vista
  function blank(){
    return { ef:2.5, interval:0, reps:0, due:0, lapses:0, vistas:0 };
  }

  /* quality: 0=Otra vez, 1=Difícil, 2=Bien, 3=Fácil (UI de 4 botones,
     estilo Anki) -> se traduce a la escala 0-5 de SM-2 */
  const Q_MAP = [0, 3, 4, 5];

  function grade(id, qualityBtn){
    const state = loadState();
    const c = state[id] || blank();
    const q = Q_MAP[qualityBtn] ?? 3;
    c.vistas = (c.vistas||0) + 1;

    if(q < 3){
      c.lapses = (c.lapses||0) + 1;
      c.reps = 0;
      c.interval = 0; // vuelve a aparecer en la MISMA sesión / al día siguiente
    } else {
      if(c.reps === 0) c.interval = 1;
      else if(c.reps === 1) c.interval = 6;
      else c.interval = Math.round(c.interval * c.ef);
      c.reps += 1;
    }
    c.ef = Math.max(1.3, c.ef + (0.1 - (5-q)*(0.08 + (5-q)*0.02)));
    c.due = Date.now() + c.interval*86400000;
    c.last = Date.now();
    state[id] = c;
    saveState(state);
    return c;
  }

  function getRecord(id){
    const state = loadState();
    return state[id] || null;
  }

  function isDue(id){
    const r = getRecord(id);
    if(!r) return true; // nunca visto = "debido" (es nuevo)
    return r.due <= Date.now();
  }

  function isNew(id){ return !getRecord(id); }

  /* Construye una cola de estudio a partir de un pool de items
     {id, area, ...}. Prioriza:
      1) vencidos (due <= ahora), más los que tienen más "lapses" (área débil)
      2) mezcla intercalada por área (interleaving, no bloques por tema)
      3) añade una cuota de tarjetas nuevas ajustada a los días que faltan
         para el examen (más nuevas al principio, casi solo repaso al final)
     Devuelve un array ya barajado/intercalado listo para presentar. */
  function construirCola(pool, opts){
    opts = opts || {};
    const diasAlExamen = opts.diasAlExamen ?? 999;
    const maxItems = opts.maxItems ?? 40;

    const vencidos = [], nuevos = [];
    pool.forEach(it=>{
      const r = getRecord(it.id);
      if(!r) nuevos.push(it);
      else if(r.due <= Date.now()) vencidos.push({...it, _lapses:r.lapses||0});
    });

    // Ordena vencidos priorizando los que más fallan (áreas débiles) pero
    // baraja dentro de ese orden para lograr intercalado real entre áreas.
    vencidos.sort((a,b)=> (b._lapses - a._lapses) + (Math.random()-0.5)*0.6);

    // Cuota de tarjetas nuevas por sesión: si faltan muchos días, se introducen
    // más temas nuevos; si el examen está cerca, casi todo es repaso.
    let cuotaNuevas;
    if(diasAlExamen > 30) cuotaNuevas = 12;
    else if(diasAlExamen > 14) cuotaNuevas = 8;
    else if(diasAlExamen > 5) cuotaNuevas = 4;
    else cuotaNuevas = 1;

    const nuevasBarajadas = shuffle(nuevos).slice(0, cuotaNuevas);

    let cola = intercalarPorArea(vencidos).concat(nuevasBarajadas);
    if(cola.length > maxItems) cola = cola.slice(0, maxItems);
    return cola;
  }

  // Intercala items para que no se repita la misma área dos veces seguidas
  // cuando sea posible (interleaving real, no bloqueado por tema).
  function intercalarPorArea(items){
    const porArea = {};
    items.forEach(it=>{ (porArea[it.area] = porArea[it.area]||[]).push(it); });
    Object.values(porArea).forEach(shuffle);
    const areas = Object.keys(porArea);
    const out = [];
    let quedan = items.length;
    let lastArea = null;
    while(quedan > 0){
      let candidatas = areas.filter(a=>porArea[a].length>0 && a!==lastArea);
      if(candidatas.length===0) candidatas = areas.filter(a=>porArea[a].length>0);
      const a = candidatas[Math.floor(Math.random()*candidatas.length)];
      out.push(porArea[a].shift());
      lastArea = a;
      quedan--;
    }
    return out;
  }

  function shuffle(arr){
    const a = arr.slice();
    for(let i=a.length-1;i>0;i--){
      const j = Math.floor(Math.random()*(i+1));
      [a[i],a[j]] = [a[j],a[i]];
    }
    return a;
  }

  // Estadísticas globales rápidas (para widgets tipo "X pendientes hoy")
  function contarVencidosYNuevos(pool){
    let vencidos=0, nuevos=0, dominadas=0;
    pool.forEach(it=>{
      const r = getRecord(it.id);
      if(!r) nuevos++;
      else{
        if(r.due<=Date.now()) vencidos++;
        if(r.reps>=4 && r.ef>=2.3) dominadas++;
      }
    });
    return {vencidos, nuevos, dominadas, total:pool.length};
  }

  // Calibración de confianza: guarda pares (confianza, acierto) para ver
  // si el usuario sabe cuándo realmente sabe (metacognición).
  const CKEY = "conareme_calibracion_v1";
  function registrarConfianza(nivelConfianza, acerto){
    let arr = [];
    try{ arr = JSON.parse(localStorage.getItem(CKEY)||"[]"); }catch(e){}
    arr.push({c:nivelConfianza, ok:acerto?1:0, t:Date.now()});
    if(arr.length>500) arr = arr.slice(arr.length-500);
    localStorage.setItem(CKEY, JSON.stringify(arr));
  }
  function calibracion(){
    let arr = [];
    try{ arr = JSON.parse(localStorage.getItem(CKEY)||"[]"); }catch(e){}
    const niveles = ["Adivinando","Algo seguro","Muy seguro"];
    return niveles.map((nombre,i)=>{
      const sub = arr.filter(x=>x.c===i);
      const pct = sub.length? Math.round(sub.reduce((s,x)=>s+x.ok,0)/sub.length*100) : null;
      return {nivel:nombre, n:sub.length, pct};
    });
  }

  window.SRS = {
    grade, getRecord, isDue, isNew, construirCola,
    contarVencidosYNuevos, registrarConfianza, calibracion, shuffle
  };
})(window);
