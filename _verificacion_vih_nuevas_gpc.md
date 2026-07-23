# Verificación VIH + Sección nueva "8. Guías clínicas MINSA: Diabetes, HTA y Neumonía"

## PARTE 1 — Verificación de la sección "6. VIH e infecciones de transmisión sexual" (líneas 217-226 de MODULO_PERU_MINSA.html)

### Hallazgo principal: el PDF entregado NO es la norma que sustenta ese contenido

El archivo `NTS_VIH_Atencion_Integral_Adulto.pdf` **no contiene una guía de "Atención Integral del Adulto con VIH"**. Al abrirlo, su carátula real dice:

> **Norma Técnica de Salud "Prevención Combinada del Virus de la Inmunodeficiencia Humana para Poblaciones en Alto Riesgo"** — NTS N° 204-MINSA/DGIESP-2023, aprobada por R.M. N° 576-2023/MINSA.

Es decir, el nombre del archivo es engañoso: el contenido real es una norma de **prevención combinada del VIH dirigida a poblaciones en alto riesgo** (HSH, trans, trabajadoras/es sexuales, etc.), centrada en consejería, preservativos, tamizaje, PrEP y PPE — **no** es el protocolo de manejo clínico del adulto con VIH (TARGA, CD4, carga viral, transmisión vertical madre-hijo).

Confirmé esto extrayendo el texto completo del PDF (1196 líneas) y buscando los términos clave del contenido HTML a verificar:

- **"TARGA" / TAR**: el documento solo define "Tratamiento Antirretroviral (TAR)" como término genérico (combinación de ARV para reducir carga viral a indetectable); no desarrolla el esquema de inicio en gestantes, ni criterios de inicio independientes del CD4, ni la vía de parto según carga viral.
- **"Transmisión materno-infantil"**: aparece **solo una vez**, y como **referencia a otra norma distinta**: "Resolución Ministerial N° 1138-2019/MINSA, que aprueba la NTS N° 159-MINSA/2019/DGIESP, **'Norma Técnica de Salud para la prevención de la transmisión materno infantil del VIH, Sífilis y Hepatitis B'**" (listada en la base legal, pero su contenido no está incluido en este PDF).
- **"CD4" / carga viral (CV)**: solo se mencionan de pasada como pruebas de monitoreo que existen "en la atención integral de pacientes con VIH" (a cargo del INS), sin desarrollar criterios de inicio de TARGA ni metas.
- **"Oftalmía" / "conjuntivitis" / "neonat-"**: **cero coincidencias** en todo el documento. La profilaxis oftálmica neonatal para gonococo no aparece ni se puede verificar con este PDF.
- **Sífilis (RPR/VDRL vs. treponémicas)**: el documento sí distingue pruebas rápidas duales (VIH+sífilis) y pruebas rápidas treponémicas (PRS), y menciona el uso de RPR/VDRL como parte del seguimiento en usuarios de PrEP (tamizaje trimestral/semestral) — pero **no explica** la lógica de "no treponémica baja con tratamiento / treponémica queda positiva de por vida" que sí aparece en el HTML. Esa lógica es correcta médicamente y coincide con el estándar de manejo de sífilis, pero no proviene de este documento.
- **Tamizaje universal en gestante**: el documento menciona "prueba de embarazo" y pruebas rápidas duales VIH+sífilis como parte del paquete de prevención combinada, y señala que la PRS (treponémica) "es útil en población general y gestantes" — esto es coherente con el tamizaje universal antenatal, pero el documento en sí está enfocado en poblaciones de alto riesgo, no en el control prenatal general.

### Conclusión de la verificación

El contenido actual del HTML (líneas 217-226) es **médicamente correcto y consistente con la práctica y normativa peruana conocida** (la NTS N° 159-2019/DGIESP sobre transmisión materno-infantil, que es la norma real que sustenta esos puntos), pero **no puede verificarse palabra por palabra contra el PDF que se me entregó**, porque ese PDF es un documento distinto (NTS 204-2023, prevención combinada en poblaciones de alto riesgo).

