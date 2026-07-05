# Cuaderno de Aprendizaje — Mundial 2026

## Revisión 28 | Actualizado: 27 Jun 2026

-----

## ESTADO GENERAL DEL MODELO

**Actualizado tras partido 27 (Uruguay 0-1 España, J3 Grupo H, 27 Jun 2026)**

- **1X2 ESP: ✅ ACIERTO** — ESP ganó 1-0. Victoria España confirmada. R11 4/5 PASS correcto.
- **Over 7.5 Corners: ❌ FALLO CRÍTICO** — **7 corners totales** (URU 1 + ESP 6). Under 7.5 por el margen mínimo. xG real URU 0.20 y solo 5 tiros totales en 90’ — el equipo “urgido” generó el bloque más bajo del torneo. R21/R16 NO elevan corners cuando el rival aplana el juego con xG ridículo.
- **BTTS Sí (R21/R16): ❌ FALLO** — Uruguay 0 goles. xG real 0.20 — el peor dato de un equipo “urgido” en todo el torneo. La urgencia de Bielsa produjo un bloque táctico improductivo, no apertura. BTTS Sí basado en urgencia falla cuando el rival tiene calidad defensiva élite.
- **Maxi Araújo G+A Anytime (R7): ❌ FALLO** — 0G 0A. 3 centros, 1 fuera de juego. Anulado tácticamente. **R7 racha: 10/13 (condicionada)** — Falla cuando la defensa rival superior bloquea al Tipo C sistemáticamente.
- **Yamal Asistencia Anytime (R7): ❌ FALLO** — 0G 0A. 3 corners, 1 remate. Partido ultradefensivo de España; Yamal no necesitó abrir líneas.
- **Over 2.5 Goles: ❌ FALLO** — Solo 1 gol en 90’. El partido fue una lección de bloque defensivo ESP ante urgencia táctica de URU.
- **Goleador real: Álex Baena (1G), asistencia Marcos Llorente** — Baena Tipo C ESP (EXT IZQ), candidato secundario R7. 6 corners ganados + 1 SOnT. Llorente (Tipo B periférico) dio la asistencia decisiva.
- **Tarjetas: 3TA+1TR URU / 1TA ESP = 5 eventos** — Over 3.5 tarjetas ✅ ACIERTO (si apostado). Elfath activó su perfil severo en tensión alta. Base próxima 3.5–4.5.
- **Pedri en stats (J3)** — Aparece con pases en 1ªp (42) y 2ªp (6). Suspensión posiblemente no ejecutada o entró como suplente tardío. Verificar antes de próximos dashboards.

**DIAGNÓSTICO CENTRAL REV28:** El modelo falló en todos los mercados de goles/participación porque sobreestimó la urgencia de Uruguay como generador de xG. xG real URU 0.20 (proyectado 1.20) es la mayor subestimación del modelo en 27 partidos. España jugó un partido táctico ultraeficiente (0.86 xG, 1 gol). **R32 NUEVA:** Cuando el favorito tiene calidad defensiva élite (0 GC en torneo, ≤0.50 xG concedido/partido), recortar xG del urgido −40% y activar R1+R2 sobre R21/R16. Corners también afectados: urgencia ≠ corners cuando el urgido genera ≤5 tiros proyectados en 90’ (URU 1 corner con 5 tiros totales).

-----

## REGLAS OPERATIVAS CONSOLIDADAS

### R1 — BTTS No con xG rival <0.80

**Racha: 16/22 (condicionada) | Confianza: MEDIA-ALTA**
Rev28: URU 0.20 xG real — claramente bajo umbral. BTTS No era correcta (retroactivo). Error del modelo al sobreponderar R21 sobre R1. **R1 > R21 cuando defensa rival tiene 0 GC en torneo.**

### R2 — Under 2.5 vs bloque organizado real

**Racha: 11/14 ✅ | Confianza: ALTA**
Rev28: 1 gol total. R2 aplicaba perfectamente — URU bloqueado por ESP élite. El modelo ignoró R2 por R21. **Aprendizaje: R2 > R21 cuando la defensa rival ha concedido 0 goles en torneo.**

### R4 / R16 — Over 2.5 asimetría o urgencia

