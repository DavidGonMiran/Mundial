# Cuaderno de Aprendizaje — Mundial 2026

## Revisión 34 | Actualizado: 28 Jun 2026

-----

## ESTADO GENERAL DEL MODELO

*Actualizado tras partido 33 (Canadá 1-0 Sudáfrica, R32, 28 Jun 2026)*

**CAN gana / CAN −0.5:** ✅ ACIERTO — 1-0. R4 dirección favorito: **10/10 PERFECTA en 90’** (11/11 contando este). Racha continúa.
**BTTS No:** ✅ ACIERTO — RSA 0 goles. R1 activa (xG RSA ~0.62 sin Zwane). Racha BTTS No: **12/14**.
**Under 2.5 goles:** ✅ ACIERTO — 1 gol. Racha Under 2.5 en bloque organizado real: **14/19**.
**Over 7.5 corners:** ❌ FALLO CRÍTICO — Solo 5 corners totales (4 CAN + 1 RSA). GRAN FALLO. Racha Over 7.5 cae a **13/16**.
**Over 3.5 TA:** ❌ FALLO — Solo 2 TA totales (Saliba + Sigur ambas CAN, ambas 2ªp). RSA 0 TA. Racha Over 3.5 TA: negativa en KO.
**R6+R13 Tipo D suplente:** ⚪ NO ACTIVADA — Trigger no cumplido (CAN no marcó antes del 60’). Correcto no apostar. Racha sigue en **14/14** (trigger no activo = no cuenta).
**R12 skip David anytime cuota corta:** ✅ CONFIRMADO — David 1+1=2 tiros totales, 0+0=0 SOnT, 0G. Skip vigente.
**Eustaquio MC titular gol 2ªp:** dato clave — R13 extendida activa (MC titular marca en partido cerrado, no suplente).

**DIAGNÓSTICO CENTRAL REV34:** CAN 1-0 RSA en partido de control absoluto pero sorprendentemente estéril en corners y tarjetas. **HALLAZGO CRÍTICO: bloque ultra-defensivo RSA (solo 7 tiros en todo el partido, 248 pases en 1ªp) suprimió los corners de CAN de forma radical — 5 totales vs proyección 10-13.** RSA concedió 0 corners en 2ªp. El bloque bajo extremo + posicionamiento compacto forzó a CAN a disparar desde fuera del área (18 tiros pero mayoría bloqueados/lejanos) sin generar corners. **R38 NUEVA:** Bloque ultra-defensivo sin urgencia (≤30% posesión voluntaria) suprime corners del equipo atacante incluso con alta posesión — los corners se generan desde penetraciones al área, no desde posesión perimetral. El modelo R5 asume correlación posesión→corners que falla con bloques de 10 en el área. Pinheiro debut WC26: 2 TA únicamente — más conservador de lo proyectado (4.62 carrera). Eustaquio (MC titular) marcó el único gol en 2ªp confirmando R13 extendida (MC titular, no suplente).

-----

## REGLAS OPERATIVAS CONSOLIDADAS

**R1 — BTTS No con xG rival <0.80**
Racha: 18/28 | Confianza: MEDIA-ALTA
Rev34: RSA 0 goles (xG real ~0.30 máx). ✅ R1 correcta. Sin Zwane y con bloque defensivo, RSA nunca amenazó a Crépeau (4 paradas totales en el partido).

**R2 — Under 2.5 vs bloque organizado real**
Racha: 14/19 | Confianza: MEDIA-ALTA
Rev34: 1 gol total. ✅ R2 correcta. RSA bloque real de 4 líneas cerradas → Under 2.5 firme.

**R4 / R16 — Over 2.5/3.5 asimetría extrema o urgencia**
Racha R4 victoria favorito dirección: **11/11 ✅ PERFECTA** | Confianza: MÁXIMA
Rev34: CAN 1-0. ✅ R4 dirección perfecta. NOTA: victoria por 1-0 — R4 no garantiza margen, solo dirección. Hándicap −1.5 habría fallado (solo 1-0).

