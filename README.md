# MiResidentado — Portal CONAREME 2026 (Momar, Pediatría)

Notas de desarrollo para que cualquier sesión de IA (u otra persona) que retome este proyecto entienda qué existe, por qué, y qué falta. **No es documentación de usuario** (eso está en `index.html`), es el registro de trabajo técnico.

## 1. Qué es esto

Portal de estudio local (HTML/CSS/JS vainilla, sin build ni backend) para preparar el examen de Residentado Médico peruano CONAREME. Usuaria: Momar, postulante a **Pediatría**. Examen: **domingo 6 de septiembre de 2026**. Punto de entrada: `index.html` (sidebar con todas las secciones cargadas en iframes).

## 2. Mapa de archivos

**Contenido didáctico (HTML autocontenido, generado con apoyo de IA a partir de 10 exámenes oficiales 2018-2023):**
`FIJAS_RESIDENTADO_CONAREME.html`, `DESTILADO_30_FIJAS_EXPLICADO.html`, `INFORME_RESIDENTADO_CONAREME.html`, `CRONOGRAMA_ESTUDIO_CONAREME.html`, `ESCALAS_Y_CRITERIOS.html`, `MODULO_PERU_MINSA.html`, `MEMORIA.html` (dashboard localStorage, sin contenido propio).

**Banco de preguntas / flashcards (datos externalizados en esta sesión, antes estaban embebidos):**
- `BANCO_PREGUNTAS_CONAREME.html` — UI/lógica del quiz. Los datos viven en `datos_banco.js` (`const BANK=[...]`, 206 preguntas propias con explicación).
- `FLASHCARDS_INTERACTIVAS_CONAREME.html` — UI. Datos en `datos_flashcards.js` (`const CARDS=[...]`, 92 tarjetas).
- Se externalizaron para poder reutilizar los mismos datos desde `REPASO_INTELIGENTE.html` sin duplicar arrays. **Importante:** ambos HTML tienen `<script src="datos_*.js"></script>` ANTES de su `<script>` de lógica — si se edita a mano, cuidado con no anidar un `<script>` dentro de otro (rompe el parseo; ya pasó una vez en esta sesión y se corrigió).

**Simulacro con exámenes reales (`SIMULACROS_OFICIALES.html`):**
- Antes de esta sesión estaba **roto**: pedía `examenes_data.js`, que no existía. Ahora existe y trae 2018/2019/2020/2021/2023 (A y B), ~897 preguntas — el conteo original que el sitio siempre prometió.
- Se sumaron por separado, vía `<script src="datos_examenes/2022.js">` y `2024.js` (concatenados a `window.EXAMENES` con un pequeño script inline en `SIMULACROS_OFICIALES.html` y en `REPASO_INTELIGENTE.html`).
- **Falta 2025** (A y B): el .txt fuente ya está extraído en `analisis_tendencias/texto_extraido/PruebaA_2025.txt` y `PruebaB_2025.txt`, pero los 2 intentos de un agente para procesarlo se colgaron ("stalled: no progress 600s"). Pendiente de reintentar con lectura en tramos pequeños del .txt (no debería ser pesado, es texto plano, raro que se cuelgue — revisar si vuelve a fallar).
- `datos_examenes/2018.js` quedó **incompleto y sin usar** (solo Prueba A, 100 preguntas, generado por un agente que se cortó a medias antes de que descubriera que `examenes_data.js` ya traía 2018 completo por otra vía). Es basura inofensiva, se puede borrar.
- Esquema de cada pregunta: `{ex:"2018-A", n:1, area:"MED"|"PED"|"CIR"|"GIN"|"SP"|"CB", tema:"...", q:"...", o:["A","B","C","D"], c:0, e:"explicación"}`. `c` es índice 0-based de la opción correcta. CONAREME no publica claves oficiales — las respuestas se determinaron con criterio clínico (por agentes de IA, siguiendo guías estándar), esto ya se le advierte a la usuaria en el propio sitio.

**Motor de aprendizaje nuevo (lo que se construyó esta sesión, ver sección 4):**
`motor_srs.js`, `motor_gamificacion.js`, `REPASO_INTELIGENTE.html` (nueva página, enlazada en `index.html` como "🎯 Repaso Inteligente").