**Racha R4 (asimetría extrema): 6/6 ✅ | Racha R16 urgencia bilateral: 3/5 ⚠ | Confianza: MEDIA**
Rev28: R16 falló — urgencia bilateral no generó goles cuando la defensa es élite. R32 nueva mitiga este error.

### R5 — Corners por urgencia

**Racha Over 7.5: 11/15 ⚠ | Confianza: MEDIA**
Rev28: 7 corners totales (URU 1, ESP 6). Under 7.5 por mínimo. URU con solo 5 tiros demuestra que urgencia no genera corners cuando el rival domina posesión 67% y el urgido no crea. **R5 rev28: verificar que el urgido proyecta ≥12 tiros antes de activar Over corners.**

### R6 — Patrón suplente goleador

**Racha condicionada: 10/13 | Confianza: ALTA (revisada)**
Rev28: Darwin Núñez (SUP URU) = 0. MP-1 no se activó (Baena marcó en 2ªp sin que URU estuviera perdiendo al min~55’). Sin cambios estructurales.

### R7 — Patrón lateral/extremo ofensivo

**Racha participación G+A: 10/13 ⚠ | Confianza: MEDIA-ALTA (revisada)**
Rev28: Maxi Araújo (Tipo C URU) = 0G 0A. Yamal (Tipo C ESP) = 0G 0A. Doble fallo. Goleador real: Baena (Tipo C ESP) — que SÍ es Tipo C pero no era el candidato principal. **R20 rev28:** con ≥2 candidatos Tipo C, split siempre 50/50.

### R10 — Árbitro debut WC

**Racha Under 2.5 amarillas en debut WC: 5/5 (100%) ✅ | Confianza: MÁXIMA**
Rev28: Elfath correctamente descartado como debut (dirigió J1). Sin cambios.

### R11 — Checklist favorito confianza 1X2

**Rev28:** 4/5 PASS → ESP 60% → ganó 1-0. Ajuste −5pp fue conservador y la victoria se dio. R11 calibrado correctamente.

### R12 — Tipo A titular cuota corta skip

**Rev28:** Oyarzabal 0G 0A (titular). R12 vigente y correcto.

### R13 — Distribución suplente goleador

**Racha: 9/12 | Confianza: ALTA (revisada)**
Rev28: Llorente (Tipo D periférico, no candidato inicial) dio la asistencia del único gol. Baena (titular Tipo C) marcó. **R13 rev28:** incluir CB/periférico titular en distribución cuando defensa rival es élite — el gol puede venir de fuera de lo obvio.

### R21 — Skip BTTS No si rival urgencia máxima

**Racha revisada ⚠ | Confianza: MEDIA (condicionada)**
Rev28: BTTS No era la selección correcta pese a urgencia URU. **R21 rev28:** skip BTTS No solo si el urgido tiene xG proyectado ≥1.20 Y defensa rival ha concedido goles en torneo. Si defensa rival tiene 0 GC, mantener R1.

### R29 — Urgencia real vs aparente

**Rev28:** URU tenía urgencia real pero produjo 0.20 xG. R29 debe incorporar ajuste de calidad defensiva del favorito. Urgencia real ≠ producción ofensiva cuando la brecha táctica es enorme.

### R30 — Partido muerto + rival bloqueo goleador + favorito rota = Over 2.5

**Sin cambios.** No aplicaba.

### R31 — xG rival subestimado en partido de gestión

**Sin cambios.** No aplicó (ESP no gestionó con 2+ goles de ventaja).

### R32 — NUEVA rev28: Defensa élite anula urgencia

Cuando el favorito acumula 0 GC en torneo Y xG concedido promedio ≤0.50/partido: recortar xG del urgido −40% del valor base. Si xG rival proyectado tras ajuste ≤0.80: activar R1 (BTTS No) y R2 (Under 2.5) incluso con R16/R21 activas. URU 0.20 xG real (vs 1.20 proyectado) confirma el patrón. Aplica también a corners: urgencia ≠ corners cuando urgido genera ≤5 tiros proyectados.

-----

## GESTIÓN DE BANKROLL (sin cambios estructurales)

