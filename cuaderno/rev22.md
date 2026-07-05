# Cuaderno de Aprendizaje — Mundial 2026

## Revisión 22 | Actualizado: 25 Jun 2026

-----

## ESTADO GENERAL DEL MODELO

**Actualizado tras partido 21 (Ecuador 2-1 Alemania, J3 Grupo E, 25 Jun 2026)**

- **1X2 dirección: 16/21 (76.2%) ⚠ FALLO rev22** — ECU 2-1 GER. El 13% se materializó. R11 (3/5 condiciones PASS) redujo correctamente a GER de 77% a 65%, pero no fue suficiente. Rotaciones masivas + motivación asimétrica extrema + crisis de gol superada = resultado de upset. La racha 1X2 baja al 76%.
- **BTTS No: 14/17 ❌ FALLO rev22** — Ambos marcaron (ECU 2G, GER 1G). Tercer fallo. R1 seguía activa (xG ECU 0.75), pero la motivación de ECU (“o marcas o te vas”) y las rotaciones alemanas crearon condiciones de conversión real. R21 debe extenderse: cuando el equipo con xG <0.80 tiene urgencia clasificatoria unilateral máxima (eliminación directa), SKIP R1.
- **Corners: 5 total → Over 7.5 ❌ FALLO** — Partido abierto, físico y con pocos golpes de estrategia defensiva. Solo 5 corners. Error de modelo: asumimos que urgencia = más corners, pero el ritmo dinámico (2 goles en 1ªp, partido vivo) suprimió el juego de balón parado. Patrón nuevo detectado: partidos abiertos con múltiples goles en 1ªp generan corners bajos.
- **Tarjetas: 4 amarillas → Over 2.5 amar. ✅ / Under 2.5 amar. ❌** — Penso otorgó 4 en total (Hincapié + Franco ECU / Pavlović + Plata GER). Más activa de lo esperado con el partido vivo y físico. Confirma que el dato de J1=2 amar. de Penso no refleja partidos tensos/físicos.
- **R7 lateral/extremo ECU ✅** — Angulo (EXT izquierdo ECU) marcó en 1ªp. Tipo C del equipo que termina ganando. R7 se activa también en el equipo sorpresa cuando el favorito pierde. Racha R7 ampliada: 8/8 (ahora en ambos sentidos).
- **Plata Tipo C ✅** — Plata marcó el 2-1 decisivo en 2ªp. Dos Tipo C del mismo equipo marcaron (Angulo + Plata). R20 validada: cuando hay 2 Tipo C, el gol puede ir a cualquiera. Racha Props Tipo C: mejorada.
- **R13 suplente Tipo D ✅ (LADO ECU)** — Rodríguez (suplente ECU no obvio) dio la asistencia del 2-1 a Plata en 2ªp. R13 se activa en ambos equipos, no solo en el favorito. R6 esencia: partido vivo (1-1) al entrar → suplente contribuyó.
- **Undav ❌** — 0 contribución real (entró tarde, 0 tiros). Tipo B/D sin impacto. Las rotaciones masivas de GER generaron un equipo descoordinado sin química suficiente para el partido.
- **Vite asistencia ✅ inesperada** — Vite (MC lateral ECU, sin tiros) dio asistencia al gol de Angulo. Perfil creador inesperado. Confirma que en partidos de upset, la asistencia va a perfiles no predichos.
- **Wirtz asistencia ✅** — Dio el pase del gol de Sané. 0 SOnT pero asistencia. Confirma que asistencia ≠ requiere SOnT del creador cuando el juego es fluido.

-----

## REGLAS OPERATIVAS CONSOLIDADAS

### R1 — BTTS No con xG rival <0.80

**Racha: 14/17 ⚠ | Confianza: MEDIA (muy condicionada) | Stake: Kelly ×0.10**
Tres fallos acumulados. Rev22: extender R21 explícitamente — SKIP R1 cuando el equipo con xG <0.80 tiene urgencia clasificatoria unilateral máxima (eliminación directa si no marca). ECU tenía xG 0.75 pero la urgencia total hace que el xG real sea incierto. Nuevo threshold operativo:

- xG rival <0.70 + sin urgencia de marcar: R1 plena (Kelly ×0.15)
- xG rival 0.70–0.80 + rival urgido a marcar (eliminación): **SKIP R1**
- xG rival <0.70 + rival urgido a marcar (eliminación): R1 reducida (Kelly ×0.08)

### R2 — Under 2.5 vs bloque organizado real

**Racha: 8/10 ⚠ | Confianza: ALTA (condicionada) | Stake: Kelly ×0.15**
Rev22: Under 2.5 no aplica cuando el inferior tiene urgencia de eliminación Y el favorito rota masivamente (≥7 cambios). La combinación urgencia-extrema + rotaciones-masivas crea condiciones de apertura táctica que producen 3+ goles.

### R3 — Ajuste xG bloque profundo

Sin cambios estructurales. Rev22 matiz: si el equipo que defiende en bloque tiene urgencia total, el xG real supera el proyectado incluso más que R16 (+0.20). Considerar +0.30 xG cuando es eliminación directa.

### R4 — Over 2.5 asimetría extrema (ranking >50)

**Racha: 5/5 ✅ | Sin cambios.**

### R5 — Corners: distinción por estilo

**Rev22 nueva observación:** partidos con 2+ goles en la 1ª parte generan ritmo dinámico que suprime corners (ambos equipos en transición, no en posesión estática). ECU-GER: 5 corners pese a urgencia y presión. Reducir proyección corners cuando xG total 1ªp >1.5 (partido abierto desde el inicio).

### R6 — Patrón suplente goleador

**Racha esencia: 10/10 ✅ condicionada | Confianza: MUY ALTA (condicionada)**
Rodríguez (SUP ECU no obvio) asistió el 2-1 de Plata en 2ªp con partido vivo (1-1). R6 se confirma en ambos equipos, no solo en el favorito. Condición clave: partido ≤1 gol de diferencia al entrar el suplente.

### R7 — Patrón lateral/extremo ofensivo goleador/asistencia

**Racha: 8/8 ✅ | Confianza: MÁXIMA | Stake: Kelly ×0.25**
Rev22: Angulo (EXT izquierdo ECU, equipo sorpresa) marcó. R7 aplica en el equipo que termina ganando, independientemente de si es favorito o underdog. Ajuste conceptual: R7 = “en el equipo ganador, un extremo/lateral participa en el marcador”. No restringir al favorito.

### R8 — Creador central asistencia

**Rev22:** Wirtz asistió el gol de Sané con 0 SOnT propios. Confirma que la asistencia del creador no requiere tiros propios en partidos de ritmo alto. Sin embargo, R8 en contexto de previsión (apostar por asistencia de un creador) sigue requiriendo 6+ SOnT del equipo para tener volumen suficiente. En GER-ECU el equipo tuvo 9 tiros 1ªp → R8 podría haberse activado, pero con partido tan abierto la dispersión de asistencias es alta.

### R9 — Excepción motivación histórica estrella

Sin cambios. Solo Messi y Ronaldo (2/2 cada uno).

### R10 — Prop tarjeta: árbitros

**Tori Penso WC26:** J1=2 amar. (CZE-RSA) · J2=4 amar. (ECU-GER, partido tenso/físico). Media WC26 = 3.0. Perfil bimodal confirmado: conservadora en partidos fluidos, activa en partidos físicos/tensos. Base próximo partido: 2.0-3.0 según contexto.

- **Regla nueva Penso:** partido con urgencia máxima + físico → base 3.5-4.0. Partido fluido → base 1.5-2.0.
- Regla general debut WC sin cambios (2.0-2.5 base).
- RC temprano −40%. Partido fluido sin tensión −40%.

### R11 — Checklist confianza 1X2

Rev22: 3/5 condiciones PASS redujo GER de 77% a 65%. El resultado real (ECU gana 2-1) entró dentro del 13% residual. El checklist funcionó correctamente como señal de cautela pero el resultado fue el extremo. Sin cambios estructurales. La reducción de probabilidad es válida, pero cuando R11 activa ≥3/5 condiciones y además hay urgencia total del underdog + rotaciones masivas del favorito, añadir flag de “alta varianza — reducir stake”.

### R12 — Clasificación props de jugador

Sin cambios estructurales. Valencia (Tipo A) SKIP correcto: 1 tiro, 0 goles, 0 asistencias. La penalización Tipo A se confirma una vez más.

