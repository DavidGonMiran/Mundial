# Cuaderno de Aprendizaje — Mundial 2026

## Revisión 25 | Actualizado: 26 Jun 2026

-----

## ESTADO GENERAL DEL MODELO

**Actualizado tras partido 24 (Paraguay 0-0 Australia, J3 Grupo D, 26 Jun 2026)**

- **1X2 dirección: 17/24 (70.8%) ⚠ SEGUNDO FALLO CONSECUTIVO** — Proyectamos PAR 44% favorito. Resultado: 0-0. FALLO doble: ni PAR ganó (44%) ni el empate (24%) fue seleccionado activamente. El modelo sobreestimó la urgencia de PAR como generadora de victoria. Nueva condición: urgencia máxima + rival con posesión superior + xG rival proyectado ≥0.50 no garantiza victoria del urgido. R11 2/5 condiciones debería haber disparado alerta mayor.
- **Over 7.5 corners: ❌ FALLO CATASTRÓFICO** — Solo 4 corners totales (PAR 2 + AUS 4). La predicción Over 7.5 (62%) fue el mayor error del análisis. xG real PAR 0.25 / AUS 0.57 → partido extremadamente cerrado, bloqueado. Ambos equipos defendieron en bloque bajo real. Racha Over 7.5: 9/11 (2 fallos). Nueva regla R28: cuando xG combinado proyectado ≤1.50 en partido con bloque bajo bilateral, reducir probabilidad Over 7.5 corners a ≤40%.
- **Over 2.5 goles (R16 urgencia bilateral): ❌ FALLO GRAVE** — 0 goles. xG real total solo 0.82 (PAR 0.25 + AUS 0.57). La urgencia bilateral NO generó partido abierto porque AUS tenía incentivo real para el empate (clasifica 2º con DG +0 vs PAR −2). R16 urgencia bilateral falló porque era urgencia ASIMÉTRICA disfrazada de bilateral: AUS no necesitaba ganar, solo no perder. R4/R16 tercera trampa: 5/8 en goles con urgencia, 3 fallos acumulados.
- **BTTS skip (R21): SKIP — resultado ambiguo** — BTTS No habría ACERTADO (0-0). El skip de R21 fue el error de diagnóstico: clasificamos urgencia como “bilateral máxima” pero AUS tenía incentivo real para el empate. La “urgencia bilateral” era ficticia para AUS. R21 calibración: verificar si el rival realmente NECESITA ganar o simplemente prefiere ganar.
- **Under 3.5 amarillas: ✅ ACIERTO** — 3 TA total (1ªp: 1 PAR / 2ªp: 2 AUS incluyendo Irvine). Turpin WC26 J2 = 3 amarillas. Base debut 2.0–2.5 confirmada. Registro Turpin WC26 J1 ENG-CRO (~4-5 TA), J2 PAR-AUS = 3 TA.
- **Goles reales:** 0. xG PAR 0.25 (1 tiro a puerta 1ªp, 4 en 2ªp = 5 Beach paradas). xG AUS 0.57 (3 SOnT 1ªp, 4 SOnT 2ªp = 7 total, Gill 5 paradas). Beach solo necesitó 2 paradas — AUS no creó las ocasiones proyectadas. PAR creó incluso menos (xG 0.25 con 5 SOnT a puerta).
- **R7 lateral: No activó** — 0 goles. Cáceres 0G 0A. Irankunda 0G 0A (2 remates sin SOnT). R7 solo aplica cuando hay goles — sin goles la racha no se rompe formalmente. Racha gol exacto: 7/9 (sin cambio). Racha participación G+A: 8/9 (sin cambio).
- **R6/R13 suplente: No activó** — 0 goles en el partido. Mauricio (SUP PAR 2ªp) fue el más activo con 2 remates SOnT pero no marcó. Beach realizó 2 paradas en 2ªp. R6 condición: partido ≤1 gol diferencia → cumplida, pero no hubo goles. Racha R6 condicionada: 9/10 (primer fallo sin goles).
- **Corners R5: ❌ FALLO GRAVE** — 4 corners totales. El partido más cerrado en corners del modelo. AUS acumuló posesión (56%) pero en bloque posesional sin necesidad de córner (sus transiciones eran directas). R28 nueva: partido con 0 goles en 1ªp + xG combinado ≤0.80 al HT → reducir Over 7.5 corners a ≤35%.
- **Posesión real: AUS 56% / PAR 44%** — AUS dominó posesión pero sin generar (xG 0.57). PAR generó menos (xG 0.25). Ninguno creó ocasiones claras. El modelo proyectó posesión PAR 52% — error de +8% para AUS. AUS con bloque posesional sin urgencia real de ganar.

