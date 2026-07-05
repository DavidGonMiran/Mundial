# Cuaderno de Aprendizaje — Mundial 2026

## Revisión 21 | Actualizado: 25 Jun 2026

-----

## ESTADO GENERAL DEL MODELO

**Actualizado tras partido 20 (Bosnia 3-1 Qatar, J3 Grupo B, 25 Jun 2026)**

- **1X2 dirección: 16/20 (80.0%) ✅** BIH gana 3-1 como favorita. Racha sólida.
- **BTTS No: 14/16 ❌ FALLO rev21** QAT xG proyectado 0.72 (<0.80), pero Al Haydos marcó en 1ªp. Segundo fallo del ciclo. Patrón detectado: equipo urgido (necesita ganar o quedar eliminado) puede superar su xG proyectado incluso por debajo de 0.80. Threshold R1 pendiente de ajuste a <0.70 cuando el rival tiene urgencia clasificatoria máxima.
- **Over 2.5 goles ✅** 4 goles pese a xG total proyectado de 2.47. La urgencia clasificatoria de ambos equipos infló el marcador real vs el modelo.
- **Under 2.5 amarillas ✅** Valenzuela: 2 amarillas (1 cada tiempo). Confirmado en rango 1.5–2.0. Racha Under 2.5 amar. con árbitros conservadores WC26: 3/3.
- **Corners 10 total (5+5): Over 7.5 ✅, Over 9.5 ❌.** Partido equilibrado tácticamente → corners distribuidos entre ambos equipos, sin acumulación masiva. Patrón MP-6 (perdedor urgente acumula en 2ªp) no activado porque QAT empató en 1ªp y el partido estuvo vivo hasta 2ªp. Over 7.5 fiable; Over 9.5 requiere partido más unilateral.
- **R6+R13 suplente Tipo D ✅** Mahmić (suplente no obvio) marcó en 2ªp. Racha esencia: 9/9 cuando el partido está vivo (≤1 gol al entrar). R13 validada: Mahmić no era el favorito del banco.
- **R7 lateral/extremo ofensivo ✅** Alajbegović (extremo derecho) 1G+1A en 1ªp. Tipo C confirmado. Racha R7: 7/7.
- **Demirović anytime ❌** 1SOnT 1ªp, sustituido. 0G. Tipo C con buen perfil pero el gol se fue al extremo (Alajbegović). Sesgo: cuando hay 2 candidatos Tipo C en el mismo equipo, la concentración de stake en uno solo es errónea — distribuir entre ambos (extensión R13 a Tipo C).
- **Valenzuela WC26: J1=1 amar., J2=2 amar. Media 1.5.** Perfil conservador confirmado. Base próximo partido: 1.5–2.0.

-----

## REGLAS OPERATIVAS CONSOLIDADAS

### R1 — BTTS No con xG rival <0.80

**Racha: 14/16 ⚠ | Confianza: ALTA (condicionada) | Stake: Kelly ×0.15**
Dos fallos acumulados. Rev21: añadir condición de exclusión — NO activar R1 (o reducir stake) cuando el rival tiene urgencia clasificatoria máxima (necesita ganar para no ser eliminado) incluso si su xG proyectado es <0.80. La urgencia eleva la intensidad y la conversión real. Nuevo threshold provisional: usar <0.70 cuando el rival puede especular o está eliminado; mantener <0.80 solo cuando el rival no tiene necesidad de gol urgente.

### R2 — Under 2.5 vs bloque organizado real

**Racha: 8/9 ⚠ | Confianza: ALTA (condicionada) | Stake: Kelly ×0.20**
No jugado en BIH-QAT (correcto: ambos equipos con urgencia). Rev21: Under 2.5 no aplica cuando ambos equipos necesitan ganar.

### R3 — Ajuste xG bloque profundo

- Bloque bajo estándar: −25% al xG base del favorito.
- Rev21: en partidos con urgencia bilateral (ambos necesitan ganar), el xG real de ambos equipos puede superar significativamente el proyectado. No aplicar reducción de bloque profundo cuando el débil no puede especular.

### R4 — Over 2.5 goles asimetría extrema (ranking >50)

