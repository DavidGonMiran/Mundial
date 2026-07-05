# Cuaderno de Aprendizaje — Mundial 2026

## Revisión 29 | Actualizado: 27 Jun 2026

-----

## ESTADO GENERAL DEL MODELO

**Actualizado tras partido 28 (Cabo Verde 0-0 Arabia Saudita, J3 Grupo H, 27 Jun 2026)**

- **R21 (urgencia bilateral): ❌ FALLO CRÍTICO** — 0-0 en partido donde ambos equipos necesitaban ganar. Segundo fallo consecutivo de R21. CPV xG 1.39 con 15 tiros pero 0 goles. KSA xG 0.39 con 7 tiros. El partido no fue abierto: KSA se cerró con 29 entradas y especuló tácticamente hasta el final.
- **BTTS Sí (R21): ❌ FALLO** — KSA 0 goles. Arabia usó bloque ultra-defensivo con 29 entradas. La urgencia no generó apertura bilateral.
- **Over 2.5 goles: ❌ FALLO** — 0 goles totales. xG combinado real 1.78. CPV generó (xG 1.39) pero no convirtió. KSA bloqueó con éxito.
- **Over 7.5 corners: ❌ FALLO CRÍTICO** — Solo 6 corners totales (CPV 4 + KSA 2). Bloque ultra-defensivo KSA suprimió el juego dinámico. Tercer fallo en contexto urgencia + bloque (PAR-AUS: 4c, URU-ESP: 7c, CPV-KSA: 6c).
- **Over 2.5 amarillas: ✅ ACIERTO** — 4 tarjetas totales (CPV 1 + KSA 3). Matemáticamente correcto. Letexier mostró moderación pese a historial 4.2 TA/partido.
- **Garry Rodrigues asistencia anytime (R7): ❌ FALLO** — 0G 0A, xA real 0.01. Anulado por bloque KSA (29 entradas). R7 racha: **10/13 (condicionada)**.
- **Ryan Mendes asistencia anytime (R7): ❌ FALLO** — 0G 0A. Mismo patrón de bloqueo.
- **Hélio Varela gol anytime (R6+R13): sin trigger** — 0-0, Varela no entró. Racha sin cambio.
- **Goleador real: nadie** — 0-0. Monteiro fue el más peligroso en 2ªp (xG 0.64 acumulado). Al-Hamdan (SUP KSA, xG 0.14) fue la mayor amenaza saudita.
- **BTTS No / Under 2.5G (retroactivos): ✅** — R1 y R2 eran correctas. R21 las sobreescribió incorrectamente por segunda vez consecutiva.

**DIAGNÓSTICO CENTRAL REV29:** R21 ha fallado 2 veces consecutivas en condiciones distintas. La urgencia de ganar no garantiza apertura bilateral si el equipo urgido tiene incapacidad ofensiva sistémica o decide tácticamente especular con un bloque. **R33 NUEVA:** Cuando el urgido acumula xG ≤0.50/partido en torneo, modelar como bloqueador táctico incluso bajo urgencia. R1+R2 prioritarios sobre R21. Corners también afectados: urgencia no genera corners cuando rival planta bloque ultra-defensivo con ≥25 entradas.

-----

## REGLAS OPERATIVAS CONSOLIDADAS

### R1 — BTTS No con xG rival <0.80

**Racha: 16/23 | Confianza: MEDIA-ALTA**
Rev29: KSA xG real 0.39 — claramente bajo umbral. BTTS No era correcta (retroactivo). **R1 > R21 cuando urgido tiene xG histórico bajo en torneo Y ha demostrado incapacidad ofensiva.**

### R2 — Under 2.5 vs bloque organizado real

**Racha: 12/15 ✅ | Confianza: ALTA**
Rev29: 0 goles. R2 aplicaba perfectamente. El modelo ignoró R2 por R21. **R2 > R21 cuando el equipo de menor calidad tiene patrón bloqueador demostrado.**

### R4 / R16 — Over 2.5 asimetría o urgencia

**Racha R4 (asimetría extrema): 6/6 ✅ | Racha R16 urgencia bilateral: 3/7 ⚠ | Confianza: BAJA-MEDIA**
Rev29: R16 falló de nuevo. Urgencia bilateral no generó goles cuando el urgido es incapaz ofensivamente.

