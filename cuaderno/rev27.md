# Cuaderno de Aprendizaje — Mundial 2026

## Revisión 27 | Actualizado: 26 Jun 2026

-----

## ESTADO GENERAL DEL MODELO

**Actualizado tras partido 26 (Túnez 1-3 Países Bajos, J3 Grupo F, 26 Jun 2026)**

- **1X2 / NED −1.5: ✅ ACIERTO** — NED ganó 3-1. Hándicap −1.5 cubierto. R4 asimetría extrema confirmada. NED 18/26 (69%) dirección.
- **Over 2.5 / Over 3.5: ✅ ACIERTO** — 4 goles reales. xG real: TUN 0.62 / NED 1.85 = 2.47 total. Goles reales superaron xG (conversión eficiente NED). Over 3.5 acertó justo (4 goles). Over 4.5 ❌ (4 no llega a 5).
- **BTTS No (R1): ❌ FALLO** — Mastouri (DEL TUN, SUP 2ªp) marcó el 1-3. xG TUN real 0.62 > umbral R1 (0.55 proyectado, 0.80 umbral nominal). **R1 falló porque el xG real superó proyección.** El error fue subestimar xG TUN: con 10 tiros, 4 paradas Verbruggen (3+1), el equipo inferior generó más de lo esperado. **R31 NUEVA:** cuando rival inferior tiene ≥10 tiros totales proyectados vs rival que gestiona con XI rotado en 2ªp, elevar xG rival +0.20 y reconsiderar BTTS No.
- **Over 7.5 corners: ✅ ACIERTO** — 10 corners totales (TUN 4 / NED 6). Racha Over 7.5: 11/13.
- **Under 2.5 amarillas (R10 debut): ✅ ACIERTO HISTÓRICO** — **0 tarjetas en 90 minutos**. Katia García debut WC como central = 0 TA en partido fluido. Racha debut árbitro Under 2.5: **5/5 (100%)**. R10 rev27: debut WC como central en partido no urgido = base 0.5–1.5 amarillas (no 2.0–2.5 como se pensaba). El mercado Under 2.5 era EV+ enorme incluso a cuota 1.60.
- **Dumfries asistencia (R7): ✅ ACIERTO** — Dumfries: 1A confirmada, 4 centros, 2 SOnT, 1 corner. R7 racha participación G+A: **10/11**. Selección de mayor EV+ del análisis; acierto confirmado.
- **R6+R13 suplente NED: ❌ FALLO PARCIAL** — Summerville, Depay, Lang = 0G 0A. Van Hecke (CB titular, no suplente) marcó el 3-1 en 2ªp. El patrón goleó pero en CB titular, no en Tipo D. **R13 rev27:** en partidos de gestión (NED con 2+ goles de ventaja en 2ªp), el gol “inesperado” puede venir de un CB que sube a corner, no de un suplente ofensivo. Distribuir siempre un candidato CB/set-piece.
- **NED −2.5: ❌ FALLO** — NED ganó 3-1, no cubre −2.5. Moda 4-0 no se dio; TUN marcó con Mastouri reduciendo el diferencial. Nota: el modelo sobreestimó la goleada; el xG real NED fue solo 1.85 (muy inferior a los 3.60 proyectados). **Diagnóstico:** NED no presionó al máximo desde el inicio (partido ya controlado desde el 2-0 Brobbey + Van Hecke).

**DIAGNÓSTICO CENTRAL REV27:** El modelo acertó la dirección (NED −1.5, Over 3.5, corners, amarillas, Dumfries asist.) pero sobreestimó el xG de NED (3.60 vs 1.85 real) y subestimó el xG de TUN (0.55 vs 0.62 real, con 10 tiros y 4 paradas). TUN generó más de lo esperado gracias a 10 tiros (Sofascore) y un suplente goleador inesperado (Mastouri 2ªp). La BTTS No falló por este motivo combinado. R10 debut WC confirma que 0 amarillas es posible y la base debe reducirse a 0.5–1.5 en debut.

-----

## REGLAS OPERATIVAS CONSOLIDADAS

### R1 — BTTS No con xG rival <0.80

**Racha: 15/21 (condicionada) | Confianza: MEDIA**
Rev27: TUN 0.62 xG real → marcó 1 gol (Mastouri 2ªp). R1 falla cuando el rival inferior lanza ≥10 tiros (mayor volumen reduce fiabilidad del umbral). R31 nueva: ajustar xG rival +0.20 si ≥10 tiros proyectados en partido de gestión del favorito.