### R13 — Distribución suplentes múltiples Tipo D

**Racha: 6/6 ✅ en partidos vivos | Confianza: MÁXIMA**
Rev22: Rodríguez (SUP ECU, perfil no obvio) asistió el 2-1. Confirma que R13 aplica en el equipo underdog también, no solo en el favorito. R13 es universal: en cualquier equipo, el suplente que contribuye en partido vivo (≤1 gol) es a menudo el menos obvio.

### R14 — Dispersión asistencias en goleadas

Sin cambios. No aplicó en este partido (solo 2 goles ECU, no goleada).

### R15 — Pasividad táctica del equipo que puede especular

**Rev22 FALLO:** GER rotó 7+ jugadores pero NO especuló. Nagelsmann utilizó a Kimmich, Rüdiger, Tah, Wirtz, Musiala, Sané, Pavlović desde el inicio (mezcla de titulares y rotaciones). El bloque competitivo existió. La pasividad táctica esperada NO se materializó. Ajuste R15: la pasividad táctica depende más del marcador que de la clasificación previa. Si el equipo “ya clasificado” va perdiendo, abandona la administración y presiona → el resultado puede ser peor (GER fue a por el 2-1 pero no llegó).

### R16 — Bloque ultra-compacto con urgencia máxima

**Rev22:** Confirma que con urgencia bilateral en la 1ªp, el xG real supera la proyección. Aquí fue unilateral (urgencia ECU sola) pero el resultado fue 3 goles. Añadir ajuste: urgencia unilateral extrema (eliminación directa) + rotaciones masivas del favorito = +0.30 xG al equipo urgido y −0.15 xG al favorito rotado.

### R17 — Over 2.5 en altitud + rival urgente + banco profundo

Sin cambios. No aplicó (MetLife, nivel del mar).

### R18 — Tipo A excepción vs LD mediocre + urgencia total

Sin cambios.

### R19 — Tipo B baja prioridad cuando extremo domina

Sin cambios.

### R20 — Distribución stake entre múltiples Tipo C del mismo equipo

**Racha confirmada:** Angulo (1G) + Plata (1G) en ECU. Ambos Tipo C. Los dos marcaron. Rev22 refuerza: cuando hay 2 Tipo C en el equipo ganador, a menudo ambos contribuyen. R20 sigue activa: distribuir stake al 50% entre los dos candidatos Tipo C principales.

### R21 — R1 BTTS No condicionada por urgencia rival

**Tercer fallo.** Rev22 amplía: SKIP R1 cuando el equipo con xG proyectado <0.80 tiene urgencia de eliminación directa (necesita marcar para no ser eliminado), independientemente del nivel del xG. La urgencia de eliminación supera cualquier proyección estadística de xG.

### R22 — NUEVA rev22: Corners suprimidos en partidos con goles múltiples en 1ªp

Cuando el partido acumula 2+ goles en la primera parte (ritmo dinámico alto desde el inicio), la proyección de corners totales debe reducirse ~30%. Los equipos en transición constante generan menos situaciones de balón parado. ECU-GER: 5 corners pese a expectativa de 8-11. Modelo ajustado: Over 7.5 corners requiere partido con ≤1 gol en 1ªp o partido unilateral con favorito que domina sin urgencia.

### R23 — NUEVA rev22: Rotaciones masivas (≥7 cambios) del favorito generan alta varianza

Cuando el favorito rota ≥7 titulares simultáneamente, la descoordinación táctica es suficiente para que el underdog motivado gane. No asumir que “la profundidad del banco cubre las rotaciones”. Con ≥7 cambios: reducir P(victoria favorito) adicionalmente −15pp. GER rotó al menos 7-8 jugadores y perdió 1-2. Aplicar este ajuste en fases de grupos donde el favorito ya está clasificado y el underdog se juega la eliminación.

-----

## REGISTRO DE ÁRBITROS WC26 (rev22)