**Racha: 5/5 ✅ | Confianza: MÁXIMA | Stake: Kelly ×0.25**
Sin cambios. BIH-QAT no activó R4 (diferencia <50), pero Over 2.5 se cumplió por urgencia bilateral.

### R5 — Corners: distinción por estilo de juego

- Rev20 patrón mitad confirmado: perdedor urgente acumula corners en 2ªp.
- Rev21 matiz: en partidos con urgencia bilateral desde el inicio, los corners se distribuyen de forma más equilibrada (5-5) y el total queda en rango medio (10). Over 9.5 requiere partido unilateral o perdedor que se abre masivamente.

### R6 — Patrón suplente goleador

**Racha esencia: 9/9 ✅ condicionada | Confianza: MUY ALTA (condicionada)**
Mahmić marcó en 2ªp con BIH ganando 2-1 (partido vivo). Condición ≤1 gol al momento de entrar confirmada. Racha perfecta mantenida.

### R7 — Patrón lateral/extremo ofensivo goleador/asistencia

**Racha: 7/7 ✅ | Confianza: MÁXIMA | Stake: Kelly ×0.25**
Alajbegović (EXT derecho BIH) 1G+1A. En partidos donde el favorito gana por 2+ goles, el lateral/extremo ofensivo participa en el marcador. Racha perfecta.

### R8 — Creador central asistencia

**Racha total: 9/15 | En contexto creador único + ≥6 SOnT: 3/3 ✅**
No aplicó en BIH-QAT (BIH 14 tiros total, SOnT insuficientes para R8 plena). Sin cambios.

### R9 — Excepción motivación histórica estrella

**N=2 (Messi 2/2, Ronaldo 2/2) | Solo Messi y Ronaldo hasta N≥5**
Sin cambios.

### R10 — Prop tarjeta: árbitros

- **Jesús Valenzuela WC26:** J1=1 amar., J2=2 amar. Media WC26=1.5. Perfil conservador estable. Base próximo partido: 1.5–2.0. Under 2.5 amar. con Valenzuela = selección de alta confianza.
- **César Ramos WC26:** J1=1, J2=3. Media 2.0. Bimodal confirmado.
- **Falcón Pérez WC26:** 2 partidos, media 1.0. SKIP over amarillas.
- **Tello WC26:** J1=5, J2=2. Media 3.5. Bimodal.
- Regla general: debut WC = 2.0–2.5 base. RC temprano −40%. Partido fluido −40%.

### R11 — Checklist confianza 1X2

Sin cambios. BIH cumplió como favorita (1/5 checklist era suficiente). Funciona.

### R12 — Clasificación de props de jugador

- Tipo A (goleador obvio): −8pp automático. Skip a cuota <3.50.
- Tipo B (creador único): priorizar si R8 activa y ≥6 SOnT.
- Tipo C (segundo goleador/lateral): ★★★ en partidos donde favorito gana por 2+. **Rev21 nuevo:** cuando hay 2 candidatos Tipo C en el mismo equipo (Alajbegović + Demirović), distribuir stake al 50% entre ambos en lugar de concentrar en uno.
- Tipo D (suplente): distribuir R13. No concentrar en el más famoso.

### R13 — Distribución suplentes múltiples Tipo D

**Racha: 5/5 ✅ en partidos vivos | Confianza: MÁXIMA (en partido vivo)**
Mahmić (no favorito del banco) marcó. Hadžikadunić (CB) dio asistencia. En BIH-QAT los dos contribuyentes gol/asistencia en 2ªp eran suplentes no obvios. Confirma que concentrar en el suplente “lógico” es error. Distribuir siempre.

### R14 — Dispersión asistencias en goleadas (≥3 goles predichos)

Sin cambios. En BIH-QAT: Bašić (3S, 0A registradas pero posible gol propio), Alajbegović (1A en gol suyo propio + asistencia a otro), Hadžikadunić (1A suplente CB). Las asistencias se dispersaron entre perfiles inesperados.

### R15 — Pasividad táctica del equipo que puede especular

Sin cambios. No aplicó en BIH-QAT (ambos debían ganar, ninguno pudo especular).

### R16 — Bloque ultra-compacto con urgencia máxima

