# Cuaderno de Aprendizaje — Mundial 2026

## Estado general del modelo

**Actualizado tras partido 5 (Brasil 3-0 Haití, J2 Grupo C, 19/20 Jun 2026)**

- Mercados donde el modelo acierta de forma consistente: Dirección 1X2 (victoria favorito, 5/5), BTTS No ante equipos con xG bajo (5/5 cuando se predijo), Over 7.5 corners con dominio unilateral (5/5), Under 2.5 en tensión táctica (cuando aplica), goleador estrella vs semiprofesional (Vinícius ✅, Cunha ✅), xG de favorito correctamente ajustado vs bloque bajo
- Mercados donde el modelo falla de forma consistente: Marcador exacto más probable — racha perfecta 4/4 ROTA (2-0 predicho, real 3-0). Props de primera línea en partidos cerrados (patrón no aplica aquí, ambas estrellas marcaron). Over amarillas sobreestimado ante árbitro en debut mundialista — HH solo 4 tarjetas (justo en el límite Over 3.5, pero con estimación de 4.2 confirmada casi exacta). Matheus Cunha anytime condicionado a titularidad: fue titular y marcó 2 — sesgo de subestimación del delantero centro en asimetría extrema.
- Sesgos detectados y actualizados:
  - **Sesgo de conservadurismo en goles con asimetría extrema** — CONFIRMADO 2/2 (CAN-QAT 6-0, BRA-HAI 3-0). Over 2.5 es el baseline. Goleador estrella vs semiprofesional: subir anytime a 35-45% ✅ calibrado.
  - **Sesgo de extrapolación de outliers arbitrales** — CONFIRMADO 4/5 partidos. HH debut mundialista: 4 amarillas reales vs 4.2 estimadas (excelente). La regla "debut WC = base conservadora 2.8-3.2" fue correcta para este tipo de árbitro.
  - **Sesgo de goleador 2ª línea en partidos de 1 gol** — MATIZADO. En partidos de goleada (BRA-HAI: 3 goles), el gol cae en los esperados (Cunha ×2, Vinícius ×1). El sesgo de 2ª línea aplica específicamente en partidos de 1 solo gol con tensión táctica. En asimetría extrema con varios goles, el modelo asigna bien.
  - **Sesgo de sobreestimación xG favorito vs bloque bajo** — MATIZADO. En asimetría extrema (BRA rk.6 vs HAI rk.83), el bloque bajo no es suficiente para reducir el xG real. BRA generó 15 remates, 8 a puerta y 3 goles. Contrariamente: vs rivales de nivel medio-alto (USA-AUS), el bloque bajo sí deprime el xG real. La reducción del 20-30% aplica solo cuando el rival tiene nivel defensivo mínimo competente (rk. <60).
  - **[NUEVO rev5] Sesgo de subestimación del marcador exacto en asimetría extrema.** El modelo predicho más probable fue 2-0 (21.5%) pero el real fue 3-0 (15.8% en la distribución). En partidos con xG>2.0 y diferencia de nivel máxima, el marcador más probable del modelo tiende a quedar corto. Desplazar la moda de la distribución un gol hacia arriba cuando xG>2.0 y diferencia de ranking >50 posiciones.
  - **[NUEVO rev5] Sesgo de Placide-tipo: paradas de portero en asimetría extrema subestimadas.** Estimación: 4-7 paradas. Real: 5 paradas totales (2 en 1ªp + 3 en 2ªp). En este caso el modelo fue correcto. Pero patrón a seguir: cuando el rival tiene xG>2.0, las paradas del portero débil SÍ alcanzan 4-6. Contrario a USA-AUS (bloque organizado con xG moderado → solo 2 paradas). Diferenciador clave: xG del favorito, no solo posesión.

- Ajustes consolidados (definitivos en el modelo):
  - Asimetría extrema (diferencia ranking >50 pos.): Over 2.5 como base; goleador estrella vs semiprofesional al 35-45%; moda del marcador desplazada un gol arriba si xG>2.0.
  - Tensión táctica (ambos equipos igualados en puntos): Over 2.5 bajar 8-10 pp; goleador de 2ª línea contemplado explícitamente.
  - Árbitro debut WC: base 2.8-3.2 amar./pj. Árbitro UEFA elite estricto en partido físico eliminatorio: +1 sobre promedio de temporada.
  - xG favorito vs bloque bajo: reducir 20-30% solo si rival tiene rk. <60 (nivel defensivo mínimamente competente). No reducir en asimetría extrema.
  - BTTS No con xG rival <0.80: confianza directa 72-78%.
  - Goleador en partidos de 1-0: abrir 12-18% al lateral ofensivo / MC de segunda línea.
  - Corners bloque bajo y posesión alta: Over 7.5 tiene valor sistemático (5/5 cuando hay dominio unilateral).
  - Paradas portero: calibrar por xG del favorito, no solo por posesión del rival.