### R5 — Corners por urgencia

**Racha Over 7.5: 11/16 ⚠ | Confianza: MEDIA**
Rev29: 6 corners totales. Tercer fallo en bloque defensivo + urgencia. **R5 rev29: verificar tiros proyectados urgido ≥12 Y que rival no tenga perfil bloqueador (≥25 entradas).**

### R6 — Patrón suplente goleador

**Racha condicionada: 10/13 | Confianza: ALTA (revisada)**
Rev29: Varela no entró — sin trigger (0-0 sin gol antes del 60’). Sin cambio racha. R6 refinada vigente.

### R7 — Patrón lateral/extremo ofensivo

**Racha participación G+A: 10/13 ⚠ | Confianza: MEDIA (revisada)**
Rev29: Rodrigues 0G 0A (xA 0.01), Mendes 0G 0A. Doble fallo. **R7 rev29: verificar perfil defensivo rival (entradas) antes de activar prop Tipo C. Falla cuando rival planta ≥25 entradas.**

### R10 — Árbitro debut WC

**Racha Under 2.5 amarillas en debut WC: 5/5 (100%) ✅ | Confianza: MÁXIMA**
Sin cambios. Letexier no era debut — no aplica R10.

### R11 — Checklist favorito confianza 1X2

Sin cambios estructurales desde rev28.

### R12 — Tipo A titular cuota corta skip

**Rev29:** Al-Buraikan 0G 0A. R12 vigente y correcto.

### R13 — Distribución suplente goleador

**Racha: 9/12 | Confianza: ALTA (revisada)**
Rev29: Al-Hamdan (SUP KSA, xG 0.14) fue la mayor amenaza KSA pero no marcó. Sin cambio racha.

### R21 — Skip BTTS No si rival urgencia máxima

**Racha revisada ⚠⚠ | Confianza: BAJA (condicionada)**
Rev29: segundo fallo consecutivo. **R21 rev29: requiere que urgido tenga xG ≥1.00/partido en torneo Y defensa rival haya concedido goles. KSA tenía xG 0.04 vs ESP — nunca debió activarse.**

### R28 — Corners bajo xG combinado bajo

**Rev29:** xG combinado real 1.78 pero bloque KSA suprimió corners (6 total). **R28 rev29: añadir — si rival tiene perfil bloqueador ultra-defensivo (≥25 entradas en partidos previos), reducir proyección corners −30% independientemente del xG combinado.**

### R29 — Urgencia real vs aparente

**Rev29:** KSA tenía urgencia real pero eligió bloque táctico. R29 ampliada: verificar si equipo urgido tiene capacidad ofensiva para jugar abierto o si su patrón es sistémicamente defensivo.

### R32 — Defensa élite anula urgencia

**Sin cambios.** Patrón general confirmado.

### R33 — NUEVA rev29: Urgido sin capacidad ofensiva → bloquea pese a urgencia

Cuando el urgido acumula xG ≤0.50/partido en torneo Y su estilo histórico es reactivo/defensivo: modelar como bloqueador táctico incluso si necesita ganar. Activar R1+R2 prioritariamente sobre R21. Aplicar también a corners: urgencia ≠ corners cuando urgido tiene ≤7 tiros proyectados O rival planta ≥25 entradas. KSA: 0.04 xG vs ESP + 0.39 vs CPV — patrón sistémico confirmado.

-----

## GESTIÓN DE BANKROLL (sin cambios estructurales)

|Tier     |Criterio                         |Fracción Kelly|Stake típico    |
|---------|---------------------------------|--------------|----------------|
|★★★ Elite|Racha ≥8/10 + criterios objetivos|Kelly ×0.25   |~2–5% bankroll  |
|★★★ Alta |Racha ≥6/8 + patrón sólido       |Kelly ×0.20   |~1.5–4% bankroll|
|★★ Media |Racha ≥5/8 o patrón emergente    |Kelly ×0.12   |~1–2.5% bankroll|
|★ Baja   |Alta varianza o prop sin ventaja |Kelly ×0.05   |<1% bankroll    |
|🚫 Skip   |Tipo A cuota corta + EV <+5%     |No apostar    |—               |