|Árbitro              |País   |J1   |J2   |J3|Media WC26|Perfil WC26                           |Base próx.     |
|---------------------|-------|-----|-----|--|----------|--------------------------------------|---------------|
|Danny Makkelie       |NED    |6    |3    |— |4.5       |Activo/físico                         |4.0–5.0        |
|Michael Oliver       |ING    |3    |3    |— |3.0       |Normal                                |3.0–3.5        |
|Wilton Sampaio       |BRA    |0    |—    |— |0.0       |Ultra-fluido                          |1.0–1.5        |
|Félix Fischer        |ALE    |1    |—    |— |1.0       |Fluido                                |1.5–2.0        |
|Pierre Atcho         |GAB    |0    |2    |— |1.0       |Conservador                           |1.5–2.0        |
|César Ramos          |MEX    |1    |3    |— |2.0       |Bimodal: fluido=1 / físico 2ªp=3      |2.0–2.5        |
|Said Martínez        |HON    |2    |—    |— |2.0       |Conservador                           |2.0–2.5        |
|Ramón Abatti         |BRA    |4    |3    |— |3.5       |Moderado/selectivo                    |3.0–4.0        |
|Facundo Tello        |ARG    |5    |2    |— |3.5       |Físico MC / conservador bloque        |2.5–3.5        |
|Yael Falcón Pérez    |ARG    |1    |1    |— |1.0       |Ultra-conservador WC                  |1.0–1.5        |
|Jesús Valenzuela     |VEN    |1    |2    |— |1.5       |Conservador estable                   |1.5–2.0        |
|**Tori Penso**       |**USA**|**2**|**4**|— |**3.0**   |**Bimodal: fluido=2 / tenso/físico=4**|**2.0–4.0 ctx**|
|Víctor Gomes         |RSA    |—    |—    |— |sin datos |—                                     |2.0–2.5 (debut)|
|Aliyar Aghayev       |AZE    |—    |—    |— |sin datos |—                                     |2.0–2.5 (debut)|
|Mustapha Ghorbal     |ALG    |—    |—    |— |sin datos |—                                     |2.0–2.5 (debut)|
|Ismail Elfath        |USA    |—    |—    |— |sin datos |—                                     |2.0–2.5 (debut)|
|Daniele Orsato       |ITA    |—    |—    |— |sin datos |—                                     |2.0–2.5 (debut)|
|Clément Turpin       |FRA    |—    |—    |— |sin datos |—                                     |2.0–2.5 (debut)|
|Slavko Vinčić        |SVN    |—    |—    |— |sin datos |—                                     |2.0–2.5 (debut)|
|Glenn Nyberg         |SUE    |—    |—    |— |sin datos |—                                     |2.0–2.5 (debut)|
|François Letexier    |FRA    |—    |—    |— |sin datos |—                                     |2.0–2.5 (debut)|
|Ivan Barton          |SLV    |—    |—    |— |sin datos |—                                     |2.0–2.5 (debut)|
|Daniel Siebert       |ALE    |—    |—    |— |sin datos |—                                     |2.0–2.5 (debut)|
|Felix Zwayer         |ALE    |—    |—    |— |sin datos |—                                     |2.0–2.5 (debut)|
|Marco Guida          |ITA    |—    |—    |— |sin datos |—                                     |2.0–2.5 (debut)|
|Rohit Saggi          |NOR    |—    |—    |— |sin datos |—                                     |2.0–2.5 (debut)|
|Abdulrahman Al-Jassim|QAT    |—    |—    |— |sin datos |—                                     |2.0–2.5 (debut)|
|Piero Maza           |CHI    |—    |—    |— |sin datos |—                                     |2.0–2.5 (debut)|
|Anthony Taylor       |ING    |—    |—    |— |sin datos |—                                     |2.0–2.5 (debut)|
|Szymon Marciniak     |POL    |—    |—    |— |sin datos |—                                     |2.0–2.5 (debut)|
|Bakary Gassama       |GAM    |—    |—    |— |sin datos |—                                     |2.0–2.5 (debut)|
|Janny Sikazwe        |ZAM    |—    |—    |— |sin datos |—                                     |2.0–2.5 (debut)|


> **Tori Penso rev22:** J1=2 amar. (CZE-RSA, fluido), J2=4 amar. (ECU-GER, tenso/físico). Media WC26=3.0. Perfil bimodal confirmado. Base próximo partido: depende del contexto — fluido: 2.0, físico/tenso: 3.5-4.0.

-----