====================================================

## Historial de partidos

### Partido: Canadá vs Qatar — 18 Jun 2026 (J2 Grupo B)

**Predicción:** CAN 62% / X 19% / QAT 19%. Under 2.5 al 53%. EV+: BTTS No, David anytime 35%, Over 7.5 corners, CAN -1.5.
**Resultado real:** Canadá 6-0 Qatar · David hat-trick · 2 rojas · 20 corners · 4 amarillas.
**Balance:** ✅ 1X2, BTTS No, Clean Sheet, David anytime, Over corners, CAN hándicap. ❌ Under 2.5 (fallo grave).
**Sesgo clave:** Conservadurismo en goles con asimetría extrema. Expulsiones bajo asedio multiplican goles.

====================================================

### Partido: México vs Corea del Sur — 18 Jun 2026 (J2 Grupo A)

**Predicción:** MEX 46% / X 27% / KOR 27%. Over 2.5 ★★★ (54%). BTTS Sí (52%). Over 3.5 amarillas ★★★ (65%). xG MEX 1.45 · KOR 1.30.
**Resultado real:** México 1-0 · Gol: Luis Romo (MC, sin prob. asignada) · 2 amarillas · 7 corners.
**Balance:** ✅ 1X2, marcador 1-0, BTTS No. ❌ Over 2.5 ★★★, Over 3.5 amarillas ★★★, BTTS Sí, goleadores modelados.
**Sesgo clave:** Tensión táctica en equilibrio de puntos suprime goles. Outlier arbitral no extrapolable. Gol cae en segunda línea.

====================================================

### Partido: Escocia vs Marruecos — 19 Jun 2026 (J2 Grupo C)

**Predicción:** MAR 46% / X 26% / SCO 28%. Under 2.5 ★★ (52%). BTTS No ★★★ (70%). xG MAR 1.45 · SCO 0.75. Saibari anytime 32%.
**Resultado real:** Marruecos 1-0 · Saibari gol · Asistencia: Brahim Díaz · 2 amarillas · 7 corners.
**Balance:** ✅ 1X2, marcador 1-0 (3/3), BTTS No, Under 2.5, Saibari anytime. ❌ Hakimi asistencia, Over 7.5 corners.
**Sesgo clave:** xG favorito vs bloque bajo sobreestimado. Árbitro debut WC usar base conservadora. Asistencia: mediapunta sobre lateral.

====================================================

### Partido: Estados Unidos vs Australia — 19 Jun 2026 (J2 Grupo D · Seattle)

**Predicción:** USA 52% / X 24% / AUS 24%. BTTS No ★★★ (72%). Over 7.5 corners ★★★ (65%). Over 3.5 amarillas ★★★ (68%). McKennie anytime ★★. Marcador más probable: 1-0 USA (22.5%).
**Resultado real:** USA 1-0 · Gol: Freeman (RB, sin prob.) · 7 amarillas · 11 corners · USA 15 rem., 4 a puerta · Beach 2 paradas.
**Balance:** ✅ 1X2, marcador 1-0 (4/4), BTTS No, Under 2.5, Over corners, Over amarillas. ❌ McKennie anytime, USA -1.5. ⚠️ xG sobreestimado, Beach paradas sobreestimadas, Freeman sin prob. asignada.
**Sesgo clave:** Goleador lateral ofensivo en partidos de 1 gol. Árbitro UEFA elite estricto en eliminatorio: +1 sobre media. Paradas portero reducir cuando posesión rival <40%.

====================================================

### Partido: Brasil vs Haití — 19/20 Jun 2026 (J2 Grupo C · Filadelfia)

**Predicción dada (resumen):**
BRA 76% / X 15% / HAI 9%. xG BRA 2.35 · HAI 0.30. Over 2.5 al 62% ★★. BTTS No al 78% ★★★. Over 7.5 corners al 64% ★★★. Over 3.5 amarillas al 55% ★★. Vinícius anytime 38% ★★★. Cunha anytime 28% ★★. Marcador más probable: 2-0 BRA (21.5%). Neymar baja confirmada. Árbitro Hernández Hernández (ESP) debut como principal.