### R2 — Under 2.5 vs bloque organizado real

**Racha: 10/13 ⚠ | Confianza: MEDIA (condicionada)**
Rev27: 4 goles reales. R2 no aplicaba (no había bloque real). Sin cambio en racha de R2.

### R4 / R16 — Over 2.5 asimetría o urgencia

**Racha R4 (asimetría extrema): 6/6 ✅ | Confianza: MUY ALTA**
Rev27: 4 goles totales. Over 2.5 y Over 3.5 confirmados. Sin embargo, el marcador proyectado (modal 4-0) no se dio; TUN marcó. R4 es fiable para Over 2.5/3.5 pero no garantiza BTTS No ni marcador de goleada limpia.

### R5 — Corners por urgencia

**Racha Over 7.5: 11/13 | Confianza: ALTA**
Rev27: 10 corners totales (TUN 4, NED 6). Over 7.5 acertó. Patrón: NED dominó posesión y TUN generó corners en ataques esporádicos. Sin cambios estructurales.

### R6 — Patrón suplente goleador

**Racha condicionada: 10/12 | Confianza: ALTA (revisada)**
Rev27: Suplentes NED (Summerville, Depay, Lang, Kluivert, Koopmeiners) = 0G. Van Hecke (titular) marcó el 3-1. **R13 rev27 actualizada:** en partidos de gestión ≥2-0, el gol de “consolidación” puede venir de un CB que sube a corner, no de un atacante suplente. Incluir siempre un CB en la distribución cuando NED gana con holgura y hay corners disponibles.

### R7 — Patrón lateral/extremo ofensivo

**Racha participación G+A: 10/11 | Confianza: ALTA**
Rev27: Dumfries 1A confirmada + 4 centros + 2 SOnT. Racha extendida a 10/11. La prop de asistencia Dumfries fue la selección de mayor EV+ del partido y acertó. R7 es la regla de mayor rendimiento sostenido del modelo.

### R10 — Árbitro debut WC

**Racha Under 2.5 amarillas en debut WC: 5/5 (100%) ✅ | Confianza: MUY ALTA → MÁXIMA**
Rev27: Katia García debut WC central = **0 tarjetas**. La más baja de toda la historia del modelo. R10 rev27: debut WC como central en partido fluido = base **0.5–1.5** (bajada desde 2.0–2.5). Under 2.5 amarillas es el mercado más fiable del modelo. Under 1.5 también viable en debut WC + partido sin tensión.

### R13 — Distribución suplente goleador

**Racha: 9/11 | Confianza: ALTA (revisada)**
Rev27: Van Hecke (CB titular) marcó el 3-1. Suplentes ofensivos NED = 0G. **R13 rev27:** añadir candidato CB/set-piece cuando el favorito gestiona con 2+ goles de ventaja y hay corners acumulados. No limitarse a delanteros/extremos suplentes.

### R23 — Rotaciones masivas del favorito

**Rev27:** NED rotó parcialmente (Aké por Van de Ven, otros mínimos). No se aplicó. Sin cambios.

### R28 — Corners bajos con xG combinado bajo

**Rev27:** xG combinado proyectado fue 4.15, real 2.47. 10 corners totales → Over 7.5 acertó. R28 no aplicaba. Sin cambios.

### R29 — Urgencia real vs aparente

**Rev27:** NED tuvo urgencia real de goles para superar a JPN en diferencia pero no la materializó completamente (1.85 xG real vs 3.60 proyectado). Sin cambios.

### R30 — Partido muerto + rival con bloqueo goleador + favorito rota = Over 2.5

**Sin cambios.** No aplicaba en este partido (NED no rotó masivamente).

### R31 — NUEVA rev27: xG rival subestimado en partido de gestión

Cuando el favorito gestiona con 2+ goles de ventaja en 2ªp Y el rival inferior sigue lanzando ≥10 tiros totales: elevar xG rival +0.20 y reconsiderar BTTS No. TUN: 10 tiros, 4 paradas Verbruggen → 0.62 xG real vs 0.55 proyectado. En partidos de gestión el rival “libre” puede generar más de lo esperado por menor presión defensiva del líder.