|Tier     |Criterio                         |Fracción Kelly|Stake típico    |
|---------|---------------------------------|--------------|----------------|
|★★★ Elite|Racha ≥8/10 + criterios objetivos|Kelly ×0.25   |~2–5% bankroll  |
|★★★ Alta |Racha ≥6/8 + patrón sólido       |Kelly ×0.20   |~1.5–4% bankroll|
|★★ Media |Racha ≥5/8 o patrón emergente    |Kelly ×0.12   |~1–2.5% bankroll|
|★ Baja   |Alta varianza o prop sin ventaja |Kelly ×0.05   |<1% bankroll    |
|🚫 Skip   |Tipo A cuota corta + EV <+5%     |No apostar    |—               |

**ALERTA REV28 — FASE ELIMINATORIA:** Priorizar: Under 2.5 goles cuando defensa rival tiene 0 GC (R32 nueva), R7 Tipo C (verificar tiros urgido ≥12 antes de Over corners), Under amarillas solo con debut árbitro (R10 5/5). **Reducir exposición drásticamente** en BTTS Sí + Over goles cuando defensa favorita tiene 0 GC en torneo.

-----

## TRACKING DE ROI ACUMULADO

|Mercado                         |Aciertos/Total|ROI est.|Tendencia                                                                |
|--------------------------------|--------------|--------|-------------------------------------------------------------------------|
|Suplente goleador esencia R6    |10/13         |++      |→ MP-1 no activó. Baena (titular) marcó. Sin cambio racha.               |
|R13 distribución suplentes      |9/12          |++      |→ Llorente (periférico) asistió. Distribuir más amplio.                  |
|1X2 / Hándicap −1.5             |19/27 / 6/6   |+/−/+++ |✅ ESP 1-0. R11 4/5 calibrado. Racha victorias favorito confirmada.       |
|Over 7.5 corners                |11/15         |+       |❌ 7 corners (justo Under). URU 1 corner con 5 tiros. R5 corregida.       |
|Lateral/extremo R7 participación|10/13         |++      |❌❌ Araújo 0G0A, Yamal 0G0A. Baena (C) marcó pero no era candidato.       |
|BTTS No (R1) condicionada       |16/22         |+/−     |✅ (retroactivo: BTTS No era correcta). R21 sobreescribió incorrectamente.|
|Under 2.5 goles (R2)            |11/14         |++      |✅ (retroactivo: 1 gol). R32 nueva previene repetir error.                |
|Under 2.5 amarillas R10 debut   |5/5           |+++     |✅✅✅ Elfath correctamente descartado como debut.                          |
|Props Tipo A (titular)          |~8/33         |−       |→ Oyarzabal 0G 0A. R12 vigente y correcto.                               |
|Over 2.5 goles urgencia         |3/6           |−       |❌ 1 gol. Urgencia ≠ goles vs defensa élite 0 GC. R32 corrige.            |

-----

## REGISTRO DE ÁRBITROS WC26 (rev28)