**Resultado real (Sofascore):**
- Marcador: **Brasil 3-0 Haití**
- Goles: Matheus Cunha ×2 (1ªp) + Vinícius Jr. ×1 (1ªp)
- Asistencias: Paquetá ×1, Vinícius ×1 (antes de marcar)
- Amarillas totales: **4** — Arcus, Pierrot (HAI 1ªp) / Douglas Santos, Jean Jacques (2ªp)
- Corners totales: **7** (4 en 1ªp + 3 en 2ªp)
- Remates totales: BRA ~15 (1ªp: 6 remates, 5 a puerta) · HAI: 9 remates en 2ªp + 0 en 1ªp ≈ 9 total
- Remates a puerta: BRA ~8 (5 en 1ªp + ~3 en 2ªp) · HAI ~4 (1 en 1ªp bloqueado + 3 en 2ªp)
- Paradas Placide: 5 (2 en 1ªp + 3 en 2ªp) — dentro del rango estimado 4-7 ✅
- Posesión 1ªp BRA: dominante (456 pases vs 167 HAI en 1ªp)
- Alisson 2ªp: 3 paradas (vs 0 en 1ªp) — Haití mejoró en 2ªp
- Cunha: 2G, 2 remates a puerta, 1 cruce en 1ªp — titular y determinante
- Vinícius: 1G, 1A, 3 remates, 2 a puerta en 1ªp · 0 remates en 2ªp
- Raphinha: 1 remate a puerta en 1ªp, fue sustituido antes del final
- Endrick: entró en 2ªp, 0 remates a puerta (1 offside)

**Evaluación mercado por mercado:**

- ✅ **Dirección 1X2: Victoria Brasil** (5/5 en el torneo — racha perfecta del favorito)
- ✅ **BTTS No (78%)** — Haití no marcó. 5/5 cuando se predijo BTTS No ★★★
- ✅ **Over 2.5 goles (62%)** — 3 goles reales. Regla asimetría extrema calibrada correctamente ★★★
- ✅ **Vinícius Jr. anytime (38%)** — Marcó y además asistió ★★★
- ✅ **Cunha anytime (28%, EV +26.1%)** — 2 goles. Mejor selección del partido por valor absoluto ★★★
- ✅ **Over 3.5 amarillas (55%)** — 4 amarillas reales (exactamente en el umbral). Pasa el Over 3.5 ✅
- ✅ **Paradas Placide** — 5 reales vs estimación 4-7. Calibración correcta.
- ✅ **Raphinha anytime** — No marcó, pero 1 remate a puerta en 1ªp — modelo correcto en tipo de amenaza, incorrecto en conversión
- ⚠️ **Over 7.5 corners (64%)** — **Solo 7 corners reales** (4 en 1ªp + 3 en 2ªp). FALLO: exactamente en el umbral pero no pasa la línea 7.5. Tercer partido consecutivo en que los corners quedan por debajo de lo esperado cuando el rival defiende muy profundo.
- ⚠️ **Marcador exacto más probable: 2-0 BRA (21.5%)** — Real: 3-0. Racha perfecta 4/4 **ROTA**. Marcador fue el 3er más probable del modelo (15.8%). El modelo queda corto en la moda cuando xG>2.0 y asimetría extrema.
- ❌ **Endrick anytime (18%)** — Entró en 2ªp pero 0 remates a puerta. Patrón: suplentes con poco tiempo no convierten.

**Sesgos nuevos detectados:**

1. **Corners con bloque muy profundo: ajuste a la baja definitivo.** Tres partidos consecutivos (MAR-SCO: 7, USA-AUS: 11, BRA-HAI: 7) muestran que los corners con bloque profundo no siempre disparan el contador. Cuando el rival defiende muy profundo y no hay zonas colgadas desde lateral (HAI no tiene laterales que suban), los corners son menores de lo esperado porque el favorito prefiere combinar en corto antes que centrar. Over 7.5 tiene valor, pero Over 9.5 con bloque profundo debe recalibrarse a la baja.
2. **Marcador exacto en asimetría extrema: el modelo infraestima la moda.** 2-0 fue predicho pero el real fue 3-0 (que era el 2º más probable, no el 1º). En partidos con xG>2.0 y diferencia de ranking >50 posiciones, desplazar la moda un gol arriba. El marcador más probable real sería 3-0 si ajustáramos el xG final correctamente.
3. **Cunha-tipo: el delantero centro en asimetría extrema sin Neymar es el mayor EV del partido.** El reemplazo del "10" como "9" en asimetría extrema tiene probabilidad de gol sistemáticamente mayor de lo que el mercado paga. La cuota ~4.50 para Cunha siendo titular ante Haití era un regalo. Incorporar como regla: cuando el "9" del favorito sustituye al "10" baja en el rol, en asimetría extrema, su probabilidad de gol real sube porque recibe más balones en posición de remate.

**Ajustes incorporados al modelo:**
1. Corners: Over 7.5 sigue teniendo valor en dominio unilateral, pero Over 9.5 en bloque profundo → reducir 8-10pp. Haití-tipo genera menos centros atacantes que Qatar-tipo.
2. Marcador más probable en asimetría extrema con xG>2.0: añadir +1 gol a la moda de la distribución.
3. Delantero centro que reemplaza al "10" en asimetría extrema: subir prob. gol a 30-35% aunque el mercado lo pague a 4.00+.