**DIAGNÓSTICO CENTRAL REV25:** El fallo sistemático fue clasificar la urgencia de AUS como “bilateral máxima” cuando AUS SOLO NECESITABA NO PERDER (el empate les clasificaba 2ºs por DG). Esto activó R16 y R21 innecesariamente. R29 nueva: antes de activar R16 (urgencia bilateral), verificar si ambos equipos realmente NECESITAN GANAR vs NECESITAN NO PERDER. AUS con DG +0 vs PAR −2 = incentivo real para el empate. Urgencia REAL solo para PAR.

-----

## REGLAS OPERATIVAS CONSOLIDADAS

### R1 — BTTS No con xG rival <0.80

**Racha: 15/18 ✅ (condicionada) | Confianza: MEDIA-ALTA**
Rev25: si R21 no se hubiera activado, BTTS No habría acertado (0-0, xG AUS 0.57 < 0.80). El error fue diagnosticar urgencia bilateral de AUS cuando AUS solo necesitaba empatar. R29 nueva resuelve este fallo.

### R2 — Under 2.5 vs bloque organizado real

**Racha: 10/11 ✅ | Confianza: ALTA**
Rev25: DEBERÍA haber aplicado R2. AUS defendió en bloque bajo real. PAR xG 0.25 → partido 0-0. R2 era correcta pero fue descartada por R16 mal activada. Nueva condición: aplicar R2 cuando rival tiene incentivo real para el empate (no necesita ganar).

### R4 / R16 — Over 2.5 asimetría o urgencia bilateral

**Racha: 5/8 ⚠ TERCER FALLO | Confianza: BAJA (condicionada)**
Rev25: 0 goles. La “urgencia bilateral” era solo PAR. AUS quería el empate. xG real total 0.82. La urgencia UNILATERAL real (solo PAR urgida) con rival en bloque bajo = Under 2.5. Tres fallos en últimos 5 partidos de este mercado cuando urgencia no es realmente bilateral.

### R5 — Corners por urgencia

**Racha Over 7.5 urgencia: 9/11 ⚠ SEGUNDO FALLO**
Rev25: 4 corners totales. El partido más bajo del torneo. AUS en posesión sin corners (transiciones directas, no corners). PAR con xG 0.25 y bloque muy bajo → casi sin corners (solo 2). R28 nueva: when xG combinado real ≤0.80 al HT, reducir Over 7.5 a ≤35%.

### R6 — Patrón suplente goleador

**Racha esencia: 9/10 ⚠ PRIMER FALLO FORMAL | Confianza: ALTA (condicionada)**
Rev25: Mauricio (SUP PAR) tuvo 2 remates SOnT pero no marcó. Beach 2 paradas. R6 condición cumplida (partido ≤1 gol) pero 0 goles totales impide cumplimiento. El patrón requiere que el partido tenga goles. Ajuste: R6 aplica SOLO cuando hay al menos 1 gol en el partido antes del 60’.

### R7 — Patrón lateral/extremo ofensivo

**Racha gol exacto: 7/9 (sin cambio) | Participación G+A: 8/9 (sin cambio)**
Rev25: 0 goles → R7 no aplica. Irankunda y Cáceres: 0G 0A. Sin goles no hay participación posible.

### R10 — Árbitro debut WC

**Rev25 TURPIN J2 WC26: 3 TA (G.Gómez PAR + Irvine AUS + 1 más).** Partido muy controlado. Perfil moderado en J1 (ENG-CRO ~4-5 TA) y J2 (PAR-AUS 3 TA). Media WC26 Turpin: ~3.5–4.0. Base siguiente: 3.5–4.0 según contexto físico. Under 3.5 TA fue ✅.

