# Cuaderno de Aprendizaje — Mundial 2026

## Revisión 23 | Actualizado: 25 Jun 2026

-----

## ESTADO GENERAL DEL MODELO

**Actualizado tras partido 22 (Costa de Marfil 2-0 Curazao, J3 Grupo E, 25 Jun 2026)**

- **1X2 dirección: 17/22 (77.3%) ✅** — CIV 2-0 CUW. Victoria correcta.
- **Over 2.5 goles: ❌ FALLO rev23** — Solo 2 goles (Under 2.5). R4 asimetría extrema NO garantiza Over 2.5 cuando el rival tiene un portero de élite en forma + xG real del favorito es moderado (CIV xG 1.31, no 2.25). Racha R4 Over 2.5: 5/6 → primera grieta. Nueva condición: reducir probabilidad Over 2.5 en ~10pp cuando rival tiene portero con 10+ paradas en torneo.
- **Under 9.5 corners: ✅** — 10 corners totales (4+6). Justo en el límite pero acierto. Racha Under 9.5: 6/6 (condicionada).
- **Under 2.5 amarillas: ❌ FALLO rev23** — 3 amarillas (2 CUW + 1 CIV). Nyberg debut WC más activo de lo esperado. Base revisada: debut WC = 2.0–2.5 sigue siendo correcta como base, pero partidos con tensión física (CUW urgida) pueden elevar a 2.5–3.0. Matiz Nyberg añadido.
- **BTTS No: ✅ (implícito)** — CUW no marcó. El SKIP de R21 fue innecesario en este caso: CUW xG 0.50 real (≈proyectado), 11 tiros, 2 SOnT pero 0 goles. Room solo necesitó 2+1=3 paradas en total. Reflexión: R21 fue demasiado conservadora para este partido. CUW tenía urgencia pero su calidad ofensiva real era muy limitada vs defensa de calidad.
- **R7 lateral/extremo: ❌ FALLO rev23** — Amad Diallo 3 tiros, 0 SOnT, 0 goles. Yan Diomandé 0 tiros, 1 asistencia. NINGÚN extremo/lateral marcó. Racha R7: **8/9** (primer fallo). Causa: CIV xG real fue bajo (1.31), el gol fue de Pépé (suplente Tipo A). R7 puede fallar cuando el volumen ofensivo es moderado y el gol viene de un suplente inesperado.
- **R12 Tipo A: ❌ FALLO conceptual rev23** — Pépé marcó 2 goles (suplente, ~65’). SKIP Tipo A fue incorrecto. Nueva excepción R12: cuando el Tipo A es **suplente** contra rival de ranking muy bajo (>80 posiciones) en partido donde el favorito necesita goles, la penalización −8pp no aplica. Pépé (ex Arsenal/PSG) era el suplente más talentoso del banco. R13 paradójicamente sí se cumple (Pépé = suplente menos obvio que Bonny/Guessand nominados).
- **R6+R13 suplente: ✅ esencia confirmada** — Pépé entró ~65’ con partido 1-0 (partido aún vivo) y marcó 2 goles. R6 cumplida. R13 matiz: Pépé no era el suplente más obvio nominado (Bonny/Guessand estaban en la lista), pero sí era el de mayor calidad del banco. Racha R6 esencia: 11/11.
- **CIV xG real: 1.31** — Muy por debajo de la proyección de 2.25. El factor Eloy Room no fue el motivo principal (solo 3 paradas). CIV simplemente no generó tantas ocasiones de calidad como vs ECU/ALE. Sesgo detectado: proyección xG CIV inflada vs rival en bloque bajo que no presiona alto.
- **CUW xG real: 0.50** — Más alto que el xG proyectado (~0.72 proyectado, 0.50 real). 11 tiros totales pero solo 2 SOnT. Room solo paró 3 veces. CUW fue más activo de lo esperado en tiros pero con baja calidad.

-----

## REGLAS OPERATIVAS CONSOLIDADAS

### R1 — BTTS No con xG rival <0.80