## GESTIÓN DE BANKROLL (sin cambios estructurales)

|Tier                 |Criterio                                     |Fracción Kelly    |Stake típico    |
|---------------------|---------------------------------------------|------------------|----------------|
|★★★ Elite            |Racha ≥8/10 + criterios objetivos verificados|Kelly ×0.25       |~2–5% bankroll  |
|★★★ Alta             |Racha ≥6/8 + patrón sólido confirmado        |Kelly ×0.20       |~1.5–4% bankroll|
|★★ Media             |Racha ≥5/8 o patrón emergente (N<8)          |Kelly ×0.12       |~1–2.5% bankroll|
|★ Baja / Props Tipo A|Alta varianza o prop sin ventaja clara       |Kelly ×0.05 o skip|<1% bankroll    |
|🚫 Skip               |Props Tipo A cuota corta + EV <+5%           |No apostar        |—               |

**Flag nueva rev22:** cuando R11 activa ≥3/5 condiciones + urgencia total underdog + rotaciones masivas favorito (≥7) → reducir stake de toda selección a máximo Kelly ×0.12 independientemente del tier. Alta varianza estructural.

### Tracking de ROI acumulado

|Mercado                         |Aciertos/Total|ROI est.|Tendencia                                                    |
|--------------------------------|--------------|--------|-------------------------------------------------------------|
|Lateral/extremo ofensivo R7     |8/8           |+++     |↑ Angulo 1G (ECU). R7 aplica en equipo ganador (any side).   |
|Suplente goleador esencia R6    |10/10         |+++     |↑ Rodríguez (SUP ECU no obvio) asistió 2-1. Universal.       |
|Over 2.5 asimetría extrema R4   |5/5           |+++     |↑ No jugado. Racha intacta.                                  |
|R13 distribución suplentes      |6/6           |+++     |↑ Rodríguez SUP ECU no obvio. Universal (ambos equipos).     |
|R20 dos Tipo C mismo equipo     |2/2           |+++     |↑ Angulo + Plata ambos marcaron. Distribuir siempre.         |
|Bruno G. asistencia R8 (cond.)  |3/3           |+++     |↔ No jugado.                                                 |
|1X2 dirección favorito          |16/21         |+       |↓ Fallo ECU 2-1 GER. Racha baja a 76%.                       |
|BTTS No (xG rival <0.80)        |14/17         |+       |↓ 3 fallos. R21+R22 activas. Usar solo con mucha cautela.    |
|Under 2.5 vs bloque R2          |8/10          |++      |↓ Fallo ECU-GER (3 goles). R22: urgencia + rotaciones = Over.|
|Under 2.5 amar. árbitros conserv|3/4           |+       |↓ Fallo Penso J2=4 amar. Penso bimodal confirmado.           |
|Corners Over 7.5                |8/10          |+       |↓ Fallo ECU-GER (5 corners). R22: goles 1ªp suprimen corners.|
|Props Tipo C (lateral/extremo)  |9/11          |++      |↑ Angulo + Plata. Distribuir entre 2 Tipo C = correcto.      |
|Props Tipo B/D segunda línea    |10/17         |+/−     |↔ Vite asistencia inesperada. Dispersión alta.               |
|Props Tipo A (delantero obvio)  |~8/22         |−/+     |↔ Valencia SKIP correcto (0G 0A WC26).                       |

-----

## MERCADOS DE TIEMPO PARCIAL

**MP-1 — Suplente gol/asist 2H cuando partido ≤1 gol:** 10/10 ✅ (Rodríguez SUP ECU asistió con 1-1 en juego)
**MP-2 — No más goles 2H con 0-0 al HT:** No aplicó (partido con goles en 1ªp).
**MP-3 — Over 0.5 goles 2H con 0-0 al HT:** No aplicó.
**MP-4 — HT x-x / FT Victoria:** 1-1 al HT → victoria ECU al FT. Mercado de alta varianza en partidos equilibrados.
**MP-5 — Over 1.5 goles 2H en altitud + rival urgente:** No aplicó (nivel del mar).
**MP-6 — Corners Over X.5 2ªp perdedor urgente:** No activó en ECU-GER (GER perdedor con 1-1 tuvo 1 corner en 2ªp; ECU ganando no acumuló corners). R22: si el partido se equilibra con el marcador, MP-6 pierde validez.

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

