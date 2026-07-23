# Verificación: Secciones "2. Tuberculosis" y "3. Dengue" de MODULO_PERU_MINSA.html

Fuentes revisadas:
- `NTS_Tuberculosis_2024.pdf` (NTS N° 221-MINSA/DGIESP-2024, aprobada con RM N° 894-2024-MINSA, Lima 20-dic-2024, edición marzo 2025, 136 pp.) — leído en tramos de 2-5 páginas.
- `NTS_Dengue_2024.pdf` (NTS N° 211-MINSA/DGIESP-2024, aprobada con RM N° 175-2024-MINSA, Lima 06-mar-2024) — leído en tramos de 2-5 páginas.
- No fue necesario abrir `Guia_Practica_Clinica_Dengue.pdf`: la NTS de Dengue 2024 (la misma citada en el HTML) ya contenía toda la información necesaria para verificar la sección.

Nota de paginación: en el PDF de TBC la numeración impresa va 2 páginas por detrás del índice de extracción (portada = páginas 1-4 sin numerar); en el PDF de Dengue, página impresa = página de extracción − 3. Todas las referencias de página abajo usan la **numeración impresa del documento** (la que aparece al pie de cada hoja).

---

## 1. TUBERCULOSIS (líneas ~87-115 del HTML)

### 1.1 Confirmado correcto

- **Título/norma**: "NTS N° 221-MINSA/DGIESP-2024" es exacto — coincide con la carátula y con la RM N° 894-2024-MINSA (20-dic-2024). Correcto.
- **Sintomático respiratorio (SR)** = "tos y flema por 15 días o más" — **coincide textualmente** con la definición operativa 5.2.37 (pág. 19): *"Sintomático respiratorio (SR): Persona que presenta tos y flema por 15 días o más."*
- **Esquema 2RHZE/4RH** — confirmado en pág. 36: *"Primera fase: 2 meses (HREZ) diario (50 dosis) + Segunda fase: 4 meses (HR) diario (100 dosis)."* Los roles de H, R, Z y E descritos en el HTML son consistentes con el texto y las tablas de RAM/interacciones (págs. 52-55).
- **TB miliar y meningitis TB (TB del SNC)**: la norma confirma que se **amplía la segunda fase a 10 meses** (pág. 36: *"Para la PAT con TB miliar, TB del SNC o TB osteoarticular, se amplía la segunda fase a 10 meses"*) y que se usan **corticoides** (pág. 36, "Indicaciones de corticoterapia sistémica": TB del SNC, pericarditis TB y TB miliar → Prednisona 1-1.5 mg/kg/día por 2-4 semanas). Coincide con el HTML.
- **Isoniacida → neuropatía periférica → piridoxina**: confirmado — tanto en el esquema de TPT (pág. 25: *"Todo esquema que incluya H debe recibir además piridoxina 50 mg/día por cada dosis de H administrada"*) como en la nota general de la Tabla N°10 de esquemas de tratamiento (pág. 35): *"En toda PAT que reciban H deben recibir suplemento de piridoxina (vitamina B6) a dosis de 50 mg/día para prevenir el desarrollo de neuropatías."*
- **Prueba molecular rápida (PDRm) como primera línea**: el flujograma de búsqueda pasiva (Figura N°1, pág. 28) indica *"Los EE.SS. que cuenten con PDRm se debe usar esta prueba; en caso de no disponibilidad se puede usar baciloscopía"*, y el flujograma de farmacorresistencia (Figura N°3, pág. 32) parte igualmente de PDRm o baciloscopía. Confirma la lógica del HTML de que la prueba molecular se prefiere y detecta simultáneamente resistencia a rifampicina.
- **Terapia preventiva (TPT)**: confirmado que existe y que se usa en contactos y PVV; el esquema **3HP (isoniacida + rifapentina semanal x3 meses) es hoy la primera elección** en mayores de 2 años (pág. 25), lo cual respalda la mención del HTML a "isoniacida (o esquemas más cortos como 3HP)".

### 1.2 Erróneo / impreciso — corrección con página exacta