**Racha: 15/17 ✅ (condicionada) | Confianza: MEDIA-ALTA | Stake: Kelly ×0.10–0.15**
Rev23: CUW xG real 0.50, 0 goles → R1 se habría confirmado perfectamente. El SKIP de R21 fue innecesario para este partido. Reflexión: R21 puede ser demasiado conservadora cuando el equipo urgido tiene calidad técnica muy limitada (CUW ranking 117). Nueva condición para R21: aplicar SKIP solo si el equipo urgido tiene ranking ≤70 (calidad mínima para capitalizar la urgencia). Equipos con ranking >100 en urgencia de eliminación: mantener R1 activa con stake reducido (Kelly ×0.08).

### R2 — Under 2.5 vs bloque organizado real

**Racha: 9/10 ✅ | Confianza: ALTA | Stake: Kelly ×0.15**
Rev23: 2 goles → Under 2.5 ✅. CIV xG real 1.31 vs proyección 2.25. Bloque bajo de CUW + Room funcionaron como supresores. Under 2.5 se habría activado por R2 (rival en bloque bajo) con acierto. Refuerzo: partidos donde el favorito tiene xG proyectado 1.8–2.5 pero rival en bloque bajo real → reducir media a 1.2–1.5 xG efectivo.

### R3 — Ajuste xG bloque profundo

Rev23 refuerzo: CIV proyectado 2.25, real 1.31 (reducción ~42%). Cuando el rival defiende en bloque bajo profundo Y el favorito no es un equipo de dominación total (CIV lo es a medias), el xG real cae más de lo esperado. Ajuste rev23: con bloque bajo real + favorito de nivel medio-alto (no élite absoluta), reducir xG en ~40–45% en lugar del 25% estándar.

### R4 — Over 2.5 asimetría extrema (ranking >50)

**Racha: 5/6 ⚠ PRIMER FALLO rev23 | Confianza: ALTA (condicionada) | Stake: Kelly ×0.18**
Rev23: 2 goles → Under 2.5 → R4 falla. Causa: portero de élite (Room 15 paradas J2) + CIV xG moderado real. Nueva condición: reducir P(Over 2.5) en −10pp cuando el rival tiene un portero con 10+ paradas en el torneo. R4 sigue siendo válida como regla base pero necesita el ajuste “Room/portero élite”.

### R5 — Corners por estilo

**Rev23:** 10 corners totales (4 CUW + 6 CIV). Under 9.5 ✅, Under 7.5 ❌. CIV generó 6 corners vs CUW en bloque bajo, más de los 3 que generó vs ALE. Matiz: bloque bajo compacto aún genera algunos corners cuando el favorito ataca con persistencia. Under 9.5 sigue siendo válido para este perfil de partido. Under 7.5 tiene más riesgo del proyectado.

### R6 — Patrón suplente goleador

**Racha esencia: 11/11 ✅ | Confianza: MÁXIMA**
Rev23: Pépé (SUP CIV, ~65’) marcó 2 goles con partido 1-0 (≤1 gol diferencia al entrar). R6 perfectamente confirmada. El partido estaba vivo cuando entró el suplente.

### R7 — Patrón lateral/extremo ofensivo goleador

**Racha: 8/9 ⚠ PRIMER FALLO rev23 | Confianza: ALTA (condicionada) | Stake: Kelly ×0.20**
Rev23: Amad Diallo 3 tiros 0 SOnT 0 goles. Yan Diomandé 0 tiros 1 asistencia. Ningún extremo marcó. Causa: los goles vinieron de un suplente Tipo A (Pépé). R7 falla cuando el volumen ofensivo del favorito es moderado (xG real 1.31) y el gol viene de un suplente de segunda línea inesperado. R7 condicional: aplicar con más cautela cuando hay suplente Tipo A de alto perfil en el banco del favorito.

### R8 — Creador central asistencia

Rev23: Sangaré dio la asistencia del 2-0 de Pépé en 2ªp (a pesar de ser MCD, no creador puro). Yan Diomandé dio la asistencia del 1-0 de Pépé en 1ªp. Confirma que las asistencias se dispersan cuando hay múltiples perfiles creativos. R8 no aplica plenamente aquí.

### R9 — Excepción motivación histórica estrella

Sin cambios. Solo Messi y Ronaldo (2/2).

### R10 — Prop tarjeta: árbitros

**Glenn Nyberg WC26:** J1 (este partido) = 3 amar. (2 CUW + 1 CIV). Base debut WC revisada: debut con partido físico/urgido → base 2.5–3.0 en lugar de 2.0–2.5 universal. La base 2.0–2.5 sigue siendo válida para partidos fluidos con escasa tensión. Añadir Nyberg al registro.