|Árbitro              |País   |J1   |J2|J3       |Media WC26|Perfil WC26                                                              |Base próx.           |
|---------------------|-------|-----|--|---------|----------|-------------------------------------------------------------------------|---------------------|
|Danny Makkelie       |NED    |6    |3 |—        |4.5       |Activo/físico                                                            |4.0–5.0              |
|Michael Oliver       |ING    |3    |3 |—        |3.0       |Normal                                                                   |3.0–3.5              |
|Wilton Sampaio       |BRA    |0    |— |—        |0.0       |Ultra-fluido                                                             |1.0–1.5              |
|Félix Fischer        |ALE    |1    |— |—        |1.0       |Fluido                                                                   |1.5–2.0              |
|Pierre Atcho         |GAB    |0    |2 |—        |1.0       |Conservador                                                              |1.5–2.0              |
|César Ramos          |MEX    |1    |3 |—        |2.0       |Bimodal                                                                  |2.0–2.5              |
|Said Martínez        |HON    |2    |— |—        |2.0       |Conservador                                                              |2.0–2.5              |
|Ramón Abatti         |BRA    |4    |3 |—        |3.5       |Moderado                                                                 |3.0–4.0              |
|Facundo Tello        |ARG    |5    |2 |—        |3.5       |Físico MC                                                                |2.5–3.5              |
|Yael Falcón Pérez    |ARG    |1    |1 |—        |1.0       |Ultra-conservador                                                        |1.0–1.5              |
|Jesús Valenzuela     |VEN    |1    |2 |—        |1.5       |Conservador estable                                                      |1.5–2.0              |
|Tori Penso           |USA    |2    |4 |—        |3.0       |Bimodal                                                                  |2.0–4.0 ctx          |
|Glenn Nyberg         |SUE    |3    |— |—        |3.0       |Moderado debut                                                           |2.5–3.0 ctx          |
|Iván Barton          |SLV    |3    |— |—        |3.0       |Debut WC26. 3 amar.                                                      |2.5–3.0 ctx          |
|Clément Turpin       |FRA    |~4   |3 |—        |~3.5      |Activo                                                                   |3.5–4.0 ctx          |
|Mustapha Ghorbal     |ALG    |—    |— |1        |1.0       |Debut WC26. TUR-USA = 1 TA. Conservador.                                 |2.0–2.5 ctx elim.    |
|**Katia I. García**  |**MEX**|—    |— |**0**    |**0.0**   |**Debut WC26 central. TUN-NED = 0 TA. Ultra-conservadora en fluido.**    |**1.0–2.0 ctx elim.**|
|**Ismail Elfath**    |**USA**|**3**|— |**4+1TR**|**~3.5**  |**J1: 3TA (NED-JPN). J3: 3TA+1TR URU+1TA ESP. Activo-físico en tensión.**|**3.5–4.5 ctx elim.**|
|Víctor Gomes         |RSA    |—    |— |—        |sin datos |—                                                                        |2.0–2.5 (debut)      |
|Aliyar Aghayev       |AZE    |—    |— |—        |sin datos |—                                                                        |2.0–2.5 (debut)      |
|Daniele Orsato       |ITA    |—    |— |—        |sin datos |—                                                                        |2.0–2.5 (debut)      |
|François Letexier    |FRA    |—    |— |—        |sin datos |—                                                                        |2.0–2.5 (debut)      |
|Slavko Vinčić        |SVN    |—    |— |—        |sin datos |—                                                                        |2.0–2.5 (debut)      |
|Daniel Siebert       |ALE    |—    |— |—        |sin datos |—                                                                        |2.0–2.5 (debut)      |
|Felix Zwayer         |ALE    |—    |— |—        |sin datos |—                                                                        |2.0–2.5 (debut)      |
|Marco Guida          |ITA    |—    |— |—        |sin datos |—                                                                        |2.0–2.5 (debut)      |
|Rohit Saggi          |NOR    |—    |— |—        |sin datos |—                                                                        |2.0–2.5 (debut)      |
|Piero Maza           |CHI    |—    |— |—        |sin datos |—                                                                        |2.0–2.5 (debut)      |
|Anthony Taylor       |ING    |—    |— |—        |sin datos |—                                                                        |2.0–2.5 (debut)      |
|Szymon Marciniak     |POL    |—    |— |—        |sin datos |—                                                                        |2.0–2.5 (debut)      |
|Bakary Gassama       |GAM    |—    |— |—        |sin datos |—                                                                        |2.0–2.5 (debut)      |
|Janny Sikazwe        |ZAM    |—    |— |—        |sin datos |—                                                                        |2.0–2.5 (debut)      |
|Abdulrahman Al-Jassim|QAT    |—    |— |—        |sin datos |—                                                                        |2.0–2.5 (debut)      |


> **Elfath rev28:** J3 URU-ESP = 3TA+1TR URU + 1TA ESP = 5 eventos tarjeta en partido de tensión máxima bilateral. Base próximos partidos eliminatorias: 3.5–4.5. Perfil activo-físico confirmado.

> **García rev28:** Debut WC26 central TUN-NED = 0 TA total. Confirma R10 rev28: base debut WC central en partido no tensionado = 0.5–1.5. Si la designan en eliminatorias (tensión alta), elevar base a 2.5–3.5.

-----

## MERCADOS DE TIEMPO PARCIAL