-----

## GESTIÓN DE BANKROLL (sin cambios estructurales)

|Tier     |Criterio                         |Fracción Kelly|Stake típico    |
|---------|---------------------------------|--------------|----------------|
|★★★ Elite|Racha ≥8/10 + criterios objetivos|Kelly ×0.25   |~2–5% bankroll  |
|★★★ Alta |Racha ≥6/8 + patrón sólido       |Kelly ×0.20   |~1.5–4% bankroll|
|★★ Media |Racha ≥5/8 o patrón emergente    |Kelly ×0.12   |~1–2.5% bankroll|
|★ Baja   |Alta varianza o prop sin ventaja |Kelly ×0.05   |<1% bankroll    |
|🚫 Skip   |Tipo A cuota corta + EV <+5%     |No apostar    |—               |

**ALERTA REV27 — FASE ELIMINATORIA EN CURSO:** Priorizar: Under amarillas (debut árbitros 5/5), R7 lateral ofensivo, R6+R13 suplente (incluir CB en distribución), Over 2.5/3.5 en asimetría extrema. Reducir exposición en BTTS No cuando xG rival proyectado >0.50 en partido de gestión.

-----

## TRACKING DE ROI ACUMULADO

|Mercado                         |Aciertos/Total|ROI est.|Tendencia                                                        |
|--------------------------------|--------------|--------|-----------------------------------------------------------------|
|Suplente goleador esencia R6    |10/12         |++      |⚠ Van Hecke CB (no Tipo D). Incluir CB en distribución.          |
|R13 distribución suplentes      |9/11          |++      |→ Fallo en NED: los Tipo D no marcaron. CB titular marcó.        |
|1X2 / Hándicap −1.5             |18/26 / 6/6   |+/−/+++ |✅ NED −1.5 acertado. R4 asimetría: 6/6. 1X2 69%.                 |
|Over 7.5 corners                |11/13         |++      |✅ 10 corners. TUN 4 + NED 6. Racha recuperada.                   |
|Lateral/extremo R7 participación|10/11         |+++     |✅ Dumfries 1A. Mejor selección del partido. EV+40% cumplido.     |
|BTTS No (R1) condicionada       |15/21         |+/−     |↓ TUN marcó (Mastouri 2ªp). R31 nueva: gestión NED = rival libre.|
|Under 2.5 goles (R2)            |10/13         |+/−     |→ No aplicaba. 4 goles (Over 3.5 acertado).                      |
|Under 2.5 amarillas R10 debut   |5/5           |+++     |✅✅✅ Katia García 0 TA. Racha perfecta. Base 0.5–1.5 debut WC.    |
|Props Tipo A (titular)          |~8/32         |−       |→ Gakpo 0G 1SOnT. R12 vigente. Brobbey 1G (titular, no prop).    |
|Over 3.5 goles asimetría extrema|3/4           |++      |✅ 4 goles. Over 3.5 acertado. Alta confianza en R4.              |

-----

## REGISTRO DE ÁRBITROS WC26 (rev27)

