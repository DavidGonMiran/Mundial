# Cuaderno de Aprendizaje — Mundial 2026

## Revisión 31 | Actualizado: 28 Jun 2026

-----

## ESTADO GENERAL DEL MODELO

**Actualizado tras partido 30 (Croacia 2-1 Ghana, J3 Grupo L, 28 Jun 2026)**

- **1X2 CRO gana (R4): ✅ ACIERTO** — CRO 2-1. Resultado correcto. Victoria clasificatoria de Croacia. Modrić asistencia en 2ªP al gol de Vlašić.
- **BTTS No (R1): ❌ FALLO** — Luckassen (CB Ghana) marcó el 2-1 en 2ªP. R1 falla cuando el bloque rival recibe goles rápidos y un CB llega a remate en transición. **R1 racha: 17/25. Patrón nuevo: BTTS sí cuando inferior recibe 2 goles y su CB llega a córner/transición (R13 en rival).**
- **Perišić asistencia anytime (R7): ❌ FALLO** — 0 asistencias. 1 SOnT en 1ªP, 0 remates en 2ªP, recibió TA. El gol de 1ªP fue de Sučić (asistencia Kovačić), no de Perišić. **R7 falla cuando el gol llega por jugador central (MC) antes de que el lateral acumule volumen. R7 racha: 11/15.**
- **Under 2.5 goles (R2): ❌ FALLO** — 3 goles. CRO 2-0 y luego GHA descuenta 2-1. R2 falla cuando el inferior urgido (GHA urgida al descuento) tiene un CB con llegada al área rival. **R2 racha: 13/17.**
- **Over 7.5 corners (R5): ❌ FALLO** — Solo 5 corners totales (0 en 1ªP + 5 en 2ªP). **HALLAZGO CRÍTICO: CRO marcó en 1ªP (Sučić) y gestionó el partido sin necesidad de centros masivos. Los goles tempranos del favorito suprimen los corners porque el juego se vuelve más directo/vertical y el inferior no presiona.** R5 racha Over 7.5: 12/18 ⚠. Recordatorio R22: gol temprano del favorito → reducción corners −35%.
- **Ghana no pierde (DC): ❌ FALLO** — GHA perdió 1-2. R29 urgencia asimétrica falló: el bloque de Queiroz no pudo resistir a CRO una vez que abrió 2-0.
- **Under 3.5 amarillas: ✅ ACIERTO** — Solo 2 TA totales (Perišić CRO + Peprah Oppong GHA). Partido con 22 faltas y bajo nivel de tensión arbitral. Fischer WC26: 2 TA en 1 partido. Base confirmada conservadora en torneo.
- **Budimir anytime scorer: ❌ FALLO** — Titular, 0 goles, 0 remates. No fue el referente goleador. Sučić y Vlašić (Tipo B centrocampistas) consumieron los goles.

**DIAGNÓSTICO CENTRAL REV31:** Partido con múltiples fallos encadenados por un patrón que no se había registrado limpiamente: **CRO marcó temprano (Sučić, 1ªP) vía MC, no por el lateral R7**. Esto suprimió corners (R22 activa — gol temprano = menos centros laterales), anuló la prop de Perišić (R7 falla cuando el gol no pasa por el lateral primario) y desactivó R2 (GHA urgida al descuento arriesgó y Luckassen anotó — R13 CB rival activa). **R35 NUEVA:** Cuando el gol del favorito llega antes del 30' y lo marca un MC (no el EXT primario R7), las props del lateral pierden toda validez esa jornada. Adicionalmente, R22 se confirma con fuerza: gol antes del 30' → Over corners debe rebajarse a Under.

-----

## REGLAS OPERATIVAS CONSOLIDADAS

### R1 — BTTS No con xG rival <0.80

**Racha: 17/25 | Confianza: MEDIA**
Rev31: FALLO. Luckassen (CB GHA) marcó en 2ªP tras recibir 2 goles y abrirse el bloque. Patrón nuevo: cuando el inferior recibe 2 goles antes del 75', sus CB se suman a la presión y generan el descuento por R13 rival. Añadir condición: si el inferior va 0-2 antes del 75', elevar P(BTTS Sí) en +15pp independientemente del xG previo.