**R5 — Corners por posesión/presión dominante**
Racha Over 7.5: **13/16** ⚠ | Confianza: MEDIA (en revisión)
Rev34: 5 corners totales. ❌ GRAN FALLO. R5 invalidada por R38: bloque ultra-defensivo sin urgencia suprime corners incluso con dominio claro. **R5 requiere ahora verificación: si rival juega ≤30% posesión voluntaria + bloque bajo sin urgencia, reducir proyección de corners en −40%.**

**R6 — Patrón suplente goleador / rotación**
Racha condicionada: 13/17 | Confianza: ALTA
Rev34: Trigger no activo (CAN no marcó ≤60’). No se apostó. Correcto.

**R7 — Patrón lateral/extremo ofensivo**
Racha participación G+A: **12/18** | Confianza: MEDIA
Rev34: Buchanan 1+0=1 tiro total, 0G 0A. R7 no se activó correctamente — RSA bloque bajo anuló los extremos de CAN. R28 parcial aplicada (RSA ~20 entradas) pero insuficiente para capturar el impacto real del bloque. **Pendiente: revisar umbral R28 — puede que en KO con bloque real el umbral efectivo sea ≤15 entradas, no ≤25.**

**R10 — Árbitro debut WC / conservador**
Sin cambios.
Rev34: Pinheiro debut WC26 → 2 TA en total. Mucho más conservador de lo proyectado por carrera (4.62). **R10 extendida:** árbitros en su debut WC son significativamente más conservadores que su media de carrera en ligas domésticas. Ajustar base para árbitros WC debut: reducir 30-40% respecto a su media carrera.

**R12 — Tipo A titular cuota corta skip**
Sin cambios. Rev34: David 2 tiros totales, 0 SOnT, 0G. ✅ R12 VIGENTE Y REFORZADA.

**R13 — Distribución goleador MC/CB titular**
Racha extendida: activa | Confianza: ALTA (acumulando casos)
Rev34: Eustaquio (MC titular) 1G 2ªp. ✅ R13 extendida confirmada por segunda vez. Patrón: MC titular de mayor calidad técnica en el favorito marca en partidos cerrados donde el favorito domina sin romper. Casos: Pape Gueye (SEN vs IRQ), Eustaquio (CAN vs RSA). **R13 extendida consolidada:** en partidos con asimetría clara pero resultado apretado, activar MC titular ofensivo del favorito como candidato goleador alternativo a delanteros.

**R21 — Skip BTTS No si rival urgencia máxima**
Sin cambios.

**R22 — Gol temprano del favorito suprime corners**
Rev34: No aplicó en 1ªp (CAN no marcó antes del 30’). Sin gol temprano, los corners deberían haberse generado, pero R38 los suprimió igualmente. R22 y R38 son compatibles — R38 actúa independientemente de si hay gol temprano o no.

**R28 — Corners suprimidos por bloque ≥25 entradas**
Rev34: RSA registró ~19 entradas totales (11+15 FC, no entradas puras). El bloque RSA suprimió corners con ~19 entradas — **umbral efectivo en KO puede ser ≤20 entradas, no ≤25.** R28 requiere recalibración del umbral. Ver R38.

**R29 — Urgencia asimétrica**
Sin cambios.

**R33 — Urgido sin capacidad ofensiva → bloquea pese a urgencia**
Sin cambios. Rev34: RSA sin urgencia ofensiva — defensivamente correcto no activar R33 (RSA nunca tuvo que atacar). R33 aplica cuando el equipo inferior DEBE atacar pero no puede. Aquí RSA nunca necesitó atacar.

**R35 — Gol de MC antes del 30’ invalida R7 lateral**
Sin cambios.

**R36 — Rival con ≥8 rotaciones invalida R7**
Sin cambios. Rev34: RSA con XI titular completo en KO. R36 no aplicó.

**R37 — RC temprana del equipo inferior reclasifica mercados**
Sin cambios. Rev34: Sin RC en el partido. No aplicó.

**R38 — NUEVA Rev34: Bloque ultra-defensivo voluntario (≤30% posesión) suprime corners del atacante**
Cuando el equipo inferior juega con bloque bajo deliberado cediendo posesión (no urgido, sin necesidad de atacar) y mantiene ≤30% posesión voluntariamente:

