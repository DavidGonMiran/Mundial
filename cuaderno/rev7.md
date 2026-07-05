# Cuaderno de Aprendizaje — Mundial 2026

## Estado general del modelo

**Actualizado tras partido 7 (Turquía 0-1 Paraguay, J2 Grupo D, 20 Jun 2026)**

- Mercados donde el modelo acierta de forma consistente: Dirección 1X2 (victoria favorito, 6/7 — primera derrota del favorito predicho ⚠️), BTTS No ante equipos con xG bajo (6/6 ✅ racha perfecta), Over 7.5 corners con dominio unilateral (6/7 ✅), Under 2.5 en tensión táctica (cuando aplica correctamente, 4/4 ✅).
- Mercados donde el modelo falla de forma consistente: Goleador ★★★ con 0 remates en 1ªp = sustitución/nulidad garantizada (Malen rev6, Aktürkoğlu rev7 — patrón 2/2). Dirección 1X2: primer fallo del torneo — PAR ganó 0-1 siendo 25% en el modelo. Tarjetas: infraestimación de la roja cuando un equipo protege jugadores con amarilla acumulada bajo presión de eliminación.
- Sesgos detectados y actualizados:
  - **Sesgo de confianza excesiva en el favorito con alto talento pero bloqueo mental activo** — **[NUEVO rev7, CRÍTICO]** TUR repitió exactamente el patrón de vs Australia: 39 remates totales (16+23), 7 SOnT, 0 goles. Gill hizo 5 paradas. El modelo asignó 48% a TUR y falló la dirección. La ineficacia goleadora de TUR no era un outlier vs AUS — es un patrón estructural de este equipo en este torneo. Regla nueva: cuando un equipo muestra 0 goles en ≥1 partido con ≥20 remates, aplicar penalización del 10-12% a su probabilidad de victoria hasta que confirme capacidad goleadora.
  - **Sesgo del goleador ★★★ con rendimiento nulo en 1ªp** — CONFIRMADO 2/2 (Malen rev6, Aktürkoğlu rev7). Aktürkoğlu: 0 remates en 1ªp (5 pases totales), sustituido en 2ªp con 0 participación. La regla de penalización 15-20% por riesgo de sustitución queda confirmada y ampliada: si el jugador tiene 0 SOnT + <10 pases en 45', la probabilidad efectiva de gol cae al 5-8%, prácticamente eliminada.
  - **Sesgo de subestimación de la roja en contexto de acumulación de amarilla bajo presión de eliminación** — **[NUEVO rev7]** Almirón tenía 1 amarilla acumulada, sabía que una nueva = suspensión J3. Sin embargo fue expulsado con RC directo en 1ªp. El modelo lo contempló como factor de auto-regulación pero el contexto de eliminación inminente (PAR perdía tácticamente) puede generar lo contrario: agresividad desesperada. Regla: en jugadores con 1 amarilla acumulada cuyo equipo está siendo dominado sin generar, el riesgo de RC directo sube (no baja) — desesperación táctica.
  - **Sesgo de conservadurismo en goles con asimetría extrema** — CONFIRMADO 2/2. No aplica aquí.
  - **Sesgo de sobreestimación xG favorito vs bloque bajo** — RECONFIRMADO en partido no-asimetría. TUR xG estimado 1.65, real ~0.0 en goles. El bloque bajo de PAR (organizado, sin necesidad de atacar tras el 0-1) fue infranqueable. La reducción del xG cuando el rival defiende profundo aplica también en contextos de presión media cuando el equipo defensivo logra el gol primero.
  - **Sesgo de árbitro debut WC / reciente calibrado** — CONFIRMADO. Barton: 2 amarillas totales (1+1) vs estimación 3.8. Incluso menos que la estimación conservadora del modelo. La regla de debut WC usando base 2.8-3.2 sigue siendo correcta. El partido tuvo 1 RC (Almirón) que compensó en intensidad pero no en amarillas. Patrones de tarjetas en partidos con RC temprano: el árbitro tiende a reducir las amarillas posteriores.
  - **[NUEVO rev7] Sesgo de neutralización del goleador estrella en partidos de bloqueo emocional.** Güler: 2+1=3 remates totales, 0 SOnT en 2ªp a pesar de 7+34=41 pases y 1+7=8 centros. Activo pero inocuo. Çalhanoğlu: 6+3=9 remates totales, 0 goles. El patrón es claro: TUR crea volumen pero no finiquita. En equipos con este patrón confirmado en ≥2 partidos, reducir prob. de gol del delantero titular en 8-10pp.
  - **[NUEVO rev7] Marcador 0-1 PAR confirma el valor del partido equilibrado para el equipo "perdedor moral".** PAR llega derrotado 0-4 vs USA, se le da 25% de victoria, y gana. El factor "equipo humillado que se repliega y marca en contragolpe" tiene más valor del que el modelo asigna. Contexto PAR: 0 puntos, eliminación inminente, táctica de bloque máximo y contragolpe = escenario donde una derrota anterior brutal aumenta la motivación táctica, no la reduce.