|Árbitro              |País   |J1|J2|J3   |Media WC26|Perfil WC26                                                          |Base próx.           |
|---------------------|-------|--|--|-----|----------|---------------------------------------------------------------------|---------------------|
|Danny Makkelie       |NED    |6 |3 |—    |4.5       |Activo/físico                                                        |4.0–5.0              |
|Michael Oliver       |ING    |3 |3 |—    |3.0       |Normal                                                               |3.0–3.5              |
|Wilton Sampaio       |BRA    |0 |— |—    |0.0       |Ultra-fluido                                                         |1.0–1.5              |
|Félix Fischer        |ALE    |1 |— |—    |1.0       |Fluido                                                               |1.5–2.0              |
|Pierre Atcho         |GAB    |0 |2 |—    |1.0       |Conservador                                                          |1.5–2.0              |
|César Ramos          |MEX    |1 |3 |—    |2.0       |Bimodal                                                              |2.0–2.5              |
|Said Martínez        |HON    |2 |— |—    |2.0       |Conservador                                                          |2.0–2.5              |
|Ramón Abatti         |BRA    |4 |3 |—    |3.5       |Moderado                                                             |3.0–4.0              |
|Facundo Tello        |ARG    |5 |2 |—    |3.5       |Físico MC                                                            |2.5–3.5              |
|Yael Falcón Pérez    |ARG    |1 |1 |—    |1.0       |Ultra-conservador                                                    |1.0–1.5              |
|Jesús Valenzuela     |VEN    |1 |2 |—    |1.5       |Conservador estable                                                  |1.5–2.0              |
|Tori Penso           |USA    |2 |4 |—    |3.0       |Bimodal                                                              |2.0–4.0 ctx          |
|Glenn Nyberg         |SUE    |3 |— |—    |3.0       |Moderado debut                                                       |2.5–3.0 ctx          |
|Iván Barton          |SLV    |3 |— |—    |3.0       |Debut WC26. 3 amar.                                                  |2.5–3.0 ctx          |
|Clément Turpin       |FRA    |~4|3 |—    |~3.5      |Activo                                                               |3.5–4.0 ctx          |
|Mustapha Ghorbal     |ALG    |— |— |1    |1.0       |Debut WC26. TUR-USA = 1 TA. Conservador.                             |2.0–2.5 ctx elim.    |
|**Katia I. García**  |**MEX**|— |— |**0**|**0.0**   |**Debut WC26 central. TUN-NED = 0 TA. Ultra-conservadora en fluido.**|**1.0–2.0 ctx elim.**|
|Víctor Gomes         |RSA    |— |— |—    |sin datos |—                                                                    |2.0–2.5 (debut)      |
|Aliyar Aghayev       |AZE    |— |— |—    |sin datos |—                                                                    |2.0–2.5 (debut)      |
|Ismail Elfath        |USA    |— |— |—    |sin datos |—                                                                    |2.0–2.5 (debut)      |
|Daniele Orsato       |ITA    |— |— |—    |sin datos |—                                                                    |2.0–2.5 (debut)      |
|François Letexier    |FRA    |— |— |—    |sin datos |—                                                                    |2.0–2.5 (debut)      |
|Slavko Vinčić        |SVN    |— |— |—    |sin datos |—                                                                    |2.0–2.5 (debut)      |
|Daniel Siebert       |ALE    |— |— |—    |sin datos |—                                                                    |2.0–2.5 (debut)      |
|Felix Zwayer         |ALE    |— |— |—    |sin datos |—                                                                    |2.0–2.5 (debut)      |
|Marco Guida          |ITA    |— |— |—    |sin datos |—                                                                    |2.0–2.5 (debut)      |
|Rohit Saggi          |NOR    |— |— |—    |sin datos |—                                                                    |2.0–2.5 (debut)      |
|Piero Maza           |CHI    |— |— |—    |sin datos |—                                                                    |2.0–2.5 (debut)      |
|Anthony Taylor       |ING    |— |— |—    |sin datos |—                                                                    |2.0–2.5 (debut)      |
|Szymon Marciniak     |POL    |— |— |—    |sin datos |—                                                                    |2.0–2.5 (debut)      |
|Bakary Gassama       |GAM    |— |— |—    |sin datos |—                                                                    |2.0–2.5 (debut)      |
|Janny Sikazwe        |ZAM    |— |— |—    |sin datos |—                                                                    |2.0–2.5 (debut)      |
|Abdulrahman Al-Jassim|QAT    |— |— |—    |sin datos |—                                                                    |2.0–2.5 (debut)      |


> **García rev27:** Debut WC26 central TUN-NED = 0 TA total. La cifra más baja de cualquier árbitro en WC26. Partido fluido, sin urgencia, goleada cómoda → 0 tarjetas. Confirma R10 rev27: base debut WC central en partido no tensionado = 0.5–1.5. Si la designan en eliminatorias (tensión alta), elevar base a 2.5–3.5.

-----

## MERCADOS DE TIEMPO PARCIAL