### R16 — Urgencia bilateral

**Rev25 RECALIBRACIÓN CRÍTICA.** R16 fue mal activada. AUS no necesitaba ganar (empate les clasificaba). R29 nueva invalida R16 en estos casos. Solo activar R16 cuando ambos equipos realmente necesitan la victoria (no el empate).

### R21 — R1 BTTS No condicionada por urgencia

**Rev25 RECALIBRACIÓN:** BTTS No habría acertado (0-0). El skip fue incorrecto porque AUS xG 0.57 < 0.80 (umbral R1). La urgencia de AUS era “no perder” no “marcar sí o sí”. R29 corrige: verificar si rival NECESITA MARCAR o solo NECESITA NO PERDER.

### R28 — NUEVA rev25: Corners bajos cuando xG combinado bajo y bloque bilateral

Cuando xG combinado proyectado ≤1.50 Y ambos equipos tienden al bloque bajo, los corners no se generan: el partido se cierra posicionalmente. 4 corners en PAR-AUS (xG total 0.82). Aplicar: Over 7.5 corners requiere xG combinado proyectado ≥2.00 O urgencia que fuerce ataques abiertos.

### R29 — NUEVA rev25: Verificar urgencia REAL vs urgencia aparente antes de R16/R21

Antes de activar R16 (urgencia bilateral +0.20 xG) o R21 (skip BTTS No), verificar: ¿Ambos equipos NECESITAN GANAR o alguno puede clasificar con empate? AUS en PAR-AUS solo necesitaba empatar (DG +0 vs PAR −2). Esto hace la “urgencia bilateral” FICTICIA para AUS. En estos casos: aplicar R2 (bloque bajo si rival puede especular), mantener R1 (BTTS No si xG rival < 0.80), y NO activar R16. Error crítico del modelo en Rev25 por no aplicar este filtro.

-----

## GESTIÓN DE BANKROLL (sin cambios estructurales)

|Tier     |Criterio                         |Fracción Kelly|Stake típico    |
|---------|---------------------------------|--------------|----------------|
|★★★ Elite|Racha ≥8/10 + criterios objetivos|Kelly ×0.25   |~2–5% bankroll  |
|★★★ Alta |Racha ≥6/8 + patrón sólido       |Kelly ×0.20   |~1.5–4% bankroll|
|★★ Media |Racha ≥5/8 o patrón emergente    |Kelly ×0.12   |~1–2.5% bankroll|
|★ Baja   |Alta varianza o prop sin ventaja |Kelly ×0.05   |<1% bankroll    |
|🚫 Skip   |Tipo A cuota corta + EV <+5%     |No apostar    |—               |

-----

## TRACKING DE ROI ACUMULADO

|Mercado                         |Aciertos/Total|ROI est.|Tendencia                                                     |
|--------------------------------|--------------|--------|--------------------------------------------------------------|
|Suplente goleador esencia R6    |9/10          |+++     |↓ Mauricio 2 SOnT sin gol. Primer fallo formal (0 goles).     |
|R13 distribución suplentes      |8/9           |+++     |↓ Sin goles, no activó. Racha interrumpida.                   |
|1X2 dirección favorito          |17/24         |+       |↓ PAR victoria fallida. 0-0 sorpresa. 70.8%.                  |
|Over 7.5 corners                |9/11          |++      |↓↓ FALLO GRAVE. Solo 4 corners. R28 nueva incorporada.        |
|Lateral/extremo R7 participación|8/9           |++      |→ Sin goles no aplica. Racha sin cambio formal.               |
|BTTS No (R1) condicionada       |15/18         |+       |→ Habría acertado (0-0). Skip fue error diagnóstico R21.      |
|Over 2.5 goles urgencia R4/R16  |5/8           |+/−     |↓↓ TERCER FALLO. Urgencia aparente ≠ urgencia real. R29 nueva.|
|Under 3.5 amarillas Turpin WC26 |1/1           |++      |✅ Confirmado. Turpin J2 WC26 = 3 TA.                          |
|Props Tipo A (titular)          |~8/28         |−       |→ 0 goles → no aplica. R12 vigente.                           |
|Under 2.5 goles bloque bilateral|11/12         |++      |↑ DEBERÍA haber apostado Under 2.5 (R2 + R29). 0-0.           |