Rev21 nuevo: cuando ambos equipos tienen urgencia bilateral (ambos necesitan ganar), el xG real de ambos tiende a superar la proyección. El modelo debe añadir +0.20 xG a cada equipo en escenarios de urgencia bilateral.

### R17 — Over 2.5 en altitud + rival urgente + banco profundo

Sin cambios. No aplicó (Seattle, nivel del mar).

### R18 — Tipo A excepción vs LD mediocre + urgencia total

Sin cambios. No aplicó en este partido.

### R19 — Tipo B baja prioridad cuando extremo domina

Sin cambios. Alajbegović (Tipo C) dominó sobre Demirović (Tipo C también), pero aquí la dispersión fue entre dos Tipo C, no entre Tipo A y Tipo B.

### R20 — NUEVA rev21: Distribución stake entre múltiples Tipo C del mismo equipo

Cuando un equipo tiene 2+ candidatos Tipo C (lateral/extremo ofensivo distintos al delantero Tipo A), NO concentrar el stake en uno solo. Distribuir al 50% (o según minutos proyectados). En BIH-QAT: Alajbegović marcó 1G+1A, Demirović 0G. Ambos eran Tipo C legítimos. Concentrar en Demirović fue error de selección dentro del conjunto correcto.

### R21 — NUEVA rev21: R1 BTTS No condicionada por urgencia rival

Cuando el equipo rival (el que se espera que NO marque según xG <0.80) tiene urgencia clasificatoria máxima (eliminación directa si no gana), aplicar reducción de confianza a R1:

- xG rival <0.70 + urgencia máxima rival: mantener R1 pero reducir stake a Kelly ×0.10.
- xG rival 0.70–0.80 + urgencia máxima rival: **SKIP R1**.
- xG rival <0.70 + rival ya eliminado o sin presión: R1 plena a Kelly ×0.20.

-----

## REGISTRO DE ÁRBITROS WC26 (rev21)

**Metodología:** ≥1 partido WC26: 70% media WC26 + 30% carrera. Debut WC: 2.0–2.5 base fija.

|Árbitro              |País   |J1 amar.|J2 amar.|J3 amar.|Media WC26|Perfil WC26                     |Base próx.     |
|---------------------|-------|--------|--------|--------|----------|--------------------------------|---------------|
|Danny Makkelie       |NED    |6       |3       |—       |4.5       |Activo/físico                   |4.0–5.0        |
|Michael Oliver       |ING    |3       |3       |—       |3.0       |Normal                          |3.0–3.5        |
|Wilton Sampaio       |BRA    |0       |—       |—       |0.0       |Ultra-fluido                    |1.0–1.5        |
|Félix Fischer        |ALE    |1       |—       |—       |1.0       |Fluido                          |1.5–2.0        |
|Pierre Atcho         |GAB    |0       |2       |—       |1.0       |Conservador                     |1.5–2.0        |
|César Ramos          |MEX    |1       |3       |—       |2.0       |Bimodal: fluido=1 / físico 2ªp=3|2.0–2.5        |
|Said Martínez        |HON    |2       |—       |—       |2.0       |Conservador                     |2.0–2.5        |
|Ramón Abatti         |BRA    |4       |3       |—       |3.5       |Moderado/selectivo              |3.0–4.0        |
|Facundo Tello        |ARG    |5       |2       |—       |3.5       |Físico MC / conservador bloque  |2.5–3.5        |
|Yael Falcón Pérez    |ARG    |1       |1       |—       |1.0       |Ultra-conservador WC            |1.0–1.5        |
|**Jesús Valenzuela** |**VEN**|**1**   |**2**   |**—**   |**1.5**   |**Conservador estable**         |**1.5–2.0**    |
|Víctor Gomes         |RSA    |—       |—       |—       |sin datos |—                               |2.0–2.5 (debut)|
|Aliyar Aghayev       |AZE    |—       |—       |—       |sin datos |—                               |2.0–2.5 (debut)|
|Mustapha Ghorbal     |ALG    |—       |—       |—       |sin datos |—                               |2.0–2.5 (debut)|
|Ismail Elfath        |USA    |—       |—       |—       |sin datos |—                               |2.0–2.5 (debut)|
|Daniele Orsato       |ITA    |—       |—       |—       |sin datos |—                               |2.0–2.5 (debut)|
|Clément Turpin       |FRA    |—       |—       |—       |sin datos |—                               |2.0–2.5 (debut)|
|Slavko Vinčić        |SVN    |—       |—       |—       |sin datos |—                               |2.0–2.5 (debut)|
|Glenn Nyberg         |SUE    |—       |—       |—       |sin datos |—                               |2.0–2.5 (debut)|
|François Letexier    |FRA    |—       |—       |—       |sin datos |—                               |2.0–2.5 (debut)|
|Ivan Barton          |SLV    |—       |—       |—       |sin datos |—                               |2.0–2.5 (debut)|
|Daniel Siebert       |ALE    |—       |—       |—       |sin datos |—                               |2.0–2.5 (debut)|
|Felix Zwayer         |ALE    |—       |—       |—       |sin datos |—                               |2.0–2.5 (debut)|
|Marco Guida          |ITA    |—       |—       |—       |sin datos |—                               |2.0–2.5 (debut)|
|Rohit Saggi          |NOR    |—       |—       |—       |sin datos |—                               |2.0–2.5 (debut)|
|Abdulrahman Al-Jassim|QAT    |—       |—       |—       |sin datos |—                               |2.0–2.5 (debut)|
|Piero Maza           |CHI    |—       |—       |—       |sin datos |—                               |2.0–2.5 (debut)|
|Anthony Taylor       |ING    |—       |—       |—       |sin datos |—                               |2.0–2.5 (debut)|
|Szymon Marciniak     |POL    |—       |—       |—       |sin datos |—                               |2.0–2.5 (debut)|
|Bakary Gassama       |GAM    |—       |—       |—       |sin datos |—                               |2.0–2.5 (debut)|
|Janny Sikazwe        |ZAM    |—       |—       |—       |sin datos |—                               |2.0–2.5 (debut)|