Tabla actualizada: **Nyberg WC26 J1 = 3 amar.** Media WC26 = 3.0. Perfil: moderado.

### R11 — Checklist confianza 1X2

Sin cambios estructurales. Rev23: 0/5 condiciones PASS → CIV 70% mantuvo probabilidad. Resultado correcto (CIV ganó 2-0). Checklist funcionó correctamente.

### R12 — Clasificación props de jugador (Tipo A)

**Rev23 NUEVA EXCEPCIÓN:** Pépé (Tipo A, suplente) marcó 2 goles. SKIP Tipo A fue incorrecto. Nueva regla R12-excepción: cuando el Tipo A es **suplente** con minutos ≥25 contra rival ranking >80 posiciones por debajo, NO aplicar penalización −8pp. El mercado subestima a Tipo A como suplente porque los precios son más altos. Reclasificar como Tipo D-élite en ese caso.

### R13 — Distribución suplentes múltiples Tipo D

**Racha: 7/7 ✅ (adaptada) | Confianza: ALTA**
Rev23: Pépé fue el suplente menos obvio de los nominados en el análisis (Bonny/Guessand eran los favorecidos). Pépé marcó 2. R13 confirmada en su esencia: no concentrar en el suplente más obvio. Pépé = suplente de mayor calidad pero no el nominado. Distribución habría capturado a Pépé.

### R14 — Dispersión asistencias en goleadas

No aplicó (2 goles, no goleada).

### R15 — Pasividad táctica del clasificado

No aplicó. CIV necesitaba ganar.

### R16 — Bloque ultra-compacto con urgencia máxima

Rev23 matiz: urgencia CUW no elevó xG real (0.50 con 0 goles). Cuando el equipo urgido tiene ranking >100 y enfrenta rival físicamente muy superior, la urgencia no convierte en goles. La regla de “urgencia eleva conversión” aplica principalmente para equipos de nivel medio-bajo (ranking 60–100), no para equipos de nivel muy bajo (>100).

### R17–R19

Sin cambios relevantes en este partido.

### R20 — Distribución stake entre múltiples Tipo C

**Rev23 MATIZ:** Amad Diallo y Yan Diomandé ambos a 0 goles. La distribución no habría capturado el gol porque el gol fue de Pépé (Tipo A suplente). R20 sigue siendo válida pero añadir: si hay un suplente Tipo A de élite en el banco del favorito, añadir una fracción del stake (~25%) a ese perfil.

### R21 — R1 BTTS No condicionada por urgencia rival

**Rev23 REFINAMIENTO:** El SKIP de R21 fue innecesario para este partido. CUW (ranking 117) con urgencia máxima NO marcó (xG real 0.50, 0 goles). Nueva condición más precisa: SKIP R1 solo si el equipo urgido tiene **ranking ≤70** (calidad mínima técnica para convertir la urgencia en goles). Para equipos urgidos con ranking >70: mantener R1 activa con stake reducido (Kelly ×0.08 en lugar de skip).

**Tabla ranking threshold R21:**

- Urgido ranking ≤70: SKIP R1 (riesgo real de marcar)
- Urgido ranking 71–100: R1 reducida (Kelly ×0.08)
- Urgido ranking >100: R1 activa normal (Kelly ×0.12) — la urgencia no compensa la falta de calidad

### R22 — Corners suprimidos en partidos con goles múltiples en 1ªp

Sin aplicación directa. Solo 1 gol en 1ªp (Pépé 1-0 ~65’+ → ambos goles en 2ªp). 10 corners totales = ritmo normal.

### R23 — Rotaciones masivas (≥7 cambios) del favorito

No aplicó directamente. CIV rotó moderadamente (no ≥7 cambios).

### R24 — NUEVA rev23: Portero de élite en forma reduce P(Over 2.5)

Cuando el rival tiene un portero con 10+ paradas en el torneo (activo en forma), reducir P(Over 2.5) en −10pp adicional más allá del ajuste base de R4. Room había hecho 15 paradas vs Ecuador y aunque solo paró 3 en este partido, el efecto psicológico y el bloque bajo de CUW produjeron solo 2 goles de CIV (xG real 1.31 vs proyección 2.25). Aplicar cuando: portero rival con ≥10 paradas en torneo + favorito de nivel medio-alto (no élite absoluta en ataque).