-----

## REGISTRO DE ÁRBITROS WC26 (rev25)

|Árbitro              |País   |J1    |J2   |J3|Media WC26|Perfil WC26                                                                                                      |Base próx.     |
|---------------------|-------|------|-----|--|----------|-----------------------------------------------------------------------------------------------------------------|---------------|
|Danny Makkelie       |NED    |6     |3    |— |4.5       |Activo/físico                                                                                                    |4.0–5.0        |
|Michael Oliver       |ING    |3     |3    |— |3.0       |Normal                                                                                                           |3.0–3.5        |
|Wilton Sampaio       |BRA    |0     |—    |— |0.0       |Ultra-fluido                                                                                                     |1.0–1.5        |
|Félix Fischer        |ALE    |1     |—    |— |1.0       |Fluido                                                                                                           |1.5–2.0        |
|Pierre Atcho         |GAB    |0     |2    |— |1.0       |Conservador                                                                                                      |1.5–2.0        |
|César Ramos          |MEX    |1     |3    |— |2.0       |Bimodal                                                                                                          |2.0–2.5        |
|Said Martínez        |HON    |2     |—    |— |2.0       |Conservador                                                                                                      |2.0–2.5        |
|Ramón Abatti         |BRA    |4     |3    |— |3.5       |Moderado                                                                                                         |3.0–4.0        |
|Facundo Tello        |ARG    |5     |2    |— |3.5       |Físico MC                                                                                                        |2.5–3.5        |
|Yael Falcón Pérez    |ARG    |1     |1    |— |1.0       |Ultra-conservador                                                                                                |1.0–1.5        |
|Jesús Valenzuela     |VEN    |1     |2    |— |1.5       |Conservador estable                                                                                              |1.5–2.0        |
|Tori Penso           |USA    |2     |4    |— |3.0       |Bimodal                                                                                                          |2.0–4.0 ctx    |
|Glenn Nyberg         |SUE    |3     |—    |— |3.0       |Moderado debut. Urgido/físico.                                                                                   |2.5–3.0 ctx    |
|Iván Barton          |SLV    |3     |—    |— |3.0       |Debut WC26. JPN-SWE. 3 amar. Técnico con tensión clasificatoria.                                                 |2.5–3.0 ctx    |
|**Clément Turpin**   |**FRA**|**~4**|**3**|— |**~3.5**  |**J1 WC26 ENG-CRO (~4-5 TA, partido abierto 4-2). J2 WC26 PAR-AUS 3 TA (partido cerrado 0-0). Media WC26: ~3.5.**|**3.5–4.0 ctx**|
|Víctor Gomes         |RSA    |—     |—    |— |sin datos |—                                                                                                                |2.0–2.5 (debut)|
|Aliyar Aghayev       |AZE    |—     |—    |— |sin datos |—                                                                                                                |2.0–2.5 (debut)|
|Mustapha Ghorbal     |ALG    |—     |—    |— |sin datos |—                                                                                                                |2.0–2.5 (debut)|
|Ismail Elfath        |USA    |—     |—    |— |sin datos |—                                                                                                                |2.0–2.5 (debut)|
|Daniele Orsato       |ITA    |—     |—    |— |sin datos |—                                                                                                                |2.0–2.5 (debut)|
|François Letexier    |FRA    |—     |—    |— |sin datos |—                                                                                                                |2.0–2.5 (debut)|
|Slavko Vinčić        |SVN    |—     |—    |— |sin datos |—                                                                                                                |2.0–2.5 (debut)|
|Clément Turpin       |FRA    |~4    |3    |— |~3.5      |Ver arriba                                                                                                       |3.5–4.0 ctx    |
|Daniel Siebert       |ALE    |—     |—    |— |sin datos |—                                                                                                                |2.0–2.5 (debut)|
|Felix Zwayer         |ALE    |—     |—    |— |sin datos |—                                                                                                                |2.0–2.5 (debut)|
|Marco Guida          |ITA    |—     |—    |— |sin datos |—                                                                                                                |2.0–2.5 (debut)|
|Rohit Saggi          |NOR    |—     |—    |— |sin datos |—                                                                                                                |2.0–2.5 (debut)|
|Piero Maza           |CHI    |—     |—    |— |sin datos |—                                                                                                                |2.0–2.5 (debut)|
|Anthony Taylor       |ING    |—     |—    |— |sin datos |—                                                                                                                |2.0–2.5 (debut)|
|Szymon Marciniak     |POL    |—     |—    |— |sin datos |—                                                                                                                |2.0–2.5 (debut)|
|Bakary Gassama       |GAM    |—     |—    |— |sin datos |—                                                                                                                |2.0–2.5 (debut)|
|Janny Sikazwe        |ZAM    |—     |—    |— |sin datos |—                                                                                                                |2.0–2.5 (debut)|
|Abdulrahman Al-Jassim|QAT    |—     |—    |— |sin datos |—                                                                                                                |2.0–2.5 (debut)|