**MP-1 — Suplente gol/asist 2H cuando partido ≤1 gol:** Rev27: Suplentes NED = 0G. Van Hecke (titular CB) marcó el 3-1 en 2ªp. Racha 10/12. Lección: incluir CB titular en candidatos de set-piece cuando el favorito gestiona.
**MP-6 — Corners Over X.5 2ªp equipo persiguiendo:** TUN generó 4 corners en su búsqueda del gol. Patrón confirmado: equipo que intenta remontar acumula corners.

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
**P14** PAN 0-1 CRO: ✅ 1X2, BTTS No (11/11), Under 2.5 (7/7), Over 7.5c. ❌ Modrić asist. R13: Budimir (SUP).
**P15** MAR 5-1 HAI: ✅ 1X2, Over 2.5/3.5, R6 (6/6), R7 Hakimi (4/4), R13. ❌ BTTS No, Under 9.5c. Rev16.
**P16** SUI 2-1 CAN: ✅ Over 7.5c, Over 2.5 amar., BTTS Sí, R6. ❌ Doble oportunidad CAN/X. R15 activa.
**P17** RSA 1-0 KOR: ✅ BTTS No (12/13), Under 2.5 (8/8), RSA +1.5, Over 8.5c, R6 débil. ❌ 1X2 KOR. Tello conservador.
**P18** CZE 0-3 MEX: ✅ BTTS No, Under 2.5 amar., Fidalgo, SUP ×2, Sánchez asist. (R7 5/5), Under 9.5c. ❌ Under 2.5 goles. R17 activada.
**P19** SCO 0-3 BRA: ✅ 1X2, BTTS No, Over 7.5c, Over 2.5 amar., Bruno G. asist.×2, Rayan R7 (6/6), BRA −1.5. ❌ Paquetá. MP-6: SCO 7c en 2ªp.

### Partido 20 — Bosnia vs Qatar | 25 Jun 2026 | J3 Grupo B (comprimido)

**Real:** BIH 3-1 QAT. xG: BIH 0.68/QAT 0.77. 10c. 2 amar. Alajbegović 1G+1A (R7 7/7). Al Haydos 1G (R1 fallo 2/16). Mahmić SUP (R13 5/5). | ✅ 1X2, Over 2.5 goles, Under 2.5 amar., Over 7.5c, R6+R13, R7. ❌ BTTS No (R21 nueva), Demirović anytime, Over 9.5c. | Claves: R21 urgencia bilateral supera xG threshold. Urgencia aquí sí era bilateral real.

### Partido 21 — Ecuador vs Alemania | 25 Jun 2026 | J3 Grupo E (comprimido)

**Real:** ECU 2-1 GER. HT 1-1. Angulo (EXT I) + Plata (EXT D). Sané 1G GER. 5 corners. 4 amarillas. Rodríguez (SUP ECU) asistió 2-1. | ✅ R7 Angulo+Plata (8/8), R20, R13/R6 Rodríguez. ❌ 1X2 GER, BTTS No, Over 7.5c (R22 nueva), Under 2.5 amar., Undav (SUP sin partido vivo). | Claves: R22 goles 1ªp suprimen corners, R23 rotaciones ≥7 favorito.

### Partido 22 — Costa de Marfil vs Curazao | 25 Jun 2026 | J3 Grupo E (comprimido)

**Real:** CIV 2-0 CUW. xG: CUW 0.50 / CIV 1.31. 10c. 3 amar. Pépé (SUP ×2). Yan Diomandé+Sangaré 1A c/u. Amad Diallo 0G 0SOnT. Room 3 paradas. | ✅ 1X2 CIV, Under 9.5c, R6/R13 Pépé (11/11). ❌ Over 2.5 goles (R24: portero élite), R7 (Amad 0G), Under 2.5 amar., SKIP Tipo A. | Claves: R24 portero élite −10pp, R25 Tipo A suplente vs rival muy inferior.

### Partido 23 — Japón vs Suecia | 26 Jun 2026 | J3 Grupo F (comprimido)

**Real:** JPN 1-1 SWE. HT 0-0. Maeda (SUP JPN ~60’) 1-0. Elanga (SWE winger ~78’) 1-1. xG: JPN 1.21/SWE 0.64. 10c. 3 amar. | ✅ JPN +0.5 HA, BTTS Sí, Over 7.5c, Under 3.5 amar., R6/R13 Maeda (12/12), R7 Doan G+A (8/8). ❌ Over 2.5 goles, Ayari 0G, Isak 0A, Kamada 0G. | Claves: R26 urgencia no garantiza xG vs rival posesional, R27 Tipo A asistidor cuando Tipo C finaliza.

### Partido 24 — Paraguay 0-0 Australia | 26 Jun 2026 | J3 Grupo D (comprimido)