### R2 — Under 2.5 vs bloque organizado real

**Racha: 13/17 ⚠ | Confianza: MEDIA-ALTA**
Rev31: FALLO. 3 goles. El bloque de Queiroz resistió hasta el 2-0 pero la urgencia forzó apertura y Luckassen llegó. R2 sigue válida pero con condición: si el partido llega a 2-0 antes del 75', activar R13 rival (CB al área) y rebajar confianza Under 2.5 en −15pp.

### R4 / R16 — Over 2.5 asimetría extrema o urgencia

**Racha R4 (victoria favorito): 8/8 ✅ PERFECTA | Confianza: ALTA**
Rev31: CRO ganó 2-1 ✅. R4 confirma dirección de victoria perfecta. Over 2.5 goles también se cumplió (3 goles). Pero R34 sigue vigente: el 2-0 es la moda real; el 2-1 llega por R13 CB rival urgido, no por derrumbe defensivo.

### R5 — Corners por posesión/presión dominante

**Racha Over 7.5: 12/18 ⚠ | Confianza: MEDIA**
Rev31: FALLO SEVERO. Solo 5 corners totales. CRO marcó en 1ªP y gestionó sin centros masivos. **R22 confirmada con fuerza: gol del favorito antes del 30' → reducir proyección corners −35% y pasar a Under como selección primaria.** Over 7.5 no aplica cuando hay gol temprano del favorito.

### R6 — Patrón suplente goleador

**Racha condicionada: 11/15 | Confianza: MEDIA-ALTA**
Rev31: Budimir titular, 0 goles. Sučić y Vlašić (centrocampistas) consumieron los goles. R6 no aplica con Budimir titular. Sin cambio en racha principal — el patrón falla cuando la prop es un DC titular que no acumula remates.

### R7 — Patrón lateral/extremo ofensivo

**Racha participación G+A: 11/15 ⚠ | Confianza: MEDIA (rebajada)**
Rev31: Perišić 0G 0A (1 SOnT 1ªP, 0 remates 2ªP, 1 TA). FALLO. El gol de 1ªP llegó por Sučić (MC), no por el lateral. **R35 NUEVA: si el primer gol del favorito es marcado por un MC antes del 30', la prop del lateral R7 queda invalidada porque el partido cambia de patrón (gestión vertical, no ataque por banda).** R7 solo activa en plena validez cuando el partido sigue abierto hasta el 45'+.

### R10 — Árbitro debut WC

**Racha Under 2.5 amarillas en debut WC: 5/5 (100%) ✅ | Confianza: MÁXIMA**
Sin cambios. Fischer era 2ª designación WC26 (no debut puro). Sus 2 TA en CRO-GHA confirman perfil conservador en torneo. Fischer WC26: 1.5 TA/partido media (1 en FRA-IRQ + 2 en CRO-GHA). Base para próximas designaciones: 1.5–2.5 TA.

### R11 — Checklist favorito confianza 1X2

Rev31: 3/5 PASS → ajuste −12pp aplicado. CRO base 56% → 44% ajustado. CRO ganó 2-1. El ajuste R11 fue correcto en calibración (44% real obtuvo el resultado). Confirmado: el checklist no elimina la selección, la calibra.

### R12 — Tipo A titular cuota corta skip