**MP-1 — Suplente gol/asist 2H cuando partido ≤1 gol:** Rev28: Darwin Núñez (SUP URU) = 0. MP-1 no se activó — el trigger (URU perdiendo al min~55’) no se cumplió porque Baena marcó en 2ªp cuando el partido aún estaba 0-0. Sin cambios en racha.
**MP-6 — Corners Over X.5 2ªp equipo persiguiendo:** URU en la 2ªp con necesidad de gol = solo 2 corners totales en 2ªp. MP-6 no habría funcionado — xG real 0.20 confirma que URU nunca presionó con volumen. R32 aplica aquí también.

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

**Real:** BIH 3-1 QAT. xG: BIH 0.68/QAT 0.77. 10c. 2 amar. Alajbegović 1G+1A (R7 7/7). Al Haydos 1G (R1 fallo). Mahmić SUP (R13 5/5). | ✅ 1X2, Over 2.5 goles, Under 2.5 amar., Over 7.5c, R6+R13, R7. ❌ BTTS No (R21 nueva), Demirović anytime, Over 9.5c. | Claves: R21 urgencia bilateral supera xG threshold cuando ambos equipos realmente atacan.

### Partido 21 — Ecuador vs Alemania | 25 Jun 2026 | J3 Grupo E (comprimido)

**Real:** ECU 2-1 GER. HT 1-1. Angulo (EXT I) + Plata (EXT D). Sané 1G GER. 5 corners. 4 amarillas. Rodríguez (SUP ECU) asistió 2-1. | ✅ R7 Angulo+Plata (8/8), R20, R13/R6 Rodríguez. ❌ 1X2 GER, BTTS No, Over 7.5c (R22 nueva), Under 2.5 amar., Undav (SUP sin partido vivo). | Claves: R22 goles 1ªp suprimen corners, R23 rotaciones ≥7 favorito.

### Partido 22 — Costa de Marfil vs Curazao | 25 Jun 2026 | J3 Grupo E (comprimido)

**Real:** CIV 2-0 CUW. xG: CUW 0.50 / CIV 1.31. 10c. 3 amar. Pépé (SUP ×2). Yan Diomandé+Sangaré 1A c/u. Amad Diallo 0G 0SOnT. Room 3 paradas. | ✅ 1X2 CIV, Under 9.5c, R6/R13 Pépé (11/11). ❌ Over 2.5 goles (R24: portero élite), R7 (Amad 0G), Under 2.5 amar., SKIP Tipo A. | Claves: R24 portero élite −10pp, R25 Tipo A suplente vs rival muy inferior.

### Partido 23 — Japón vs Suecia | 26 Jun 2026 | J3 Grupo F (comprimido)

**Real:** JPN 1-1 SWE. HT 0-0. Maeda (SUP JPN ~60’) 1-0. Elanga (SWE winger ~78’) 1-1. xG: JPN 1.21/SWE 0.64. 10c. 3 amar. | ✅ JPN +0.5 HA, BTTS Sí, Over 7.5c, Under 3.5 amar., R6/R13 Maeda (12/12), R7 Doan G+A (8/8). ❌ Over 2.5 goles, Ayari 0G, Isak 0A, Kamada 0G. | Claves: R26 urgencia no garantiza xG vs rival posesional, R27 Tipo A asistidor cuando Tipo C finaliza.

### Partido 24 — Paraguay 0-0 Australia | 26 Jun 2026 | J3 Grupo D (comprimido)

**Real:** PAR 0-0 AUS. xG: PAR 0.25/AUS 0.57. 4 corners. 3 amar. Turpin J2 WC26. | ✅ Under 3.5 amar. ❌ Over 7.5c (catastrófico: 4 corners), PAR victoria, Over 2.5 goles, Enciso asist., R6 Mauricio (0 goles). | Claves: R29 urgencia aparente vs real (AUS solo necesitaba empatar), R28 xG combinado ≤1.50+bloque bilateral = muy pocos corners.

### Partido 25 — Türkiye 3-2 USA | 26 Jun 2026 | J3 Grupo D (comprimido)

**Real:** TUR 3-2 USA. xG: TUR 3.21 / USA 2.01. 11c (TUR 2/USA 9). 1 TA (USA). Ghorbal debut WC. B.A.Yılmaz 1G+1A, Güler 1G, Ayhan 1G (SUP TUR), Trusty+Berhalter (USA). Pulisic 3 SOnT 0G. | ✅ Over 7.5c, Under 2.5 amar. (4/4), R6+R13 Ayhan TUR. ❌ Under 2.5 goles (5 reales), Victoria USA, G.Reyna 0G, T.Weah 0G. | Claves: R30 nueva (partido muerto + rival bloqueo goleador + rotación ≥8 favorito = Over), R23 revisada (≥9 rotaciones → eliminar ventaja real), R7/R13 proyectar en AMBOS equipos.

