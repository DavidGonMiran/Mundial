# Cuaderno de Aprendizaje — Mundial 2026

## Revisión 30 | Actualizado: 28 Jun 2026

-----

## ESTADO GENERAL DEL MODELO

**Actualizado tras partido 29 (Panamá 0-2 Inglaterra, J3 Grupo L, 27 Jun 2026)**

- **ENG −1.5 (R4): ✅ ACIERTO** — 2-0 definitivo. R4 asimetría extrema encadena 7/7. Racha perfecta sigue activa.
- **BTTS No (R1): ✅ ACIERTO** — PAN 0 goles. 17/24. R1 confirmada: xG PAN ~0.48, Pickford solo 2 paradas. Sin amenaza real del inferior.
- **Over 7.5 corners: ✅ ACIERTO** — 10 corners totales (PAN 4 + ENG 6). 12/17. PAN ~18 entradas (no bloqueo extremo) = R7/corners válidos, diferente de KSA (29 entradas).
- **Saka G+A anytime (R7): ✅ ACIERTO** — 1 asistencia (2ªP al gol de Bellingham). R7 racha: **11/14**. Validado: PAN ~18 entradas ≠ bloqueo ≥25. La distinción Rev29 era correcta.
- **Bellingham gol anytime: ✅ ACIERTO** — 1G+1A en 2ªP. Prop Tipo B confirmada en bloque bajo sin Carrasquilla.
- **Over 2.5 goles: ❌ FALLO** — 2 goles totales. Exactamente en la línea. R4 asimetría sí generó goles (2) pero no llegó a 3. R4 debe vincularse a Over 1.5 como selección primaria y Over 2.5 como secundaria de menor confianza.
- **Suplente ENG gol (R6+R13): ❌ FALLO** — Sin trigger. 0-0 al minuto 60: Bellingham marcó en ~65' y Kane en ~75', ambos titulares. Suplentes (Madueke, Eze, Henderson, Watkins) no dispararon a puerta con peligro. **R6+R13 falla cuando el partido se resuelve tarde (gol después del 60') y los titulares consumen el protagonismo.** Racha: **11/14** (trigger no se cumplió estrictamente).
- **Al-Jassim: ✅ CONSERVADOR CONFIRMADO** — 3TA totales (Andrade, Fajardo PAN + Quansah ENG). Solo 3 en partido con 29 faltas. Base WC26: 2.5 TA media en sus 2 partidos. Confirma perfil conservador en torneo.

**DIAGNÓSTICO CENTRAL REV30:** R4 asimetría extrema sigue perfecta (7/7). R7 validada con la distinción clave: PAN ~18 entradas ≠ bloqueo extremo (≥25 KSA). Over 2.5 en asimetría extrema pierde fuerza cuando el inferior defiende bien hasta el 60' — el marcador 2-0 es R4 correcto pero insuficiente para Over 2.5. **R34 NUEVA:** En asimetría extrema con inferior defensivo organizado (no urgido), proyectar Over 1.5 como ★★★ y Over 2.5 como ★★ con reducción de confianza del −10pp si el inferior tiene historial de 0 goles encajados en 2+ partidos del torneo. R6+R13 requiere trigger ≥1 gol antes del 60': si el partido llega a 0-0 en 60', el trigger no activa aunque haya suplentes de calidad.

-----

## REGLAS OPERATIVAS CONSOLIDADAS

### R1 — BTTS No con xG rival <0.80

**Racha: 17/24 | Confianza: MEDIA-ALTA**
Rev30: PAN 0 goles, xG ~0.48. Pickford 2 paradas totales. R1 correcta. Patrón: inferior sin Carrasquilla = producción ofensiva colapsada.

### R2 — Under 2.5 vs bloque organizado real

**Racha: 13/16 ✅ | Confianza: ALTA**
Rev30: 2 goles. Exactamente en la línea Over/Under 2.5 — Under 2.5 ACIERTO retroactivo. R2 reforzada en asimetría donde el inferior defiende 60'+.

### R4 / R16 — Over 2.5 asimetría extrema o urgencia

**Racha R4 (asimetría extrema): 7/7 ✅ PERFECTA | Confianza: ALTA**
Rev30: ENG 2-0, victoria ✅. Pero goles = 2, no 3+. **R4 valida victoria y hándicap pero Over 2.5 solo 1/2 partidos recientes en asimetría con inferior defensivo.** Ajuste: R4 confirma dirección y hándicap; Over 2.5 requiere verificación adicional (R34).

### R5 — Corners por posesión/presión dominante

**Racha Over 7.5: 12/17 ⚠ | Confianza: MEDIA-ALTA**
Rev30: 10 corners ✅. Clave confirmada: rival con ~18 entradas (no ultra-bloqueo) = corners generados normalmente. Distinción ≥25 entradas = bloqueo activa reducción corners (-30%).

### R6 — Patrón suplente goleador

**Racha condicionada: 11/14 | Confianza: ALTA (revisada)**
Rev30: Trigger no cumplido (0-0 al 60'). Bellingham y Kane marcaron como titulares en 65'-75'. Suplentes (Madueke, Eze, Watkins) sin impacto goleador. **R6: trigger estricto — si el marcador es 0-0 al minuto 60, el modelo de suplente goleador no activa, aunque hay suplentes de calidad en banca.**

### R7 — Patrón lateral/extremo ofensivo

**Racha participación G+A: 11/14 ✅ | Confianza: MEDIA-ALTA (revisada al alza)**
Rev30: Saka 1A ✅. Rashford 0G0A (5 centros, 5 remates pero sin contribución directa). **R7 validada con condición ≤18 entradas rival. PAN 17-18 entradas = NO bloqueo ultra-defensivo. La distinción Rev29 (umbral ≥25) era correcta.** Rashford no cumplió — R7 aplica mejor al EXT primario con más xA real, no al secundario.

### R10 — Árbitro debut WC

**Racha Under 2.5 amarillas en debut WC: 5/5 (100%) ✅ | Confianza: MÁXIMA**
Sin cambios. Al-Jassim no era debut WC (tenía POR-CON previo).

### R11 — Checklist favorito confianza 1X2

Rev30: 1/5 PASS → sin ajuste negativo. ENG 2-0. Confirmado: 1/5 condiciones PASS no reducen confianza en el favorito amplio.

### R12 — Tipo A titular cuota corta skip

**Rev30:** Kane marcó 1G como titular. R12 no invalida el gol — la regla es sobre el EV de la apuesta, no sobre si marcan. Kane anytime a cuota ~1.85 habría sido marginalmente positivo, pero la regla de skip a <2.20 sigue vigente por historial negativo sistemático de la prop en torneo.

### R13 — Distribución suplente goleador

**Racha: 9/13 | Confianza: ALTA (revisada)**
Rev30: Ningún suplente ENG marcó. Kane y Bellingham (titulares) consumieron los goles de 2ªP. Racha R13 sin cambio de trigger.

### R21 — Skip BTTS No si rival urgencia máxima

**Racha revisada ⚠⚠ | Confianza: BAJA (condicionada)**
Rev30: no aplica (PAN sin urgencia). R21 vigente con condición rev29: xG urgido ≥1.00 Y rival con GC previos.

### R28 — Corners bajo bloque ultra-defensivo

**Rev30:** 10 corners ✅ confirmados cuando rival NO es ultra-bloqueador (PAN ~18 entradas). La reducción −30% solo aplica con ≥25 entradas (KSA: 29, ejemplo negativo). Umbral confirmado.

### R33 — Urgido sin capacidad ofensiva → bloquea pese a urgencia

**Sin cambios.** PAN no era urgida en este partido — R33 no aplicaba. Rev29 correcta.

### R34 — NUEVA rev30: Over 2.5 en asimetría extrema con inferior defensivo

Cuando el inferior tiene ≥2 partidos en el torneo sin marcar Y plantea bloque sin urgencia de ganar: proyectar **Over 1.5 como ★★★** y rebajar Over 2.5 a **★★ con −10pp de confianza**. El marcador 2-0 es el más probable en asimetría extrema + inferior organizado — que es exactamente Over 1.5 y no Over 2.5. Ejemplo: PAN 0 goles en J1+J2 → R34 activa → Over 1.5 era la selección correcta, Over 2.5 falló.

-----

## GESTIÓN DE BANKROLL (sin cambios estructurales)

|Tier     |Criterio                         |Fracción Kelly|Stake típico    |
|---------|---------------------------------|--------------|----------------|
|★★★ Elite|Racha ≥8/10 + criterios objetivos|Kelly ×0.25   |~2–5% bankroll  |
|★★★ Alta |Racha ≥6/8 + patrón sólido       |Kelly ×0.20   |~1.5–4% bankroll|
|★★ Media |Racha ≥5/8 o patrón emergente    |Kelly ×0.12   |~1–2.5% bankroll|
|★ Baja   |Alta varianza o prop sin ventaja |Kelly ×0.05   |<1% bankroll    |
|🚫 Skip   |Tipo A cuota corta + EV <+5%     |No apostar    |—               |

**ALERTA REV30:** Over 2.5 en asimetría extrema con inferior defensivo organizado pierde una estrella — usar Over 1.5 como selección primaria. R6+R13 solo activa con trigger ≥1 gol antes del 60'. R34 nueva previene sobre-apuesta a Over 2.5 en partidos donde el inferior lleva 2+ partidos sin marcar.

-----

## TRACKING DE ROI ACUMULADO

|Mercado                         |Aciertos/Total|ROI est.|Tendencia                                                                              |
|--------------------------------|--------------|--------|---------------------------------------------------------------------------------------|
|Suplente goleador R6+R13        |11/14         |++      |❌ Sin trigger en P29 (0-0 al 60'). Kane+Bellingham titulares consumieron goles 2ªP.   |
|R7 lateral/extremo participación|11/14         |+       |✅ Saka 1A. PAN ~18 entradas = válida. Rashford 0G0A (R7 aplica al EXT primario).      |
|1X2 / Hándicap                  |21/30         |+/−     |✅ ENG −1.5 acierto (2-0). R4 asimetría 7/7 perfecta.                                 |
|Over 7.5 corners                |12/17         |+/−     |✅ 10 corners. PAN ~18 entradas ≠ bloqueo extremo. Umbral ≥25 confirmado.              |
|BTTS No (R1)                    |17/24         |+/−     |✅ PAN 0 goles. Pickford 2 paradas. R1 correcta.                                       |
|Over 2.5 goles (asimetría R4)   |4/9           |−       |❌ 2 goles exactos. R34 nueva: Over 1.5 como selección primaria en inferior defensivo. |
|Under 2.5 goles (R2)            |13/16         |++      |✅ (retroactivo). 2 goles = Under 2.5. R2 reforzada.                                  |
|Props Tipo B (Bellingham)       |nuevo         |+       |✅ Bellingham 1G+1A. Tipo B llegada tardía en bloque bajo sin organizador rival.       |
|Props Tipo A titular            |~8/36         |−       |→ Kane marcó pero R12 skip a <2.20 vigente por EV histórico negativo.                 |
|Under 2.5 amarillas Al-Jassim   |nuevo         |+       |✅ 3TA en partido con 29 faltas. Al-Jassim WC26: 2.5 media/partido. Conservador.      |

-----

## REGISTRO DE ÁRBITROS WC26 (rev30)

|Árbitro              |País   |J1   |J2|J3         |Media WC26|Perfil WC26                                                                                                                         |Base próx.                           |
|---------------------|-------|-----|--|-----------|----------|------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------|
|Danny Makkelie       |NED    |6    |3 |—          |4.5       |Activo/físico                                                                                                                       |4.0–5.0                              |
|Michael Oliver       |ING    |3    |3 |—          |3.0       |Normal                                                                                                                              |3.0–3.5                              |
|Wilton Sampaio       |BRA    |0    |— |—          |0.0       |Ultra-fluido                                                                                                                        |1.0–1.5                              |
|Félix Fischer        |ALE    |1    |— |—          |1.0       |Fluido                                                                                                                              |1.5–2.0                              |
|Pierre Atcho         |GAB    |0    |2 |—          |1.0       |Conservador                                                                                                                         |1.5–2.0                              |
|César Ramos          |MEX    |1    |3 |—          |2.0       |Bimodal                                                                                                                             |2.0–2.5                              |
|Said Martínez        |HON    |2    |— |—          |2.0       |Conservador                                                                                                                         |2.0–2.5                              |
|Ramón Abatti         |BRA    |4    |3 |—          |3.5       |Moderado                                                                                                                            |3.0–4.0                              |
|Facundo Tello        |ARG    |5    |2 |—          |3.5       |Físico MC                                                                                                                           |2.5–3.5                              |
|Yael Falcón Pérez    |ARG    |1    |1 |—          |1.0       |Ultra-conservador                                                                                                                   |1.0–1.5                              |
|Jesús Valenzuela     |VEN    |1    |2 |—          |1.5       |Conservador estable                                                                                                                 |1.5–2.0                              |
|Tori Penso           |USA    |2    |4 |—          |3.0       |Bimodal                                                                                                                             |2.0–4.0 ctx                          |
|Glenn Nyberg         |SUE    |3    |— |—          |3.0       |Moderado debut                                                                                                                      |2.5–3.0 ctx                          |
|Iván Barton          |SLV    |3    |— |—          |3.0       |Debut WC26. 3 amar.                                                                                                                 |2.5–3.0 ctx                          |
|Clément Turpin       |FRA    |~4   |3 |—          |~3.5      |Activo                                                                                                                              |3.5–4.0 ctx                          |
|Mustapha Ghorbal     |ALG    |—    |— |1          |1.0       |Debut WC26. TUR-USA = 1 TA. Conservador.                                                                                            |2.0–2.5 ctx elim.                    |
|Katia I. García      |MEX    |—    |— |0          |0.0       |Debut WC26 central. TUN-NED = 0 TA. Ultra-conservadora en fluido.                                                                   |1.0–2.0 ctx elim.                    |
|Ismail Elfath        |USA    |3    |— |4+1TR      |~3.5      |J3 URU-ESP = 3TA+1TR URU+1TA ESP. Activo-físico en tensión.                                                                         |3.5–4.5 ctx elim.                    |
|François Letexier    |FRA    |—    |— |4 (1+3)    |4.0       |J3 CPV-KSA = 1TA CPV + 3TA KSA. Moderado en partido bloqueado. Media histórica 4.2 pero contexto suprime tarjetas.                  |3.0–4.5 ctx (tensión dependiente)    |
|**Abdulrahman Al-Jassim**|**QAT**|**3**|—|**3**   |**3.0**   |**J1 POR-CON=2TA. J3 PAN-ENG=3TA (Andrade+Fajardo PAN + Quansah ENG). 29 faltas → solo 3TA. Conservador en torneo pese a 4.5 hist.**|**2.5–3.5 ctx (conservador confirmado)**|
|Víctor Gomes         |RSA    |—    |— |—          |sin datos |—                                                                                                                                   |2.0–2.5 (debut)                      |
|Aliyar Aghayev       |AZE    |—    |— |—          |sin datos |—                                                                                                                                   |2.0–2.5 (debut)                      |
|Daniele Orsato       |ITA    |—    |— |—          |sin datos |—                                                                                                                                   |2.0–2.5 (debut)                      |
|Szymon Marciniak     |POL    |—    |— |—          |sin datos |—                                                                                                                                   |2.0–2.5 (debut)                      |
|Anthony Taylor       |ING    |—    |— |—          |sin datos |—                                                                                                                                   |2.0–2.5 (debut)                      |
|Piero Maza           |CHI    |—    |— |—          |sin datos |—                                                                                                                                   |2.0–2.5 (debut)                      |
|Rohit Saggi          |NOR    |—    |— |—          |sin datos |—                                                                                                                                   |2.0–2.5 (debut)                      |
|Daniel Siebert       |ALE    |—    |— |—          |sin datos |—                                                                                                                                   |2.0–2.5 (debut)                      |
|Felix Zwayer         |ALE    |—    |— |—          |sin datos |—                                                                                                                                   |2.0–2.5 (debut)                      |
|Marco Guida          |ITA    |—    |— |—          |sin datos |—                                                                                                                                   |2.0–2.5 (debut)                      |

> **Al-Jassim rev30:** PAN-ENG = 3TA en partido con 29 faltas totales. Media WC26: 2.5 TA en 2 partidos. Confirma perfil conservador en torneo. Base próxima en eliminatorias: 2.5–3.5 dependiente de tensión física.

-----

## MERCADOS DE TIEMPO PARCIAL

**MP-1 — Suplente gol/asist 2H cuando partido ≤1 gol:** Rev30: No hubo trigger (0-0 al minuto ~60-65). Kane marcó ~65' y Bellingham ~75', ambos titulares. Suplentes entraron sin protagonismo goleador. Sin cambio positivo en racha.
**MP-2 — ENG gana HT/FT:** 0-0 al descanso → HT/FT ENG/ENG no se cumplió. Solo ENG/ENG si marca en 1ªP. Rev30 confirma: ENG vs bloque bajo puede terminar HT 0-0 incluso ganando 2-0 al final (como vs GHA 0-0 y vs CRO fue diferente).

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

### Partidos 20–26 (resumen comprimido)

**P20** BIH 3-1 QAT: ✅ 1X2, Over 2.5, Under 2.5 amar., Over 7.5c, R6+R13, R7 Alajbegović (7/7). ❌ BTTS No, Over 9.5c. Claves: R21 válida cuando ambos urgidos tienen capacidad ofensiva real.
**P21** ECU 2-1 GER: ✅ R7 Angulo+Plata (8/8), R13/R6 Rodríguez. ❌ 1X2 GER, BTTS No, Over 7.5c. Claves: R22 goles 1ªp suprimen corners, R23 rotaciones ≥7.
**P22** CIV 2-0 CUW: ✅ 1X2 CIV, Under 9.5c, R6/R13 Pépé (11/11). ❌ Over 2.5 goles, R7 Amad 0G. Claves: R24 portero élite, R25 Tipo A suplente vs muy inferior.
**P23** JPN 1-1 SWE: ✅ JPN +0.5, BTTS Sí, Over 7.5c, Under 3.5 amar., R6/R13 Maeda (12/12), R7 Doan (8/8). ❌ Over 2.5 goles, Isak 0A.
**P24** PAR 0-0 AUS: ✅ Under 3.5 amar. ❌ Over 7.5c (4c), PAR victoria, Over 2.5G. Claves: R29 urgencia aparente vs real, R28 xG combinado ≤1.50+bloque bilateral.
**P25** TUR 3-2 USA: ✅ Over 7.5c, Under 2.5 amar. (4/4 debut Ghorbal), R6+R13 Ayhan. ❌ Under 2.5 goles, Victoria USA. Claves: R30 partido muerto+rotación ≥8.
**P26** TUN 1-3 NED: ✅ NED −1.5, Over 2.5/3.5, Over 7.5c, Under 2.5 amar. (R10 5/5), Dumfries R7 (10/11). ❌ BTTS No. Claves: R31 gestión+rival ≥10 tiros, R13 CB titular en corner.

### Partido 27 — Uruguay 0-1 España | 27 Jun 2026 | J3 Grupo H (comprimido)

**Real:** URU 0-1 ESP. xG: URU 0.20/ESP 0.86. 7c totales. 3TA+1TR URU + 1TA ESP = 5 eventos. Baena 1G (EXT IZQ), Llorente asist. | ✅ Victoria ESP, Over 3.5 tarjetas (retroactivo), BTTS No, Under 2.5G (retroactivos). ❌ BTTS Sí (R21 sobreescribió R1/R2), Over 7.5c (7 — mínimo), Over 2.5G, Araújo/Yamal 0G0A. | Claves: R32 defensa élite 0GC anula urgencia. R21 corregida rev29: xG urgido ≥1.00 + rival con GC.

### Partido 28 — Cabo Verde 0-0 Arabia Saudita | 27 Jun 2026 | J3 Grupo H (comprimido)

**Real:** CPV 0-0 KSA. xG: CPV 1.39/KSA 0.39. 6c totales. 1TA CPV + 3TA KSA = 4 total. 15 tiros CPV / 7 tiros KSA. KSA 29 entradas. | ✅ Over 2.5 amarillas, BTTS No (retroactivo), Under 2.5G (retroactivo). ❌ BTTS Sí (R21 fallo 2º consecutivo), Over 2.5G, Over 7.5c (bloque KSA 29 ent.), R7 Rodrigues/Mendes (bloque total). | Claves: R33 nueva (urgido xG ≤0.50 = bloqueador), R28 ampliada (≥25 entradas → −30% corners), R7 condición añadida (≥25 entradas = R7 suprimida).

-----

### Partido 29 — Panamá 0-2 Inglaterra | 27 Jun 2026 | J3 Grupo L

**Predicción:** PAN 10% / X 17% / ENG 73%. ENG −1.5 ★★★. Saka G+A anytime ★★★ (R7). Suplente ENG gol ★★★ (R6+R13). Over 2.5G ★★ (R4). Over 7.5c ★★. BTTS No ★★ (R1). Bellingham gol anytime ★★.

**Real:** PAN 0-2 ENG. Goles 2ªP: Kane ~65' (3 remates/2 a puerta, asistencia Bellingham), Bellingham ~75' (1G+1A). Saka 1A (pase al gol de Bellingham). Córners totales: 10 (PAN 4 + ENG 6). Tarjetas: 3TA (Andrade PAN, Fajardo PAN, Quansah ENG). Faltas totales: 29. Tiros totales: 30 (12+18). SOnT: 8 (4+4). Pickford 2 paradas (solo en 1ªP). Suplentes ENG: Madueke, Eze, Henderson, Watkins, Spence — ninguno marcó. Rashford 5 centros y 5 remates pero 0G0A.

**Balance:**
✅ **ENG −1.5** (2-0 ✅ R4 asimetría 7/7). ✅ **BTTS No** (PAN 0 goles, R1 17/24). ✅ **Over 7.5 corners** (10 totales, R7/corners PAN ~18 entradas). ✅ **Saka G+A anytime** (1A, R7 11/14 — distinción ≤18 entradas validada). ✅ **Bellingham gol anytime** (1G+1A, Tipo B en bloque sin Carrasquilla).
❌ **Over 2.5 goles** (2 goles — exactamente en la línea, Under 2.5 retroactivo. R34 nueva). ❌ **Suplente ENG gol (R6+R13)** (0-0 al 60' → trigger no cumplido. Kane+Bellingham titulares marcaron en 65'-75'. Suplentes sin impacto ofensivo).

**Claves rev30:**
- **R34 NUEVA:** En asimetría extrema con inferior que lleva ≥2 partidos sin marcar → Over 1.5 es ★★★, Over 2.5 baja a ★★ con −10pp. El marcador 2-0 es la moda real en estos contextos.
- **R6+R13 REFINADA:** Trigger estricto — si el marcador es 0-0 al minuto 60, el patrón no activa aunque haya suplentes de calidad en banca. Los titulares pueden consumir los goles tardíos.
- **R7 VALIDADA:** PAN ~18 entradas ≠ bloqueo extremo (≥25). Saka 1A confirma la distinción de Rev29 como correcta. Rashford 0G0A no invalida R7 — aplica mejor al EXT primario (Saka) con mayor xA.
- **Al-Jassim WC26 CONSERVADOR:** 2.5 TA media en 2 partidos (2TA POR-CON + 3TA PAN-ENG). Base 2.5–3.5 para eliminatorias. Under 2.5 TA tiene valor cuando hay ≤18 faltas por equipo esperadas.
- **ENG vs bloque bajo:** Patrón confirmado 0-0 HT posible incluso en victoria cómoda (2-0). No apostar HT/FT ENG cuando rival es bloqueador organizado sin urgencia.

-----

## RESUMEN DE SESGOS ACTIVOS

|Sesgo                                                                    |Descripción                                                                                          |Regla correctora                                                                       |
|-------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------|
|**NUEVO R34** Over 2.5 débil en asimetría + inferior defensivo           |2-0 es moda real. Inferior ≥2 partidos sin marcar = Over 1.5 ★★★, Over 2.5 pierde estrella          |R34: Over 1.5 primario; Over 2.5 −10pp si inferior 0 goles en torneo                  |
|**REFINADO R6+R13** Trigger tardío invalida patrón suplente              |Si el marcador es 0-0 al minuto 60, titulares pueden consumir goles 2ªP y dejar sin protagonismo SUP|R6+R13: verificar trigger ≤60' activo; si 0-0 a 60', considerar skip o reducción stake |
|**VALIDADO R7** Umbral entradas rival ~18 ≠ bloqueo extremo             |PAN ~18 entradas = R7 válida. KSA 29 entradas = R7 nula. Distinción Rev29 correcta                  |R7: activar si rival ≤20 entradas/partido; suprimir si ≥25 entradas                   |
|**CONFIRMADO R4** Asimetría extrema 7/7 perfecta                         |Victoria y hándicap siempre correctos en asimetría +70 ranking. Goles: 2-0 es la moda, no 3-0+      |R4: validar hándicap −1.5 y victoria; Over 2.5 depende de R34                          |
|**CONFIRMADO Al-Jassim** Conservador en WC26                             |2.5 TA/partido en WC26 vs 4.5 histórico. Media cae en torneo de alto perfil                         |Base 2.5–3.5 en elim. Contextualizar por tensión física esperada                       |
|**R33** Urgido sin capacidad ofensiva → bloquea pese a urgencia          |xG ≤0.50/partido en torneo = bloqueador táctico incluso necesitando ganar                           |R33: activar R1+R2; verificar xG histórico urgido antes de R21                         |
|**R21 corregida** Urgencia bilateral falla sin capacidad ofensiva        |2 fallos consecutivos — R21 activa solo si urgido tiene xG ≥1.00/partido en torneo Y rival con GC   |R21 rev29: xG real ≥1.00 en partidos previos + rival con GC                            |
|**R28 ampliado** Bloque ultra-defensivo suprime corners                  |≥25 entradas rival = bloque total = corners bajo independientemente del xG combinado                 |R28: reducir proyección corners −30% si rival ≥25 entradas en partidos previos          |
|**R5 corregida** Corners vs urgencia sin volumen                         |Urgencia no genera corners cuando urgido ≤5 tiros proyectados O rival ≥25 entradas                  |R5 rev29: verificar tiros ≥12 Y perfil defensivo rival                                 |
|Partido muerto = abierto si rival liberado                               |Sin urgencia + rival bloqueo goleador + favorito rota ≥8 = Over 2.5                                 |R30: proyectar Over 2.5 y BTTS en este contexto específico                             |
|Props Tipo A titular sobrevaluados                                       |El mercado los sobrevalora casi siempre                                                              |R12: −8pp automático. EXCEPTO suplente vs rival muy inferior (R25)                     |
|Árbitro debut WC: base reducida en partido fluido                        |Base 0.5–1.5 en debut WC central + partido sin tensión                                              |R10 rev28: debut + partido sin tensión = Under 1.5 selección prioritaria               |
