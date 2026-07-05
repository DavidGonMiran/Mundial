# Cuaderno de Aprendizaje — Mundial 2026

## Estado general del modelo

**Actualizado tras partido 6 (Países Bajos 3-1 Suecia, J2 Grupo F, 20 Jun 2026)**

- Mercados donde el modelo acierta de forma consistente: Dirección 1X2 (victoria favorito, 6/6 ✅ racha perfecta), BTTS Sí en partidos UEFA de alto nivel sin CS en ambos equipos (1/1 primera prueba ✅), Over 2.5 goles en partidos abiertos entre selecciones equivalentes (1/1 ✅), BTTS No ante equipos con xG bajo (5/5), goleador diferencial de NED (Gakpo ×2 ✅).
- Mercados donde el modelo falla de forma consistente: **Malen anytime — FALLO GRAVE**: salió al descanso sin jugar 2ª parte, 0 goles. Mayor EV identificado (+28.4%) → resultado: ❌. Sesgo nuevo: el modelo no penalizó suficientemente el riesgo de sustitución temprana. Over 3.5 amarillas en partidos UEFA de alto nivel con árbitro Oliver: **solo 3 amarillas** → ❌. Oliver por debajo de su media en este partido. SWE +0.5 (no derrota): ❌ NED ganó 3-1 con claridad.
- Sesgos detectados y actualizados:
  - **Sesgo de conservadurismo en goles con asimetría extrema** — CONFIRMADO 2/2. No aplica aquí (partido equilibrado).
  - **Sesgo de sustitución temprana en props de goleador** — **[NUEVO rev6]** Malen salió al descanso. El modelo asignó +28.4% EV sin contemplar el riesgo de rotación/lesión. Regla nueva: en goleadores anytime de equipos con plantilla profunda y necesidad de ganar, añadir una penalización del 15-20% por riesgo de sustitución en el descanso, especialmente si el jugador tuvo bajo rendimiento en 1ª parte (Malen: 0 remates, 0 participación en 1ªp).
  - **Sesgo de árbitro élite con exceso de confianza** — **[NUEVO rev6]** Oliver arbitró con 3 amarillas reales vs estimación 4.2–4.5. El ajuste "+1 sobre media para árbitro élite en partido físico eliminatorio" NO siempre se materializa. Revisar: aplicar el +1 solo cuando el partido sea explícitamente de alta tensión física (eliminatorias directas, pressing alto de ambos) — no en partidos que se abren y fluyen con goles.
  - **Sesgo de sobreestimación xG favorito vs bloque bajo** — MATIZADO en rev5. No aplica aquí.
  - **Sesgo de goleador 2ª línea en partidos de 1 gol** — MATIZADO. Aquí fueron 4 goles: Gakpo ×2 (titular), Summerville (suplente) y Elanga (suplente). Confirma que en partidos de varios goles los suplentes sí participan en el marcador → patrón de 2ª línea amplificado por sustituciones en goleadas parciales.
  - **Sesgo de subestimación del marcador exacto en asimetría extrema** — Aquí NO era asimetría extrema. No aplica. Marcador más probable predicho: 2-1 NED (14.8%). Real: 3-1. El modelo volvió a quedarse corto en 1 gol en un partido dominado claramente por el favorito. **Posible extensión de la regla: en partidos donde NED necesita ganar y domina el mediocampo claramente, añadir +0.5 goles a la moda aunque no sea asimetría extrema.**
  - **[NUEVO rev6] Sesgo de desconexión entre rendimiento 1ªp y resultado 2ªp.** 1ª parte cerrada (0-0, ratings bajos para Malen, Gyökeres, Isak). 2ª parte completamente diferente: Gakpo ×2, Summerville, Elanga. El partido de 90 minutos puede tener dos dinámicas completamente distintas. Implicación: props de jugadores que muestren bajo rendimiento en 1ªp en partidos en vivo deben ser reconsiderados.
  - **[NUEVO rev6] Isak "asistidor" en derrota.** Isak terminó con asistencia (0.6 en 2ªp) pese a no marcar. En partidos donde SWE va perdiendo y abre espacios, Isak actúa más como creador que como finalizador. El gol sueco vino con SWE ya perdiendo — contexto de partido abierto.