### Partido 21 — Ecuador vs Alemania | 25 Jun 2026 | J3 Grupo E · MetLife Stadium, NJ

**Predicción:** GER 65% / X 22% / ECU 13%. BTTS No ★★★. Over 7.5c ★★. Under 2.5 amar. ★. Undav anytime ★★. GER o Empate DC ★★. BTTS No ★★★. Skip Valencia (Tipo A). Árbitro: Tori Penso (USA).

**Real:** ECU 2-1 GER. HT 1-1. Goles: Angulo (EXT I ECU, 1ªp, asistencia Vite) + Plata (EXT D ECU, 2ªp, asistencia Rodríguez SUP). Sané 1G GER (1ªp, asistencia Wirtz). Stats: GER 18 tiros / ECU 9 tiros. SOnT: 6 GER / 3-4 ECU. Posesión: GER ~65% / ECU ~35%. Corners: 5 total (3 ECU + 2 GER). Amarillas: 4 (Hincapié+Franco+Plata ECU / Pavlović GER). Paradas: Galíndez 2 / Neuer 2. Wirtz: 1A, 0 SOnT. Vite: 1A, 0 tiros. Rodríguez (SUP ECU): 1A. Undav: 0 contribución. Valencia: 1 tiro, 0G.

**Balance:**
✅ R7: Angulo 1G (EXT ECU ganador — R7 aplica en equipo ganador cualquier lado, racha 8/8). R7: Plata 1G también (segundo Tipo C). ✅ R20: 2 Tipo C ECU ambos marcaron — distribuir correcto. ✅ R13/R6: Rodríguez (SUP ECU no obvio) asistió con partido 1-1 (racha 10/10). ✅ Skip Valencia (Tipo A) correcto: 0G 0A, 1 tiro. ✅ BTTS Sí (si alguien lo apostó).
❌ **1X2 GER** (ECU ganó 2-1 — 13% materializado). ❌ **BTTS No** (ambos marcaron — fallo R1 3/17). ❌ **Over 7.5c** (solo 5 corners — R22 nueva: goles 1ªp suprimen corners). ❌ **Under 2.5 amar.** (4 amarillas — Penso bimodal J2=4 en partido tenso). ❌ **Undav anytime** (0 contribución real — SUP tardío sin partido vivo al entrar). ❌ **DC GER/X** (ECU ganó).

**Claves rev22:**

- **R22 nueva:** 2 goles en 1ªp = ritmo alto = corners suprimidos (5 total vs 8-11 proyectados). Reducir corners cuando xG total 1ªp >1.5.
- **R23 nueva:** Rotaciones ≥7 del favorito + urgencia eliminación underdog = alta varianza estructural. GER rotó 7-8 titulares y perdió. Añadir −15pp adicional a P(victoria favorito) en este escenario.
- **Penso bimodal confirmado:** J1=2 (CZE-RSA fluido) / J2=4 (ECU-GER tenso). No usar bajo como base en partidos con alta carga emocional.
- **R7 universal:** El lateral/extremo ofensivo del equipo GANADOR (no solo del favorito) participa en el marcador. 8/8 racha.
- **R1 fallo 3/17:** BTTS No no aplica cuando el equipo con xG <0.80 tiene urgencia de eliminación directa. Skip obligatorio en ese perfil.
- **Vite asistencia inesperada:** Perfiles de mediocampista lateral sin tiros pueden asistir en partidos de transición rápida. No se puede predecir. Confirma dispersión asistencias en partidos abiertos.
- **Undav:** Entró demasiado tarde con GER ya perdiendo y sin opción táctica. R6 no aplica cuando el equipo “favorito” va perdiendo y el suplente entra en modo desesperado sin estructura.

-----

## RESUMEN DE SESGOS ACTIVOS