**ALERTA REV29:** R21 en revisión crítica — reducir exposición en BTTS Sí y Over 2.5 cuando urgido tiene xG histórico bajo. R33 nueva previene activación de R21 sin verificar capacidad ofensiva real. Priorizar R1+R2 sobre R21 cuando urgido tiene patrón defensivo sistémico.

-----

## TRACKING DE ROI ACUMULADO

|Mercado                         |Aciertos/Total|ROI est.|Tendencia                                                                         |
|--------------------------------|--------------|--------|----------------------------------------------------------------------------------|
|Suplente goleador R6+R13        |10/13         |++      |→ Varela sin trigger (0-0). Sin cambio racha.                                     |
|R7 lateral/extremo participación|10/13         |+       |❌❌ Rodrigues+Mendes 0G0A. Bloque KSA (29 entradas) anuló completamente.           |
|1X2 / Hándicap                  |19/28         |+/−     |→ CPV no ganó. Victoria CPV no apostada como ★★★. Resultado neutro.               |
|Over 7.5 corners                |11/16         |+/−     |❌ 6 corners totales. Tercer fallo en bloque defensivo + urgencia.                 |
|BTTS Sí (R21)                   |1/3           |−−      |❌ KSA 0 goles. R21 falla cuando urgido es incapaz ofensivamente. Revisión crítica.|
|Over 2.5 goles (urgencia)       |3/7           |−       |❌ 0 goles. R33 nueva previene repetición.                                         |
|Under 2.5 goles (R2)            |12/15         |++      |✅ (retroactivo). R2 aplicaba — ignorada por R21.                                  |
|BTTS No (R1)                    |16/23         |+/−     |✅ (retroactivo). KSA xG 0.39, patrón bloqueador. R1 era correcta.                 |
|Over 2.5 amarillas              |acum. correcto|+       |✅ 4 total (CPV 1 + KSA 3). Letexier moderado en partido bloqueado.                |
|Props Tipo A titular            |~8/34         |−       |→ Al-Buraikan 0G 0A. R12 vigente.                                                 |
|Under 2.5 amarillas R10 debut   |5/5           |+++     |→ Sin debut en este partido. R10 no aplicó.                                       |

-----

## REGISTRO DE ÁRBITROS WC26 (rev29)