- Ajustes consolidados (definitivos en el modelo):
  - Asimetría extrema (ranking >50 pos.): Over 2.5 base; goleador estrella al 35-45%; moda del marcador +1 gol si xG>2.0.
  - Tensión táctica (ambos igualados en puntos): Under 2.5 +8-10pp; goleador 2ª línea contemplado.
  - Equipo con ≥20 remates y 0 goles en partido anterior: penalizar -10-12pp su prob. de victoria en el siguiente.
  - Goleador anytime con 0 SOnT + <10 pases en 1ªp: prob. efectiva cae a 5-8% → no recomendar como selección live.
  - Árbitro debut WC: base 2.8-3.2 amar/pj. Árbitro en partido con RC temprano: reducir estimación de amarillas posteriores un 20-25%.
  - BTTS No con xG rival <0.80: confianza directa 72-78% ✅ racha 6/6.
  - Corners Over 7.5 con dominio unilateral: sistemático ✅ — pero con bloque muy profundo y RC temprano (PAR jugó con 10 la 2ªp completa), los corners suben aún más: 11 totales en este partido.
  - Equipo humillado en partido anterior (derrota >2 goles) que llega a partido de eliminación: contemplar +3-5pp en su prob. de victoria por factor motivacional táctica defensiva extrema.
  - Árbitro élite UEFA +1 sobre media: solo en partidos físicamente tensos y cerrados sin goles tempranos.
  - Marcador más probable: en dominio de mediocampo sin gol = añadir +0.5 goles a la moda del equipo dominado (gol de contragolpe).

====================================================

## Historial de partidos

### Partido: Canadá vs Qatar — 18 Jun 2026 (J2 Grupo B)

**Predicción:** CAN 62% / X 19% / QAT 19%. Under 2.5 al 53%. EV+: BTTS No, David anytime 35%, Over 7.5 corners, CAN -1.5.
**Resultado real:** Canadá 6-0 Qatar · David hat-trick · 2 rojas · 20 corners · 4 amarillas.
**Balance:** ✅ 1X2, BTTS No, David anytime, Over corners, CAN hándicap. ❌ Under 2.5 (fallo grave).
**Sesgo clave:** Conservadurismo en goles con asimetría extrema. Expulsiones bajo asedio multiplican goles.

====================================================

### Partido: México vs Corea del Sur — 18 Jun 2026 (J2 Grupo A)

**Predicción:** MEX 46% / X 27% / KOR 27%. Over 2.5 ★★★ (54%). BTTS Sí (52%). Over 3.5 amarillas ★★★ (65%).
**Resultado real:** México 1-0 · Gol: Luis Romo (MC, sin prob.) · 2 amarillas · 7 corners.
**Balance:** ✅ 1X2, marcador 1-0, BTTS No. ❌ Over 2.5 ★★★, Over 3.5 amarillas ★★★, BTTS Sí.
**Sesgo clave:** Tensión táctica en equilibrio de puntos suprime goles. Outlier arbitral no extrapolable. Gol en segunda línea.

====================================================

### Partido: Escocia vs Marruecos — 19 Jun 2026 (J2 Grupo C)

**Predicción:** MAR 46% / X 26% / SCO 28%. Under 2.5 ★★. BTTS No ★★★ (70%). Saibari anytime 32%.
**Resultado real:** Marruecos 1-0 · Saibari gol · Asistencia: Brahim Díaz · 2 amarillas · 7 corners.
**Balance:** ✅ 1X2, marcador 1-0 (3/3), BTTS No, Under 2.5, Saibari anytime. ❌ Hakimi asistencia, Over 7.5 corners.
**Sesgo clave:** xG favorito vs bloque bajo sobreestimado. Árbitro debut WC = base conservadora. Asistencia: mediapunta sobre lateral.