**Fuentes / material crudo sin procesar aún:**
- `analisis_tendencias/texto_extraido/` — .txt de exámenes 2022/2024/2025 (ya usados) + 6 archivos de cuadros de vacantes (Sanidades/Privados/Ministerio Público 2024-2025, NO son preguntas, son tablas de plazas — bajo valor para Momar, postulante a modalidad general).
- `examenes_nuevos/` — PDFs de exámenes 2012, 2013, 2015, 2016, 2017 **sin procesar todavía** (expansión histórica, prioridad baja).
- `minsa_directrices/` — 15 PDF de normas técnicas MINSA reales, en proceso de verificación (ver sección 5, en curso al momento de escribir esto).
- `PDFs_CONAREME.zip` — los 10 exámenes originales 2018-2023 en PDF + informes en PDF, para descarga desde la sección "Exámenes oficiales" del sitio.

## 3. Convenciones a respetar

- Áreas siempre: `MED, PED, CIR, GIN, SP, CB` (Medicina, Pediatría, Cirugía, Gineco-Obst., Salud Pública, Ciencias Básicas). Colores fijos por área en CSS (`--MED`, `--PED`, etc.) — reusar, no inventar nuevas.
- Estilo visual: dashboard oscuro, variables CSS `--bg:#0b0f1a; --panel:#161d30; --accent:#34d3ff; --gold:#ffd166; --green:#22d39a; --red:#ff5d7a`. Todo el contenido nuevo debe mantener esta paleta.
- Todo dato clínico generado por IA debe llevar disclaimer de "contrasta con guías oficiales" — es una decisión de honestidad ya establecida en el proyecto, no quitarla.
- Los PDF que llegan a `minsa_directrices/` pueden estar **mal identificados**: ya se descubrió que `NTS_Esquema_Vacunacion_2022.pdf` en realidad contiene la norma de **2016** (NTS 080-2016), no la de 2022. No asumir que el nombre del archivo es correcto — verificar la portada/resolución aprobatoria dentro del PDF antes de citarlo como fuente.
- Los PDF de MINSA grandes (>10 MB) tienden a colgar a los agentes que los leen de golpe. Instruir siempre lectura en tramos de 4-5 páginas y poner un límite de páginas antes de rendirse.

## 4. Técnicas de estudio investigadas e implementadas

Se investigó evidencia real (no intuición) sobre qué mejora la retención y se llevó a código concreto:

| Técnica (evidencia) | Qué dice la evidencia | Dónde se implementó |
|---|---|---|
| **Repetición espaciada — SM-2** | Usuarios de Anki: mejor desempeño en exámenes de licenciatura médica (USMLE/COMLEX), menos reprobados. SM-2 es el algoritmo clásico (el mismo que usaba Anki antes de FSRS); con un solo usuario y sin historial de miles de repasos, SM-2 es más simple y suficientemente bueno que FSRS (que necesita mucho histórico para ajustar sus parámetros). | `motor_srs.js`: función `grade(id, calidad0-3)` implementa la fórmula SM-2 completa (factor de facilidad, intervalo, repeticiones). Guarda el estado por tarjeta en `localStorage` (`conareme_srs_v1`). |
| **Active recall / retrieval practice (testing effect)** | Recordar antes de ver la respuesta genera ~50% más retención a una semana que releer. | `REPASO_INTELIGENTE.html`: siempre se pide responder/voltear antes de revelar nada — nunca se muestra la respuesta primero. |
| **Interleaving (Bjork, "desirable difficulties")** | Mezclar áreas en la práctica (en vez de bloques por tema) mejora la retención a largo plazo más que practicar un tema seguido, aunque se sienta más difícil en el momento (ej. 63% vs 20% en un estudio con formas geométricas). | `motor_srs.js`: función `intercalarPorArea()` arma la cola de repaso evitando repetir la misma área dos veces seguidas. |
| **Cuota de contenido nuevo ajustada al tiempo restante** | Estrategia estilo Anki ("new cards per day") adaptada: si faltan muchos días para el examen, se puede permitir más contenido nuevo por sesión; si faltan pocos, casi todo debe ser repaso de lo ya visto. | `motor_srs.js`: función `construirCola()` calcula `cuotaNuevas` según `diasAlExamen` (más nuevas si >30 días, casi ninguna si ≤5 días). |
| **Calibración de confianza / metacognición** | Los estudiantes sistemáticamente sobreestiman lo que saben; medir la confianza antes de responder y compararla con el acierto real ayuda a detectar sobreconfianza (evidencia de "confidence-based testing" en educación médica). | `REPASO_INTELIGENTE.html`: antes de cada pregunta de opción múltiple se pregunta "¿qué tan seguro estás?" (Adivinando/Algo seguro/Muy seguro). `motor_srs.js` guarda los pares (confianza, acierto) en `conareme_calibracion_v1` y al final de cada sesión se muestra el % de acierto real por nivel de confianza. |
| **Gamificación (XP, racha, niveles)** | Mejora engagement y retención en educación médica (qbanks, Kahoot, juegos tipo Jeopardy en revisiones). Riesgo conocido: si se premia "hacer clic" en vez de "recordar bien", se puede incentivar mal comportamiento (Goodhart's law) — por eso el XP se otorga en función de la calificación SM-2 real (más XP por "Fácil" que por "Otra vez"), no por cantidad de clics. | `motor_gamificacion.js`: XP acumulado, racha de días consecutivos, niveles con nombres temáticos de carrera médica (Interno → Residente R1/R2/R3 → Jefe de Residentes → Médico Asistente), medallas por hitos de racha/XP. Widget compacto reutilizable (`GAMI.widgetHTML()`). |
| **Elaboración / explicación (Dunlosky et al. 2013)** | La autoexplicación y la elaboración ("¿por qué es así?") tienen soporte moderado-alto en la literatura, más que releer o subrayar. | Ya presente de antes en `BANK`/`EXAMENES` (campo `e` con explicación breve del porqué); no se tocó, se reutilizó tal cual en Repaso Inteligente. |

**Diseño de `REPASO_INTELIGENTE.html`** (la pieza nueva que junta todo): arma un pool único combinando `CARDS` (flashcards) + `BANK` (banco propio) + `EXAMENES` (exámenes reales), cada ítem con un `id` estable para el tracking de SRS. Al iniciar sesión, `SRS.construirCola()` prioriza lo vencido (con más peso a lo que más ha fallado = áreas débiles), lo intercala por área, y añade una cuota de contenido nuevo según los días al examen. Cada ítem se califica con 4 botones estilo Anki (Otra vez/Difícil/Bien/Fácil) — en preguntas de opción múltiple esa calificación se **auto-deriva** de acierto+confianza para reducir fricción (no se piden 2 pasos). Al final de la sesión se muestra XP ganado y el reporte de calibración.

**Lo que NO se implementó (evaluado y descartado o pospuesto):**
- **Dual coding (imágenes/diagramas)**: tiene buen respaldo pero requeriría generar/curar imágenes médicas, que no se abordó esta sesión — pendiente si se quiere profundizar.
- **FSRS** en vez de SM-2: mejor en teoría (~20-30% menos repasos para igual retención) pero necesita miles de repasos históricos por usuario para ajustar sus parámetros; con un solo usuario nuevo no vale la complejidad todavía. Se podría migrar más adelante si se acumulan muchos datos en `localStorage`.

## 5. Estado al momento de escribir esto (verificación MINSA en curso)

Se lanzaron agentes para contrastar `MODULO_PERU_MINSA.html` (que afirma estar "verificado" pero se escribió sin leer los PDF reales) contra los PDF de `minsa_directrices/`. Resultados en archivos `_verificacion_*.md` en la raíz (se leen y se aplican a mano al HTML, no se edita el HTML automáticamente para evitar choques entre agentes concurrentes):
- `_verificacion_vacunacion.md` — **listo**. Hallazgo clave: el PDF de vacunación es la norma de 2016, no la de 2022 citada. Ver el .md para el detalle de qué sí/no se pudo confirmar.
- `_verificacion_tbc_dengue.md` — en curso.
- `_verificacion_vih_nuevas_gpc.md` — en curso (incluye propuesta de sección nueva 8 con Diabetes/HTA/Neumonía pediátrica, guías que hoy no se usan en ningún lado del sitio).
- Se evitó deliberadamente procesar los PDF de CRED (`NTS_238-2025_CRED_Parte1/2/3.pdf`) y Anemia (`NTS_Anemia_2024.pdf`) en este round porque son los más pesados (13-32 MB) y ya causaron cuelgues en un intento anterior — pendiente de abordarlos con lectura muy fraccionada.

**Siguiente acción cuando se retome:** leer los `_verificacion_*.md` que falten, aplicar las correcciones/adiciones directamente a `MODULO_PERU_MINSA.html`, y luego decidir si vale la pena reintentar CRED/Anemia con un enfoque aún más conservador (o considerar que esos PDF pesados podrían ser escaneos que requieran OCR, no extracción de texto directa).

## 6. Pendientes generales (no urgentes)

- Examen 2025 (A/B) sin procesar — 2 intentos fallidos por cuelgue, el .txt fuente es liviano así que no debería costar tanto, reintentar.
- Exámenes históricos 2012/2013/2015/2016/2017 sin extraer ni procesar.
- Borrar `datos_examenes/2018.js` (redundante, no referenciado desde ningún HTML).
- Considerar probar `REPASO_INTELIGENTE.html` en un navegador real (no se hizo verificación visual en esta sesión, solo revisión de código/sintaxis).