|Árbitro              |País   |J1   |J2|J3         |Media WC26|Perfil WC26                                                                                                           |Base próx.                           |
|---------------------|-------|-----|--|-----------|----------|----------------------------------------------------------------------------------------------------------------------|-------------------------------------|
|Danny Makkelie       |NED    |6    |3 |—          |4.5       |Activo/físico                                                                                                         |4.0–5.0                              |
|Michael Oliver       |ING    |3    |3 |—          |3.0       |Normal                                                                                                                |3.0–3.5                              |
|Wilton Sampaio       |BRA    |0    |— |—          |0.0       |Ultra-fluido                                                                                                          |1.0–1.5                              |
|Félix Fischer        |ALE    |1    |— |—          |1.0       |Fluido                                                                                                                |1.5–2.0                              |
|Pierre Atcho         |GAB    |0    |2 |—          |1.0       |Conservador                                                                                                           |1.5–2.0                              |
|César Ramos          |MEX    |1    |3 |—          |2.0       |Bimodal                                                                                                               |2.0–2.5                              |
|Said Martínez        |HON    |2    |— |—          |2.0       |Conservador                                                                                                           |2.0–2.5                              |
|Ramón Abatti         |BRA    |4    |3 |—          |3.5       |Moderado                                                                                                              |3.0–4.0                              |
|Facundo Tello        |ARG    |5    |2 |—          |3.5       |Físico MC                                                                                                             |2.5–3.5                              |
|Yael Falcón Pérez    |ARG    |1    |1 |—          |1.0       |Ultra-conservador                                                                                                     |1.0–1.5                              |
|Jesús Valenzuela     |VEN    |1    |2 |—          |1.5       |Conservador estable                                                                                                   |1.5–2.0                              |
|Tori Penso           |USA    |2    |4 |—          |3.0       |Bimodal                                                                                                               |2.0–4.0 ctx                          |
|Glenn Nyberg         |SUE    |3    |— |—          |3.0       |Moderado debut                                                                                                        |2.5–3.0 ctx                          |
|Iván Barton          |SLV    |3    |— |—          |3.0       |Debut WC26. 3 amar.                                                                                                   |2.5–3.0 ctx                          |
|Clément Turpin       |FRA    |~4   |3 |—          |~3.5      |Activo                                                                                                                |3.5–4.0 ctx                          |
|Mustapha Ghorbal     |ALG    |—    |— |1          |1.0       |Debut WC26. TUR-USA = 1 TA. Conservador.                                                                              |2.0–2.5 ctx elim.                    |
|**Katia I. García**  |**MEX**|—    |— |**0**      |**0.0**   |**Debut WC26 central. TUN-NED = 0 TA. Ultra-conservadora en fluido.**                                                 |**1.0–2.0 ctx elim.**                |
|**Ismail Elfath**    |**USA**|**3**|— |**4+1TR**  |**~3.5**  |**J3 URU-ESP = 3TA+1TR URU+1TA ESP. Activo-físico en tensión.**                                                       |**3.5–4.5 ctx elim.**                |
|**François Letexier**|**FRA**|—    |— |**4 (1+3)**|**4.0**   |**J3 CPV-KSA = 1TA CPV + 3TA KSA. Moderado en partido bloqueado. Media histórica 4.2 pero contexto suprime tarjetas.**|**3.0–4.5 ctx (tensión dependiente)**|
|Víctor Gomes         |RSA    |—    |— |—          |sin datos |—                                                                                                                     |2.0–2.5 (debut)                      |
|Aliyar Aghayev       |AZE    |—    |— |—          |sin datos |—                                                                                                                     |2.0–2.5 (debut)                      |
|Daniele Orsato       |ITA    |—    |— |—          |sin datos |—                                                                                                                     |2.0–2.5 (debut)                      |
|Szymon Marciniak     |POL    |—    |— |—          |sin datos |—                                                                                                                     |2.0–2.5 (debut)                      |
|Anthony Taylor       |ING    |—    |— |—          |sin datos |—                                                                                                                     |2.0–2.5 (debut)                      |
|Piero Maza           |CHI    |—    |— |—          |sin datos |—                                                                                                                     |2.0–2.5 (debut)                      |
|Rohit Saggi          |NOR    |—    |— |—          |sin datos |—                                                                                                                     |2.0–2.5 (debut)                      |
|Daniel Siebert       |ALE    |—    |— |—          |sin datos |—                                                                                                                     |2.0–2.5 (debut)                      |
|Felix Zwayer         |ALE    |—    |— |—          |sin datos |—                                                                                                                     |2.0–2.5 (debut)                      |
|Marco Guida          |ITA    |—    |— |—          |sin datos |—                                                                                                                     |2.0–2.5 (debut)                      |
|Abdulrahman Al-Jassim|QAT    |—    |— |—          |sin datos |—                                                                                                                     |2.0–2.5 (debut)                      |


> **Letexier rev29:** CPV-KSA = 1TA CPV + 3TA KSA = 4 total. Moderado en partido que se bloqueó tácticamente. Su media histórica 4.2 no se activa automáticamente cuando el partido es de baja intensidad dinámica. Base próxima: 3.0–4.5 dependiente de tensión real del encuentro.

-----

## MERCADOS DE TIEMPO PARCIAL

**MP-1 — Suplente gol/asist 2H cuando partido ≤1 gol:** Rev29: Varela no entró — partido 0-0, Bubista no usó el trigger. Sin cambios en racha.
**MP-6 — Corners Over X.5 2ªp equipo persiguiendo:** No aplicó — KSA nunca presionó con volumen real. Solo 2 corners KSA en todo el partido. Bloque ultra-defensivo confirmado.

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