### R25 — NUEVA rev23: Tipo A suplente vs rival muy inferior = excepción R12

Cuando el Tipo A está en el banco (no titular) y el rival tiene ranking >80 posiciones por debajo, NO aplicar la penalización −8pp. El suplente Tipo A de calidad (Pépé ex Arsenal/PSG) puede ser el ejecutor del gol en un partido donde el favorito domina pero no puede con el bloque. Considerar como Tipo D-élite a efectos de stake. Racha inicial: 1/1.

-----

## GESTIÓN DE BANKROLL (sin cambios estructurales)

|Tier                 |Criterio                                     |Fracción Kelly    |Stake típico    |
|---------------------|---------------------------------------------|------------------|----------------|
|★★★ Elite            |Racha ≥8/10 + criterios objetivos verificados|Kelly ×0.25       |~2–5% bankroll  |
|★★★ Alta             |Racha ≥6/8 + patrón sólido confirmado        |Kelly ×0.20       |~1.5–4% bankroll|
|★★ Media             |Racha ≥5/8 o patrón emergente (N<8)          |Kelly ×0.12       |~1–2.5% bankroll|
|★ Baja / Props Tipo A|Alta varianza o prop sin ventaja clara       |Kelly ×0.05 o skip|<1% bankroll    |
|🚫 Skip               |Props Tipo A cuota corta + EV <+5%           |No apostar        |—               |

**Excepción rev23:** Tipo A suplente vs rival muy inferior → reclasificar como Tipo D-élite (Kelly ×0.08).

### Tracking de ROI acumulado

|Mercado                               |Aciertos/Total|ROI est.|Tendencia                                                                           |
|--------------------------------------|--------------|--------|------------------------------------------------------------------------------------|
|Suplente goleador esencia R6          |11/11         |+++     |↑ Pépé (SUP CIV) x2 goles. Racha perfecta.                                          |
|R13 distribución suplentes            |7/7           |+++     |↑ Pépé no era el nominado principal. R13 esencia.                                   |
|1X2 dirección favorito                |17/22         |+       |↑ CIV 2-0. Racha sube a 77%.                                                        |
|Lateral/extremo ofensivo R7           |8/9           |++      |↓ FALLO: Amad 0G Yan D. 0G. Gol fue de suplente Tipo A.                             |
|Under 9.5 corners                     |6/6           |+++     |↑ 10 corners totales. Límite justo. Racha perfecta.                                 |
|Under 2.5 bloque R2                   |9/10          |++      |↑ 2 goles → Under 2.5 ✅. Bloque bajo funcionó.                                      |
|Over 2.5 asimetría extrema R4         |5/6           |++      |↓ FALLO rev23. Portero élite + xG CIV moderado = solo 2 goles.                      |
|BTTS No (R1)                          |15/17         |+       |↑ CUW 0 goles → BTTS No correcto (aunque hicimos SKIP por R21 innecesario).         |
|Props Tipo C (lateral/extremo)        |9/13          |+/−     |↓ Amad 0G Yan D. 0G. R7 fallo coincide.                                             |
|Props Tipo A (delantero obvio titular)|~8/24         |−       |↔ R12 sigue válida para titulares. Excepción: Tipo A suplente vs rival muy inferior.|
|R4 Over 2.5 asimetría                 |5/6           |++      |↓ Primera grieta. R24 nueva: portero élite reduce probabilidad.                     |

-----

## REGISTRO DE ÁRBITROS WC26 (rev23)