> **Jesús Valenzuela rev21:** J1=1 amar. (AUS-TUR, fluido), J2=2 amar. (BIH-QAT, equilibrado). Media WC26=1.5. Perfil conservador estable. Under 2.5 amar. con Valenzuela = selección de alta confianza.

-----

## GESTIÓN DE BANKROLL (sin cambios estructurales)

|Tier                 |Criterio                                     |Fracción Kelly    |Stake típico    |
|---------------------|---------------------------------------------|------------------|----------------|
|★★★ Elite            |Racha ≥8/10 + criterios objetivos verificados|Kelly ×0.25       |~2–5% bankroll  |
|★★★ Alta             |Racha ≥6/8 + patrón sólido confirmado        |Kelly ×0.20       |~1.5–4% bankroll|
|★★ Media             |Racha ≥5/8 o patrón emergente (N<8)          |Kelly ×0.12       |~1–2.5% bankroll|
|★ Baja / Props Tipo A|Alta varianza o prop sin ventaja clara       |Kelly ×0.05 o skip|<1% bankroll    |
|🚫 Skip               |Props Tipo A cuota corta + EV <+5%           |No apostar        |—               |

**Regla de correlación:** BTTS No + Under 2.5 en mismo partido = una sola posición ★★★. R2 y R4 mutuamente excluyentes. R2 y R17 mutuamente excluyentes.

### Tracking de ROI acumulado

|Mercado                         |Aciertos/Total|ROI est.|Tendencia                                           |
|--------------------------------|--------------|--------|----------------------------------------------------|
|Lateral/extremo ofensivo R7     |7/7           |+++     |↑ Alajbegović 1G+1A. Racha perfecta                 |
|Suplente goleador esencia R6    |9/9           |+++     |↑ Mahmić 2ªp. Solo en partido ≤1 gol al entrar      |
|Over 2.5 asimetría extrema R4   |5/5           |+++     |↑ Infalible con diferencia >50 ranking              |
|R13 distribución suplentes      |5/5           |+++     |↑ Mahmić no favorito obvio del banco                |
|Under 2.5 amar. árbitros conserv|3/3           |+++     |↑ Valenzuela 2ª confirmación                        |
|Bruno G. asistencia R8 (cond.)  |3/3           |+++     |↑ Racha condicional perfecta (no jugado hoy)        |
|BTTS No (xG rival <0.80)        |14/16         |++      |⚠ 2 fallos. Ajuste threshold R21 necesario          |
|1X2 dirección favorito          |16/20         |++      |↑ BIH 3-1 confirmado                                |
|Under 2.5 vs bloque R2          |8/9           |++      |↔ No jugado (correcto: urgencia bilateral)          |
|Corners Over 7.5/9.5            |8/9           |++      |↑ 10 total. Over 7.5 ✅. Over 9.5 requiere unilateral|
|Props Tipo C (lateral/extremo)  |7/9           |++      |⚠ Demirović 0G. Distribuir entre 2 Tipo C           |
|Props Tipo B/D segunda línea    |9/16          |+/−     |⚠ Dispersión con múltiples candidatos               |
|Props Tipo A (delantero obvio)  |~8/20         |−/+     |↔ Skip Džeko correcto (0G)                          |