**Real:** PAR 0-0 AUS. xG: PAR 0.25/AUS 0.57. 4 corners. 3 amar. Turpin J2 WC26. Beach 2 paradas. | ✅ Under 3.5 amar. ❌ Over 7.5c (catastrófico: 4 corners), PAR victoria, Over 2.5 goles, Enciso asist., R6 Mauricio (0 goles). | Claves: R29 urgencia aparente vs real (AUS solo necesitaba empatar), R28 xG combinado ≤1.50+bloque bilateral = muy pocos corners.

### Partido 25 — Türkiye 3-2 USA | 26 Jun 2026 | J3 Grupo D (comprimido)

**Real:** TUR 3-2 USA. xG: TUR 3.21 / USA 2.01. 11c (TUR 2/USA 9). 1 TA (USA). Ghorbal debut WC. B.A.Yılmaz 1G+1A, Güler 1G, Ayhan 1G (SUP TUR), Trusty+Berhalter (USA). Pulisic 3 SOnT 0G. | ✅ Over 7.5c, Under 2.5 amar. (4/4), R6+R13 Ayhan TUR. ❌ Under 2.5 goles (5 reales), Victoria USA, G.Reyna 0G, T.Weah 0G. | Claves: R30 nueva (partido muerto + rival bloqueo goleador + rotación ≥8 favorito = Over), R23 revisada (≥9 rotaciones → eliminar ventaja real), R7/R13 proyectar en AMBOS equipos.

### Partido 26 — Túnez 1-3 Países Bajos | 26 Jun 2026 | J3 Grupo F

**Predicción:** NED 79% / X 14% / TUN 7%. Over 3.5 goles ★★★. NED −1.5 ★★★. Dumfries asistencia ★★★. BTTS No ★★. Over 7.5 corners ★★. Under 2.5 amar. ★★. Árbitro: Katia García debut WC central.

**Real:** TUN 1-3 NED. xG: TUN 0.62 / NED 1.85. Posesión: TUN 29% / NED 71%. Corners: TUN 4 / NED 6 = 10 total. Tarjetas: 0 TA total. Remates: TUN 10 / NED 20. SOnT: TUN 4 / NED 7. Paradas: Verbruggen 3 (1ªp) + 1 (2ªp). Dahmen 2 (1ªp) + 2 (2ªp) = 4. Goleadores: Brobbey 1G (1ªp), Van Hecke 1G (CB, 2ªp). TUN: Mastouri 1G (SUP, 2ªp). Dumfries: 1A + 4 centros + 2 SOnT + 1 corner. Hannibal: 1A.

**Balance:**
✅ **NED −1.5 hándicap** (3-1, NED gana por 2). ✅ **Over 2.5 goles** (4 goles). ✅ **Over 3.5 goles** (4 goles). ✅ **Over 7.5 corners** (10 totales). ✅ **Under 2.5 amarillas** (0 TA — Katia García, récord mínimo del modelo. Racha debut árbitro: 5/5). ✅ **Dumfries asistencia R7** (1A confirmada. Racha R7: 10/11). ✅ **1X2 NED gana**.
❌ **BTTS No** (Mastouri 2ªp. TUN xG real 0.62 > 0.55 proyectado. R31 nueva). ❌ **NED −2.5** (3-1, no cubre). ❌ **Over 4.5 goles** (4 goles). ❌ **Suplentes NED anytime** (Summerville, Depay 0G 0A). ❌ **Gakpo anytime** (0G 1SOnT — R12 Tipo A confirmada).

**Claves rev27:**

- **R31 NUEVA:** Cuando el favorito gestiona con ≥2-0 en 2ªp Y el rival inferior lanza ≥10 tiros, elevar xG rival +0.20 y reconsiderar BTTS No. TUN lanzó 10 tiros totales; Mastouri entró como suplente y anotó.
- **R10 CONFIRMACIÓN HISTÓRICA:** Katia García 0 TA total — debut WC central en partido fluido = 0.5–1.5 amarillas proyectadas. Under 1.5 amarillas en estos contextos es selección de valor extremo.
- **R13 REVISADA (set-piece CB):** Van Hecke (CB) marcó el 3-1 en corner. Los Tipo D ofensivos (Summerville, Depay) = 0 impacto. En gestión cómoda del favorito, la consolación puede venir de un CB que sube a corner. Añadir CB a la distribución R13.
- **R7 CONFIRMADA 10/11:** Dumfries 1A + 4 centros. La prop de asistencia lateral ofensivo sigue siendo la de mayor EV+ en partidos donde el favorito domina con amplitud. Mantener como selección prioritaria siempre que R7 aplique.
- **NED xG real 1.85 vs 3.60 proyectado:** NED gestionó (no presionó al máximo una vez con 2-0). El modelo sobreestimó la urgencia de NED por el liderato; la ventaja fue suficiente relativamente pronto.