|Árbitro              |País   |J1   |J2|J3|Media WC26|Perfil WC26                                            |Base próx.     |
|---------------------|-------|-----|--|--|----------|-------------------------------------------------------|---------------|
|Danny Makkelie       |NED    |6    |3 |— |4.5       |Activo/físico                                          |4.0–5.0        |
|Michael Oliver       |ING    |3    |3 |— |3.0       |Normal                                                 |3.0–3.5        |
|Wilton Sampaio       |BRA    |0    |— |— |0.0       |Ultra-fluido                                           |1.0–1.5        |
|Félix Fischer        |ALE    |1    |— |— |1.0       |Fluido                                                 |1.5–2.0        |
|Pierre Atcho         |GAB    |0    |2 |— |1.0       |Conservador                                            |1.5–2.0        |
|César Ramos          |MEX    |1    |3 |— |2.0       |Bimodal: fluido=1 / físico 2ªp=3                       |2.0–2.5        |
|Said Martínez        |HON    |2    |— |— |2.0       |Conservador                                            |2.0–2.5        |
|Ramón Abatti         |BRA    |4    |3 |— |3.5       |Moderado/selectivo                                     |3.0–4.0        |
|Facundo Tello        |ARG    |5    |2 |— |3.5       |Físico MC / conservador bloque                         |2.5–3.5        |
|Yael Falcón Pérez    |ARG    |1    |1 |— |1.0       |Ultra-conservador WC                                   |1.0–1.5        |
|Jesús Valenzuela     |VEN    |1    |2 |— |1.5       |Conservador estable                                    |1.5–2.0        |
|Tori Penso           |USA    |2    |4 |— |3.0       |Bimodal: fluido=2 / tenso/físico=4                     |2.0–4.0 ctx    |
|**Glenn Nyberg**     |**SUE**|**3**|— |— |**3.0**   |**Moderado WC debut. 2 CUW+1 CIV. Partido urgido CUW.**|**2.5–3.0 ctx**|
|Víctor Gomes         |RSA    |—    |— |— |sin datos |—                                                      |2.0–2.5 (debut)|
|Aliyar Aghayev       |AZE    |—    |— |— |sin datos |—                                                      |2.0–2.5 (debut)|
|Mustapha Ghorbal     |ALG    |—    |— |— |sin datos |—                                                      |2.0–2.5 (debut)|
|Ismail Elfath        |USA    |—    |— |— |sin datos |—                                                      |2.0–2.5 (debut)|
|Daniele Orsato       |ITA    |—    |— |— |sin datos |—                                                      |2.0–2.5 (debut)|
|Clément Turpin       |FRA    |—    |— |— |sin datos |—                                                      |2.0–2.5 (debut)|
|Slavko Vinčić        |SVN    |—    |— |— |sin datos |—                                                      |2.0–2.5 (debut)|
|François Letexier    |FRA    |—    |— |— |sin datos |—                                                      |2.0–2.5 (debut)|
|Ivan Barton          |SLV    |—    |— |— |sin datos |—                                                      |2.0–2.5 (debut)|
|Daniel Siebert       |ALE    |—    |— |— |sin datos |—                                                      |2.0–2.5 (debut)|
|Felix Zwayer         |ALE    |—    |— |— |sin datos |—                                                      |2.0–2.5 (debut)|
|Marco Guida          |ITA    |—    |— |— |sin datos |—                                                      |2.0–2.5 (debut)|
|Rohit Saggi          |NOR    |—    |— |— |sin datos |—                                                      |2.0–2.5 (debut)|
|Abdulrahman Al-Jassim|QAT    |—    |— |— |sin datos |—                                                      |2.0–2.5 (debut)|
|Piero Maza           |CHI    |—    |— |— |sin datos |—                                                      |2.0–2.5 (debut)|
|Anthony Taylor       |ING    |—    |— |— |sin datos |—                                                      |2.0–2.5 (debut)|
|Szymon Marciniak     |POL    |—    |— |— |sin datos |—                                                      |2.0–2.5 (debut)|
|Bakary Gassama       |GAM    |—    |— |— |sin datos |—                                                      |2.0–2.5 (debut)|
|Janny Sikazwe        |ZAM    |—    |— |— |sin datos |—                                                      |2.0–2.5 (debut)|


> **Glenn Nyberg rev23:** J1 WC26 = 3 amar. (2 CUW + 1 CIV). Partido urgido/físico CUW. Perfil moderado. Base próximo partido: 2.5–3.0 según contexto. Debut WC base universal revisada: 2.0–2.5 en fluido, 2.5–3.0 en tenso/urgido.

-----

## MERCADOS DE TIEMPO PARCIAL

**MP-1 — Suplente gol/asist 2H cuando partido ≤1 gol:** 11/11 ✅ (Pépé 2G en 2ªp, partido 1-0 al entrar)
**MP-2 — No más goles 2H con 0-0 al HT:** No aplicó (hubo gol en 2ªp).
**MP-3 — Over 0.5 goles 2H con 0-0 al HT:** No aplicó.
**MP-4 — HT x-x / FT Victoria:** No activó en este partido.
**MP-5 — Over 1.5 goles 2H en altitud:** No aplicó (nivel del mar).
**MP-6 — Corners Over X.5 2ªp perdedor urgente:** CUW generó 4 corners totales (2+2 por mitad aprox.) — urgencia no se tradujo en acumulación de corners. MP-6 no se habría activado con suficiencia.

