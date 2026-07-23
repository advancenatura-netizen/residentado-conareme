/* XP, racha diaria y medallas — capa de motivación sobre el motor SRS */
(function(w){
  const K="conareme_gami_v1";
  function load(){try{return JSON.parse(localStorage.getItem(K)||"{}")}catch(e){return {}}}
  function save(s){localStorage.setItem(K,JSON.stringify(s))}
  function hoy(){return new Date().toISOString().slice(0,10)}

  function estado(){
    const s=load();
    s.xp=s.xp||0; s.racha=s.racha||0; s.ultimoDia=s.ultimoDia||null; s.medallas=s.medallas||[];
    return s;
  }

  function sumarXP(cantidad){
    const s=estado();
    s.xp+=cantidad;
    const t=hoy();
    if(s.ultimoDia!==t){
      const ayer=new Date(Date.now()-86400000).toISOString().slice(0,10);
      s.racha = (s.ultimoDia===ayer) ? s.racha+1 : 1;
      s.ultimoDia=t;
    }
    revisarMedallas(s);
    save(s);
    return s;
  }

  const NIVELES=["Interno","Residente R1","Residente R2","Residente R3","Jefe de Residentes","Médico Asistente"];
  function nivel(xp){ return Math.min(NIVELES.length-1, Math.floor(Math.sqrt(xp/80))); }
  function xpParaSiguiente(xp){ const n=nivel(xp)+1; return Math.pow(n,2)*80; }

  const DEF_MEDALLAS=[
    {id:"racha3",nombre:"3 días seguidos",cond:s=>s.racha>=3},
    {id:"racha7",nombre:"Racha de una semana",cond:s=>s.racha>=7},
    {id:"racha21",nombre:"Hábito de 21 días",cond:s=>s.racha>=21},
    {id:"xp500",nombre:"500 XP",cond:s=>s.xp>=500},
    {id:"xp2000",nombre:"2000 XP",cond:s=>s.xp>=2000},
    {id:"xp5000",nombre:"Nivel Jefe de Residentes",cond:s=>s.xp>=5000}
  ];
  function revisarMedallas(s){
    DEF_MEDALLAS.forEach(m=>{ if(m.cond(s) && !s.medallas.includes(m.id)) s.medallas.push(m.id); });
  }

  // Widget compacto de racha/nivel, se puede inyectar en cualquier página
  function widgetHTML(){
    const s=estado();
    const n=nivel(s.xp), sig=xpParaSiguiente(s.xp);
    const pct=Math.min(100,Math.round((s.xp - (n>0?Math.pow(n,2)*80:0))/(sig-(n>0?Math.pow(n,2)*80:0))*100));
    return '<div style="display:flex;align-items:center;gap:10px;font-size:.78rem;color:#9aabc9">'
      +'<span title="Racha de días seguidos">🔥 '+s.racha+'</span>'
      +'<span title="Experiencia">⭐ '+s.xp+' XP</span>'
      +'<span title="Nivel">🩺 '+(NIVELES[n]||NIVELES[NIVELES.length-1])+'</span>'
      +'</div>';
  }

  w.GAMI={estado,sumarXP,nivel,NIVELES,xpParaSiguiente,widgetHTML,DEF_MEDALLAS};
})(window);