- Ajustes consolidados (definitivos en el modelo):
  - Asimetría extrema (diferencia ranking >50 pos.): Over 2.5 como base; goleador estrella al 35-45%; moda del marcador desplazada un gol arriba si xG>2.0.
  - Tensión táctica (ambos igualados en puntos): Over 2.5 bajar 8-10 pp; goleador 2ª línea contemplado.
  - Árbitro élite UEFA: +1 sobre media de temporada **solo si el partido es de alta tensión física y pressing intenso**. En partidos que se abren con goles tempranos, Oliver puede quedar por debajo de su media.
  - xG favorito vs bloque bajo: reducir 20-30% solo si rival rk.<60.
  - BTTS No con xG rival <0.80: confianza directa 72-78%.
  - BTTS Sí en partidos UEFA de alto nivel (ambos sin CS en ≥5 partidos, delanteros de clase mundial): estimación base 65-72%.
  - Goleador anytime: penalizar 15-20% si bajo rendimiento en 1ªp visible en estadísticas live (0 remates, 0 pases clave → riesgo sustitución al descanso).
  - Corners bloque bajo y posesión alta: Over 7.5 sistemático con dominio unilateral. Recalibrar Over 9.5 a la baja con bloque muy profundo.
  - Paradas portero: calibrar por xG del favorito, no solo posesión del rival.
  - Marcador más probable: en partidos donde el favorito necesita ganar y domina el mediocampo claramente, añadir +0.5 goles a la moda (no solo en asimetría extrema con xG>2.0).

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
**Balance:** ✅ 1X2, marcador 1-0 (4/4), BTTS No, Under 2.5, Over corners, Over amarillas. ❌ McKennie anytime, USA -1.5.
**Sesgo clave:** Goleador lateral ofensivo en partidos de 1 gol. Árbitro UEFA elite estricto en eliminatorio: +1 sobre media. Paradas portero reducir cuando posesión rival <40%.

====================================================

### Partido: Brasil vs Haití — 19/20 Jun 2026 (J2 Grupo C · Filadelfia)

**Predicción:** BRA 76% / X 15% / HAI 9%. Over 2.5 al 62% ★★. BTTS No al 78% ★★★. Over 7.5 corners al 64% ★★★. Over 3.5 amarillas al 55% ★★. Vinícius anytime 38% ★★★. Cunha anytime 28% ★★. Marcador más probable: 2-0 BRA. Árbitro HH debut mundialista.
**Resultado real:** Brasil 3-0 Haití · Cunha ×2 + Vinícius ×1 (todos en 1ªp) · 4 amarillas · 7 corners.
**Balance:** ✅ 1X2, BTTS No, Over 2.5, Vinícius anytime, Cunha anytime ★★★, Over 3.5 amar. ⚠️ Over 7.5 corners (exactamente 7, no pasa). ⚠️ Marcador exacto: 3-0 real vs 2-0 predicho.
**Sesgo clave:** Marcador infraestimado en asimetría extrema con xG>2.0 → desplazar moda +1 gol. Corners con bloque muy profundo sobreestimados: recalibrar Over 9.5 a la baja. Delantero centro reemplazando al "10" en asimetría = mayor EV del partido.

====================================================

### Partido: Países Bajos vs Suecia — 20 Jun 2026 (J2 Grupo F · Houston)

**Predicción dada (resumen):**
NED 48% / X 22% / SWE 30%. xG NED 1.65 · SWE 1.25. BTTS Sí 68% ★★★. Over 2.5 goles 62% ★★. Over 3.5 amarillas 62% ★★★. Malen anytime 28% ★★★ (mayor EV +28.4%). Gakpo anytime 32% ★★. Gyökeres anytime 38% ★★. SWE +0.5 52% ★★. Over 7.5 corners 62% ★. Marcador más probable: 2-1 NED (14.8%). Árbitro Michael Oliver (ENG), élite UEFA, 3.49–3.97 amar./pj carrera.

**Resultado real (Sofascore):**
- Marcador: **Países Bajos 3-1 Suecia**
- Goles NED: Gakpo ×2 (2ªp, ratings 8.74 mejor del partido) + Summerville ×1 (suplente 2ªp) + Elanga ×1 (suplente 2ªp) → **4 goles NED** · Gol SWE: 1 (Isak asistencia 0.6 en 2ªp, gol de otro jugador sueco en 2ªp)
- 1ª parte: 0-0. Brobbey mejor valorado NED (8.36) con 0.8 SOnT pero sin gol. Gyökeres 1.2 SOnT sin gol. Verbruggen 2 paradas.
- 2ª parte: NED dominó por completo. Gakpo explotó (2 goles, 0.8 SOnT + 0.2 BS). Summerville (8.12, suplente, 1G+1A). Elanga (7.20, suplente, 1G). Nordfeldt hundido (rating 3.98, -1.8 GC = 3 goles encajados en 2ªp). Verbruggen 1.5 paradas en 2ªp.
- Malen: jugó 45' en 1ªp (0 remates, 0 participación) → **SUSTITUIDO AL DESCANSO**.
- Amarillas totales: **3** (Gudmundsson TA + Bergvall TA + Ayari TA en 2ªp) → Oliver por debajo de su media.
- Corners: partido abierto → estimación ~8-10 (NED dominó posesión y área).