> **Turpin rev25:** J1 WC26 ENG-CRO ~4-5 TA (partido abierto 4-2). J2 WC26 PAR-AUS 3 TA (G.Gómez PAR + Irvine AUS + 1). Partido muy cerrado y físico. Perfil moderado con tendencia a menos tarjetas en partidos de bajo ritmo. Media WC26 ~3.5. Base próximo partido: 3.5–4.0 según contexto.

-----

## MERCADOS DE TIEMPO PARCIAL

**MP-1 — Suplente gol/asist 2H cuando partido ≤1 gol:** 9/10 (Mauricio 2 SOnT sin gol — Beach 2 paradas. FALLO CONDICIONADO: no hubo goles en el partido.)
**MP-2 — No más goles 2H con 0-0 al HT:** ✅ Habría acertado (0-0 al HT → 0-0 final).
**MP-6 — Corners Over X.5 2ªp perdedor urgente:** ❌ FALLO. PAR (urgida) solo 1 corner en 2ªp. AUS posesión sin generar corners. Partidos cerrados con bloque bilateral generan POCOS corners incluso con urgencia.

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

**Real:** BIH 3-1 QAT. xG: BIH 0.68/QAT 0.77. 10c. 2 amar. Alajbegović 1G+1A (R7 7/7). Al Haydos 1G (R1 fallo 2/16). Mahmić SUP (R13 5/5). | ✅ 1X2, Over 2.5 goles, Under 2.5 amar., Over 7.5c, R6+R13, R7. ❌ BTTS No (R21 nueva), Demirović anytime, Over 9.5c. | Claves: R21 urgencia bilateral supera xG threshold, R20 dos Tipo C distribuir. Nota: urgencia aquí sí era bilateral real (ambos necesitaban ganar).

### Partido 21 — Ecuador vs Alemania | 25 Jun 2026 | J3 Grupo E (comprimido)

**Real:** ECU 2-1 GER. HT 1-1. Angulo (EXT I) + Plata (EXT D). Sané 1G GER. 5 corners. 4 amarillas. Rodríguez (SUP ECU no obvio) asistió 2-1. | ✅ R7 Angulo+Plata (8/8), R20, R13/R6 Rodríguez. ❌ 1X2 GER, BTTS No, Over 7.5c (R22 nueva: goles 1ªp suprimen corners), Under 2.5 amar., Undav (SUP sin partido vivo). | Claves: R22 goles 1ªp suprimen corners, R23 rotaciones ≥7 favorito.

### Partido 22 — Costa de Marfil vs Curazao | 25 Jun 2026 | J3 Grupo E (comprimido)

