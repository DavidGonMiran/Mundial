# Cuaderno de Aprendizaje — Mundial 2026

## Revisión 36 | Actualizado: 30 Jun 2026

-----

## ESTADO GENERAL DEL MODELO

*Actualizado tras partido 35 (Alemania 1-1 Paraguay [PAR gana penaltis], R32, 30 Jun 2026)*

**Marcador confirmado:** Enciso (PAR) 1G asist. Galarza, 1ª parte. Havertz (GER) 1G asist. Wirtz, 2ª parte. 0-0 en prórroga. 1-1 en 120', **Paraguay gana en penaltis**.

**R4 dirección favorito (90'/120'):** ⚪ NO ROTO EN JUEGO pero **PRIMERA PÉRDIDA EN PENALTIS** — GER no perdió en juego (1-1 tras 120'), pero el resultado final es derrota. Racha de "favorito no pierde en 120'" se mantiene 13/13, pero **racha de "favorito gana el partido" cae a 12/13**. **HALLAZGO CRÍTICO: R4 debe redefinirse** — solo predice resultado en tiempo de juego (90'/120'), NO cubre penaltis, que son ~coinflip independiente de la calidad relativa de los equipos.
**BTTS No (★★★ EV+22.3%):** ❌ FALLO — ambos equipos marcaron (Enciso PAR 1ªp, Havertz GER 2ªp). Fallo claro pese a R1 activa (PAR xG~0.42).
**GER −0.5 hándicap (★★★ EV+16.9%):** ❌ FALLO — GER no ganó en 90' (1-1). Racha R4 hándicap rota por primera vez.
**R13 extendida Musiala anytime (★★★ EV+12%):** ❌ FALLO — Musiala 0G; el gol de GER fue de Havertz (CF), no del MC/AM estrella. Patrón R13 se rompe en GER pero **el arquetipo se cumplió en el equipo contrario**: Enciso (creativo de PAR) anotó el gol de 1ªp. Sesgo nuevo abajo (R40).
**Wirtz asistencia anytime (★★★ EV+14%):** ✅ ACIERTO — Wirtz asistió el gol de Havertz en 2ªp.
**Cubas TA anytime (★★ EV+22%):** ✅ ACIERTO — TA confirmada en 2ªp.
**Under 9.5 corners / R38 activa (★★ EV+11.9%):** ❌ FALLO CATASTRÓFICO — 22 corners totales (16 GER + 6 PAR), ya con 8 corners (6 GER + 2 PAR) solo en 1ªp. **R38 (bloque ultra-defensivo suprime córners) NO se replicó esta vez** pese a contexto similar a CAN-RSA. Ver R38 revisada abajo.
**Over 4.5 corners GER equipo (★ EV+17%):** ✅ ACIERTO con margen amplísimo — 16 corners GER en el partido (6 en 1ªp, 4 en 2ªp, 3+3 en prórroga).
**Under 3.5 TA (★ EV+8.8%):** ❌ FALLO — 4 TA totales (Cubas en 2ªp; Havertz, Musiala y Galarza en 2ª prórroga). Refuerza R39 (la prórroga infla TA incluso con árbitro de base muy conservadora).
**Over 1.5 goles GER (★★ EV+11.1%):** ❌ FALLO — GER solo anotó 1 gol (Havertz).
**R6+R13 Undav trigger:** ⚪ NO ACTIVADA — GER nunca lideró el marcador en ningún momento (0-1 tras 1ªp, 1-1 tras 2ªp), trigger correctamente no disparado.

**DIAGNÓSTICO CENTRAL REV36:** Mayor sorpresa del torneo hasta la fecha. GER (68% favorito, racha R4 perfecta 12/12) empató 1-1 con PAR (bloque ultra-defensivo) y cayó eliminado en penaltis sin haber liderado el marcador en ningún momento del partido. **HALLAZGO 1 (R4 redefinida):** la racha de "favorito no pierde en tiempo de juego" sigue intacta, pero el modelo debe separar explícitamente el mercado "ganador del partido" (incluye penaltis) del mercado "resultado en 90'/120'" — apostar 1X2/hándicap en KO debe excluir o cubrir el riesgo de prórroga+penaltis. **HALLAZGO 2 (R38 frágil):** el bloque ultra-defensivo voluntario de PAR no suprimió córners esta vez — ya hubo 8 corners (6 GER) solo en la 1ª parte, y el total acabó en 22 tras 120 minutos de presión sostenida, a diferencia del partido más corto/controlado de RSA-CAN. R38 pasa a "condicional", no aplicar de forma automática en partidos que llegan a prórroga. **HALLAZGO 3 (R40 nueva):** cuando el favorito no logra que su MC/AM estrella anote (R13 fallida), el arquetipo "MC/extremo creativo anota en partido cerrado" puede manifestarse en el equipo contrario si este tiene un perfil similar (Enciso en PAR). Vigilar ambos lados, no solo al favorito.

-----

## REGLAS OPERATIVAS CONSOLIDADAS

**R1 — BTTS No con xG rival <0.80**
Racha: 18/29 | Confianza: MEDIA
Rev36: PAR (xG~0.42) SÍ marcó (2 goles). R1 sigue siendo probabilística, no determinística — bloque bajo con contragolpe + balón parado puede romper la regla incluso con xG bajo.

**R4 — Favorito gana / dirección 90'-120'**
Racha resultado final: **12/13** (primera pérdida, vía penaltis) | Racha "no pierde en juego": 13/13 intacta | Confianza: ALTA pero REDEFINIDA
Rev36: GER 2-2 (120'), pierde penaltis. **R4 ahora se limita a predecir que el favorito no perderá en tiempo de juego — el riesgo de penaltis es un mercado aparte, tratable como ~50/50 ajustado por psicología/portero, no por calidad de plantilla.**

**R13 extendida — MC/AM titular favorito goleador en partido cerrado**
Racha: 2/3 (Musiala falló) | Confianza: MEDIA (bajada desde ALTA)
Rev36: Musiala 0G. Ver R40 — el mismo arquetipo puede activarse en el rival.

**R38 — Bloque ultra-defensivo voluntario (≤30% posesión) suprime corners**
Racha: 1/2 (falló en GER-PAR) | Confianza: BAJA — CONDICIONAL
Rev36: PAR 28% posesión pero el partido llegó a 120' con corners muy por encima de lo proyectado (8 solo en 1ªp). R38 solo aplicar en partidos de 90' decisivos sin prórroga; en KO que se extiende, el desgaste defensivo genera más corners concedidos, no menos.

**R39 — KO + jugadores a riesgo de sanción + tensión infla TA**
Racha: 2/2 | Confianza: ALTA
Rev36: confirma de nuevo — 4 TA en partido con prórroga (Cubas en 2ªp; Havertz, Musiala y Galarza en 2ª prórroga), pese a árbitro Jayed con base muy conservadora (0 TA en J1, 0 TA también en la 1ªp de este partido). La prórroga por sí sola es un multiplicador de TA.

**R40 — NUEVA Rev36: arquetipo MC/extremo creativo goleador puede activarse en el desvalido, no solo en el favorito**
Cuando el favorito no logra el gol de su MC/AM estrella (R13 fallida) en un partido cerrado, vigilar al MC/extremo creativo del equipo inferior como candidato a gol de partido cerrado, especialmente si depende de un solo generador de peligro (Enciso para PAR, 11 dribbles vs AUS, único vector ofensivo). Aplicación: Enciso (PAR) anotó el único gol confirmado con autor en el partido. Indicador pre-partido: equipo inferior con un solo jugador claramente diferencial en ataque + bloque bajo.

-----

## GESTIÓN DE BANKROLL (sin cambios estructurales)

|Tier     |Criterio                         |Fracción Kelly|Stake típico    |
|---------|---------------------------------|--------------|----------------|
|★★★ Elite|Racha ≥8/10 + criterios objetivos|Kelly ×0.25   |~2–5% bankroll  |
|★★★ Alta |Racha ≥6/8 + patrón sólido       |Kelly ×0.20   |~1.5–4% bankroll|
|★★ Media |Racha ≥5/8 o patrón emergente    |Kelly ×0.12   |~1–2.5% bankroll|
|★ Baja   |Alta varianza o prop sin ventaja |Kelly ×0.05   |<1% bankroll    |
|🚫 Skip   |Tipo A cuota corta + EV <+5%     |No apostar    |—               |

**ALERTA REV36:** R4 redefinida — el mercado "ganador del partido" en KO debe descontar riesgo de penaltis; no tratar racha de favorito como garantía de cobro en hándicap/1X2 cuando el partido puede llegar a prórroga.
**ALERTA REV36:** R38 degradada a BAJA confianza — no aplicar Under corners automáticamente solo por bloque bajo voluntario; el riesgo de prórroga invalida la proyección.
**ALERTA REV36:** R13 extendida bajada a MEDIA — vigilar también el arquetipo R40 en el equipo inferior.
**ALERTA REV35 (vigente):** R39 — KO + jugadores favorito a 1 TA sanción + rival presión alta → evitar Under 3.5 TA. Reforzada por prórroga como multiplicador adicional.

-----

## REGISTRO DE ÁRBITROS WC26 (rev36)

|Árbitro              |País|J1|J2|J3     |R32 |Media WC26|Perfil WC26                                                                                                                                               |Base próx.       |
|---------------------|----|--|--|-------|----|----------|----------------------------------------------------------------------------------------------------------------------------------------------------------|----------------:|
|Danny Makkelie       |NED |6 |3 |—      |—   |4.5       |Activo/físico                                                                                                                                             |4.0–5.0          |
|Michael Oliver       |ING |3 |3 |—      |—   |3.0       |Normal                                                                                                                                                    |3.0–3.5          |
|Wilton Sampaio       |BRA |0 |— |—      |—   |0.0       |Ultra-fluido                                                                                                                                              |1.0–1.5          |
|Félix Fischer        |ALE |1 |— |2      |—   |1.5       |Fluido                                                                                                                                                    |1.5–2.0          |
|Pierre Atcho         |GAB |0 |2 |—      |—   |1.0       |Conservador                                                                                                                                               |1.5–2.0          |
|César Ramos          |MEX |1 |3 |—      |—   |2.0       |Bimodal                                                                                                                                                   |2.0–2.5          |
|Said Martínez        |HON |2 |— |—      |—   |2.0       |Conservador                                                                                                                                               |2.0–2.5          |
|Ramón Abatti         |BRA |4 |3 |—      |—   |3.5       |Moderado                                                                                                                                                  |3.0–4.0          |
|Facundo Tello        |ARG |5 |2 |—      |—   |3.5       |Físico MC                                                                                                                                                 |2.5–3.5          |
|Yael Falcón Pérez    |ARG |1 |1 |—      |—   |1.0       |Ultra-conservador                                                                                                                                         |1.0–1.5          |
|Jesús Valenzuela     |VEN |1 |2 |—      |—   |1.5       |Conservador estable                                                                                                                                       |1.5–2.0          |
|Tori Penso           |USA |2 |4 |—      |—   |3.0       |Bimodal                                                                                                                                                   |2.0–4.0 ctx      |
|Glenn Nyberg         |SUE |3 |— |—      |—   |3.0       |Moderado debut                                                                                                                                            |2.5–3.0 ctx      |
|Iván Barton          |SLV |3 |— |—      |—   |3.0       |Debut WC26. 3 amar.                                                                                                                                       |2.5–3.0 ctx      |
|Clément Turpin       |FRA |~4|3 |—      |—   |~3.5      |Activo                                                                                                                                                    |3.5–4.0 ctx      |
|Mustapha Ghorbal     |ALG |— |— |1      |—   |1.0       |Debut WC26. TUR-USA=1 TA. Conservador.                                                                                                                    |2.0–2.5 ctx elim.|
|Katia I. García      |MEX |— |— |0      |—   |0.0       |Debut WC26 central. TUN-NED=0 TA. Ultra-conservadora.                                                                                                     |1.0–2.0 ctx elim.|
|Ismail Elfath        |USA |3 |— |4+1TR  |—   |~3.5      |J3 URU-ESP=3TA+1TR. Activo-físico en tensión.                                                                                                             |3.5–4.5 ctx elim.|
|François Letexier    |FRA |— |— |4 (1+3)|—   |4.0       |J3 CPV-KSA=moderado en partido bloqueado.                                                                                                                 |3.0–4.5 ctx      |
|Abdulrahman Al-Jassim|QAT |3 |— |3      |—   |3.0       |J1 POR-CON=2TA. J3 PAN-ENG=3TA. Conservador.                                                                                                              |2.5–3.5 ctx      |
|Drew Fischer         |CAN |— |1 |2      |—   |1.5       |J2 FRA-IRQ=1TA. J3 CRO-GHA=2TA. Ultra-conservador.                                                                                                        |1.5–2.5 ctx elim.|
|NOR-FRA árbitro      |TBD |— |— |2      |—   |2.0       |J3 NOR-FRA=2TA. Perfil conservador.                                                                                                                       |2.0–3.0 ctx elim.|
|SEN-IRQ árbitro      |TBD |— |— |4+1RC  |—   |~4.0      |J3 SEN-IRQ=4TA+1RC. RC Sulaka 1ªp.                                                                                                                        |3.0–4.0 ctx elim.|
|João Pinheiro        |POR |— |— |—      |2   |2.0       |DEBUT WC26. R32 CAN-RSA=2 TA total. Más conservador que carrera (4.62).                                                                                   |2.0–3.0 ctx elim.|
|Marco Mariani        |ITA |— |— |—      |5   |5.0       |R32 BRA-JPN=5 TA. R39: KO + jugadores a riesgo TA + presión alta inflaron. Carrera base 4.81.                                                            |3.5–5.0 ctx KO   |
|Jalal Jayed          |MAR |0 |— |—      |≥4  |~2.0      |**R32 GER-PAR=4 TA total (Cubas 2ªp; Havertz+Musiala+Galarza 2ª prórroga). 0 TA en 1ªp y 2ªp regular, toda la sanción llegó en la prórroga. J1 GER-CUR=0 TA (partido fluido). Carrera 3.73. R39 confirma: prórroga = multiplicador TA incluso con base muy baja.** |3.0–4.5 ctx KO+ET|
|Víctor Gomes         |RSA |— |— |—      |—   |sin datos |—                                                                                                                                                         |2.0–2.5 (debut)  |
|Aliyar Aghayev       |AZE |— |— |—      |—   |sin datos |—                                                                                                                                                         |2.0–2.5 (debut)  |
|Daniele Orsato       |ITA |— |— |—      |—   |sin datos |—                                                                                                                                                         |2.0–2.5 (debut)  |
|Szymon Marciniak     |POL |— |— |—      |—   |sin datos |—                                                                                                                                                         |2.0–2.5 (debut)  |
|Anthony Taylor       |ING |— |— |—      |—   |sin datos |—                                                                                                                                                         |2.0–2.5 (debut)  |
|Piero Maza           |CHI |— |— |—      |—   |sin datos |—                                                                                                                                                         |2.0–2.5 (debut)  |
|Rohit Saggi          |NOR |— |— |—      |—   |sin datos |—                                                                                                                                                         |2.0–2.5 (debut)  |
|Daniel Siebert       |ALE |— |— |—      |—   |sin datos |—                                                                                                                                                         |2.0–2.5 (debut)  |
|Felix Zwayer         |ALE |— |— |—      |—   |sin datos |—                                                                                                                                                         |2.0–2.5 (debut)  |
|Marco Guida          |ITA |— |— |—      |—   |sin datos |—                                                                                                                                                         |2.0–2.5 (debut)  |

-----

## MERCADOS DE TIEMPO PARCIAL

**MP-1 — R6+R13 Tipo D suplente 2ªp:** Rev36 ⚪ Trigger no activo (GER nunca lideró ≤60'). Skip correcto. Racha condicional sigue **14/14**.
**MP-6 — Corners 2ªp urgencia favorito:** Rev36 N/D — GER ya generaba muchos corners desde 1ªp (6), no es un patrón de urgencia tardía sino dominio sostenido sin conversión.
**MP-7 — NUEVA: prórroga como multiplicador de TA y corners:** Rev36 ✅ — partidos que llegan a 120' muestran TA y corners muy por encima de la proyección de 90'. Tratar prórroga como régimen estadístico distinto, no extrapolación lineal del ritmo de 90'.

-----

## HISTORIAL DE PARTIDOS

### Partidos 01–10 (resumen comprimido)

P01 CAN 6-0 QAT: ✅ 1X2, BTTS No, Over c. ❌ Under 2.5. Asimetría + 2RC = multiplicador goles.
P02 MEX 1-0 KOR: ✅ 1X2, BTTS No. ❌ Over 2.5★★★. Tensión táctica suprime goles.
P03 MAR 1-0 SCO: ✅ 1X2, BTTS No, Under 2.5, Saibari. ❌ Hakimi asist., Over 7.5c.
P04 USA 1-0 AUS: ✅ 1X2, BTTS No, Under 2.5, Over c., Over amar. ❌ McKennie. R7 (1/1).
P05 BRA 3-0 HAI: ✅ 1X2, BTTS No, Over 2.5, Vinícius/Cunha. Asimetría infraestima marcador.
P06 NED 3-1 SWE: ✅ 1X2, BTTS Sí, Over 2.5, Gakpo. ❌ Malen, Over 3.5 amar.
P07 PAR 1-0 TUR: ✅ BTTS No, Under 2.5, Over c. ❌ 1X2. RC temprano −40% amarillas.
P08 NOR 3-2 SEN: ✅ 1X2, Over 2.5, BTTS Sí, Haaland. ❌ Over 3.5 amar. Sampaio WC26=0.
P09 ALG 2-1 JOR: ✅ 1X2, Over c., Mahrez asist. ❌ Under 2.5★★★, BTTS No★★★.
P10 FRA 3-0 IRQ: ✅ 1X2, Over 2.5, BTTS No, Olise ×2 asist., FRA −2.5. ❌ Over 7.5c.

### Partidos 11–19 (resumen comprimido)

P11 ARG 2-0 AUT: ✅ 1X2, BTTS No, Under 8.5c, moda 2-0. ❌ Over 2.5 goles. Messi R9 2/2.
P12 POR 4-0 UZB: ✅ 1X2, BTTS No, Over 2.5, Ronaldo, BFernandes. ❌ Over 7.5c.
P13 ING 0-0 GHA: ✅ BTTS No, Under 2.5, Over 8.5c. ❌ 1X2 ENG. R11 ignorada (4/5).
P14 PAN 0-1 CRO: ✅ 1X2, BTTS No (11/11), Under 2.5 (7/7), Over 7.5c. ❌ Modrić asist.
P15 MAR 5-1 HAI: ✅ 1X2, Over 2.5/3.5, R6 (6/6), R7 Hakimi (4/4), R13. ❌ BTTS No, Under 9.5c.
P16 SUI 2-1 CAN: ✅ Over 7.5c, Over 2.5 amar., BTTS Sí, R6. ❌ Doble oportunidad CAN/X.
P17 RSA 1-0 KOR: ✅ BTTS No (12/13), Under 2.5 (8/8), RSA +1.5, Over 8.5c, R6 débil. ❌ 1X2 KOR.
P18 CZE 0-3 MEX: ✅ BTTS No, Under 2.5 amar., Fidalgo, SUP ×2, Sánchez asist. (R7 5/5). ❌ Under 2.5G.
P19 SCO 0-3 BRA: ✅ 1X2, BTTS No, Over 7.5c, Over 2.5 amar., Bruno G., Rayan R7 (6/6), BRA −1.5. ❌ Paquetá.

### Partidos 20–26 (resumen comprimido)

P20 BIH 3-1 QAT: ✅ 1X2, Over 2.5, Under 2.5 amar., Over 7.5c, R6+R13, R7 Alajbegović (7/7). ❌ BTTS No, Over 9.5c.
P21 ECU 2-1 GER: ✅ R7 Angulo+Plata (8/8), R13/R6 Rodríguez. ❌ 1X2 GER, BTTS No, Over 7.5c. Claves: R22/R23.
P22 CIV 2-0 CUW: ✅ 1X2 CIV, Under 9.5c, R6/R13 Pépé (11/11). ❌ Over 2.5 goles, R7 Amad 0G.
P23 JPN 1-1 SWE: ✅ JPN +0.5, BTTS Sí, Over 7.5c, Under 3.5 amar., R6/R13 Maeda (12/12), R7 Doan (8/8). ❌ Over 2.5G, Isak 0A.
P24 PAR 0-0 AUS: ✅ Under 3.5 amar. ❌ Over 7.5c (4c), PAR victoria, Over 2.5G. Claves: R28/R29.
P25 TUR 3-2 USA: ✅ Over 7.5c, Under 2.5 amar., R6+R13 Ayhan. ❌ Under 2.5G, Victoria USA. Claves: R30.
P26 TUN 1-3 NED: ✅ NED −1.5, Over 2.5/3.5, Over 7.5c, Under 2.5 amar. (R10 5/5), Dumfries R7 (10/11). ❌ BTTS No.

### Partidos 27–30 (resumen comprimido)

P27 URU 0-1 ESP | J3 Grupo H: ✅ Victoria ESP, BTTS No, Under 2.5G. ❌ BTTS Sí (R21), Over 7.5c, Over 2.5G. Claves: R32 defensa élite anula urgencia.
P28 CPV 0-0 KSA | J3 Grupo H: ✅ Over 2.5 amar., BTTS No, Under 2.5G. ❌ BTTS Sí (R21), Over 2.5G, Over 7.5c. Claves: R33 urgido xG ≤0.50 = bloqueador, R28 ≥25 entradas.
P29 PAN 0-2 ENG | J3 Grupo L: ✅ ENG −1.5 (R4 7/7), BTTS No (R1 17/24), Over 7.5c, Saka G+A (R7 11/14), Bellingham gol. ❌ Over 2.5 goles, Suplente ENG gol (trigger no activo). Claves: R34 inferior ≥2p → Over 1.5 primario.
P30 CRO 2-1 GHA | J3 Grupo L: ✅ 1X2 CRO (R4 8/8), Under 3.5 amar. (Fischer ultra-conservador). ❌ Perišić asist. (R35: MC gol <30'), BTTS No, Under 2.5G, Over 7.5c (R22). Claves: R35 (MC gol <30' invalida R7), R22, R13 CB urgido activa.

### Partido 31 — Noruega 1-4 Francia | 26 Jun 2026 | J3 Grupo I (comprimido)

Real: NOR 1-4 FRA. Dembélé hat-trick 1ªp (2A Mbappé). Aasgaard 1G. Doué 1G 2ªp. 5 goles, 2 TA, 9 corners (4+5), 28 remates. NOR rotó ≥8 titulares. | ✅ 1X2 FRA (R4 9/9), Over 2.5G, BTTS Sí, Over 7.5c, Under 3.5 amar., Barcola asist. 2ªp (R6+R13 13/13), Doué gol. ❌ Olise 0G 0A (R36: rival ≥8 rotaciones invalida R7). | Claves: R36 nueva, R35 ampliada.

### Partido 32 — Senegal 5-0 Iraq | 26 Jun 2026 | J3 Grupo I (comprimido)

Real: SEN 5-0 IRQ. Diarra 1G 1ªp. Pape Gueye 2G 1A 2ªp. Ndiaye 1G 1A (SUP 2ªp). Sarr 1G 1A 2ªp. Sulaka RC 1ªp. 4 TA+1RC. 15 corners (9+6). Jackson 3S 2SOnT 0G. | ✅ 1X2 SEN, SEN −1.5 (R4 10/10), Over 2.5G, Over 3.5G, Over 7.5c (racha 13/15), R7 Sarr G+A (12/17), R6+R13 Ndiaye (14/14), R12 skip Jackson. ❌ Under 3.5 amar. (RC Sulaka generó frustración IRQ → 3 TA 2ªp). | Claves: R37 nueva (RC <60' reclasifica mercados), R13 extendida MC titular (1º caso: Pape Gueye).

### Partido 33 — Canadá 1-0 Sudáfrica | 28 Jun 2026 | Ronda de 32 (comprimido)

Real: CAN 1-0 RSA. Eustaquio 1G 2ªp (MC titular). Crépeau 4 paradas. 5 corners totales (4+1). 2 TA. 18 tiros CAN, 7 tiros RSA. RSA posesión ~33%. David 2S 0SOnT 0G. | ✅ CAN gana (R4 11/11), BTTS No (R1 18/28), Under 2.5G, R12 skip David, R13 extendida Eustaquio (2º caso). ❌ Over 7.5c (5 totales — GRAN FALLO), Over 3.5 TA (2 TA, Pinheiro debut WC conservador). ⚪ R6+R13 suplente (trigger no activo). | Claves: R38 NUEVA (bloque ≤30% posesión voluntaria suprime corners −40%), R10 extendida (debut WC −30% TA base).

### Partido 34 — Brasil 2-1 Japón | 30 Jun 2026 | Ronda de 32 (comprimido)

Real: BRA 2-1 JPN. Sano 1G 1ªp (JPN). Casemiro 1G 2ªp (BRA, MCD titular, R13 3er caso). Martinelli 1G 2ªp (SUP, trigger no activo). 5 TA (Casemiro+Danilo+Sano+Kamada+Suzuki). 8 corners (6+2). 24 remates. | ✅ BRA −1.5/R4 (12/12), BTTS Sí, Over 2.5G, JPN +1.5, Over 7.5c (14/17), Vinícius Over 2.5 remates, R12 skip Vinícius, R13 extendida Casemiro (3/3 → ★★). ❌ Under 3.5 TA (R39 nueva: KO+jugadores a riesgo TA+rival presión alta infla TA), Vinícius/Ueda/Guimarães anytime gol. | Claves: R39 nueva, R13 extendida consolidada ★★.

-----

### Partido 35 — Alemania 1-1 Paraguay (PAR gana en penaltis) | 30 Jun 2026 | Ronda de 32

**Predicciones pre-partido:** GER 68% / X 17% / PAR 15%. BTTS No ★★★ (EV +22.3%, R1 activa xG PAR~0.42, sin D.Gómez SUSP). GER −0.5 hándicap ★★★ (EV +16.9%, R4 dirección 11/11). Wirtz asistencia anytime ★★★ (EV +14%). Musiala anytime ★★★ (EV +12%, R13 extendida 2/2 casos). Cubas TA anytime ★★ (EV +22%). Over 1.5 goles GER ★★ (EV +11.1%, 2.35 xG/partido GER). Under 9.5 corners ★★ (EV +11.9%, R38 activa: PAR 28% posesión = bloque ultra-defensivo, proyección 6-10 corners). Over 4.5 corners GER equipo ★ (EV +17%). Under 3.5 TA ★ (EV +8.8%, Jayed base WC26 muy baja, 0 TA en J1). Undav R6 condicional (trigger: GER marca ≤60'). Árbitro: Jalal Jayed (Marruecos).

**Real (confirmado por periodos):**
1ªp: Enciso (PAR) 1G asist. Galarza. 8 corners (6 GER + 2 PAR). 0 TA. 22 córners-derivados de pases GER (436 pases GER, dominio total de posesión).
2ªp: Havertz (GER) 1G asist. Wirtz. 6 corners (4 GER + 2 PAR). 1 TA (Cubas).
Prórroga 1ªp: sin goles. 4 corners (3 GER + 1 PAR). 0 TA.
Prórroga 2ªp: sin goles. 4 corners (3 GER + 1 PAR). 3 TA (Havertz, Musiala, Galarza).
**Totales partido completo:** 1-1 (Havertz GER / Enciso PAR), 22 corners (16 GER + 6 PAR), 4 TA, 28 remates, 9 a portería. **Paraguay gana en penaltis.**

**Balance:**
✅ Cubas TA anytime — confirmada en 2ªp.
✅ Wirtz asistencia anytime — confirmada, asistió el gol de Havertz en 2ªp.
✅ Over 4.5 corners GER equipo — 16 corners GER en el partido, ya cumplido solo con la 1ªp (6).
❌ R4 hándicap GER −0.5 — GER no ganó en 90' (1-1). Primera ruptura de la racha de resultado (12/13), aunque "no pierde en juego" sigue 13/13.
❌ BTTS No — ambos equipos marcaron.
❌ Musiala anytime / R13 extendida GER — 0G, el gol de GER lo marcó Havertz. Racha R13 cae a 2/3.
❌ Under 9.5 corners / R38 — fallo catastrófico, 22 corners totales, 8 ya en la 1ªp.
❌ Under 3.5 TA — 4 TA confirmadas, refuerza R39.
❌ Over 1.5 goles GER — GER solo anotó 1 gol.
⚪ R6+R13 Undav trigger — GER nunca lideró el marcador (0-1 tras 1ªp, 1-1 tras 2ªp), correctamente no apostado.

**Claves Rev36:**

- **R4 redefinida — penaltis fuera del alcance de la racha de favorito:** GER no perdió en tiempo de juego (1-1 en 120'), pero el modelo predecía "ganador del partido" incluyendo penaltis. La racha de 12/12 "dirección 90'" se mantiene como concepto pero el resultado final cae a 12/13. Tratar mercados de hándicap/1X2 en KO como apuestas que NO cubren el riesgo de shootout; considerar cobertura (lay/hedge) o reducir stake en partidos donde el rival tiene perfil de bloque ultra-defensivo + buen portero.
- **R38 degradada — bloque bajo no garantiza menos corners en partidos largos:** A diferencia de CAN-RSA (90', 5 corners totales), GER-PAR llegó a 120' con corners disparados desde la 1ªp (8 corners en 45 minutos, 6 de GER). La presión sostenida de 120 minutos contra un bloque bajo genera muchos más córners concedidos por desgaste/despeje que en un partido resuelto en 90'. R38 pasa a confianza BAJA, no aplicar de forma automática.
- **R40 nueva — el arquetipo MC/extremo creativo puede activarse en el desvalido:** Cuando el favorito no logra que su MC/AM estrella anote en partido cerrado (R13 fallida — Musiala 0G), el mismo arquetipo de "creador que aparece en el momento clave" se manifestó en el jugador diferencial del equipo inferior (Enciso para PAR, autor del gol de 1ªp).
- **R39 reforzada — la prórroga es multiplicador de TA:** Incluso con un árbitro de base muy conservadora (Jayed: 0 TA en su partido anterior y también 0 TA en 1ªp+2ªp de este partido), las 3 TA de la prórroga aparecieron de golpe en la 2ª parte del tiempo extra. Tratar siempre la prórroga como régimen distinto para proyecciones de tarjetas — el riesgo de tarjeta se concentra en los minutos finales de la prórroga, no se reparte uniformemente.
- **Lectura táctica:** GER dominó la posesión (436 pases en 1ªp vs 121 de PAR en toda la prórroga combinada) pero PAR golpeó primero por contragolpe (Enciso) y aguantó hasta el empate de Havertz en 2ªp. El partido más reñido del torneo en cuanto a penaltis: ninguno de los dos equipos lideró por más de un gol en ningún momento.

-----

## RESUMEN DE SESGOS ACTIVOS

|Sesgo                                                                                     |Descripción                                                                              |Regla correctora                                                                                            |
|------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------|
|**NUEVO R40** MC/extremo creativo del desvalido anota cuando R13 del favorito falla       |Enciso (PAR) anotó en 1ªp; Musiala (GER, R13) falló, gol GER lo marcó Havertz (CF)        |Vigilar al jugador diferencial único del equipo inferior como candidato a gol en partido cerrado            |
|**DEGRADADA R38** Bloque ≤30% posesión NO garantiza menos corners en partidos a prórroga  |GER-PAR: 22 corners totales (16 GER), 8 ya en 1ªp pese a 28% posesión PAR. Contraste con CAN-RSA (90', 5c)|No aplicar R38 de forma automática; solo en partidos resueltos en 90' sin indicios de ir a prórroga         |
|**REDEFINIDA R4** Racha favorito 12/13 en resultado final; 13/13 en "no pierde en juego"  |GER 1-1 PAR (120'), pierde en penaltis tras no perder en juego                          |Separar mercado "ganador del partido" (incluye penaltis) de "resultado 90'/120'"; cubrir riesgo de shootout |
|**REFORZADO R39** Prórroga como multiplicador adicional de TA                             |Jayed (0 TA en J1 y en 1ªp+2ªp de este partido) terminó con 4 TA, 3 de ellas en la 2ª prórroga|En cualquier KO que pueda llegar a prórroga, no fiarse de la base baja del árbitro para Under TA            |
|**CONFIRMADO R12** Skip titular estrella anytime cuota corta                              |Musiala 0G se suma a Vinícius, Jackson, David — patrón amplísimo                        |R12: skip sistemático para delanteros/AM titulares estrella vs bloques organizados, incluso cuotas moderadas|
|**CONFIRMADO R6+R13 Tipo D** Trigger no activo = no apostar                               |GER nunca lideró ≤60' → Undav correctamente no apostado. Racha 14/14 limpia              |Kelly ×0.25 solo si trigger confirmado en vivo                                                              |