1. **"Se evita la estreptomicina" en TBC gestante (línea ~110 del HTML)**: revisando todo el capítulo de esquemas de tratamiento (Tabla N°10, pág. 35; Tabla N°14 "Clasificación de medicamentos para TB-DR", pág. 39; Grupos A/B/C de la OMS-2022) la **estreptomicina no aparece en ningún esquema vigente** de la NTS 2024 (ni en el esquema sensible, ni en TB-Hr, ni en los esquemas orales para TB-MDR/pre-XDR/XDR). Es un fármaco que ya no forma parte del arsenal terapéutico peruano actual, por lo que la advertencia específica sobre su uso en gestantes es una referencia a una práctica **obsoleta**; no es "incorrecta" como dato histórico, pero no está respaldada por la norma vigente y podría eliminarse o marcarse como nota histórica.
2. **Piridoxina presentada como medida "especial" de la gestante (línea ~110)**: la norma no vincula la piridoxina específicamente a la gestante — la exige para **toda persona que reciba isoniacida**, gestante o no (pág. 35, nota de Tabla N°10, y pág. 25 para TPT). Sugerencia de corrección: mover esa frase fuera del bloque "TBC en gestante" y presentarla como regla general del esquema con H.
3. **"Diario" para el esquema sensible (línea ~99)**: la norma especifica que el esquema sensible (2HREZ/4HR) se administra **"de lunes a sábado, excepto domingos, incluyendo feriados"** (pág. 36) — es decir, 6 días por semana, no 7. En cambio, los esquemas para TB-Hr y TB-DR (Bdq-Pa-Lzd-Mfx, etc.) sí se administran de lunes a domingo (pág. 39-40). El HTML generaliza "diario" sin esta distinción; es una imprecisión menor pero verificable (50 dosis en fase intensiva = 2 meses solo si se cuentan 6 días/semana, no 7).

### 1.3 Qué falta agregar

- La norma usa el término genérico **"PDRm" (Prueba de Diagnóstico Rápido Molecular)**, no menciona la marca "Xpert MTB/RIF" en ningún acrónimo ni definición (revisadas págs. 14-19, 29-33). Esto es coherente con que hoy existen varias plataformas moleculares (Xpert MTB/RIF, Xpert Ultra, Truenat, etc.); el HTML podría aclarar que "Xpert MTB/RIF" es la plataforma más común de PDRm en el Perú, pero que la norma no está atada a una sola marca.
- La definición de **"caso presuntivo de TB"** (pág. 16, 5.2.5) es más amplia que solo el SR: *"persona que presenta al menos 2 o más síntomas y/o signos de TB, como tos con flema, hemoptisis, fiebre, sudoración nocturna o pérdida de peso. Incluye a los sintomáticos respiratorios."* El HTML solo menciona el SR (tos ≥15 días); podría añadirse esta definición más amplia, muy citable en examen.
- El capítulo de "situaciones especiales" de la norma (6.1.2.2, págs. 46-51) trata **TB perinatal/congénita, TB y VIH, y comorbilidades (diabetes, ERC, hepatopatía, salud mental, cáncer)** — no incluye un acápite explícito "TB en gestante" ni "meningitis TB con hallazgos de LCR" como bloques independientes (esos detalles de LCR son conocimiento clínico general, no una cita textual de esta NTS). Podría aclararse en el HTML que esos dos puntos son complemento clínico general y no una cita literal de la norma 221-2024.

---

## 2. DENGUE (líneas ~117-158 del HTML)

### 2.1 Confirmado correcto

- **Título/norma**: "NTS N° 211-MINSA/DGIESP-2024" exacto — confirmado en carátula y RM N° 175-2024-MINSA (06-mar-2024).
- **Clasificación por grupos A/B1/B2/C**: **confirmada íntegramente y con la misma lógica de manejo** en la sección "d) TRATAMIENTO" (págs. 26-33, con Anexo N°14 y N°16):
  - Grupo A (pág. 28): dengue sin signos de alarma → manejo ambulatorio en el hogar con supervisión médica.
  - Grupo B1 (pág. 29): sin signos de alarma + comorbilidad/riesgo social/edad extrema → hospitalización para observación.
  - Grupo B2 (pág. 30): con signos de alarma → hospitalización + hidratación endovenosa para prevenir el choque.
  - Grupo C (pág. 33): dengue grave → tratamiento de urgencia, referencia a UCI.
  Esto coincide exactamente con la tabla del HTML.
