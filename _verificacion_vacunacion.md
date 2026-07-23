# Verificación — Sección "1. Esquema Nacional de Vacunación" (MODULO_PERU_MINSA.html, id="vac", líneas ~57-85)

## ⚠ Hallazgo principal (bloqueante): el PDF disponible NO es la NTS 196-2022

El archivo `minsa_directrices\NTS_Esquema_Vacunacion_2022.pdf` está nombrado como si fuera la norma de 2022, pero su contenido real es:

- **NTS N° 080-MINSA/DGIESP-V.04** "Norma Técnica de Salud que establece el Esquema Nacional de Vacunación"
- Aprobada por **Resolución Ministerial N° 651-2016/MINSA**, Lima, 31 de agosto de 2016 (firma: Patricia Jannet García Funegra, Ministra de Salud)
- Deja sin efecto la RM 510-2013/MINSA (NTS 080 V.03)

Es decir, el PDF corresponde a la **versión de 2016** del esquema, no a la NTS N° 196-MINSA/DGIESP-2022 que el HTML cita como fuente verificada (línea 55 y título de la tabla en línea 69: "Calendario nacional por edad (NTS 196-2022)"). Esto significa que **no se puede confirmar ni refutar con este archivo** el número de norma correcto, las actualizaciones 2024-2026, ni los cambios recientes que el HTML menciona (VPH a 1 dosis, hexavalente, neumococo 20-valente, VRS 2026). Se necesita el PDF real de la NTS 196-2022 (y sus modificatorias) para una verificación completa y confiable.

Por el límite conservador de lectura acordado (máx. ~20 páginas), se revisaron las páginas 1 a 19 del PDF (portada/RM, base legal, definiciones operativas, listado de acrónimos, y las secciones 6.1.1 a 6.1.7: BCG, HvB, Pentavalente, DT pediátrico, Hib, Polio IPV/APO, inicio de Rotavirus). No se llegó a las secciones de Neumococo, SPR, Influenza, Antiamarílica, DPT refuerzos, VPH, dTpa gestante ni adulto mayor, así como tampoco al anexo de "contraindicaciones generales de vacunas vivas" ni a ninguna cifra tipo "18 vacunas/28 enfermedades" (no se alcanzó a ver esa sección, si existe, en las páginas revisadas).

## 1) Lo que se confirma correcto (comparando contra la estructura general del esquema, aunque el PDF sea la versión 2016)

Estos puntos del HTML coinciden con lo que muestra el documento de 2016 (que además es consistente con la lógica del esquema peruano vigente, aunque no se pudo cotejar contra el texto 2022 mismo):

- **BCG + Hepatitis B al recién nacido**: confirmado — sección 6.1.1 (BCG, "recién nacido con peso ≥2500 g, dentro de las primeras 24 horas") y sección 6.1.2 (HvB, "antes de las 12 horas de vida, máximo dentro de las primeras 24 horas de vida... prevenir infección vertical") — pág. 8-10.
- **Pentavalente 3 dosis a los 2, 4 y 6 meses**: confirmado — sección 6.1.3.d, pág. 11 ("Debe administrarse en 3 dosis: a los 2, 4 y 6 meses de edad").
- **Polio: IPV (inactivada) a los 2 y 4 meses, luego APO (oral, vivo atenuado) a los 6 meses, con refuerzos APO a los 18 meses y 4 años**: confirmado exactamente — tabla "Esquema de inmunización secuencial IPV/APO según edad", pág. 16:
  | Edad | Vacuna |
  |---|---|
  | 2 meses | IPV |
  | 4 meses | IPV |
  | 6 meses | APO |
  | 18 meses | APO Ref 1 |
  | 4 años | APO Ref 2 |

  Esto respalda la nota del HTML de que "la polio inactivada (IPV) se usa primero por seguridad" y que a los 6 meses ya es APO (no IPV), y que los refuerzos de los 18 meses y 4 años son con polio (coincide con las filas de la tabla del HTML en líneas 77-78).
- **Rotavirus 2 dosis a los 2 y 4 meses**: confirmado — sección 6.1.7.c, pág. 16 ("Se indica a los 2 y 4 meses de edad").
- **Rotavirus es de virus vivos atenuados**: confirmado — sección 6.1.7.a, pág. 16 ("Es una vacuna de virus vivos atenuados"), lo cual respalda que el HTML la incluya correctamente en el listado de vacunas vivas contraindicadas en inmunosuprimidos (línea 83).
- **APO (polio oral) es de virus vivo atenuado**: confirmado — sección 6.1.6.2.a, pág. 15 ("Es una vacuna de virus vivo atenuado... cepa Sabin"). Nota: el HTML no incluye "polio" en su lista de vacunas vivas de la línea 83 (solo IPV aparece implícitamente como inactivada); esto es correcto porque a partir de esta norma el esquema regular usa IPV en las primeras dosis, pero conviene notar que el refuerzo APO sigue siendo virus vivo atenuado (dato menor, no necesariamente un error del HTML ya que el texto solo habla de "rotavirus" y no incluye APO explícitamente en esa lista, lo cual es razonable dado que APO ya casi no se contraindica en el esquema regular salvo para inmunodeprimidos, ver pág. 15 contraindicaciones de APO).