-----

## HISTORIAL DE PARTIDOS

### Partidos 01–10 (resumen comprimido)

**P01** CAN 6-0 QAT: ✅ 1X2, BTTS No, Over c. ❌ Under 2.5. Asimetría + 2RC = multiplicador goles.
**P02** MEX 1-0 KOR: ✅ 1X2, BTTS No. ❌ Over 2.5★★★. Tensión táctica suprime goles.
**P03** MAR 1-0 SCO: ✅ 1X2, BTTS No, Under 2.5, Saibari. ❌ Hakimi asist., Over 7.5c.
**P04** USA 1-0 AUS: ✅ 1X2, BTTS No, Under 2.5, Over c., Over amar. ❌ McKennie. R7 (1/1).
**P05** BRA 3-0 HAI: ✅ 1X2, BTTS No, Over 2.5, Vinícius/Cunha. Asimetría infraestima marcador.
**P06** NED 3-1 SWE: ✅ 1X2, BTTS Sí, Over 2.5, Gakpo. ❌ Malen, Over 3.5 amar.
**P07** PAR 1-0 TUR: ✅ BTTS No, Under 2.5, Over c. ❌ 1X2. RC temprano −40% amarillas.
**P08** NOR 3-2 SEN: ✅ 1X2, Over 2.5, BTTS Sí, Haaland. ❌ Over 3.5 amar. Sampaio WC26=0.
**P09** ALG 2-1 JOR: ✅ 1X2, Over c., Mahrez asist. ❌ Under 2.5★★★, BTTS No★★★.
**P10** FRA 3-0 IRQ: ✅ 1X2, Over 2.5, BTTS No, Olise ×2 asist., FRA −2.5. ❌ Over 7.5c.

### Partidos 11–19 (resumen comprimido)

**P11** ARG 2-0 AUT: ✅ 1X2, BTTS No, Under 8.5c, moda 2-0, Over 2.5 amar. ❌ Over 2.5 goles. Messi R9 2/2. ARG=4 corners (patrón Under).
**P12** POR 4-0 UZB: ✅ 1X2, BTTS No, Over 2.5, Ronaldo, BFernandes asist., POR −1.5. ❌ Over 7.5c. Ronaldo R9 2/2. Tipo C+D confirmados.
**P13** ING 0-0 GHA: ✅ BTTS No, Under 2.5, Over 8.5c. ❌ 1X2 ENG. R3: −40% xG. R11 ignorada (4/5 cond.).
**P14** PAN 0-1 CRO: ✅ 1X2, BTTS No (11/11), Under 2.5 (7/7), Over 7.5c. ❌ Modrić asist. R13: Budimir (SUP) vs Kramarić.
**P15** MAR 5-1 HAI: ✅ 1X2, Over 2.5/3.5, R6 (6/6), R7 Hakimi (4/4), R13. ❌ BTTS No, Under 9.5c. Rev16.
**P16** SUI 2-1 CAN: ✅ Over 7.5c, Over 2.5 amar., BTTS Sí, R6. ❌ Doble oportunidad CAN/X. R15 activa.
**P17** RSA 1-0 KOR: ✅ BTTS No (12/13), Under 2.5 (8/8), RSA +1.5, Over 8.5c, R6 débil. ❌ 1X2 KOR. Tello conservador.
**P18** CZE 0-3 MEX: ✅ BTTS No, Under 2.5 amar., Fidalgo, SUP ×2, Sánchez asist. (R7 5/5), Under 9.5c. ❌ Under 2.5 goles. R17 activada.
**P19** SCO 0-3 BRA: ✅ 1X2, BTTS No, Over 7.5c, Over 2.5 amar., Bruno G. asist.×2 (R8 3/3), Rayan R7 (6/6), BRA −1.5. ❌ Paquetá. MP-6: SCO 7c en 2ªp.

### Partido 20 — Bosnia vs Qatar | 25 Jun 2026 | J3 Grupo B (comprimido)