====================================================

### Partido: Estados Unidos vs Australia — 19 Jun 2026 (J2 Grupo D · Seattle)

**Predicción:** USA 52% / X 24% / AUS 24%. BTTS No ★★★ (72%). Over 7.5 corners ★★★. Over 3.5 amarillas ★★★ (68%). McKennie anytime ★★. Marcador: 1-0 USA.
**Resultado real:** USA 1-0 · Gol: Freeman (RB) · 7 amarillas · 11 corners.
**Balance:** ✅ 1X2, marcador 1-0 (4/4), BTTS No, Under 2.5, Over corners, Over amarillas. ❌ McKennie anytime, USA -1.5.
**Sesgo clave:** Goleador lateral ofensivo en partidos de 1 gol. Árbitro élite UEFA +1 en partido físico. Paradas portero reducir con posesión rival <40%.

====================================================

### Partido: Brasil vs Haití — 19/20 Jun 2026 (J2 Grupo C · Filadelfia)

**Predicción:** BRA 76% / X 15% / HAI 9%. Over 2.5 ★★. BTTS No ★★★ (78%). Over 7.5 corners ★★★. Vinícius anytime 38% ★★★. Cunha anytime 28% ★★. Marcador: 2-0 BRA.
**Resultado real:** Brasil 3-0 Haití · Cunha ×2 + Vinícius ×1 (todos 1ªp) · 4 amarillas · 7 corners.
**Balance:** ✅ 1X2, BTTS No, Over 2.5, Vinícius anytime, Cunha anytime ★★★, Over 3.5 amar. ⚠️ Corners: 7 exactos (no pasa Over 7.5). ⚠️ Marcador: 3-0 real vs 2-0 predicho.
**Sesgo clave:** Marcador infraestimado en asimetría extrema con xG>2.0 → moda +1 gol. Corners con bloque muy profundo sobreestimados. Delantero centro reemplazando al "10" = mayor EV del partido.

====================================================

### Partido: Países Bajos vs Suecia — 20 Jun 2026 (J2 Grupo F · Houston)

**Predicción:** NED 48% / X 22% / SWE 30%. BTTS Sí 68% ★★★. Over 2.5 goles 62% ★★. Over 3.5 amarillas 62% ★★★. Malen anytime 28% ★★★ (mayor EV +28.4%). Gakpo anytime 32% ★★. SWE +0.5 52% ★★. Marcador: 2-1 NED. Árbitro Oliver (ENG) élite.
**Resultado real:** NED 3-1 SWE · Gakpo ×2 + Summerville + Elanga (todos 2ªp) · 1ªp 0-0 · 3 amarillas · Oliver.
**Balance:** ✅ 1X2, BTTS Sí, Over 2.5, Gakpo anytime. ❌ Malen anytime (sustituido descanso, 0 remates 1ªp), Over 3.5 amarillas (solo 3 con Oliver), SWE +0.5. ⚠️ Marcador: 3-1 vs 2-1 predicho.
**Sesgo clave:** Goleador con 0 SOnT en 1ªp = prob. efectiva 5-8% (sustitución inminente). Oliver bajo su media cuando partido se abre con goles. Suplentes ofensivos marcan en goleadas parciales (Summerville, Elanga). Moda del marcador queda corta en 1 gol aunque no sea asimetría extrema.

====================================================

### Partido: Turquía vs Paraguay — 20 Jun 2026 (J2 Grupo D · Santa Clara)

**Predicción dada (resumen):**
TUR 48% / X 27% / PAR 25%. xG TUR 1.65 · PAR 0.75. BTTS No 62% ★★★. Over 7.5 corners 58% ★★★. Under 2.5 goles 54% ★★. TUR -0.5 48% ★★. Aktürkoğlu anytime 28% ★★★ (EV +9.8%). Marcador más probable: 1-0 TUR (19.8%). Árbitro Iván Barton (El Salvador), reciente 3.6 amar/pj.