### Partido 26 — Túnez 1-3 Países Bajos | 26 Jun 2026 | J3 Grupo F (comprimido)

**Real:** TUN 1-3 NED. xG: TUN 0.62 / NED 1.85. 10c. 0 TA. Katia García debut WC central = 0 TA (récord). Brobbey 1G + Van Hecke (CB) 1G. Mastouri (SUP TUN) 1G. Dumfries 1A. | ✅ NED −1.5, Over 2.5/3.5, Over 7.5c, Under 2.5 amar. (R10 5/5), Dumfries asist. R7 (10/11). ❌ BTTS No (R31), NED −2.5, suplentes NED, Gakpo. | Claves: R31 nueva (gestión NED + TUN ≥10 tiros = elevar xG rival +0.20), R13 CB titular en corner, R10 debut WC central fluido = 0.5–1.5 TA base.

### Partido 27 — Uruguay 0-1 España | 27 Jun 2026 | J3 Grupo H

**Predicción:** ESP 60% / X 22% / URU 18%. BTTS Sí ★★★ (R21/R16). Over 7.5c ★★★ (R5). Maxi Araújo G+A ★★★ (R7). Yamal Asistencia ★★★ (R7). Over 2.5G ★★. ESP Win ★★.

**Real:** URU 0-1 ESP. xG: URU 0.20 / ESP 0.86. Posesión: URU 33% / ESP 67%. Corners: URU 1 / ESP 6 = 7 total. Tarjetas: URU 3TA+1TR / ESP 1TA = 5 eventos. Remates: URU 5 / ESP 10. SOnT: URU 1 / ESP 2. Goleador: Álex Baena (Tipo C ESP, EXT IZQ). Asistencia: Marcos Llorente. Maxi Araújo: 0G 0A. Yamal: 0G 0A (3 corners ganados). Darwin Núñez: 0G desde banca. Pedri: apareció en stats (suspensión a verificar).

**Balance:**
✅ **Victoria España** (1-0). ✅ **Over 3.5 tarjetas** (5 eventos — si apostado). ✅ **R11 4/5 calibrado** (ESP ganó). ✅ **BTTS No** (retroactivo: R1/R2 correctas, R21 sobreescribió incorrectamente). ✅ **Under 2.5 Goles** (retroactivo).
❌ **BTTS Sí** (R21 sobreescribió R1/R2 — URU 0.20 xG real vs 1.20 proyectado). ❌ **Over 7.5 Corners** (7 total — Under por mínimo. URU 1 corner con 5 tiros en 90’). ❌ **Over 2.5 Goles**. ❌ **Maxi Araújo G+A** (0 participación). ❌ **Yamal Asistencia** (0G 0A). ❌ **R7 doble fallo**: ambos Tipo C candidatos = 0. Baena (Tipo C) marcó pero no era el seleccionado principal.

**Claves rev28:**

- **R32 NUEVA:** Defensa élite (0 GC en torneo, ≤0.50 xG concedido/partido) anula R21 y R16. Recortar xG urgido −40%. Si xG ajustado ≤0.80 → activar R1+R2 (no R21). URU 0.20 xG real confirma: urgencia ≠ producción ofensiva vs defensa sin GC.
- **R21 CORREGIDA:** Skip BTTS No solo si xG urgido proyectado ≥1.20 Y defensa rival ha concedido goles en torneo. Condición más restrictiva desde Rev28.
- **R5 CORREGIDA:** Verificar tiros proyectados del urgido ≥12 antes de Over corners. URU con 5 tiros = 1 corner. Urgencia sin volumen de tiros no genera corners.
- **R20 REFORZADA:** Con ≥2 Tipo C en el mismo equipo (Yamal + Baena), split 50/50 siempre. Baena marcó; Yamal 0. La selección obvia falló.
- **Elfath perfil actualizado:** 3TA+1TR URU + 1TA ESP = 5 eventos. Base eliminatoria: 3.5–4.5. Activo-físico confirmado.