- **Over 7.5 corners: REDUCIR en −40%** respecto a proyección base por posesión dominante
- **Los corners no se generan desde posesión perimetral** — se generan desde penetraciones al área. El bloque RSA forzó tiros lejanos sin corners.
- **Indicadores:** RSA 7 tiros totales · 5 corners CAN en 90' · 18 tiros CAN pero mínimos corners
- **Aplicación:** verificar si rival planea bloque ≤30% posesión en contexto sin urgencia → ajustar Over corners una línea hacia abajo (Over 7.5 → Over 6.5; Over 9.5 → Over 7.5)
- **Compatible con R22** (gol temprano también suprime corners) — ambas actúan de forma independiente
- **Detección pre-partido:** posible si rival tiene historial de posesión baja voluntaria (RSA: 31-44% en GS) y el partido no requiere que ataquen

-----

## GESTIÓN DE BANKROLL (sin cambios estructurales)

|Tier     |Criterio                         |Fracción Kelly|Stake típico    |
|---------|---------------------------------|--------------|----------------|
|★★★ Elite|Racha ≥8/10 + criterios objetivos|Kelly ×0.25   |~2–5% bankroll  |
|★★★ Alta |Racha ≥6/8 + patrón sólido       |Kelly ×0.20   |~1.5–4% bankroll|
|★★ Media |Racha ≥5/8 o patrón emergente    |Kelly ×0.12   |~1–2.5% bankroll|
|★ Baja   |Alta varianza o prop sin ventaja |Kelly ×0.05   |<1% bankroll    |
|🚫 Skip   |Tipo A cuota corta + EV <+5%     |No apostar    |—               |

**ALERTA REV34:** R38 nueva — bloque ultra-defensivo voluntario invalida R5 (corners). Verificar siempre posesión histórica del rival inferior: si ≤35% en GS + no necesita atacar → reducir proyección corners −40% y subir umbral Over una línea.
**ALERTA REV34:** Pinheiro debut WC → 2 TA en 90’. Árbitros en debut WC son más conservadores que su media carrera. Reducir base TA en −30% para debuts WC confirmados.

-----

## REGISTRO DE ÁRBITROS WC26 (rev34)