-----

## MERCADOS DE TIEMPO PARCIAL

**MP-1 — Suplente gol 2H cuando favorito lidera al HT:** 9/9 esencia ✅ (en partido ≤1 gol HT)
**MP-2 — No más goles 2H con 0-0 al HT y bloque bajo activo:** correlacionado con R2.
**MP-3 — Over 0.5 goles 2H favorito con 0-0 al HT:** ≥5 remates 1H favorito. ✅
**MP-4 — HT 0-0 / FT Victoria favorito:** Verificar cada partido. HT desconocido en BIH-QAT (1-1 probable a HT por estructura de goles).
**MP-5 — Over 1.5 goles 2H en altitud + rival urgente + HT 0-0:** Sin cambios rev19.
**MP-6 — Corners Over X.5 2ªp cuando perdedor urgente se abre:** Confirmado rev20 (SCO 7c en 2ªp). En BIH-QAT no aplicó porque el partido estuvo equilibrado (QAT igualó en 1ªp y el patrón no fue unilateral).

-----

## HISTORIAL DE PARTIDOS

### Partidos 01–10 (resumen comprimido)

**P01** CAN 6-0 QAT (J2-B): ✅ 1X2, BTTS No, David anytime, Over c., hándicap. ❌ Under 2.5. Asimetría extrema + 2RC = multiplicador goles.
**P02** MEX 1-0 KOR (J2-A): ✅ 1X2, 1-0, BTTS No. ❌ Over 2.5★★★, Over 3.5 amar. Tensión táctica suprime goles. Ramos conservador.
**P03** MAR 1-0 SCO (J2-C): ✅ 1X2, BTTS No, Under 2.5, Saibari. ❌ Hakimi asist., Over 7.5c. Mediapunta>lateral en partido ajustado.
**P04** USA 1-0 AUS (J2-D): ✅ 1X2, BTTS No, Under 2.5, Over c., Over amar. ❌ McKennie. Lateral ofensivo goleador R7 (1/1). Oliver activo.
**P05** BRA 3-0 HAI (J2-C): ✅ 1X2, BTTS No, Over 2.5, Vinícius/Cunha. Asimetría extrema infraestima marcador.
**P06** NED 3-1 SWE (J2-F): ✅ 1X2, BTTS Sí, Over 2.5, Gakpo. ❌ Malen, Over 3.5 amar. Oliver bajo su media en partido fluido.
**P07** PAR 1-0 TUR (J2-D): ✅ BTTS No, Under 2.5, Over c. ❌ 1X2, Aktürkoğlu. RC temprano −40% amarillas.
**P08** NOR 3-2 SEN (J2-I): ✅ 1X2, Over 2.5, BTTS Sí, Haaland, Over c. ❌ Over 3.5 amar. Sampaio WC26=0 amar.
**P09** ALG 2-1 JOR (J2-J): ✅ 1X2, Over c., Mahrez asist. ❌ Under 2.5★★★, BTTS No★★★. Único fallo R1 (hasta rev21).
**P10** FRA 3-0 IRQ (J2-I): ✅ 1X2, Over 2.5, BTTS No, Olise ×2 asist., FRA −2.5. ❌ Over 7.5c. Fischer WC26=1 amar.

### Partido 11 — Argentina vs Austria | 22 Jun 2026 | J2 Grupo J