**P11** ARG 2-0 AUT: ✅ 1X2, BTTS No, Under 8.5c, moda 2-0, Over 2.5 amar. ❌ Over 2.5 goles. Messi R9 2/2. ARG=4 corners.
**P12** POR 4-0 UZB: ✅ 1X2, BTTS No, Over 2.5, Ronaldo, BFernandes asist., POR −1.5. ❌ Over 7.5c.
**P13** ING 0-0 GHA: ✅ BTTS No, Under 2.5, Over 8.5c. ❌ 1X2 ENG. R11 ignorada (4/5 cond.).
**P14** PAN 0-1 CRO: ✅ 1X2, BTTS No (11/11), Under 2.5 (7/7), Over 7.5c. ❌ Modrić asist.
**P15** MAR 5-1 HAI: ✅ 1X2, Over 2.5/3.5, R6 (6/6), R7 Hakimi (4/4), R13. ❌ BTTS No, Under 9.5c.
**P16** SUI 2-1 CAN: ✅ Over 7.5c, Over 2.5 amar., BTTS Sí, R6. ❌ Doble oportunidad CAN/X.
**P17** RSA 1-0 KOR: ✅ BTTS No (12/13), Under 2.5 (8/8), RSA +1.5, Over 8.5c, R6 débil. ❌ 1X2 KOR.
**P18** CZE 0-3 MEX: ✅ BTTS No, Under 2.5 amar., Fidalgo, SUP ×2, Sánchez asist. (R7 5/5), Under 9.5c. ❌ Under 2.5 goles.
**P19** SCO 0-3 BRA: ✅ 1X2, BTTS No, Over 7.5c, Over 2.5 amar., Bruno G. asist.×2, Rayan R7 (6/6), BRA −1.5. ❌ Paquetá.

### Partido 20 — Bosnia vs Qatar | 25 Jun 2026 | J3 Grupo B (comprimido)

**Real:** BIH 3-1 QAT. xG: BIH 0.68/QAT 0.77. 10c. 2 amar. Alajbegović 1G+1A (R7 7/7). Al Haydos 1G. Mahmić SUP (R13 5/5). | ✅ 1X2, Over 2.5, Under 2.5 amar., Over 7.5c, R6+R13, R7. ❌ BTTS No, Demirović anytime, Over 9.5c. | Claves: R21 urgencia bilateral real + ambos equipos con capacidad ofensiva = Over válido.

### Partido 21 — Ecuador vs Alemania | 25 Jun 2026 | J3 Grupo E (comprimido)

**Real:** ECU 2-1 GER. Angulo + Plata (EXT). Sané 1G GER. 5c. 4 amar. Rodríguez (SUP ECU) asistió 2-1. | ✅ R7 Angulo+Plata (8/8), R13/R6 Rodríguez. ❌ 1X2 GER, BTTS No, Over 7.5c, Undav. | Claves: R22 goles 1ªp suprimen corners, R23 rotaciones ≥7.

### Partido 22 — Costa de Marfil vs Curazao | 25 Jun 2026 | J3 Grupo E (comprimido)

**Real:** CIV 2-0 CUW. xG: CUW 0.50/CIV 1.31. 10c. 3 amar. Pépé (SUP ×2). Amad Diallo 0G. | ✅ 1X2 CIV, Under 9.5c, R6/R13 Pépé (11/11). ❌ Over 2.5 goles, R7 Amad 0G, Under 2.5 amar. | Claves: R24 portero élite −10pp, R25 Tipo A suplente vs rival muy inferior.

### Partido 23 — Japón vs Suecia | 26 Jun 2026 | J3 Grupo F (comprimido)

**Real:** JPN 1-1 SWE. Maeda (SUP ~60’) + Elanga (winger ~78’). xG: JPN 1.21/SWE 0.64. 10c. 3 amar. | ✅ JPN +0.5, BTTS Sí, Over 7.5c, Under 3.5 amar., R6/R13 Maeda (12/12), R7 Doan (8/8). ❌ Over 2.5 goles, Isak 0A, Kamada 0G.

### Partido 24 — Paraguay 0-0 Australia | 26 Jun 2026 | J3 Grupo D (comprimido)

**Real:** PAR 0-0 AUS. xG: PAR 0.25/AUS 0.57. 4c. 3 amar. Turpin J2 WC26. | ✅ Under 3.5 amar. ❌ Over 7.5c (4 corners), PAR victoria, Over 2.5 goles, R6 Mauricio 0G. | Claves: R29 urgencia aparente vs real (AUS solo necesitaba empatar), R28 xG combinado ≤1.50+bloque bilateral.

### Partido 25 — Türkiye 3-2 USA | 26 Jun 2026 | J3 Grupo D (comprimido)