|Árbitro              |País|J1|J2|J3     |R32|Media WC26|Perfil WC26                                                                                                                                               |Base próx.       |
|---------------------|----|--|--|-------|---|----------|----------------------------------------------------------------------------------------------------------------------------------------------------------|----------------:|
|Danny Makkelie       |NED |6 |3 |—      |—  |4.5       |Activo/físico                                                                                                                                             |4.0–5.0          |
|Michael Oliver       |ING |3 |3 |—      |—  |3.0       |Normal                                                                                                                                                    |3.0–3.5          |
|Wilton Sampaio       |BRA |0 |— |—      |—  |0.0       |Ultra-fluido                                                                                                                                              |1.0–1.5          |
|Félix Fischer        |ALE |1 |— |2      |—  |1.5       |Fluido                                                                                                                                                    |1.5–2.0          |
|Pierre Atcho         |GAB |0 |2 |—      |—  |1.0       |Conservador                                                                                                                                               |1.5–2.0          |
|César Ramos          |MEX |1 |3 |—      |—  |2.0       |Bimodal                                                                                                                                                   |2.0–2.5          |
|Said Martínez        |HON |2 |— |—      |—  |2.0       |Conservador                                                                                                                                               |2.0–2.5          |
|Ramón Abatti         |BRA |4 |3 |—      |—  |3.5       |Moderado                                                                                                                                                  |3.0–4.0          |
|Facundo Tello        |ARG |5 |2 |—      |—  |3.5       |Físico MC                                                                                                                                                 |2.5–3.5          |
|Yael Falcón Pérez    |ARG |1 |1 |—      |—  |1.0       |Ultra-conservador                                                                                                                                         |1.0–1.5          |
|Jesús Valenzuela     |VEN |1 |2 |—      |—  |1.5       |Conservador estable                                                                                                                                       |1.5–2.0          |
|Tori Penso           |USA |2 |4 |—      |—  |3.0       |Bimodal                                                                                                                                                   |2.0–4.0 ctx      |
|Glenn Nyberg         |SUE |3 |— |—      |—  |3.0       |Moderado debut                                                                                                                                            |2.5–3.0 ctx      |
|Iván Barton          |SLV |3 |— |—      |—  |3.0       |Debut WC26. 3 amar.                                                                                                                                       |2.5–3.0 ctx      |
|Clément Turpin       |FRA |~4|3 |—      |—  |~3.5      |Activo                                                                                                                                                    |3.5–4.0 ctx      |
|Mustapha Ghorbal     |ALG |— |— |1      |—  |1.0       |Debut WC26. TUR-USA=1 TA. Conservador.                                                                                                                    |2.0–2.5 ctx elim.|
|Katia I. García      |MEX |— |— |0      |—  |0.0       |Debut WC26 central. TUN-NED=0 TA. Ultra-conservadora.                                                                                                     |1.0–2.0 ctx elim.|
|Ismail Elfath        |USA |3 |— |4+1TR  |—  |~3.5      |J3 URU-ESP=3TA+1TR. Activo-físico en tensión.                                                                                                             |3.5–4.5 ctx elim.|
|François Letexier    |FRA |— |— |4 (1+3)|—  |4.0       |J3 CPV-KSA=moderado en partido bloqueado.                                                                                                                 |3.0–4.5 ctx      |
|Abdulrahman Al-Jassim|QAT |3 |— |3      |—  |3.0       |J1 POR-CON=2TA. J3 PAN-ENG=3TA. Conservador.                                                                                                              |2.5–3.5 ctx      |
|Drew Fischer         |CAN |— |1 |2      |—  |1.5       |J2 FRA-IRQ=1TA. J3 CRO-GHA=2TA. Ultra-conservador.                                                                                                        |1.5–2.5 ctx elim.|
|NOR-FRA árbitro      |TBD |— |— |2      |—  |2.0       |J3 NOR-FRA=2TA. Perfil conservador.                                                                                                                       |2.0–3.0 ctx elim.|
|SEN-IRQ árbitro      |TBD |— |— |4+1RC  |—  |~4.0      |J3 SEN-IRQ=4TA+1RC. RC Sulaka 1ªp. R37: RC en 1ªp = referencia inválida para Under TA futuras.                                                            |3.0–4.0 ctx elim.|
|João Pinheiro        |POR |— |— |—      |2  |2.0       |**DEBUT WC26. R32 CAN-RSA=2 TA total (0+2). Mucho más conservador que carrera (4.62). R10 extendida: debut WC → reducir −30% media carrera para base WC.**|2.0–3.0 ctx elim.|
|Víctor Gomes         |RSA |— |— |—      |—  |sin datos |—                                                                                                                                                         |2.0–2.5 (debut)  |
|Aliyar Aghayev       |AZE |— |— |—      |—  |sin datos |—                                                                                                                                                         |2.0–2.5 (debut)  |
|Daniele Orsato       |ITA |— |— |—      |—  |sin datos |—                                                                                                                                                         |2.0–2.5 (debut)  |
|Szymon Marciniak     |POL |— |— |—      |—  |sin datos |—                                                                                                                                                         |2.0–2.5 (debut)  |
|Anthony Taylor       |ING |— |— |—      |—  |sin datos |—                                                                                                                                                         |2.0–2.5 (debut)  |
|Piero Maza           |CHI |— |— |—      |—  |sin datos |—                                                                                                                                                         |2.0–2.5 (debut)  |
|Rohit Saggi          |NOR |— |— |—      |—  |sin datos |—                                                                                                                                                         |2.0–2.5 (debut)  |
|Daniel Siebert       |ALE |— |— |—      |—  |sin datos |—                                                                                                                                                         |2.0–2.5 (debut)  |
|Felix Zwayer         |ALE |— |— |—      |—  |sin datos |—                                                                                                                                                         |2.0–2.5 (debut)  |
|Marco Guida          |ITA |— |— |—      |—  |sin datos |—                                                                                                                                                         |2.0–2.5 (debut)  |

-----

## MERCADOS DE TIEMPO PARCIAL