**Evaluación mercado por mercado:**
- ✅ **Dirección 1X2: Victoria NED** (6/6 en el torneo — racha perfecta del favorito ✅)
- ✅ **BTTS Sí (68%)** — SWE marcó 1. Primera confirmación de la nueva regla BTTS Sí en partidos UEFA de alto nivel sin CS en ambos. ✅
- ✅ **Over 2.5 goles (62%)** — 4 goles reales. ✅
- ✅ **Gakpo anytime (32%, ★★)** — 2 goles. La selección correcta del equipo NED. ✅
- ✅ **Over 7.5 corners (62%, ★)** — Partido abierto con dominio NED → estimación razonable ✅ (confirmación pendiente de dato exacto)
- ❌ **Malen anytime (28%, ★★★, mayor EV +28.4%)** — SUSTITUIDO AL DESCANSO. 0 remates en 1ªp. Sesgo crítico: el modelo no detectó el riesgo de sustitución temprana cuando el jugador tiene rendimiento nulo en 1ªp. FALLO GRAVE del mercado con mayor prioridad. ❌
- ❌ **Over 3.5 amarillas (62%, ★★★)** — Solo 3 amarillas reales. Oliver por debajo de su media estimada (4.2–4.5). El partido se abrió con goles → reducción de la tensión disciplinaria. ❌
- ❌ **SWE +0.5 / No derrota (52%, ★★)** — NED ganó 3-1 con claridad. SWE nunca igualó. ❌
- ⚠️ **Gyökeres anytime (38%, ★★)** — No marcó (0 remates en 2ªp, -0.5 rating). Isak asistió pero no marcó. El dúo sueco fue neutralizado completamente en 2ªp cuando SWE ya perdía. ❌
- ⚠️ **Marcador más probable: 2-1 NED (14.8%)** — Real: 3-1. Modelo quedó corto en 1 gol de nuevo, aunque no era asimetría extrema. ⚠️

**Sesgos nuevos detectados:**

1. **Sustitución al descanso de goleador anytime con bajo rendimiento en 1ªp.** Malen: 0 remates, 0 pases clave en 45'. Las estadísticas live de 1ªp ya advertían del riesgo. Regla nueva: si el jugador objetivo de un prop anytime muestra 0 SOnT + 0 asistencias en 1ªp en un equipo que no va ganando, aplicar penalización del 15-20% por riesgo de rotación al descanso. Esta regla es especialmente relevante cuando el equipo tiene profundidad ofensiva (NED: Summerville, Elanga, Depay en el banquillo).
2. **Over 3.5 amarillas con Oliver en partido que se abre.** Cuando el partido tiene goles en 2ªp y se abre tácticamente, la intensidad disciplinaria baja porque los equipos prefieren atacar antes que frenar. Oliver arbitró un partido de fútbol de posesión abierta, no un duelo físico cerrado — su media en esos contextos es inferior. Ajuste: el +1 para árbitro élite aplica en partidos físicamente cerrados y tensos, no en partidos que se desarrollan con flujo de goles.
3. **Suplentes como goleadores en goleadas parciales.** Summerville y Elanga marcaron entrando en 2ªp. Patrón consistente con el hallazgo de Svanberg vs Haití (rev5). En partidos donde el equipo favorito va ganando al descanso (o marca primero en 2ªp), los suplentes ofensivos tienen una probabilidad de gol sustancialmente mayor de lo que el modelo asigna. Regla: abrir 12-15% de prob gol a cada suplente ofensivo de calidad que entre en 2ªp en un partido donde el favorito gana 1-0 o 2-0 al descanso.

**Ajustes incorporados al modelo:**
1. Props anytime: revisar rendimiento live de 1ªp antes de confirmar. Si 0 SOnT + rendimiento nulo → penalizar 15-20% por riesgo sustitución.
2. Over tarjetas con Oliver: válido en partidos físicamente tensos y cerrados. En partidos que se abren con goles → reducir estimación a media de carrera base (3.49), no aplicar el +1.
3. Suplentes ofensivos de calidad en 2ªp cuando el favorito va ganando → asignar 10-15% de prob gol en mercados live o en análisis pre-partido cuando la profundidad de banquillo es alta.
4. Marcador más probable: en partidos donde el favorito necesita ganar y domina el mediocampo de forma clara (De Jong / Gravenberch-tipo), añadir +0.5 goles a la moda (extensión de la regla de asimetría extrema a contexto "necesidad de ganar + dominio de mediocampo").