Sin cambios. Budimir titular = Tipo D. 0 goles. El mercado sobreestimó al DC en contexto de partido abierto rápidamente (gol MC antes del 30').

### R13 — Distribución suplente goleador / CB en córner

**Racha: 10/14 ✅ | Confianza: ALTA**
Rev31: Luckassen (CB Ghana) marcó el 2-1 con asistencia de Nuamah. **R13 CB rival activa cuando el inferior recibe 2 goles y lanza corners urgidos en 2ªP. Este patrón es ahora el sexto caso documentado de CB rival marcando en situación de urgencia.** Racha ampliada. Aplicar R13 CB también al equipo que pierde 0-2 antes del 75'.

### R21 — Skip BTTS No si rival urgencia máxima

**Racha revisada ⚠⚠ | Confianza: BAJA (condicionada)**
Rev31: No aplica directamente (GHA no tenía urgencia al inicio). Pero una vez 2-0, GHA se urgió y Luckassen marcó vía R13 CB. La urgencia puede surgir en el transcurso del partido, no solo al inicio. Añadir: si el favorito llega a 2-0 antes del 75', activar urgencia reactiva del inferior y subir P(BTTS Sí) en +15pp.

### R22 — Gol temprano del favorito suprime corners

**Confirmada con fuerza: Rev31 es el 3er caso documentado | Confianza: ALTA**
CRO marcó en 1ªP (antes del 30') → 0 corners en 1ªP, solo 5 en total (vs proyección ~8.5). El juego se vuelve más vertical/directo cuando el favorito gestiona ventaja. Over corners = skip si hay gol del favorito antes del 30'.

### R28 — Corners bajo bloque ultra-defensivo

Sin cambio de umbral. Rev31: 5 corners totales pero la causa principal fue R22 (gol temprano), no bloqueo de GHA (GHA solo tenía ~14 entradas, muy por debajo de umbral ≥25). **Importante distinguir: R22 suprime corners por dinámica de partido; R28 los suprime por estructura defensiva del rival.**

### R29 — Urgencia asimétrica

Rev31: R29 identificó correctamente la urgencia unilateral de CRO pero la prop de "Ghana no pierde" falló porque CRO rompió el bloque en 1ªP. Revisión: cuando el favorito urgido tiene ≥ 3/5 condiciones R11 aunque ajustadas, la DC rival sigue siendo una apuesta de bajo EV real.

### R33 — Urgido sin capacidad ofensiva → bloquea pese a urgencia

Sin cambios. No aplicaba a GHA en este partido (tenía capacidad defensiva real).

### R34 — Over 2.5 en asimetría extrema con inferior defensivo

Rev31: Over 2.5 se cumplió (3 goles). Pero la 3ª diana llegó por R13 CB urgido, no por apertura real. R34 sigue vigente como regla de calibración: el 3er gol en estos contextos suele ser del inferior via CB en urgencia, no del favorito ampliando.

### R35 — NUEVA rev31: Gol de MC antes del 30' invalida prop R7 lateral

Cuando el primer gol del favorito es anotado por un MC (no el extremo/lateral R7 primario) antes del minuto 30, las props de participación del lateral quedan invalidadas: el partido entra en modo gestión vertical y los extremos dejan de ser el eje del ataque. Ejemplo: Sučić (MC) gol en 1ªP → Perišić 0G0A toda la noche pese a ser el candidato R7 primario. **Aplicar este filtro ANTES de seleccionar props R7:** si hay probabilidad alta (>40%) de que el primer gol sea de un MC, reducir confianza R7 en −20pp.

-----

## GESTIÓN DE BANKROLL (sin cambios estructurales)

|Tier     |Criterio                         |Fracción Kelly|Stake típico    |
|---------|---------------------------------|--------------|----------------|
|★★★ Elite|Racha ≥8/10 + criterios objetivos|Kelly ×0.25   |~2–5% bankroll  |
|★★★ Alta |Racha ≥6/8 + patrón sólido       |Kelly ×0.20   |~1.5–4% bankroll|
|★★ Media |Racha ≥5/8 o patrón emergente    |Kelly ×0.12   |~1–2.5% bankroll|
|★ Baja   |Alta varianza o prop sin ventaja |Kelly ×0.05   |<1% bankroll    |
|🚫 Skip   |Tipo A cuota corta + EV <+5%     |No apostar    |—               |

**ALERTA REV31:** Partido con múltiples fallos por R22 (gol temprano MC) y R13 CB rival. Rev31 añade R35 como filtro previo a cualquier selección R7. R5 (corners) pierde una estrella como mercado standalone: verificar siempre si hay probabilidad alta de gol temprano del favorito. BTTS No sigue siendo válida pero con condición: si el partido llega a 2-0 antes del 75', subir P(BTTS Sí) +15pp.

-----

## TRACKING DE ROI ACUMULADO

|Mercado                         |Aciertos/Total|ROI est.|Tendencia                                                                              |
|--------------------------------|--------------|--------|---------------------------------------------------------------------------------------|
|Suplente goleador R6+R13        |11/15         |++      |❌ Budimir titular, 0G. Vlašić (MC) consumió gol 2ªP. R13 CB GHA ✅ Luckassen 2-1.    |
|R7 lateral/extremo participación|11/15         |+/−     |❌ Perišić 0G0A. Gol de Sučić (MC) antes del 30' → R35 nueva. Racha baja a media.     |
|1X2 / Hándicap                  |22/31         |+/−     |✅ CRO 2-1 acierto. R4 victoria 8/8 perfecta. R11 calibración correcta.               |
|Over 7.5 corners                |12/18         |+/−     |❌ 5 corners. R22 gol temprano confirma. Over corners skip si gol <30'. Racha baja.   |
|BTTS No (R1)                    |17/25         |+/−     |❌ Luckassen 2-1 (CB urgido R13). Añadir condición: 2-0 antes 75' → +15pp BTTS Sí.   |
|Over 2.5 goles (R2/R4)          |5/10          |−       |✅ 3 goles. Pero el 3º fue CB urgido R13, no apertura del bloque. R34 sigue vigente.  |
|Under 2.5 goles (R2)            |13/17         |++      |❌ 3 goles (fallo). Pero R2 sigue sólida: añadir condición 2-0 antes del 75'.         |
|Under amarillas Fischer WC26    |nuevo         |++      |✅ 2 TA totales. Fischer WC26: 1.5 TA media. Base muy conservadora confirmada.         |
|Props Tipo A titular            |~8/37         |−       |→ Budimir 0G titular. R12 skip vigente. Sučić (Tipo B MC) fue el goleador inesperado. |

-----

## REGISTRO DE ÁRBITROS WC26 (rev31)

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
|François Letexier    |FRA    |—    |— |4 (1+3)    |4.0       |J3 CPV-KSA = 1TA CPV + 3TA KSA. Moderado en partido bloqueado.                                                                     |3.0–4.5 ctx (tensión dependiente)    |
|Abdulrahman Al-Jassim|QAT    |3    |— |3          |3.0       |J1 POR-CON=2TA. J3 PAN-ENG=3TA. 29 faltas → solo 3TA. Conservador confirmado.                                                      |2.5–3.5 ctx                          |
|**Drew Fischer**     |**CAN**|—    |**1**|**2**   |**1.5**   |**J2 FRA-IRQ=1TA. J3 CRO-GHA=2TA (Perišić CRO + Peprah Oppong GHA). 22 faltas → solo 2TA. Ultra-conservador en WC26.**             |**1.5–2.5 ctx (base muy baja)**      |
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

> **Fischer rev31:** CRO-GHA = 2TA en partido con 22 faltas. WC26 acumulado: 3TA en 2 partidos = 1.5 TA media. Perfil ultra-conservador confirmado. Base siguiente designación: 1.5–2.5 dependiente de tensión.

-----

## MERCADOS DE TIEMPO PARCIAL

**MP-1 — Suplente gol/asist 2H cuando partido ≤1 gol:** Rev31: No aplica (gol en 1ªP ya). Patron R13 CB rival activo en 2ªP (Luckassen 2-1). Suplentes CRO (Vlašić, Matanović) participaron en goles pero como titulares en ese momento.
**MP-2 — CRO gana HT/FT:** Sučić marcó en 1ªP → CRO lideró en HT. HT/FT CRO/CRO se cumplió. Patrón confirmado: cuando el favorito urgido marca en 1ªP, HT/FT tiene valor como mercado derivado.

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

### Partido 29 — Panamá 0-2 Inglaterra | 27 Jun 2026 | J3 Grupo L (comprimido)

**Real:** PAN 0-2 ENG. Goles 2ªP: Kane ~65' (asist. Bellingham), Bellingham ~75' (1G+1A). Saka 1A. 10 córners (PAN 4 + ENG 6). 3TA (Andrade+Fajardo PAN, Quansah ENG). 29 faltas. PAN ~18 entradas. Pickford 2 paradas. | ✅ ENG −1.5 (R4 7/7), BTTS No (R1 17/24), Over 7.5c, Saka G+A (R7 11/14), Bellingham gol. ❌ Over 2.5 goles (2 exactos — R34 nueva), Suplente ENG gol (0-0 al 60' → trigger no activo). | Claves: R34 nueva (inferior ≥2p sin marcar → Over 1.5 primario), R6+R13 trigger estricto ≤60'.

-----

### Partido 30 — Croacia 2-1 Ghana | 28 Jun 2026 | J3 Grupo L

**Predicción:** CRO 44% / X 29% / GHA 27%. Perišić asist. anytime ★★★ (R7). BTTS No ★★★ (R1). Under 2.5G ★★ (R2). Over 7.5c ★★ (R5). Ghana no pierde ★★ (R29). Budimir anytime ★ (&ge;3.80).

**Real:** CRO 2-1 GHA. Sučić 1-0 (1ªP, asist. Kovačić). Vlašić 2-0 (2ªP, asist. Modrić). Luckassen 2-1 (2ªP, asist. Nuamah). Córners: 0 en 1ªP + 5 en 2ªP = **5 totales**. Tarjetas: 2 TA (Perišić CRO + Peprah Oppong GHA). Faltas: 22. Tiros: 14. SOnT: 5. Perišić: 1 SOnT 1ªP, 0 remates 2ªP, 1 TA, 0G0A. Budimir: titular, 0 goles, 0 remates, 3FC.

**Balance:**
✅ **1X2 CRO gana** (2-1. R4 victoria 8/8 perfecta). ✅ **Under 3.5 amarillas** (2 TA totales. Fischer WC26 ultra-conservador confirmado: 1.5 TA media). ✅ **(retroactivo) Over 2.5 goles** (3 goles — 3º por R13 CB urgido).
❌ **Perišić asistencia anytime** (0G0A. Gol 1ªP fue de Sučić/Kovačić, no del lateral. R35 nueva). ❌ **BTTS No** (Luckassen CB marcó 2-1. R13 CB rival urgido activa). ❌ **Under 2.5 goles** (3 goles — R13 CB urgido rompió el Under). ❌ **Over 7.5 corners** (5 totales — R22 gol temprano suprimió corners: 0 en 1ªP). ❌ **Ghana no pierde** (GHA perdió 1-2. Bloque de Queiroz cedió ante CRO urgida con gol temprano). ❌ **Budimir anytime** (0 goles. Titular, 0 remates).

**Claves rev31:**
- **R35 NUEVA:** Primer gol del favorito marcado por MC antes del 30' → props R7 lateral quedan invalidadas. Sučić (MC) marcó en 1ªP; Perišić dejó de ser el eje del ataque.
- **R22 CONFIRMADA (3er caso):** 0 corners en 1ªP tras gol temprano. 5 totales. Cuando el favorito marca antes del 30', reducir Over corners −35% y cambiar a Under como selección primaria.
- **R13 CB URGIDO ACTIVA:** Luckassen (CB Ghana) marcó el 2-1 cuando GHA se urgió al descuento. R13 CB rival se activa cuando el inferior recibe 2 goles antes del 75'. Añadir condición R1: si 2-0 antes del 75', P(BTTS Sí) +15pp.
- **Fischer WC26 ultra-conservador:** 2 TA en CRO-GHA con 22 faltas. WC26 media: 1.5 TA/partido. Base eliminatorias: 1.5–2.5 TA.
- **Bloque Queiroz cedió ante urgencia real:** Con CRO marcando en 1ªP y urgida a ganar, el bloque de GHA no aguantó. El plan de Queiroz funciona contra favoritos que no marcan temprano.

-----

## RESUMEN DE SESGOS ACTIVOS

|Sesgo                                                                    |Descripción                                                                                          |Regla correctora                                                                       |
|-------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------|
|**NUEVO R35** Gol MC <30' invalida prop lateral R7                       |Si el primer gol del favorito es de un MC antes del min 30, el lateral deja de ser eje del ataque   |R35: filtrar probabilidad de gol MC antes de seleccionar R7. Si >40%, rebajar −20pp   |
|**CONFIRMADO R22** Gol temprano suprime corners (3er caso)               |0 corners en 1ªP cuando favorito marca antes del 30'. 5 totales vs proyección 8.5                   |R22: gol favorito <30' → Over corners skip; pasar a Under. Reducción −35% corners     |
|**NUEVA COND. R1** BTTS sí cuando 2-0 antes del 75'                     |CB inferior llega al área urgido (R13 rival). Luckassen: 6º caso CB rival marcando en urgencia      |R1: si el partido llega a 2-0 antes del 75', subir P(BTTS Sí) +15pp                  |
|**CONFIRMADO R13 CB** Rival urgido manda CB al área                      |Luckassen (CB Ghana) marcó con asistencia de Nuamah urgido al descuento                             |R13: aplicar también al equipo que pierde 0-2 antes del 75' como candidato a marcar   |
|**NUEVO R34** Over 2.5 débil en asimetría + inferior defensivo           |2-0 es moda real; 3er gol suele ser CB urgido rival (R13), no apertura del bloque                   |R34: Over 1.5 primario; el 3er gol en asimetría defensiva suele ser R13 CB rival      |
|**REFINADO R6+R13** Trigger tardío invalida patrón suplente              |Si 0-0 al 60', titulares consumen goles tardíos y dejan sin protagonismo SUP                         |R6+R13: trigger ≤60' estricto; si 0-0 a 60', skip o reducción stake                  |
|**VALIDADO R7** Umbral entradas rival ~18 ≠ bloqueo extremo             |PAN ~18 entradas = R7 válida. KSA 29 entradas = R7 nula. R35 añade nuevo filtro de MC gol           |R7: activar ≤20 entradas, suprimir ≥25, reducir −20pp si P(MC gol <30') >40%         |
|**CONFIRMADO R4** Victoria favorito 8/8 perfecta                         |CRO ganó 2-1. R4 victoria perfecta. Goles: Over 2.5 se cumplió pero 3º fue R13 CB urgido            |R4: hándicap y victoria fiables; Over 2.5 contextualizar con R13 CB rival             |
|**Fischer WC26** Ultra-conservador confirmado                            |1.5 TA media WC26 (3 TA en 2 partidos). Base mínima del torneo junto a Sampaio                      |Base 1.5–2.5 en eliminatorias. Under amarillas siempre como selección cuando arbitre  |
|**R33** Urgido sin capacidad ofensiva → bloquea pese a urgencia          |xG ≤0.50/partido en torneo = bloqueador táctico incluso necesitando ganar                           |R33: activar R1+R2; verificar xG histórico urgido antes de R21                        |
|**R21 corregida** Urgencia bilateral falla sin capacidad ofensiva        |R21 activa solo si urgido tiene xG ≥1.00/partido Y rival con GC. Urgencia reactiva (2-0 antes 75') |R21: verificar xG real + condición reactiva: 2-0 antes 75' = urgencia sobrevenida     |
|**R28** Bloque ultra-defensivo suprime corners                           |≥25 entradas rival = bloque total. Distinguir de R22 (causa dinámica vs estructural)                |R28: reducir −30% si rival ≥25 entradas. R22 actúa independientemente                |
|Props Tipo A titular sobrevaluados                                       |Budimir titular 0G. El mercado sobrevalora al DC en contexto de partido resuelto rápido              |R12: −8pp automático. EXCEPTO suplente vs rival muy inferior (R25)                    |