- **Fisiopatología** (fase febril → fase crítica que empieza cuando cede la fiebre → aumento de permeabilidad capilar/extravasación de plasma → hemoconcentración + trombocitopenia): confirmado en pág. 17-18 de la norma.
- **Prohibición de AINEs/aspirina, solo paracetamol**: confirmado textualmente en pág. 29: *"Está contraindicado el uso de dipirona parenteral (metamizol), corticoides y AINES... No debe administrarse ácido acetil salicílico, ni diclofenaco, naproxeno, etc."* y se indica acetaminofén/paracetamol como antipirético (pág. 28).
- **No transfusión profiláctica de plaquetas**: confirmado literalmente en pág. 36-37: *"No se emplea la transfusión profiláctica de plaquetas en pacientes con dengue y plaquetopenia severa... por no tener evidencia de ser efectiva."*
- **Hidratación con cristaloides para B2/C**: confirmado con esquemas detallados de Lactato de Ringer o SSN 0.9% (Tablas N°4-N°7, págs. 31-35).
- **Signos de alarma** (dolor abdominal, sangrado de mucosas, letargia/irritabilidad, hepatomegalia >2 cm, acumulación de líquidos, aumento del hematocrito): lista confirmada en pág. 17.

### 2.2 Erróneo / desactualizado — corrección con página exacta

1. **Vómitos persistentes**: el HTML dice *"≥4 en 1 hora o >5 en 6 horas"*. La norma vigente (pág. 17) define: **"3 o más episodios en 1 hora ó 4 episodios en 6 horas."** Es una discrepancia numérica concreta y debe corregirse a estos valores (3/1h o 4/6h, no 4/1h o 5/6h).

### 2.3 Qué falta agregar

- La NTS 2024 introduce, además de los grupos A/B1/B2/C (para decidir manejo), una **clasificación paralela de casos con códigos CIE-10** usada para diagnóstico/notificación (pág. 16, Tabla N°01): *Dengue sin signos de alarma = A97.0*, *Dengue con signos de alarma = A97.1*, *Dengue grave = A97.2*. El HTML no menciona esta clasificación CIE-10; podría añadirse como dato de alto rendimiento para examen (a veces se pregunta por el código o por esta nomenclatura de 3 categorías en vez de 4).
- La norma aclara explícitamente que **"el diagnóstico de dengue es FUNDAMENTALMENTE CLÍNICO"** y que las pruebas de laboratorio (RT-PCR, ELISA NS1/IgM) son solo herramientas diagnósticas que **no condicionan el inicio del tratamiento** (pág. 24) — esto no está en el HTML y es un punto de examen frecuente ("no esperar el laboratorio para hidratar").
- Existe un acápite completo **"Dengue y embarazo"** en la NTS (pág. 18-19 y pág. 39, "F) Consideraciones en situaciones especiales — EN LA GESTANTE"), con manejo conservador clínico-obstétrico, uso de paracetamol vía oral, diagnóstico diferencial con preeclampsia/HELLP, indicación de cesárea con plaquetas <50 000/mm³, tocolíticos si hay riesgo de parto prematuro en fase crítica, etc. El HTML de dengue no toca el tema de gestante en absoluto — sería un buen complemento paralelo al que ya existe para TBC en gestante.
- Los esquemas numéricos de hidratación (10 ml/kg/h en adultos y gestantes con signos de alarma la primera hora, luego 5-7 → 3-5 → 2-4 ml/kg/h; 20 ml/kg en 15-30 min para choque) no están en el HTML — podrían añadirse como tabla de alto rendimiento (Tablas N°4 a N°7, págs. 31-35).
- El HTML incluye un bloque sobre otras metaxénicas (malaria, bartonelosis, leptospirosis, fiebre amarilla) que **no fue posible verificar** con los PDFs de dengue asignados (no son objeto de esa norma); si se requiere verificar esa parte haría falta la norma técnica específica de malaria/metaxénicas, que no estaba entre los documentos indicados para esta tarea.

---

## Resumen ejecutivo

- **TBC**: la sección es en general sólida y fiel a la NTS 221-2024. Los puntos a corregir son menores: (1) aclarar que la piridoxina aplica a todo paciente con H, no solo a la gestante; (2) revisar/quitar la mención a estreptomicina en gestante, que no figura en ningún esquema vigente; (3) precisar que el esquema sensible se da 6 días/semana (no 7).
- **Dengue**: la tabla de clasificación por grupos A/B1/B2/C está perfectamente verificada y es exacta. El único error factual encontrado es la cifra de vómitos persistentes, que debe corregirse de "≥4 en 1h o >5 en 6h" a **"3 o más en 1h o 4 en 6h"** (pág. 17 de la NTS). El resto del contenido de manejo (AINEs prohibidos, no transfusión profiláctica de plaquetas, cristaloides en B2/C) está confirmado punto por punto.