**Real:** ARG 2-0 AUT · Messi doblete · 4c · 4 amar. | **✅** 1X2, BTTS No, Under 8.5c, moda 2-0, Over 2.5 amar. **❌** Over 2.5 goles, Mac Allister goleador. | Messi R9 (2/2). ARG=4 corners (patrón Under confirmado).

### Partido 12 — Portugal vs Uzbekistán | 23 Jun 2026 | J2 Grupo K

**Real:** POR 4-0 UZB · Mendes (lat.of.) + Ronaldo ×2 + Leão (SU) · BFernandes 1 asist. · 5c · 2 amar. | **✅** 1X2, BTTS No, Over 2.5, Ronaldo anytime, BFernandes asist., POR −1.5. **❌** Over 7.5c. | Ronaldo R9 (2/2). Tipo C+D confirmados.

### Partido 13 — Inglaterra vs Ghana | 23 Jun 2026 | J2 Grupo L

**Real:** 0-0 · 21 remates ENG / 4 SOnT · 11c · 2 amar. | **✅** BTTS No, Under 2.5, Over 8.5c. **❌** 1X2 ENG. | R3: −40% xG necesario. R11 ignorada (4/5 condiciones).

### Partido 14 — Panamá vs Croacia | 24 Jun 2026 | J2 Grupo L

**Real:** CRO 1-0 PAN · Budimir (SU 2H) · Asist: Stanišić (RB, Tipo C) · 2 amar. · 9c | **✅** 1X2, BTTS No (11/11), Under 2.5 (7/7), Over 7.5c. **❌** Modrić asist., Kramarić goleador. | R13 activada: Budimir vs Kramarić. Lateral asistió con 2 creadores iguales.

### Partido 15 — Marruecos vs Haití | 25 Jun 2026 | J3 Grupo C

**Real:** MAR 5-1 HAI · Hakimi (1G+1A), Saibari, +1G · Rahimi (SU 1G+1A), Yassine (SU 1G) · Isidor (HAI). 10c (3+7). 3 amar. | **✅** 1X2, Over 2.5/3.5, R6 (6/6), R7 Hakimi (4/4), R13. **❌** BTTS No, Under 9.5c, Brahim Díaz asist. | Rev16: +8pp P(gol rival) con +3 antes min 70. R14 nueva.

### Partido 16 — Suiza vs Canadá | 24 Jun 2026 | J3 Grupo B

**Real:** SUI 2-1 CAN · Manzambi (Tipo B) + Vargas. David SUP 1G. 9c total. 3 amar. xG real SUI 1.11/CAN 1.66. | **✅** Over 7.5c, Over 2.5 amar., BTTS Sí, R6. **❌** Doble oportunidad CAN/X, 1X2, Davies asist. | R15: pasividad táctica del especulador. xG superior ≠ victoria con portero élite.

### Partido 17 — Sudáfrica vs Corea del Sur | 25 Jun 2026 | J3 Grupo A

**Real:** RSA 1-0 KOR. HT 0-0. Maseko 2ªp. Moremi SUP asistió. ~15c total. 2 amar. (Tello). | **✅** BTTS No (12/13), Under 2.5 (8/8), RSA +1.5, Over 8.5c, R6 débil. **❌** 1X2 KOR, Lee asist., Hwang gol, Over 2.5 amar. | Tello conservador en bloque táctico. R8 skip <6 SOnT.

### Partido 18 — Chequia vs México | 25 Jun 2026 | J3 Grupo A · Estadio CDMX

**Real:** CZE 0-3 MEX. HT 0-0. 2ªp: Quiñones (Tipo A), Chávez+Fidalgo (SUP). Asist: Alvarado, Sánchez (RB Tipo C), Romo (MC). 6c total. 1 amar. (Falcón Pérez). | **✅** BTTS No, Under 2.5 amar., Fidalgo gol, SUP ×2, Sánchez asist. (R7 5/5), Under 9.5c, MEX ganó. **❌** Under 2.5 goles (fallo R2). | R17: altitud+urgente+banco=Over 2.5.

### Partido 19 — Escocia vs Brasil | 25 Jun 2026 | J3 Grupo C · Miami