-----

## RESUMEN DE SESGOS ACTIVOS

|Sesgo                                              |Descripción                                                        |Regla correctora                                                          |
|---------------------------------------------------|-------------------------------------------------------------------|--------------------------------------------------------------------------|
|**NUEVO** Partido gestión = rival libre para tiros |Con 2+ goles de ventaja el favorito gestiona → rival lanza más     |R31: si rival tiene ≥10 tiros proyectados en gestión, xG rival +0.20      |
|**NUEVO** R13: CB sube a corner = goleador oculto  |Van Hecke 1G en corner gestionado. Tipo D ofensivo no siempre marca|R13 rev27: incluir CB en distribución cuando corners acumulados ≥5        |
|**REFORZADO** Under amarillas debut WC             |5/5 histórico. Katia García 0 TA. Base reducida a 0.5–1.5          |R10 rev27: debut WC central fluido = Under 1.5 selección prioritaria      |
|**REFORZADO** R7 lateral ofensivo                  |Dumfries 1A. Racha 10/11. Mejor regla del modelo por EV            |R7: siempre evaluar lateral ofensivo en partidos NED/favorito con amplitud|
|Partido muerto = abierto si rival liberado         |Sin urgencia + rival bloqueo goleador ≥2p + favorito rota ≥8       |R30: proyectar Over 2.5 y BTTS como base en este contexto específico      |
|R23 insuficiente ≥9 rotaciones                     |≥9 rotaciones favorito = XI sin cohesión, ventaja eliminada        |R23 rev26: ≥9 rotaciones → reconsiderar dirección completamente           |
|R7/R13 solo proyectado en equipo favorito          |Los patrones aplican a CUALQUIER equipo, no solo al proyectado     |R7+R13: evaluar candidatos en AMBOS equipos antes de apostar              |
|Urgencia aparente vs urgencia real                 |Rival con incentivo para empate NO genera urgencia bilateral real  |R29: verificar si rival NECESITA ganar vs NECESITA NO PERDER              |
|Corners bajos en bloque bilateral                  |xG combinado ≤1.50 + bloque bilateral = muy pocos corners          |R28: Over 7.5c requiere xG combinado ≥2.00 o urgencia que fuerce ataques  |
|R6 sin goles en el partido                         |Suplente no puede marcar en partido que termina 0-0                |R6 refinada: solo activar si hay ≥1 gol antes del 60’                     |
|Over 2.5 con urgencia unilateral + rival posesional|Urgencia no eleva xG cuando rival controla posesión 50%+           |R26: reducir xG urgido −30% si rival posesional                           |
|R2 con rival liberado psicológicamente             |Under 2.5 falla si rival tiene bloqueo goleador + favorito rota    |R30: excluir R2 en este contexto específico                               |
|Props Tipo A titular sobrevaluados                 |El mercado los sobrevalora casi siempre                            |R12: −8pp automático. EXCEPTO suplente vs rival muy inferior (R25)        |
|xG urgido inflado vs rival posesional              |Urgencia ≠ xG cuando rival controla el partido                     |R26: −30% xG urgido si rival posesional                                   |
|Árbitro debut WC: contexto sin urgencia = mínimo   |Base 0.5–1.5 en debut WC central + partido fluido                  |R10 rev27: debut + partido sin tensión = Under 1.5 selección prioritaria  |
|Rotaciones masivas favorito                        |≥7 rotaciones = descoordinación. ≥9 = ventaja eliminada            |R23 rev26: ≥9 rotaciones → reconsiderar dirección completamente           |
|Suplente goleador: jugador exacto                  |Con 2+ suplentes D, el menos obvio suele marcar                    |R13 rev27: distribuir siempre, incluir CB titular cuando hay corners      |
|BTTS No con rival en gestión lanzando muchos tiros |Favorito gestiona → rival libre genera más tiros de lo esperado    |R31 nueva: si rival lanza ≥10 tiros en partido gestión, xG rival +0.20    |