-----

## RESUMEN DE SESGOS ACTIVOS

|Sesgo                                              |Descripción                                                                   |Regla correctora                                                                  |
|---------------------------------------------------|------------------------------------------------------------------------------|----------------------------------------------------------------------------------|
|**NUEVO R32** Defensa élite anula urgencia         |0 GC en torneo + ≤0.50 xG concedido = urgido produce xG mínimo                |R32: recortar xG urgido −40%; activar R1+R2 sobre R21 si xG ajustado ≤0.80        |
|**CORREGIDO** R21 sobreescritura de R1/R2          |R21 (urgencia bilateral) incorrectamente suprimió R1 y R2 cuando defensa élite|R21 rev28: requiere xG urgido ≥1.20 Y defensa rival con GC en torneo              |
|**CORREGIDO** R5 corners vs urgencia sin tiros     |Urgencia ≠ corners cuando urgido genera ≤5 tiros proyectados                  |R5 rev28: verificar proyección tiros urgido ≥12 antes de Over corners             |
|**REFORZADO** R20 split Tipo C                     |Con ≥2 Tipo C mismo equipo, la selección obvia no siempre es la correcta      |R20 rev28: split 50/50 siempre con ≥2 candidatos Tipo C en el mismo equipo        |
|**NUEVO** Partido gestión = rival libre para tiros |Con 2+ goles de ventaja el favorito gestiona → rival lanza más                |R31: si rival ≥10 tiros en gestión, xG rival +0.20                                |
|**NUEVO** R13: CB sube a corner = goleador oculto  |CB titular puede marcar en set-piece cuando favorito gestiona                 |R13 rev27: incluir CB en distribución cuando corners acumulados ≥5                |
|**REFORZADO** Under amarillas debut WC             |5/5 histórico. Katia García 0 TA. Base 0.5–1.5 en debut                       |R10 rev28: debut WC central fluido = Under 1.5 selección prioritaria              |
|Partido muerto = abierto si rival liberado         |Sin urgencia + rival bloqueo goleador ≥2p + favorito rota ≥8                  |R30: proyectar Over 2.5 y BTTS en este contexto específico                        |
|Urgencia aparente vs urgencia real                 |Rival con incentivo para empate NO genera urgencia bilateral real             |R29: verificar si rival NECESITA ganar vs NECESITA NO PERDER                      |
|Corners bajos en bloque bilateral                  |xG combinado ≤1.50 + bloque bilateral = muy pocos corners                     |R28: Over 7.5c requiere xG combinado ≥2.00 o urgencia con tiros urgido ≥12        |
|R6 sin goles en el partido                         |Suplente no puede marcar en partido que termina 0-0 o sin trigger cumplido    |R6 refinada: solo activar si hay ≥1 gol antes del 60’ o trigger live cumplido     |
|Over 2.5 con urgencia unilateral + rival posesional|Urgencia no eleva xG cuando rival controla posesión 50%+                      |R26: reducir xG urgido −30% si rival posesional; −40% si rival 0 GC (R32)         |
|Props Tipo A titular sobrevaluados                 |El mercado los sobrevalora casi siempre                                       |R12: −8pp automático. EXCEPTO suplente vs rival muy inferior (R25)                |
|Árbitro debut WC: contexto sin urgencia = mínimo   |Base 0.5–1.5 en debut WC central + partido fluido                             |R10 rev28: debut + partido sin tensión = Under 1.5 selección prioritaria          |
|Rotaciones masivas favorito                        |≥7 rotaciones = descoordinación. ≥9 = ventaja eliminada                       |R23 rev26: ≥9 rotaciones → reconsiderar dirección completamente                   |
|Suplente goleador: jugador exacto                  |Con ≥2 Tipo D, el menos obvio suele marcar                                    |R13 rev28: distribuir siempre, incluir CB titular cuando hay corners acumulados ≥5|
|BTTS No con rival en gestión lanzando muchos tiros |Favorito gestiona → rival libre genera más tiros de lo esperado               |R31 nueva: si rival lanza ≥10 tiros en partido gestión, xG rival +0.20            |