**Real:** SCO 0-3 BRA. xG: SCO 1.04 / BRA 4.33. Posesión 46-54%. 13 corners (SCO 7 en 2ªp / BRA 6 en 1ªp). 3 amar. (Ramos). Vinícius 2G (1ªp) + Cunha 1G (2ªp). Bruno G. 2A. Rayan 1A. Neymar/Endrick 0G (partido resuelto). | **✅** 1X2, BTTS No, Over 7.5c, Over 2.5 amar., Bruno G. asist.×2 (R8 cond. 3/3), Rayan Tipo C (R7 6/6), BRA −1.5. **❌** Paquetá gol (R19: extremo dominante absorbe protagonismo), Neymar/Endrick (R6 no aplica con 2-0+). | R18: Tipo A excepción vs LD mediocre + urgencia. MP-6: SCO 7c en 2ªp confirmado.

### Partido 20 — Bosnia vs Qatar | 25 Jun 2026 | J3 Grupo B · Lumen Field, Seattle

**Pred.:** BIH 58% / X 22% / QAT 20%. Over 2.5 goles ★★★. BTTS No ★★. Under 2.5 amar. ★★★. Over 7.5c ★★. Demirović anytime ★★★ (Tipo C). Mahmić/Bajraktarević SUP Tipo D. Džeko SKIP. Árbitro: Jesús Valenzuela (VEN).

**Real:** BIH 3-1 QAT. xG: BIH 0.68 / QAT 0.77. Posesión: BIH 54% / QAT 46%. Corners: 5+5=10. Amarillas: 2 (1+1). Paradas: Vasilj 2 / Abunada 3. Tiros: BIH 14 / QAT 9. Goles: Alajbegović 1G+1A (EXT 1ªp, Tipo C); Al Haydos 1G (QAT 1ªp, Tipo C suplente); Mahmić 1G TA (SUP Tipo D 2ªp); Hadžikadunić 1A (CB SUP 2ªp). Demirović: 1SOnT 1ªp, 0G sustituido. Džeko: 0G 0A (skip correcto).

**Balance:**
✅ 1X2 BIH (16/20). Over 2.5 goles (4G ✅). Under 2.5 amar. (2 total, Valenzuela ✅). Over 7.5c (10 total ✅). R6+R13: Mahmić suplente (9/9). R7: Alajbegović 1G+1A (7/7). Džeko skip correcto.
❌ **BTTS No** (QAT marcó con xG 0.77 proyectado — R1 fallo 2/16; urgencia bilateral elevó conversión). **Demirović anytime** (0G — gol fue al otro Tipo C del equipo; sesgo concentración Tipo C). **Over 9.5c** (10 total, borderline; Over 7.5 cobrado pero Over 9.5 ❌).

**Claves rev21:**

- **R21 nueva:** R1 BTTS No se debilita con urgencia rival máxima. xG 0.77 <0.80 pero QAT marcó porque necesitaba ganar. Nuevo threshold: skip R1 si xG rival 0.70–0.80 + rival urgido.
- **R20 nueva:** 2 Tipo C en mismo equipo (Alajbegović + Demirović) → distribuir stake 50%. Gol fue al no favorito.
- **Valenzuela confirmado conservador:** 2 amar. en J2. Media WC26=1.5. Under 2.5 amar. = selección fiable con él.
- **Corners equilibrados con urgencia bilateral:** 5-5 total 10 → no se generó acumulación unilateral. Over 7.5 ✅ pero Over 9.5 ❌. En partidos equilibrados, no forzar Over 9.5.
- **Hadžikadunić (CB suplente) dio asistencia:** perfiles inesperados en partidos vivos con R6 activa. R13 bien calibrado al no concentrar en suplente obvio.

-----

## RESUMEN DE SESGOS ACTIVOS