**Recomendación:** no se encontraron contradicciones ni errores que corregir en el HTML a partir de este PDF — pero tampoco hay una confirmación directa. Si se quiere una verificación palabra-por-palabra rigurosa, se necesitaría conseguir el PDF real de la **NTS N° 159-MINSA/2019/DGIESP** (transmisión materno-infantil de VIH, sífilis y hepatitis B) y/o la guía de "Atención Integral del Adulto con Infección por VIH" (existe una NTS distinta para eso, con esquemas de TARGA). Sugiero mantener el texto del HTML tal cual (es plausible y no se detectó ningún dato erróneo), pero quizás suavizar la nota superior del módulo (línea 55) si en algún momento se lista esta norma como "verificada", ya que estrictamente no lo fue con este archivo.

No se modificó el HTML, conforme a la instrucción.

---

## PARTE 2 — Sección nueva "8. Guías clínicas MINSA: Diabetes, HTA y Neumonía"

Fuentes usadas (las 3 GPC pedidas, leídas por completo vía extracción de texto):

- **Hipertensión arterial**: "Guía Técnica: GPC para el Diagnóstico, Tratamiento y Control de la Enfermedad Hipertensiva", R.M. N° 031-2015/MINSA (basada en guías ESH/ESC 2013 y JNC7/JNC8). *(Nota: es una guía de 2015, no ha sido reemplazada por una versión más reciente que se me haya provisto; sus metas terapéuticas siguen el estándar ESH/ESC 2013, algo más laxo que guías más nuevas — lo dejo indicado en el texto para que la usuaria lo tenga presente).*
- **Neumonía en niñas y niños**: "GPC para Diagnóstico y Tratamiento de Neumonía en las Niñas y los Niños", R.M. N° 1041-2019/MINSA (versión corta), elaborada con neumólogos pediatras y pediatras infectólogos del INSN, Cayetano Heredia, etc.
- **Diabetes Mellitus tipo 2**: "GPC para el Diagnóstico, Tratamiento y Control de la Diabetes Mellitus Tipo 2 en el Primer Nivel de Atención", R.M. N° 719-2015/MINSA (publicada 2016).

Debajo está el HTML **listo para pegar** dentro del `<div class="wrap">`, justo antes de `<div class="warn-box">` (es decir, después de cerrar la sección 7 de salud pública, línea 243 actual) y **añadiendo el link de navegación correspondiente**. Sigue exactamente las clases usadas en el resto del módulo.

### 2.1 Actualizar el `<nav>` (línea 48-51 actual)

Agregar un enlace más al final de la barra de navegación:

```html
<nav><div class="wrap">
  <a href="#vac">Vacunación</a><a href="#tbc">Tuberculosis</a><a href="#dengue">Dengue y metaxénicas</a>
  <a href="#cred">CRED y anemia</a><a href="#mat">Salud materna</a><a href="#vih">VIH / ITS</a><a href="#sp">Salud pública</a><a href="#gpc">GPC: DM/HTA/Neumonía</a>
</div></nav>
```

### 2.2 Sección nueva completa (pegar después del `</div>` que cierra la card de la sección 7, antes de `<div class="warn-box">`)