**Real:** CIV 2-0 CUW. xG: CUW 0.50 / CIV 1.31. 10c. 3 amar. Pépé (SUP ×2). Yan Diomandé+Sangaré 1A c/u. Amad Diallo 0G 0SOnT. Room 3 paradas. | ✅ 1X2 CIV, Under 9.5c, R6/R13 Pépé (11/11). ❌ Over 2.5 goles (R24 nueva: portero élite), R7 (Amad 0G), Under 2.5 amar., SKIP Tipo A (R25 nueva: excepción suplente). | Claves: R24 portero élite −10pp, R25 Tipo A suplente vs rival muy inferior.

### Partido 23 — Japón vs Suecia | 26 Jun 2026 | J3 Grupo F (comprimido)

**Real:** JPN 1-1 SWE. HT 0-0. Maeda (SUP JPN, ~60’) 1-0. Elanga (SWE winger, ~78’) 1-1. xG: JPN 1.21/SWE 0.64. 10 corners. 3 amarillas. | ✅ JPN +0.5 HA, BTTS Sí, Over 7.5c, Under 3.5 amar., R6/R13 Maeda (12/12), R7 Doan participación G+A (8/8). ❌ Over 2.5 goles (SWE xG real 0.64 vs 1.62 proy.), Ayari 0G 0SOnT, Isak 0A, Kamada 0G. | Claves: R26 urgencia no garantiza xG vs rival posesional (−30%), R27 Tipo A asistidor cuando Tipo C finaliza.

### Partido 24 — Paraguay vs Australia | 26 Jun 2026 | J3 Grupo D · Levi’s Stadium, Santa Clara CA

**Predicción:** PAR 44% / X 24% / AUS 32%. Over 7.5c ★★★. PAR victoria ★★★. Enciso asistencia ★★. Under 3.5 amar. ★★. Over 2.5 goles ★★. R21 SKIP BTTS No. R16 activada (+0.20 xG bilateral). Turpin debut WC26 J2.

**Real:** PAR 0-0 AUS. Posesión PAR 44% / AUS 56%. xG: PAR 0.25 / AUS 0.57. Tiros: PAR 7+12=19 / AUS 12+12=24. SOnT: PAR 0+4=4 / AUS 3+4=7. Corners: PAR 1+1=2 / AUS 3+1=4 → **total 4**. Amarillas: G.Gómez (PAR 2ªp) + Irvine (AUS 2ªp) + 1 (1ªp) = **3 TA**. Paradas: Gill 5 (3+2) / Beach 2 (0+2).

**Balance:**
✅ **Under 3.5 amarillas** (3 TA — Turpin J2 WC26 = moderado). ✅ **R2 Under 2.5 goles** (DEBERÍA haberse apostado — habría acertado). ✅ **BTTS No** (habría acertado — R21 fue error de diagnóstico).
❌ **Over 7.5 corners** (4 corners → fallo catastrófico. R28 nueva: partido cerrado bilateral suprime corners). ❌ **PAR victoria** (0-0 → fallo). ❌ **Over 2.5 goles** (0 goles → fallo grave. Tercer fallo R16/R4). ❌ **Enciso asistencia** (0G 0A — xG PAR 0.25 → Enciso casi sin balones peligrosos). ❌ **R6 suplente** (Mauricio 2 SOnT sin gol — Beach 2 paradas. Primer fallo R6 sin goles disponibles).

**Claves rev25:**