**MP-1 — R6+R13 Tipo D suplente 2ªp:** Rev34 ⚪ Trigger no activo (CAN no marcó ≤60’). Correcto no apostar. Racha condicional: **14/14** (solo cuenta cuando trigger se activa).
**MP-6 — Corners 2ªp urgencia favorito:** Rev34 ❌ Solo 1 corner CAN en 2ªp. R38 prevalece: bloque RSA suprimió corners en ambas partes, no solo en 1ªp.

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
P30 CRO 2-1 GHA | J3 Grupo L: ✅ 1X2 CRO (R4 8/8), Under 3.5 amar. (Fischer ultra-conservador). ❌ Perišić asist. (R35: MC gol <30’), BTTS No, Under 2.5G, Over 7.5c (R22). Claves: R35 (MC gol <30’ invalida R7), R22, R13 CB urgido activa.

### Partido 31 — Noruega 1-4 Francia | 26 Jun 2026 | J3 Grupo I (comprimido)

Real: NOR 1-4 FRA. Dembélé hat-trick 1ªp (2A Mbappé). Aasgaard 1G. Doué 1G 2ªp. 5 goles, 2 TA, 9 corners (4+5), 28 remates. NOR rotó ≥8 titulares. | ✅ 1X2 FRA (R4 9/9), Over 2.5G, BTTS Sí, Over 7.5c, Under 3.5 amar., Barcola asist. 2ªp (R6+R13 13/13), Doué gol. ❌ Olise 0G 0A (R36: rival ≥8 rotaciones invalida R7). | Claves: R36 nueva, R35 ampliada.

### Partido 32 — Senegal 5-0 Iraq | 26 Jun 2026 | J3 Grupo I (comprimido)

Real: SEN 5-0 IRQ. Diarra 1G 1ªp. Pape Gueye 2G 1A 2ªp. Ndiaye 1G 1A (SUP 2ªp). Sarr 1G 1A 2ªp. Sulaka RC 1ªp. 4 TA+1RC. 15 corners (9+6). Jackson 3S 2SOnT 0G. | ✅ 1X2 SEN, SEN −1.5 (R4 10/10), Over 2.5G, Over 3.5G, Over 7.5c (racha 13/15), R7 Sarr G+A (12/17), R6+R13 Ndiaye (14/14), R12 skip Jackson. ❌ Under 3.5 amar. (RC Sulaka generó frustración IRQ → 3 TA 2ªp). | Claves: R37 nueva (RC <60’ reclasifica mercados), R13 extendida MC titular.

-----

### Partido 33 — Canadá 1-0 Sudáfrica | 28 Jun 2026 | Ronda de 32

**Predicciones pre-partido:** CAN 62% / X 18% / RSA 20%. Over 7.5 corners ★★★ (EV +11.5%). BTTS No ★★★. CAN gana/−0.5 ★★★. Over 3.5 TA ★★. David Over 2.5 tiros ★★. Under 2.5 goles ★★. R6+R13 suplente condicional (trigger ≤60’).

**Real:** CAN 1-0 RSA. Eustaquio 1G 2ªp (MC titular). Crépeau 4 paradas (2+2). 5 corners totales (4 CAN + 1 RSA). 2 TA totales (Saliba + Sigur, ambas CAN, 2ªp). 18 tiros CAN (10+8), 7 tiros RSA (2+5). 8 SOnT total (5+3 CAN, 0+1 RSA). 22 faltas 1ªp, 30 faltas 2ªp. RSA posesión ~33%. Davies en cancha pero 0 pases/tiros — minimal. David 2 tiros totales, 0 SOnT, 0G.

**Balance:**
✅ CAN gana (1-0. R4 dirección 11/11 PERFECTA).
✅ BTTS No (RSA 0 goles. R1 racha 18/28).
✅ Under 2.5 goles (1 gol. R2 racha 14/19).
✅ R12 skip David anytime (0G, 2 tiros, 0 SOnT — confirmado).
✅ R13 extendida: Eustaquio MC titular marcó el gol en 2ªp (patrón acumulando).
❌ **Over 7.5 corners — GRAN FALLO** (solo 5 totales vs proyección 10-13. R5 racha cae a 13/16).
❌ Over 3.5 TA (solo 2 TA. Pinheiro debut WC más conservador que su media carrera).
⚪ R6+R13 suplente — trigger no activo (CAN no marcó ≤60’). Correcto no apostar.

**Claves Rev34:**