## 2) Lo que no se pudo verificar (por límite de páginas / documento equivocado) — no reportar como "error confirmado", sino como pendiente

- Neumococo (1ª, 2ª dosis a los 2-4 meses + refuerzo a los 12 meses).
- SPR a los 12 meses (y 2ª dosis a los 18 meses, que el HTML también menciona en línea 77).
- Influenza pediátrica a los 6 meses.
- Antiamarílica a los 12 meses.
- DPT refuerzos a los 18 meses y 4 años.
- VPH: si en la norma de 2016 ya era o no de 2 dosis (el HTML dice "cambio reciente: pasó de 2 dosis a 1"); en la lista de vacunas del esquema 2016 (pág. 7, sección 5.8) sí figura "VACUNA CONTRA EL VIRUS DE PAPILOMA HUMANO (VPH)" como ítem 14, y se menciona una Directiva Sanitaria N° 064-2015/MINSA-DGSP-V.01 específica para VPH (pág. 6) — no se llegó a leer el detalle de dosis.
- dTpa en gestante, esquema de adulto mayor.
- Contraindicaciones generales de vacunas vivas en inmunosuprimidos/gestantes (el HTML lo presenta como una regla general aplicable a SPR, varicela, antiamarílica, BCG, rotavirus). En el PDF revisado, las contraindicaciones se dan vacuna por vacuna (ver BCG pág. 8: contraindicada en "inmunodepresión primaria o secundaria... infección por VIH que evidencie síntomas"), lo cual es coherente con el principio general que enuncia el HTML, pero no se encontró (en las páginas leídas) un cuadro consolidado que diga textualmente "vacunas vivas contraindicadas en inmunosuprimidos y gestantes" como regla única.
- La cifra "18 vacunas que protegen contra 28 enfermedades" (línea 84): no verificable con este documento. El esquema de 2016 lista **15 vacunas** (sección 5.8, pág. 7): BCG, HvB, Pentavalente, DT pediátrico, Hib, Polio, Rotavirus, Neumococo, SPR, SR, Antiamarílica, DPT, dT adulto, VPH, Influenza. El HTML afirma 18 vacunas, atribuyendo el incremento a incorporaciones recientes (hexavalente, neumococo 20-valente, VRS 2026) — esto es plausible en términos de tendencia, pero no se pudo confirmar el número exacto de la norma 2022/vigente ni la cifra de "28 enfermedades" porque el documento disponible es de 2016 y no se alcanzó ninguna sección que mencione explícitamente esos totales.

## 3) Qué falta agregar / próximos pasos recomendados

1. **Reemplazar o complementar el archivo `NTS_Esquema_Vacunacion_2022.pdf`** por el PDF real y vigente de la NTS N° 196-MINSA/DGIESP-2022 (RM 884-2022) y, si existen, sus modificatorias 2024-2026 (la que incorporaría hexavalente, neumococo 20-valente y VRS). El archivo actual en la carpeta es la norma de 2016 (NTS 080 V.04), ya derogada/reemplazada, por lo que sirve solo como referencia histórica, no como fuente de verificación de la norma vigente citada en el HTML.
2. Una vez obtenido el PDF correcto, repetir la verificación puntual de: neumococo, SPR (2ª dosis 18 meses), influenza pediátrica, antiamarílica, DPT refuerzos, VPH (dosis única y sexo), dTpa gestante, esquema adulto mayor, tabla de contraindicaciones de vacunas vivas, y la cifra "18 vacunas/28 enfermedades".
3. Verificar explícitamente si la lista de vacunas vivas atenuadas contraindicadas en inmunosuprimidos/gestantes que da el HTML (SPR, varicela, antiamarílica, BCG, rotavirus) es exhaustiva y está enunciada así en la norma 2022, o si conviene añadir la vacuna oral de polio (APO) dado que también es de virus vivo atenuado y aparece con contraindicaciones similares en la norma 2016 (pág. 15).

## Nota metodológica

Por indicación explícita, la lectura del PDF se limitó a tramos de 4-5 páginas por llamada y a un total de 19 páginas (de las 4+5+5+5 leídas: portada/RM 651-2016, base legal y TOC de resoluciones, definiciones operativas y acrónimos, y secciones 6.1.1-6.1.7 del esquema). No se leyó el documento completo ni se buscó el índice interno más allá de esas páginas, siguiendo la instrucción de no atascarse. El hallazgo del desfase de versión (2016 vs. 2022) se detectó ya en las primeras 4 páginas y es, en sí mismo, el resultado más importante de esta verificación: **el PDF de referencia en la carpeta del proyecto no corresponde a la norma que el HTML dice haber verificado**.