**Real:** BIH 3-1 QAT. xG: BIH 0.68/QAT 0.77. 10c (5+5). 2 amar. (Valenzuela). Alajbegović 1G+1A (R7 7/7). Al Haydos 1G (QAT, R1 fallo 2/16). Mahmić SUP (R13 5/5). Demirović 0G (concentración Tipo C errónea). | ✅ 1X2, Over 2.5 goles, Under 2.5 amar., Over 7.5c, R6+R13, R7. ❌ BTTS No (R21 nueva), Demirović anytime, Over 9.5c. | Claves: R21 (urgencia bilateral supera xG threshold), R20 (dos Tipo C → distribuir), Valenzuela conservador confirmado.

### Partido 21 — Ecuador vs Alemania | 25 Jun 2026 | J3 Grupo E (comprimido)

**Real:** ECU 2-1 GER. HT 1-1. Angulo (EXT I ECU, 1ªp) + Plata (EXT D ECU, 2ªp). Sané 1G GER. 5 corners. 4 amarillas (Penso). GER 18 tiros / ECU 9. Rodríguez (SUP ECU no obvio) asistió 2-1. Wirtz 1A sin SOnT. Vite 1A sin tiros. | ✅ R7 Angulo+Plata (8/8), R20 (dos Tipo C marcaron), R13/R6 Rodríguez (10/10), Skip Valencia (Tipo A) correcto. ❌ 1X2 GER (ECU ganó 2-1, 13%), BTTS No (3/17), Over 7.5c (5 corners, R22 nueva), Under 2.5 amar. (4 TA, Penso bimodal), Undav (SUP sin partido vivo al entrar). | Claves: R22 (goles 1ªp suprimen corners), R23 (rotaciones ≥7 del favorito = −15pp), Penso bimodal confirmado.

### Partido 22 — Costa de Marfil vs Curazao | 25 Jun 2026 | J3 Grupo E · Lincoln Financial Field, Filadelfia

**Predicción:** CIV 70% / X 18% / CUW 12%. Over 2.5 goles ★★★. Under 9.5c ★★★. Under 2.5 amar. ★★. CIV −1.5 ★★. BTTS No SKIP (R21). Amad Diallo/Yan Diomandé Tipo C (R7+R20). SKIP Adingra (Tipo A). Árbitro: Glenn Nyberg (debut WC).

**Real:** CIV 2-0 CUW. Goles: Pépé (SUP, ~65’, asist. Yan Diomandé) + Pépé (2ªp, asist. Sangaré). xG: CUW 0.50 / CIV 1.31. Posesión: CUW 37% / CIV 63%. Tiros: CUW 11/2 SOnT / CIV 7/2 SOnT (1ªp) + 9/3 SOnT (2ªp). Corners: 10 total (4+6). Amarillas: 3 (2 CUW J.Bacuna+Kastaneer / 1 CIV Pépé). Paradas Room: 3 (1+2). Sangaré 1A (2ªp). Yan Diomandé 1A (1ªp). Amad Diallo 3 tiros, 0 SOnT, 0G.

**Balance:**
✅ 1X2 CIV correcto. ✅ BTTS No (implícito, aunque hicimos SKIP — SKIP fue innecesario). ✅ Under 9.5c (10c, límite justo). ✅ Under 2.5 goles (habría acertado si no hubiésemos apostado Over). ✅ R6/R13: Pépé (SUP menos obvio) 2G (racha 11/11). ✅ SKIP Adingra Tipo A correcto (0G).
❌ **Over 2.5 goles** (solo 2 goles — primer fallo R4, racha 5/6). ❌ **R7 fallo** (Amad 0G, Yan D. 0G — racha 8/9). ❌ **Under 2.5 amar.** (3 TA — Nyberg más activo de lo esperado). ❌ **R12 SKIP Tipo A** (Pépé suplente x2 — excepción nueva R25: Tipo A suplente vs rival muy inferior).

**Claves rev23:**