|Sesgo                                                 |Descripción                                                              |Regla correctora                                                                 |
|------------------------------------------------------|-------------------------------------------------------------------------|---------------------------------------------------------------------------------|
|Conservadurismo marcador asimetría extrema            |Modelo subestima goles con diferencia ranking >50                        |R4: +1-2 goles a la moda                                                         |
|BTTS No con urgencia unilateral de eliminación        |Equipo que necesita marcar para sobrevivir supera xG proyectado          |R21+R22: SKIP R1 si el inferior tiene urgencia de eliminación directa            |
|BTTS No con ventaja amplia                            |Si favorito llega a +3 antes min 70, rival puede marcar                  |R1 excepción rev16: +8pp P(gol rival)                                            |
|Corners en partidos con goles múltiples en 1ªp        |Ritmo alto en 1ªp suprime balón parado y corners totales                 |R22: reducir proyección corners ~30% cuando 2+ goles en 1ªp                      |
|Over 9.5 corners en partidos equilibrados             |Urgencia bilateral = distribución uniforme, no acumulación               |R5 rev21: Over 9.5 solo en partidos unilaterales                                 |
|Rotaciones masivas favorito sin penalización adicional|≥7 rotaciones simultáneas = descoordinación estructural                  |R23: −15pp adicional P(victoria favorito) con ≥7 rotaciones + underdog urgido    |
|R15 pasividad táctica del clasificado                 |El favorito clasificado puede abandonar la administración si va perdiendo|R15 rev22: la pasividad depende del marcador, no solo de la clasificación previa |
|Suplente goleador: jugador exacto                     |Con 2+ suplentes D, concentrar en el más famoso es error                 |R13: distribuir siempre. Universal (aplica en ambos equipos)                     |
|Suplente goleador: partido resuelto                   |R6 no aplica cuando partido ya está cerrado (>1 gol) al entrar           |R6 rev20: solo aplica con marcador ≤1 gol al entrar                              |
|R6/R13 solo en el favorito                            |R6 y R13 aplican en el equipo ganador, sea cual sea                      |R6+R13 rev22: universal — el suplente contribuyente puede ser del underdog       |
|Props Tipo A (delantero obvio)                        |El mercado los sobreestima casi siempre                                  |R12: −8pp automático. Valencia 0G 0A WC26 = confirmación perfecta                |
|Concentración en un Tipo C cuando hay dos candidatos  |Gol va al Tipo C no favorito cuando hay 2 candidatos válidos             |R20: distribuir stake al 50% entre 2+ Tipo C del mismo equipo                    |
|Árbitro Penso: base baja universal                    |Penso puede ser activa en partidos físicos/tensos (J2=4 amar.)           |R10 Penso bimodal: fluido=2 / tenso=3.5-4.0. No usar J1 como base universal      |
|Árbitro debut WC conservador                          |Debut WC = base 2.0-2.5 independiente del historial                      |R10 + tabla árbitros                                                             |
|Under 2.5 en urgencia + rotaciones masivas            |Urgencia underdog + rotaciones favorito = partido abierto con 3+ goles   |R22+R23: Over 2.5 en ese escenario                                               |
|Tipo B queda sin protagonismo con extremo dominante   |Si extremo Tipo A marca 2G, la segunda línea no marca                    |R19: reducir stake Tipo B si extremo domina en 1ªp                               |
|xG real supera proyección con urgencia bilateral      |Ambos urgidos → xG real de cada uno +0.20 sobre proyección               |R16 rev21: +0.20 xG ambos equipos en urgencia bilateral                          |
|xG urgido de eliminación directa                      |Urgencia unilateral extrema eleva xG real +0.30 vs proyección            |R16 rev22: +0.30 xG equipo urgido de eliminación directa vs favorito rotado      |
|Excepción motivación histórica                        |Solo válida para récords Messi y Ronaldo                                 |R9: no extrapolar a otros jugadores                                              |
|1X2 con asimetría motivacional táctica                |Especular con empate ≠ no perderá                                        |R15+R16: −10pp al favorito que especula vs débil urgente                         |
|xG superior no garantiza victoria                     |Portero élite puede suprimir conversión masivamente                      |Factor portero cuando GK tiene 5+ paradas en torneo                              |
|Asistencias en goleadas dispersas                     |Con ≥3 goles, asistencia va a múltiples jugadores                        |R14: no apostar asistencia específica con moda ≥3 goles — excepción creador único|
|Vite/perfiles inesperados en asistencias              |Mediocampista lateral sin tiros puede asistir en transición rápida       |Sin regla específica. Confirma alta dispersión asistencias en partidos abiertos  |