**Real:** TUR 3-2 USA. xG: TUR 3.21/USA 2.01. 11c. 1 TA. B.A.Yılmaz 1G+1A, Güler 1G, Ayhan 1G (SUP TUR). Ghorbal debut WC. | ✅ Over 7.5c, Under 2.5 amar. (4/4 debut), R6+R13 Ayhan. ❌ Under 2.5 goles, Victoria USA, G.Reyna 0G. | Claves: R30 partido muerto+rotación ≥8, R23 revisada.

### Partido 26 — Túnez 1-3 Países Bajos | 26 Jun 2026 | J3 Grupo F (comprimido)

**Real:** TUN 1-3 NED. xG: TUN 0.62/NED 1.85. 10c. 0 TA. García debut WC central = 0 TA. Brobbey 1G + Van Hecke (CB) 1G. Mastouri (SUP TUN) 1G. Dumfries 1A. | ✅ NED −1.5, Over 2.5/3.5, Over 7.5c, Under 2.5 amar. (R10 5/5), Dumfries R7 (10/11). ❌ BTTS No, suplentes NED, Gakpo. | Claves: R31 gestión+rival ≥10 tiros, R13 CB titular en corner.

### Partido 27 — Uruguay 0-1 España | 27 Jun 2026 | J3 Grupo H (comprimido)

**Real:** URU 0-1 ESP. xG: URU 0.20/ESP 0.86. Posesión ESP 67%. Corners: URU 1/ESP 6 = 7 total. 3TA+1TR URU + 1TA ESP = 5 eventos. Baena 1G (Tipo C EXT IZQ), asistencia Llorente. Araújo/Yamal: 0G0A. Darwin Núñez 0 desde banca. | ✅ Victoria ESP (R11 4/5), Over 3.5 tarjetas (retroactivo), BTTS No (retroactivo), Under 2.5G (retroactivo). ❌ BTTS Sí (R21 sobreescribió R1/R2), Over 7.5c (7 totales — Under por mínimo), Over 2.5G, Araújo G+A, Yamal asist. | Claves: R32 defensa élite 0GC anula urgencia, R21 corregida (xG urgido ≥1.20 + rival con GC), R5 corregida (urgido ≤5 tiros = 1 corner).

-----

### Partido 28 — Cabo Verde 0-0 Arabia Saudita | 27 Jun 2026 | J3 Grupo H

**Predicción:** CPV 43% / X 26% / KSA 31%. BTTS Sí ★★★ (R21). Over 2.5G ★★★ (R21). Rodrigues asistencia ★★★ (R7). Over 7.5c ★★ (R5). Over 2.5 amarillas ★★ (Letexier).

**Real:** CPV 0-0 KSA. xG: CPV 1.39 / KSA 0.39. Posesión: CPV 51% / KSA 49%. Corners: CPV 4 / KSA 2 = 6 total. Tarjetas: CPV 1TA / KSA 3TA = 4 total. Tiros: CPV 15 / KSA 7. Entradas: CPV 15 / KSA 29. Faltas: CPV 10 / KSA 16. Vozinha: 3 paradas, xGR 0.39. Al-Owais: 2 paradas, xGR 1.39. Monteiro: mayor amenaza CPV (xG 0.64 en 2ªp). Al-Hamdan (SUP KSA): xG 0.14, mayor amenaza KSA. Hélio Varela: no entró. CPV clasifica como mejor tercer clasificado. KSA eliminada.

**Balance:**
✅ **Over 2.5 amarillas** (4 total — matemáticamente correcto). ✅ **Under 2.5G** (retroactivo — R2 era correcta). ✅ **BTTS No** (retroactivo — R1 era correcta, KSA xG 0.39).
❌ **BTTS Sí** (R21 sobreescribió R1 — KSA 0 goles, patrón bloqueador con 29 entradas). ❌ **Over 2.5G** (0 goles totales). ❌ **Over 7.5 corners** (6 total — bloque KSA suprimió dinámica). ❌ **Rodrigues asistencia R7** (0G 0A, xA 0.01 — 29 entradas KSA lo anuló). ❌ **Mendes asistencia R7** (0G 0A).

**Claves rev29:**