- **R24 nueva:** Portero de élite en forma (≥10 paradas en torneo) reduce P(Over 2.5) en −10pp. Room 15 paradas vs ECU → habría reducido Over 2.5 de 67% a 57%. Combinado con xG CIV real moderado (1.31), Under 2.5 era más probable de lo calculado.
- **R25 nueva:** Tipo A suplente vs rival muy inferior = excepción R12. Pépé (suplente) marcó 2 goles. No aplicar −8pp cuando el Tipo A no es titular.
- **R7 primer fallo (8/9):** El gol no fue de extremo/lateral sino de suplente Tipo A. R7 puede fallar cuando hay suplente de alto perfil que “roba” el protagonismo ofensivo.
- **R21 refinamiento:** SKIP solo si equipo urgido ranking ≤70. CUW ranking 117 → la urgencia no se tradujo en goles. Mantener R1 para equipos urgidos con ranking >100.
- **Nyberg debut WC26:** J1 = 3 amar. Base revisada: 2.5–3.0 en partidos urgidos/físicos. No usar 2.0 universal.
- **xG CIV real inflado:** Proyectamos 2.25, real 1.31 (reducción 42%). Bloque bajo + favorito nivel medio-alto = reducir xG más agresivamente.

-----

## RESUMEN DE SESGOS ACTIVOS

|Sesgo                                                    |Descripción                                                                         |Regla correctora                                                                            |
|---------------------------------------------------------|------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------|
|Conservadurismo marcador asimetría extrema               |Modelo subestima goles con diferencia ranking >50                                   |R4: +1-2 goles a la moda (condicionada R24)                                                 |
|R4 Over 2.5 con portero élite                            |Asimetría extrema no garantiza Over 2.5 si rival tiene portero ≥10 paradas en torneo|R24: −10pp P(Over 2.5) cuando portero rival con ≥10 paradas en torneo                       |
|BTTS No con urgencia unilateral eliminación (ranking ≤70)|Equipo que necesita marcar para sobrevivir supera xG proyectado                     |R21+R22: SKIP R1 solo si rival urgido tiene ranking ≤70                                     |
|BTTS No con urgencia unilateral eliminación (ranking >70)|Urgencia no convierte en goles si calidad técnica muy baja                          |R21 refinada: mantener R1 activa (Kelly ×0.08) para urgidos ranking >100                    |
|Corners en partidos con goles múltiples en 1ªp           |Ritmo alto en 1ªp suprime balón parado                                              |R22: reducir proyección corners ~30% cuando 2+ goles en 1ªp                                 |
|Rotaciones masivas favorito sin penalización adicional   |≥7 rotaciones simultáneas = descoordinación estructural                             |R23: −15pp adicional P(victoria favorito)                                                   |
|Suplente goleador: jugador exacto                        |Con 2+ suplentes D, concentrar en el más famoso es error                            |R13: distribuir siempre. R25 excepción: Tipo A suplente vs rival muy inferior = Tipo D-élite|
|Suplente goleador: partido resuelto                      |R6 no aplica cuando partido ya está cerrado (>1 gol) al entrar                      |R6 rev20: solo aplica con marcador ≤1 gol al entrar                                         |
|Props Tipo A (delantero obvio TITULAR)                   |El mercado los sobreestima casi siempre                                             |R12: −8pp automático. EXCEPTO si es suplente vs rival muy inferior (R25)                    |
|Concentración en un Tipo C cuando hay dos candidatos     |Gol va al Tipo C no favorito cuando hay 2 candidatos                                |R20: distribuir stake 50%. Añadir fracción al Tipo A suplente de élite si existe            |
|R7 con suplente Tipo A de élite en banco                 |El extremo no marca si el suplente de alto perfil le “roba” el protagonismo         |R7 condicional: reducir stake si hay suplente Tipo A de élite disponible                    |
|xG CIV inflado vs bloque bajo rival nivel medio-alto     |El favorito de nivel medio-alto genera menos xG real vs bloque real que proyectado  |R3 rev23: reducir xG favorito ~40–45% con bloque bajo + favorito no élite absoluta          |
|Árbitro debut WC base universal 2.0–2.5                  |Base correcta en fluido, pero puede ser 2.5–3.0 en partidos urgidos/físicos         |R10 rev23: debut WC urgido/físico → base 2.5–3.0                                            |
|Excepción motivación histórica estrella                  |Solo válida para récords Messi y Ronaldo                                            |R9: no extrapolar a otros jugadores                                                         |
|Over 9.5 corners en partidos equilibrados                |Urgencia bilateral = distribución uniforme, no acumulación                          |R5 rev21: Over 9.5 solo en partidos unilaterales                                            |