- **R29 NUEVA — CRÍTICA:** Verificar urgencia REAL vs urgencia APARENTE antes de R16/R21. AUS solo necesitaba NO PERDER (empate clasificaba 2º por DG +0 vs PAR −2). La “urgencia bilateral” era FICTICIA para AUS. PAR era el único equipo urgido. Error diagnóstico que activó R16 y anuló R21 incorrectamente.
- **R28 nueva:** Partido con xG combinado ≤1.50 proyectado + bloque bilateral defensivo = Over 7.5 corners máx. 35% probabilidad. PAR-AUS: xG total real 0.82, corners solo 4. El partido más cerrado del torneo.
- **R2 rehabilitada:** When rival puede especular con empate (no necesita ganar), R2 Under 2.5 goles ES APLICABLE independientemente de la urgencia del favorito. Under 2.5 habría acertado (0-0).
- **R6 condición refinada:** R6 suplente solo aplica cuando el partido tiene ≥1 gol antes del 60’. Sin goles, no hay contexto para suplente goleador. Mauricio (2 SOnT) fue víctima de Beach/bloque.
- **Turpin WC26 J2:** 3 TA en partido muy cerrado (PAR-AUS 0-0). Base próxima designación: 3.5–4.0 según contexto (partido más físico → parte alta del rango).
- **xG bilateral bajo:** Cuando ambos equipos generan xG total <1.00 real (PAR 0.25 + AUS 0.57 = 0.82), NINGÚN mercado ofensivo tiene valor: Over goles, Over corners, Props goleadores → todos fallan sistemáticamente.
- **AUS Beach WC26:** 5 paradas en J2 (3 en J1 vs TUR = solo 2 goles concedidos). Perfil portero élite similar a Room (CUW). R24 retroactiva: Beach en J1 ya mostraba el patrón. Debería haber reducido Over 2.5 en −10pp.

-----

## RESUMEN DE SESGOS ACTIVOS

|Sesgo                                                |Descripción                                                        |Regla correctora                                                             |
|-----------------------------------------------------|-------------------------------------------------------------------|-----------------------------------------------------------------------------|
|**NUEVO** Urgencia aparente vs urgencia real         |Rival con incentivo para empate NO genera urgencia bilateral real  |R29: verificar si rival NECESITA ganar vs NECESITA NO PERDER antes de R16/R21|
|**NUEVO** Corners bajos en bloque bilateral          |xG combinado ≤1.50 + bloque bilateral = muy pocos corners          |R28: Over 7.5c requiere xG combinado ≥2.00 o urgencia real que fuerce ataques|
|**NUEVO** R6 sin goles en el partido                 |Suplente no puede marcar en partido que termina 0-0                |R6 refinada: solo activar si hay ≥1 gol antes del 60’                        |
|Over 2.5 con urgencia unilateral + rival posesional  |Urgencia no eleva xG cuando rival controla posesión 50%+           |R26: reducir xG urgido −30% si rival tiene capacidad posesional probada      |
|Over 2.5 con urgencia “bilateral” pero rival especula|Si rival puede empatar para clasificar, urgencia real es unilateral|R29: no activar R16 si rival puede clasificar con empate                     |
|Conservadurismo marcador asimetría extrema           |Modelo subestima goles con ranking >50                             |R4: +1-2 goles a la moda (condicionada R24+R26+R29)                          |
|R4 Over 2.5 con portero élite                        |Portero ≥8 paradas en torneo suprime Over 2.5                      |R24: −10pp P(Over 2.5) · Beach WC26: 5+3=8 paradas en 2 partidos             |
|BTTS No con urgencia unilateral (ranking ≤70)        |Solo el equipo verdaderamente urgido necesita marcar               |R21+R22: SKIP R1 solo si rival TAMBIÉN necesita ganar (R29)                  |
|Lateral/extremo R7: medir participación no solo gol  |Doan 1A, Elanga 1G — la participación es el patrón real            |R7: reformular como G+A. Racha participación 8/9.                            |
|Corners en partidos con goles múltiples en 1ªp       |Ritmo alto 1ªp suprime balón parado                                |R22: −30% corners con 2+ goles en 1ªp                                        |
|Rotaciones masivas favorito                          |≥7 rotaciones = descoordinación                                    |R23: −15pp P(victoria favorito)                                              |
|Suplente goleador: jugador exacto                    |Con 2+ suplentes D, el menos obvio suele marcar                    |R13: distribuir siempre. Racha 8/9.                                          |
|Props Tipo A titular sobrevaluados                   |El mercado los sobrevalora casi siempre                            |R12: −8pp automático. EXCEPTO suplente vs rival muy inferior (R25)           |
|xG urgido inflado vs rival posesional                |Urgencia ≠ xG cuando rival controla el partido                     |R26: −30% xG urgido si rival posesional                                      |
|Árbitro debut WC: contexto físico eleva tarjetas     |Base 2.0–2.5 fluido, 2.5–3.0 urgido/físico                         |R10 rev23: contexto modifica la base                                         |