- **R33 NUEVA:** Urgido con xG histórico ≤0.50/partido en torneo → modelar como bloqueador táctico incluso bajo urgencia de ganar. R1+R2 prioritarios. KSA: 0.04 xG vs ESP + 0.39 aquí = patrón sistémico confirmado. R21 no aplica.
- **R21 REVISIÓN CRÍTICA:** Segundo fallo consecutivo. Condición mínima ahora: xG urgido ≥1.00/partido en torneo Y rival con GC previos.
- **R28 AMPLIADA:** Bloque ultra-defensivo (≥25 entradas) → reducir proyección corners −30% independientemente de xG combinado.
- **R7 CONDICIÓN AÑADIDA:** Verificar entradas rival antes de activar prop Tipo C. ≥25 entradas = señal de bloque total = R7 suprimida.
- **Letexier rev29:** 4 tarjetas en partido bloqueado. Base próxima: 3.0–4.5 dependiente de tensión dinámica real, no solo de urgencia declarada.

-----

## RESUMEN DE SESGOS ACTIVOS

|Sesgo                                                                |Descripción                                                                           |Regla correctora                                                                    |
|---------------------------------------------------------------------|--------------------------------------------------------------------------------------|------------------------------------------------------------------------------------|
|**NUEVO R33** Urgido sin capacidad ofensiva → bloquea pese a urgencia|xG ≤0.50/partido en torneo = bloqueador táctico incluso necesitando ganar             |R33: activar R1+R2; verificar xG histórico urgido antes de R21                      |
|**REVISADO R21** Urgencia bilateral falla sin capacidad ofensiva     |Segundo fallo consecutivo — R21 activa solo si urgido tiene xG ≥1.00/partido en torneo|R21 rev29: xG real ≥1.00 en partidos previos + rival con GC                         |
|**AMPLIADO R28** Bloque ultra-defensivo suprime corners              |≥25 entradas rival = bloque total = corners bajo independientemente del xG combinado  |R28 rev29: reducir proyección corners −30% si rival ≥25 entradas en partidos previos|
|**AÑADIDO R7** Bloque ultra-defensivo anula Tipo C                   |R7 falla cuando rival planta ≥25 entradas y partido no se abre                        |R7 rev29: verificar perfil defensivo rival (entradas) antes de activar prop Tipo C  |
|**R32** Defensa élite anula urgencia                                 |0 GC en torneo + xG concedido bajo = urgido produce xG mínimo                         |R32: recortar xG urgido −40%; activar R1+R2 sobre R21                               |
|**R21 corregida** sobreescritura de R1/R2                            |R21 suprimió incorrectamente R1 y R2 dos veces consecutivas                           |R21 rev29: requisito xG urgido ≥1.00 Y rival con GC en torneo                       |
|**R5 corregida** corners vs urgencia sin volumen                     |Urgencia no genera corners cuando urgido ≤5 tiros proyectados O rival ≥25 entradas    |R5 rev29: verificar tiros ≥12 Y perfil defensivo rival                              |
|Letexier media histórica no garantizada                              |4.2 TA/partido pero moderado en partido bloqueado (4 total)                           |Contextualizar por tensión dinámica real, no solo por urgencia declarada            |
|Partido muerto = abierto si rival liberado                           |Sin urgencia + rival bloqueo goleador + favorito rota ≥8 = Over 2.5                   |R30: proyectar Over 2.5 y BTTS en este contexto específico                          |
|Urgencia aparente vs urgencia real                                   |Rival con incentivo para empate NO genera urgencia bilateral real                     |R29: verificar si rival NECESITA ganar vs NECESITA NO PERDER                        |
|R6 sin goles en el partido                                           |Suplente no puede marcar en partido 0-0 o sin trigger cumplido                        |R6 refinada: solo activar si hay ≥1 gol antes del 60’ o trigger live                |
|Props Tipo A titular sobrevaluados                                   |El mercado los sobrevalora casi siempre                                               |R12: −8pp automático. EXCEPTO suplente vs rival muy inferior (R25)                  |
|Árbitro debut WC: base reducida en partido fluido                    |Base 0.5–1.5 en debut WC central + partido sin tensión                                |R10 rev28: debut + partido sin tensión = Under 1.5 selección prioritaria            |
|Rotaciones masivas favorito                                          |≥9 rotaciones → ventaja eliminada                                                     |R23 rev26: ≥9 rotaciones → reconsiderar dirección completamente                     |