**Resultado real (Sofascore):**
- Marcador: **Paraguay 1-0 Turquía**
- Gol: Galarza (MC, PAR, 1ªp) · Asistencia: Enciso
- Almirón: **RC directo en 1ªp** (PAR jugó la 2ªp completa con 10)
- TUR: **39 remates totales** (16+23), **7 SOnT** — **0 goles** (réplica exacta vs Australia)
- PAR: ~7-8 remates, 3+4 SOnT, 1 gol · Gill: 5 paradas (1+4)
- Corners totales: **11** (4 en 1ªp + 7 en 2ªp) — **Over 7.5 ✅**
- Amarillas totales: **2** (Galarza 1ªp + Elmalı 2ªp) vs estimación 3.8 → **Under 3.5 real**
- Aktürkoğlu: 0 remates en 1ªp (5 pases), sustituido. 0 goles en 2ªp ❌
- Galarza no tenía probabilidad de gol asignada (goleador de segunda línea total)
- Enciso: 1 asistencia sin gol — patrón mediapunta/interior como asistidor confirmado
- Alineación TUR real: Akgün titular (no Kökçü), Müldür titular (no Çelik) — modelo predicho con diferencias menores

**Evaluación mercado por mercado:**
- ❌ **Dirección 1X2: Victoria TUR (48%)** — FALLO. PAR ganó 0-1. Primer fallo de dirección del torneo (6/7 — racha rota). El patrón de bloqueo mental + ineficacia de TUR era estructural, no puntual.
- ✅ **BTTS No (62%, ★★★)** — TUR no marcó. **Racha 6/6 con predicción BTTS No.** ✅
- ✅ **Under 2.5 goles (54%, ★★)** — 1 gol total. ✅ (aunque ganó PAR, el Under se cumplió)
- ✅ **Over 7.5 corners (58%, ★★★)** — 11 corners reales. Con PAR reducido a 10 en la 2ªp, TUR generó aún más corners (7 en 2ªp). ✅
- ❌ **TUR -0.5 (48%, ★★)** — PAR ganó. ❌
- ❌ **Aktürkoğlu anytime (28%, ★★★, EV +9.8%)** — 0 remates en 1ªp, sustituido. 0 goles. Patrón confirmado: goleador con 0 SOnT en 1ªp = prob. efectiva 5-8%. FALLO selección principal. ❌
- ⚠️ **Over 3.5 amarillas** — Solo 2 amarillas + 1 RC. Barton: 2 amar reales vs 3.8 estimado. Con RC temprano (Almirón), el árbitro redujo las amarillas posteriores. Ajuste confirmado: RC en partido → reducir amarillas posteriores 20-25%.
- ✅ **Marcador 1-0 en distribución** — El 0-1 PAR era el 6º más probable (8.8%). El gol de segunda línea (Galarza, MC sin prob. asignada) vuelve a repetirse (4º partido consecutivo con gol de jugador sin probabilidad asignada).

**Sesgos nuevos detectados y confirmados:**

1. **[CONFIRMADO rev7] Ineficacia estructural de equipo con ≥20 remates y 0 goles en partido anterior.** TUR: 30 vs AUS → 0 goles. TUR: 39 vs PAR → 0 goles. Regla definitiva: penalizar -10-12pp la prob. de victoria hasta que el equipo confirme capacidad goleadora en el torneo actual. No extrapolar calidad teórica de plantilla.
2. **[CONFIRMADO rev7] Goleador ★★★ con 0 SOnT en 1ªp = sustitución inminente.** Aktürkoğlu replicó exactamente a Malen (rev6). Dos casos, dos fallos en la selección de mayor EV. Regla permanente: 0 SOnT + <10 pases en 45' → eliminar del análisis post-1ªp; en pre-partido, aplicar descuento de 15-20% si el entrenador tiene profundidad ofensiva (Montella sí la tiene).
3. **[NUEVO rev7] Goleador de segunda línea en 4/4 últimos partidos con gol único.** MEX-KOR: Romo. USA-AUS: Freeman. MAR-SCO: Saibari (titular pero inesperado). TUR-PAR: Galarza. El modelo sistemáticamente falla en identificar al goleador real en partidos de 1 solo gol. La probabilidad debe distribuirse más uniformemente entre todos los mediocampistas con llegada, no concentrarse en los delanteros o extremos estrella.
4. **[NUEVO rev7] RC temprano + equipo reducido: efecto contrario al esperado en corners.** Con PAR a 10 desde 1ªp, los corners de TUR en 2ªp fueron 7 (el total de partidos enteros previos como SCO-MAR). Cuando un equipo juega con 10 y el rival tiene >60% posesión, Over 8.5 o incluso Over 9.5 corners tiene valor, no solo Over 7.5.