|Sesgo                                                |Descripción                                                       |Regla correctora                                                                 |
|-----------------------------------------------------|------------------------------------------------------------------|---------------------------------------------------------------------------------|
|Conservadurismo marcador asimetría extrema           |Modelo subestima goles con diferencia ranking >50                 |R4: +1-2 goles a la moda; >70 pos: +2-3                                          |
|BTTS No con urgencia bilateral máxima                |Equipo urgido convierte pese a xG 0.70–0.80 proyectado            |R21: skip R1 si xG rival 0.70–0.80 + rival urgido a ganar                        |
|BTTS No con ventaja amplia                           |Si favorito llega a +3 antes min 70, rival puede marcar           |R1 excepción rev16: +8pp P(gol rival) con +3 HT                                  |
|R8 en goleadas predichas                             |Creador central NO concentra asistencias con >2 goles             |R14: dispersar asist. — EXCEPCIÓN: creador único puede doblar con R8 activa      |
|Under corners en asimetría extrema                   |El perdedor acumula corners en 2ªp al abrirse                     |R5 rev20 + MP-6: Over corners 2ªp del perdedor urgente                           |
|Over 9.5 corners en partidos equilibrados            |Urgencia bilateral = distribución corners uniforme, no acumulación|R5 rev21: Over 9.5 solo en partidos unilaterales o con perdedor muy abierto      |
|Suplente goleador: jugador exacto                    |Con 2+ suplentes D, concentrar en el más famoso es error          |R13: distribuir 50/50 o más                                                      |
|Suplente goleador: partido resuelto                  |R6 no aplica cuando el partido ya está cerrado (>1 gol) al entrar |R6 rev20: solo aplica con marcador ≤1 gol al momento de entrar                   |
|Props Tipo A (delantero obvio)                       |El mercado los sobreestima casi siempre                           |R12: −8pp automático. EXCEPCIÓN R18: extremo elite vs LD mediocre + urgencia     |
|Concentración en un Tipo C cuando hay dos candidatos |Gol va al Tipo C no favorito cuando hay 2 candidatos válidos      |R20: distribuir stake al 50% entre 2+ Tipo C del mismo equipo                    |
|Tipo B queda sin protagonismo con extremo dominante  |Si extremo Tipo A marca 2G, la segunda línea no marca             |R19: reducir stake Tipo B si extremo domina en 1ªp (≥1G+1A)                      |
|Árbitro debut WC conservador                         |Debut WC = base 2.0-2.5 independiente del historial               |R10 + tabla árbitros                                                             |
|Historial continental irrelevante para árbitro WC    |Copa América 6.0 ≠ WC 1.0 (Falcón Pérez)                          |R10 rev19: no extrapolar hasta N≥4 partidos WC                                   |
|Under 2.5 en altitud + rival urgente + banco profundo|Under 2.5 falla si los 3 factores se combinan                     |R17: Over 2.5 / MP-5 en ese perfil                                               |
|xG rival subestimado en 2ªp con apertura táctica     |Bloque bajo que se abre genera +0.25 xG respecto a proyección     |R16 rev20: añadir +0.25 xG rival cuando se abre en 2ªp                           |
|xG real supera proyección con urgencia bilateral     |Ambos equipos urgidos → xG real de cada uno +0.20 sobre proyección|R16 rev21: añadir +0.20 xG a ambos equipos en urgencia bilateral                 |
|Creador central con co-creador o <6 SOnT             |Asistencia se dispersa; skip R8 si <6 SOnT proyectados            |R8 skip definitivo con <6 SOnT                                                   |
|Excepción motivación histórica                       |Solo válida para récords Messi y Ronaldo                          |R9: no extrapolar a otros jugadores                                              |
|1X2 con asimetría motivacional táctica               |Especular con empate ≠ no perderá                                 |R15+R16: −10pp al favorito que especula vs débil urgente                         |
|xG superior no garantiza victoria                    |Portero élite puede suprimir conversión masivamente               |Factor portero cuando GK tiene 5+ paradas en torneo                              |
|Asistencias en goleadas dispersas                    |Con ≥3 goles, asistencia va a múltiples jugadores                 |R14: no apostar asistencia específica con moda ≥3 goles — excepción creador único|
|Urgencia del débil subestimada                       |Equipo que “solo puede ganar” lucha con más intensidad            |R16: +12pp a P(victoria débil) con diferencia <50 + urgencia                     |
|Over amarillas árbitro bimodal                       |Ramos puede ser conservador (fluido) o activo (físico 2ªp)        |R10 rev20: Ramos Over solo en partidos con choque físico en 2ªp                  |