- **R38 NUEVA:** Bloque ultra-defensivo voluntario (RSA ~33% posesión, 7 tiros totales, 11+15 faltas cometidas pero sin salir) suprimió corners radicalmente — 5 totales cuando proyectamos 10-13. Los corners no vienen de posesión perimetral sino de penetraciones al área. R5 (corners/posesión) tiene excepción crítica: rival en bloque cerrado sin urgencia anula la correlación posesión→corners.
- **R10 extendida confirmada:** Pinheiro carrera 4.62 TA → en debut WC solo 2 TA. Árbitros en debut WC son conservadores respecto a su media de carrera. Ajuste: −30% base TA para debutantes WC. Aplica también a otros debutantes.
- **R13 extendida (segundo caso):** Eustaquio (MC titular) marcó el único gol — similar a Pape Gueye en P32. Patrón emergente: MC titular de calidad superior del favorito marca en partidos cerrados sin que los delanteros encuentren espacio. Candidatos a activar en octavos: MCs titulares cuando el rival bloquea con 4+4+2 y los DCs están marcados.
- **CAN −1.5 habría fallado (1-0):** Importante — R4 garantiza dirección, no margen. Vs bloque extremo sin urgencia, victorias 1-0 son el escenario modal correcto.
- **Davies impacto mínimo:** Regresó pero con 0 pases/tiros registrados en datos Sofascore — bien gestionado, posible mínimos minutos o rol muy limitado. No confirmó ningún patrón ofensivo.
- **RSA xG real: ~0.25-0.30** — por debajo incluso de la proyección conservadora. Sin Zwane, sin ocasiones claras. Crépeau solo tuvo 4 paradas en 90’. R1 funcionó perfectamente.

-----

## RESUMEN DE SESGOS ACTIVOS

|Sesgo                                                                                  |Descripción                                                                         |Regla correctora                                                                                         |
|---------------------------------------------------------------------------------------|------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------|
|**NUEVO R38** Bloque ultra-defensivo voluntario suprime corners                        |RSA 33% posesión voluntaria → 5 corners en 90'. R5 falla con bloque sin urgencia    |R38: si rival ≤35% posesión histórica + no necesita atacar → Over corners −1 línea (Over 7.5 → Over 6.5) |
|**ACTUALIZADO R10** Árbitros debut WC son más conservadores que su media carrera       |Pinheiro 4.62 carrera → 2 TA en debut WC                                            |Reducir −30% base TA para debutantes WC confirmados. Pinheiro base WC: 2.0–3.0                           |
|**CONFIRMADO R13 extendida** MC titular favorito goleador en partido cerrado           |Eustaquio 1G 2ªp (2º caso tras Pape Gueye). Patrón acumulando                       |Activar MC titular ofensivo como candidato goleador cuando DCs están marcados y partido es 0-0 prolongado|
|**CONFIRMADO R4** Dirección victorias favorito 11/11 perfecta                          |CAN 1-0. R4 nunca ha fallado en dirección                                           |R4: solo hándicap −1.5 si bloque rival no es extremo. Vs bloque cerrado, preferir 1X2 / hándicap −0.5    |
|**CONFIRMADO R12** Skip David anytime titular cuota corta                              |David 2 tiros, 0 SOnT, 0G. 8/44 props Tipo A en WC26                                |R12 skip sistemático. MC titular = mejor candidato alternativo                                           |
|**CONFIRMADO R6+R13 Tipo D** Trigger no activo = no apostar                            |CAN no marcó ≤60' → trigger no activado → no se apostó → correcto                   |Kelly ×0.25 solo cuando trigger confirmado en vivo. Racha limpia 14/14                                   |
|**REVISADO R5** Correlación posesión→corners falla con bloque ultra-defensivo          |R5 racha cae a 13/16. RSA 33% posesión voluntaria = 5 corners vs proyección 10-13   |R38 actúa sobre R5. Verificar siempre posesión histórica del rival inferior antes de activar Over 7.5+   |
|**CONFIRMADO R37** RC temprana reclasifica; sin RC la supresión de corners viene de R38|Sin RC el partido fue de 5 corners — R37 no disponible, R38 habría alertado el fallo|R37 y R38 son complementarias: R37 para RCs, R38 para bloques voluntarios sin urgencia                   |