```html
<!-- ============ GUÍAS DE PRÁCTICA CLÍNICA ============ -->
<h2 id="gpc">8. Guías clínicas MINSA: Diabetes, HTA y Neumonía</h2>
<p class="lead">Estas tres Guías de Práctica Clínica (GPC) del MINSA son de las más preguntadas en CONAREME porque estandarizan el manejo del primer nivel de atención, que es justamente el escenario que más evalúa el examen. Ojo: la GPC de HTA (2015) y la de Diabetes (2016) son documentos ya con algunos años; se mantienen vigentes mientras no exista una versión más nueva, pero sus metas terapéuticas siguen guías internacionales de esa época (ESH/ESC 2013, JNC7/8) — en el examen respeta el número que da el MINSA, aunque difiera de la guía internacional más reciente que hayas estudiado en otro curso.</p>

<div class="card">
  <h3>Diabetes Mellitus tipo 2 — R.M. N° 719-2015/MINSA</h3>
  <p>La <span class="term">DM-2</span> es la causa más frecuente de diabetes (90-95% de los casos): un defecto relativo de insulina más resistencia a su acción, de aparición insidiosa. En el Perú es la <b>sexta causa de carga de enfermedad</b> y la <b>primera en el grupo de 45 a 59 años</b>.</p>

  <h3>Criterios diagnósticos (cualquiera de los tres confirma DM-2)</h3>
  <table>
    <tr><th>Criterio</th><th>Valor</th><th>Detalle</th></tr>
    <tr><td>Glucemia en ayunas</td><td>≥ 126 mg/dl</td><td>En <b>dos ocasiones</b> distintas, con no más de 72 horas entre una y otra. Ayuno = sin ingesta calórica ≥ 8 horas.</td></tr>
    <tr><td>Glucemia casual</td><td>≥ 200 mg/dl</td><td>+ síntomas clásicos (poliuria, polidipsia, pérdida de peso inexplicable) o crisis hiperglucémica. "Casual" = cualquier hora, sin relación con la última comida.</td></tr>
    <tr><td>PTOG (2 horas)</td><td>≥ 200 mg/dl</td><td>Dos horas después de una carga oral de 75 g de glucosa anhidra.</td></tr>
  </table>
  <div class="why"><b>¿Por qué NO se usa la HbA1c para diagnosticar?</b> La propia GPC peruana lo señala expresamente: en el momento de su publicación la hemoglobina glucosilada era poco accesible y no estaba estandarizada entre laboratorios del país, así que solo se recomienda su uso una vez que exista control de calidad adecuado. Ojo: esto es distinto de guías internacionales (ADA), que sí aceptan HbA1c ≥6.5% como diagnóstico — para el examen CONAREME, prioriza el criterio de glucemia.</div>

  <h3>Metas de control (individualizables)</h3>
  <table>
    <tr><th>Parámetro</th><th>Meta</th></tr>
    <tr><td>Glucemia en ayunas</td><td>70 - 130 mg/dl</td></tr>
    <tr><td>Glucemia postprandial (2h)</td><td>&lt; 180 mg/dl</td></tr>
    <tr><td>HbA1c</td><td>&lt; 7% (meta &lt;6.5% en adulto joven recién diagnosticado; hasta &lt;8% en adulto mayor con comorbilidad o riesgo de hipoglucemia)</td></tr>
    <tr><td>Presión arterial</td><td>&lt; 140/80 mmHg</td></tr>
    <tr><td>cLDL</td><td>&lt; 100 mg/dl</td></tr>
  </table>

  <h3>Tratamiento farmacológico</h3>
  <p>Todo paciente estable, sin descompensación aguda, <b>inicia tratamiento farmacológico desde el momento del diagnóstico</b>, junto con el cambio de estilo de vida (no se espera 3-4 meses de dieta y ejercicio solos, salvo casos asintomáticos seleccionados según criterio médico).</p>
  <div class="def"><b>Metformina — fármaco de primera línea (salvo contraindicación):</b> reduce la producción hepática de glucosa y mejora la sensibilidad periférica a la insulina; además reduce peso y riesgo cardiovascular, sin producir hipoglucemia por sí sola. Se inicia con 500-850 mg/día y se sube progresivamente hasta la dosis máxima de 2550 mg/día. <b>Contraindicada</b> si creatinina ≥1.4 mg/dl (mujeres) / ≥1.5 mg/dl (varones), depuración &lt;30 ml/min/1.73m², EPOC, insuficiencia cardiaca descompensada, falla hepática o alcoholismo (riesgo de acidosis láctica).</div>
  <p>Si hay intolerancia a metformina, se usa una <b>sulfonilurea</b> (glibenclamida 2.5-5 mg/día, hasta 20 mg/día): estimula la secreción de insulina pancreática independientemente del nivel de glucosa, por lo que su principal riesgo es la <b>hipoglucemia</b> (mayor en adulto mayor, desnutrición o falla renal/hepática).</p>

  <h3>Complicaciones agudas: hipoglucemia vs. crisis hiperglucémica</h3>
  <table>
    <tr><th></th><th>Hipoglucemia</th><th>Crisis hiperglucémica (CAD / EHH)</th></tr>
    <tr><td><b>Definición</b></td><td>Glucosa &lt; 70 mg/dl</td><td>Glucosa generalmente &gt; 250 mg/dl con descompensación metabólica severa</td></tr>
    <tr><td><b>Clínica</b></td><td>Síntomas autonómicos (temblor, sudoración, palpitaciones, hambre) y neuroglucopénicos (confusión, convulsiones, coma)</td><td>Polidipsia, poliuria, deshidratación, náuseas/vómitos, dolor abdominal, respiración de Kussmaul (acidótica, rápida y profunda), alteración del sensorio</td></tr>
    <tr><td><b>Manejo inicial</b></td><td>Consciente: 15-20 g de azúcar de absorción rápida VO, control en 5 min. Inconsciente: 25 g de glucosa EV (4 ampollas de dextrosa 33%) y referir</td><td>Estabilizar en el establecimiento de origen y <b>referir a emergencia de nivel II/III</b>: requiere hidratación e insulina hospitalaria especializada</td></tr>
  </table>
  <div class="key"><b>Claves de examen:</b> metformina primera línea (no produce hipoglucemia); sulfonilurea = riesgo de hipoglucemia; el diagnóstico NO se hace con HbA1c según esta GPC; toda descompensación aguda (CAD/EHH) se estabiliza y se refiere, no se maneja en el primer nivel.</div>
</div>

<div class="card">
  <h3>Hipertensión Arterial — R.M. N° 031-2015/MINSA</h3>
  <p>La <span class="term">HTA</span> es una enfermedad vascular, arterial, sistémica, inflamatoria-crónica y progresiva, casi siempre <b>asintomática</b> (se detecta muchas veces recién cuando ya hay daño de órgano blanco). El endotelio enfermo libera sustancias vasoactivas y protrombóticas que aceleran la aterosclerosis. Corresponde a <b>hipertensión primaria/esencial en &gt;95%</b> de los casos (sin causa identificable) y a <b>secundaria en &lt;5%</b> (renal, endocrina —hipotiroidismo, hiperaldosteronismo, feocromocitoma, Cushing—, o por fármacos como AINEs, corticoides, anticonceptivos).</p>

  <h3>Clasificación de la presión arterial (adultos ≥18 años)</h3>
  <table>
    <tr><th>Categoría</th><th>Sistólica</th><th>Diastólica</th></tr>
    <tr><td>Normal</td><td>&lt; 120</td><td>&lt; 80</td></tr>
    <tr><td>Pre-hipertensión</td><td>120 - 139</td><td>80 - 89</td></tr>
    <tr><td>Hipertensión estadio 1</td><td>140 - 159</td><td>90 - 99</td></tr>
    <tr><td>Hipertensión estadio 2</td><td>≥ 160</td><td>≥ 100</td></tr>
  </table>
  <div class="why"><b>¿Por qué estratificar el riesgo cardiovascular y no solo mirar la cifra de PA?</b> Dos personas con la misma PA pueden tener pronósticos muy distintos según sus factores de riesgo asociados (edad, dislipidemia, diabetes), el daño subclínico a órgano blanco (hipertrofia ventricular izquierda, microalbuminuria, retinopatía) y si ya tuvieron un evento cardiovascular. La GPC categoriza el riesgo en <b>bajo, moderado, alto o muy alto</b>, y de ahí depende cuándo iniciar fármacos y en qué nivel de atención se maneja al paciente.</div>

  <h3>¿Cuándo iniciar tratamiento farmacológico?</h3>
  <ul>
    <li>PAS ≥160 o PAD ≥100 mmHg, <b>independientemente de otros factores</b>.</li>
    <li>Riesgo cardiovascular <b>moderado a más</b>, independientemente del nivel de PA.</li>
    <li>Riesgo bajo que, tras 3-6 meses de cambios en el estilo de vida, no logra la meta.</li>
  </ul>

  <h3>Metas de presión arterial según población</h3>
  <table>
    <tr><th>Población</th><th>Meta</th></tr>
    <tr><td>Hipertensos en general</td><td>&lt; 140/90 mmHg</td></tr>
    <tr><td>Diabéticos</td><td>&lt; 140/80 mmHg</td></tr>
    <tr><td>Con proteinuria</td><td>&lt; 130/80 mmHg</td></tr>
    <tr><td>Octogenarios</td><td>Mantener PAS entre 140 y 150 mmHg (no bajar de más)</td></tr>
  </table>

  <h3>Grupos de fármacos de primera línea (monoterapia)</h3>
  <ul>
    <li><b>Enalapril</b> (IECA) 10-20 mg/día · <b>Losartán</b> (ARA-II) 50-100 mg/día · <b>Hidroclorotiazida</b> (diurético tiazídico) 12.5-25 mg/día · <b>Amlodipino</b> (calcioantagonista) 5-10 mg/día.</li>
    <li>En <b>mayores de 60 años se prefiere NO usar betabloqueadores</b> como primera elección.</li>
  </ul>
  <div class="def"><b>Combinaciones preferidas</b> (cuando la monoterapia no basta, tras 8-12 semanas sin meta): IECA + tiazida, ARA-II + tiazida, IECA + calcioantagonista, ARA-II + calcioantagonista. <b>Evitar combinar IECA + ARA-II</b> (no aporta beneficio adicional y aumenta el riesgo de hiperkalemia/falla renal) y tener cautela con IECA/ARA-II + betabloqueador (combinación "menos efectiva").</div>

  <h3>Signos de alarma y referencia</h3>
  <p>PAS ≥180 o PAD ≥110 mmHg <b>con</b> daño agudo de órgano blanco (síndrome coronario agudo, falla cardiaca, encefalopatía hipertensiva, disección de aorta) obliga a referir de inmediato al segundo/tercer nivel. También se refiere: riesgo cardiovascular alto o muy alto, HTA no controlada con 2 fármacos, PA ≥180/110, o paciente con diabetes concomitante.</p>
  <div class="key"><b>Claves de examen:</b> HTA = enfermedad crónica, no se da de alta; meta general &lt;140/90 salvo diabéticos (&lt;140/80) y proteinúricos (&lt;130/80); primera línea = IECA/ARA-II/calcioantagonista/tiazida; en adulto mayor evitar betabloqueador de inicio; PA ≥180/110 + daño agudo de órgano = emergencia hipertensiva, referir ya.</div>
</div>

<div class="card">
  <h3>Neumonía en la niña y el niño — R.M. N° 1041-2019/MINSA</h3>
  <p class="lead" style="margin-bottom:8px">Como postulas a Pediatría, esta es probablemente la GPC más rentable de las tres: fue elaborada por neumólogos y pediatras del INSN y hospitales docentes, y el examen suele preguntar exactamente los puntos de corte de gravedad, hospitalización y elección de antibiótico que siguen.</p>
  <p>La neumonía es la <b>primera causa de muerte en menores de 5 años a nivel mundial</b> fuera del periodo neonatal (16% de esas muertes). En Perú, durante décadas la infección respiratoria aguda baja ha sido la <b>primera causa de mortalidad general</b> del país. Los <b>menores de 1 año</b> tienen el mayor riesgo de enfermar (incidencia más alta), mientras que los de <b>1 a 4 años</b> concentran el mayor número absoluto de episodios.</p>

  <h3>Etiología según edad (clave para elegir el esquema empírico)</h3>
  <table>
    <tr><th>Edad</th><th>Bacterias principales</th><th>Virus principales</th></tr>
    <tr><td>&lt; 1 mes</td><td>Streptococcus del grupo B, E. coli, Listeria, Chlamydia trachomatis</td><td>CMV, VSR, herpes</td></tr>
    <tr><td>1 - 3 meses</td><td>S. pneumoniae, C. trachomatis, H. influenzae b, S. aureus, B. pertussis</td><td>VSR, influenza, parainfluenza</td></tr>
    <tr><td>4 meses - 4 años</td><td><b>S. pneumoniae</b> (el más frecuente), H. influenzae b, M. catarrhalis, S. aureus</td><td>VSR, influenza, parainfluenza, rinovirus</td></tr>
    <tr><td>5 - 12 años</td><td>S. pneumoniae, Mycoplasma pneumoniae, Chlamydophila pneumoniae</td><td>Influenza, Epstein-Barr</td></tr>
  </table>
  <div class="why"><b>¿Por qué importa la edad?</b> En general, <b>los virus causan el 50-60% de las neumonías en menores de 5 años</b> (por eso la mayoría no necesita antibiótico), mientras que <b>Streptococcus pneumoniae es el principal agente bacteriano</b> en casi todos los grupos etarios pediátricos — de ahí que sea el objetivo principal del esquema antibiótico empírico.</div>

  <h3>Taquipnea según edad (el signo más sensible)</h3>
  <table>
    <tr><th>Grupo etario</th><th>Taquipnea (FR)</th></tr>
    <tr><td>&lt; 2 meses</td><td>≥ 60 por minuto</td></tr>
    <tr><td>2 - 12 meses</td><td>≥ 50 por minuto</td></tr>
    <tr><td>1 - 5 años</td><td>≥ 40 por minuto</td></tr>
    <tr><td>&gt; 5 - 12 años</td><td>≥ 20 por minuto</td></tr>
  </table>
  <div class="def"><b>Taquipnea vs. hipoxemia:</b> la taquipnea es el signo con <b>mayor sensibilidad</b> (más útil para descartar neumonía si está ausente), pero pierde sensibilidad/especificidad después de los 5 años. La <b>hipoxemia y el esfuerzo respiratorio</b> (tirajes, aleteo nasal, quejido) son los signos <b>más específicos</b>. Ningún signo auscultatorio aislado (crépitos, soplo tubárico) es suficientemente sensible/específico por sí solo, y clínicamente no se puede distinguir con certeza etiología viral de bacteriana.</div>

  <h3>Neumonía grave — reconocerla es la prioridad</h3>
  <ul>
    <li>Dificultad respiratoria marcada: tirajes, aleteo nasal, quejido.</li>
    <li>Cianosis central y/o apnea intermitente.</li>
    <li>Dificultad para beber o lactar, o vómitos frecuentes.</li>
    <li>Alteración del sensorio o convulsiones.</li>
    <li>Saturación de O2 ≤92% (0-2500 msnm) o ≤85% (&gt;2500 msnm).</li>
  </ul>
  <div class="key"><b>Regla que cae en examen:</b> en el <b>neonato, toda neumonía se considera grave</b> por definición, sin necesidad de que cumpla otro criterio adicional.</div>

  <h3>Criterios de hospitalización (segundo nivel)</h3>
  <ul>
    <li>Saturación ≤92% (0-2500 msnm) / ≤85% (&gt;2500 msnm), o cianosis.</li>
    <li><b>Lactante menor de 6 meses</b> (criterio de hospitalización por sí solo).</li>
    <li>Dificultad respiratoria (tirajes, quejido, aleteo, apnea) o intolerancia oral.</li>
    <li>Mal estado general, o fracaso de terapia ambulatoria (sin respuesta a las 48-72 h).</li>
    <li>Comorbilidad (cardiopulmonar, malformación de vía aérea, inmunosupresión, desnutrición severa) o complicaciones (derrame, empiema).</li>
    <li>Cuidador incapaz de vigilar/cumplir el tratamiento domiciliario, o difícil acceso al establecimiento.</li>
  </ul>
  <p><b>Criterios de UCI:</b> necesidad de soporte ventilatorio para mantener SO2 pese a FiO2 &gt;0.5, signos de falla respiratoria inminente (letargia, apnea recurrente, agotamiento), o inestabilidad hemodinámica que requiere soporte farmacológico.</p>

  <h3>Tratamiento antibiótico: ambulatorio vs. hospitalario</h3>
  <table>
    <tr><th>Escenario</th><th>Esquema</th><th>Detalle</th></tr>
    <tr><td><b>Ambulatorio</b> (6 meses - 12 años, no complicada, sin criterios de hospitalización)</td><td><b>Amoxicilina</b> 90 mg/kg/día VO c/8h x 7-10 días</td><td>Primera línea. Alternativa: cloranfenicol 50 mg/kg/día VO c/6h x 7 días. Si se sospecha germen atípico: macrólido (azitromicina, claritromicina o eritromicina).</td></tr>
    <tr><td><b>Hospitalizado, &lt; 2 meses</b> (2.º nivel)</td><td><b>Ampicilina + gentamicina (o amikacina)</b></td><td>Dosis ajustada según edad gestacional y postnatal (ver tabla de neonatología). Primera dosis EV/IM y referencia coordinada.</td></tr>
    <tr><td><b>Hospitalizado, &gt; 2 meses a 12 años</b> (2.º nivel)</td><td><b>Ampicilina</b> 150-200 mg/kg/día EV c/6h, o <b>cloranfenicol</b>, o <b>penicilina G sódica</b></td><td>Mínimo 7 días; duración según respuesta clínica y tolerancia a la vía oral.</td></tr>
    <tr><td><b>3.er nivel / grave o complicada</b></td><td><b>Ceftriaxona o cefotaxima</b>; si mal estado general, compromiso multilobar, derrame pleural o shock séptico: <b>+ oxacilina o vancomicina</b> (cubrir S. aureus)</td><td>Reevaluar a las 48-72h; si no hay mejoría, sospechar neumonía complicada, gérmenes resistentes u otra etiología (TBC, atípicos).</td></tr>
  </table>
  <div class="why"><b>¿Por qué NO se recomiendan macrólidos ni cotrimoxazol como empíricos de primera línea?</b> Porque el neumococo peruano tiene <b>alta tasa de resistencia documentada</b> a estos fármacos (estudios GPIN reportan hasta 75-82% de resistencia a azitromicina/cotrimoxazol en cepas invasivas recientes), mientras que la resistencia a penicilina/amoxicilina se ha mantenido comparativamente baja. Por eso la amoxicilina sigue siendo de elección empírica pese a la introducción de la vacuna conjugada.</div>

  <h3>Medidas generales: el acrónimo "FALTAN"</h3>
  <table>
    <tr><th>Letra</th><th>Medida</th></tr>
    <tr><td><b>F</b>iebre</td><td>Paracetamol si T° axilar &gt;38°C (o antes si hay disconfort o antecedente de convulsión febril) + medios físicos.</td></tr>
    <tr><td><b>A</b>limentación</td><td>Mantener lactancia materna o alimentación habitual según edad.</td></tr>
    <tr><td><b>L</b>íquidos</td><td>Incrementar aporte para compensar pérdidas insensibles y por fiebre.</td></tr>
    <tr><td><b>T</b>os</td><td>NO usar antitusígenos, expectorantes ni antihistamínicos.</td></tr>
    <tr><td><b>A</b>larma</td><td>Reconocer signos de alarma para regresar de inmediato.</td></tr>
    <tr><td><b>N</b>ariz</td><td>Limpieza de fosas nasales con suero fisiológico si interfiere con alimentación/sueño.</td></tr>
  </table>

  <h3>Signos de alarma (educar a la familia) y criterios de alta</h3>
  <ul>
    <li><b>Alarma:</b> dificultad para respirar, fiebre persistente pese a 48h de tratamiento, dificultad para beber/lactar o vómitos frecuentes, irritabilidad o somnolencia, o si el niño no mejora o empeora.</li>
    <li><b>Alta:</b> afebril por 24-48h, SO2 &gt;92% (o &gt;85% sobre 2500 msnm) sostenida &gt;24h sin oxígeno suplementario, adecuada tolerancia oral, sin dificultad respiratoria, y cuidador capacitado y con posibilidad real de regresar si hay deterioro.</li>
  </ul>
  <div class="key"><b>Lo más preguntado:</b> taquipnea = signo más sensible (y su punto de corte cambia con la edad) · hipoxemia/tirajes = signos más específicos · en el neonato TODA neumonía es grave · amoxicilina 90 mg/kg/día es la primera línea ambulatoria · NO macrólidos/cotrimoxazol empíricos por resistencia del neumococo peruano · lactante &lt;6 meses se hospitaliza aunque no tenga otros criterios.</div>
</div>
```

### 2.3 Notas para quien pegue el contenido

1. El bloque de arriba está pensado para insertarse **justo antes** de la línea `<div class="warn-box">` (línea 245 del archivo actual), es decir, después de cerrar el `</div>` de la card de la sección 7 ("Organización y salud pública peruana").
2. Actualicé el pie de página (`<footer>`) **no fue tocado** — si quieres, se le puede añadir "GPC HTA 2015, GPC Diabetes 2016, GPC Neumonía 2019" a la lista de normas citadas al final (línea 248), pero lo dejo a tu criterio porque no formaba parte del pedido explícito.
3. Todas las tablas, `div.why`, `div.def`, `div.key` y `span.term` usan exactamente las mismas clases CSS ya definidas en el `<style>` del documento — no hace falta tocar el CSS.
4. Verifiqué que HTA y Diabetes son guías de 2015/2016 (no encontré evidencia de una versión más nueva entre los PDFs entregados); lo señalé explícitamente en el `<p class="lead">` de apertura de la sección para que la usuaria no se sorprenda si otra fuente (ej. ADA/ESC actual) da metas ligeramente distintas — para el examen CONAREME lo que vale es el número del MINSA.
</content>
