# Cuaderno de Aprendizaje — Mundial 2026

## Estado general del modelo

**Actualizado tras partido 4 (Estados Unidos 1-0 Australia, J2 Grupo D, 19 Jun 2026)**

- Mercados donde el modelo acierta de forma consistente: Dirección 1X2 (victoria favorito, 4/4), marcador más probable 1-0 (4/4 partidos analizados — racha perfecta), BTTS No ante equipos de baja producción ofensiva (4/4 cuando se predijo), Under 2.5 goles en partidos con tensión táctica o asimetría de nivel, Clean Sheet del favorito ante bloque defensivo compacto, Over 7.5 corners cuando hay dominio unilateral de posesión
- Mercados donde el modelo falla de forma consistente: Props de goleador anytime en jugadores de primera línea en partidos cerrados (Balogun 0 goles, McKennie 0 SOnT — patrón 3/4 partidos), Over 1.5 goles y hándicap -1.5 cuando los partidos son tácticamente tensos, asistencia anytime al lateral cuando el gol lo crea un perfil inesperado (Freeman, Romo)
- Sesgos detectados:
  - **Sesgo de conservadurismo en goles con asimetría extrema** (CAN-QAT). Ajuste activo.
  - **Sesgo de extrapolación de outliers arbitrales.** Confirmado en 3/4 partidos. No extrapolar hasta ≥5 partidos WC del árbitro.
  - **Sesgo de rendimiento condicional.** Confirmado en MEX-KOR. Ajustar xG por calidad del rival anterior.
  - **Sesgo de tensión táctica en partidos de grupo equilibrados.** Confirmado en MEX-KOR, SCO-MAR y USA-AUS (3/3 partidos con ambos equipos igualados en puntos). Over 2.5 cae sistemáticamente.
  - **Sesgo de sobreestimación xG del favorito vs bloque bajo organizado.** MAR vs SCO y USA vs AUS: xG real sistemáticamente inferior al estimado por calidad de plantilla. USA generó 15 remates pero solo 4 a puerta con 1 gol real vs xG 1.55 estimado.
  - **Sesgo de props de primera línea en partidos tensos.** Confirmado en 3/4 partidos: Balogun (0 goles, 2 remates, 0 SOnT partido completo), McKennie (0 SOnT), Son/Jiménez/Hwang, Brahim anytime. El gol sistemáticamente cae en jugadores no modelados: Freeman (RB), Romo (MC sin probabilidad), Irankunda (goleador joven).
  - **[NUEVO rev4] Sesgo de asignación de goleador: el gol en partidos de 1-0 tiende a caer en el defensor/lateral que sube.** Freeman (RB, 39 pases, 1 cruce, 1 remate a puerta = GOL) es el 3er caso consecutivo donde el goleador real no tenía probabilidad asignada. Patrón: Freeman (RB), Romo (MC profundo), Metcalfe (MC llegada). En partidos resueltos por un solo gol, el gol cae fuera del top-3 de goleadores modelados con alta frecuencia.
  - **[NUEVO rev4] Sesgo de subestimación del número real de tarjetas con árbitro Zwayer.** Estimación ajustada del modelo: 4.5 amarillas. Real: 7 amarillas (Circati, Bos en 1ªp; Balogun, Robinson, Richards, Souttar, Italiano en 2ªp). Zwayer en contexto de partido físico + eliminatorio da más tarjetas incluso de lo que recoge su promedio de temporada. Incorporar factor "partido físico de alta intensidad con árbitro UEFA elite estricto" → añadir +1 a la estimación base.
  - **[NUEVO rev4] Sesgo de subestimación de la robustez defensiva del bloque bajo en partidos de un gol.** USA: 15 remates, 4 a puerta, xG estimado 1.55 → 1 gol real. AUS concedió muy poco en términos de xG real pese a ceder la posesión completamente. El bloque 5-4-1 de Popovic fue más efectivo de lo modelado: Beach solo necesitó hacer 2 paradas (vs 5-7 estimadas). El xG real de AUS defensivamente fue mejor que el estimado.

- Ajustes ya aplicados:
  - Asimetría extrema de nivel: Over 2.5 base, no Under. Goleador estrella vs defensa débil → 45-55%.
  - Over 2.5 goles: bajar 8-10 pp cuando ambos equipos igualados en puntos con implicación clasificatoria.
  - Tarjetas: no extrapolar outliers. Usar árbitro específico confirmado como base.
  - Nivel ofensivo de un equipo: ajustar por calidad del rival anterior.
  - Props de goleador en partidos tácticamente cerrados: reducir 5-8 pp a figuras anytime.
  - xG del favorito vs bloque bajo organizado: reducir 20-30%.
  - BTTS No con xG rival <0.80: confianza directa al 72-75%.
  - Árbitro debut mundialista: usar 2.8-3.2 amarillas/pj como base.
  - Asistencia anytime: no sobrecargar al lateral en detrimento del mediapunta creador central.
  - Corners con rival en bloque profundo: reducir estimación de corners del favorito.
  - **[NUEVO rev4] Goleador en partidos de 1-0: abrir probabilidad explícita al lateral o mediocentro de segunda línea con vocación ofensiva.** Añadir al menos un jugador del perfil "llega desde atrás" en el análisis de props con probabilidad 12-18% aunque no sea el esperado. Freeman (RB USA) tenía 0% de probabilidad asignada y marcó el único gol.
  - **[NUEVO rev4] Árbitro UEFA elite estricto + partido físico eliminatorio: añadir +1 amarilla sobre el promedio de temporada del árbitro.** Zwayer: 4.94/pj promedio → estimación corregida: 5.5-6.0 en partidos de alta intensidad física con implicación clasificatoria directa.
  - **[NUEVO rev4] Paradas de portero en bloque bajo: reducir estimación cuando el equipo inferior cede posesión completamente.** Ceder el 38% de posesión y defender en bloque bajo no genera los mismos remates a puerta que un partido abierto. Beach necesitó 2 paradas (vs 5-7 estimadas). Cuando el equipo inferior tiene posesión <40%, el número de remates a puerta del favorito es menor porque hay menos situaciones de 1v1 y más bloqueos colectivos.

====================================================

## Historial de partidos

### Partido: Canadá vs Qatar — 18 Jun 2026 (J2 Grupo B)

**Predicción dada (resumen):**
CAN 62% / X 19% / QAT 19%. Under 2.5 al 53%. Tarjetas Over 3.5 al 65%. Corners Over 7.5 al 62%. EV+: BTTS No 72%, David anytime 35%, Over 7.5 corners, CAN -1.5 hándicap.

**Resultado real:** Canadá 6-0 Qatar · David hat-trick · 2 rojas QAT · 20 corners · 4 amarillas

**Evaluación (resumen):**
✅ 1X2, BTTS No, Clean Sheet, David anytime, Over 7.5/9.5 corners, CAN -0.5/-1.5. ❌ Under 2.5 (fallo estrepitoso: 6 goles), magnitud victory subestimada.

**Sesgos detectados:** Conservadurismo en goles con asimetría extrema. Expulsiones bajo asedio multiplican goles. Corners sin techo con dominio total. Goleador estrella vs defensa débil infraestimado.

====================================================

### Partido: México vs Corea del Sur — 18 Jun 2026 (J2 Grupo A · Guadalajara)

**Predicción dada (resumen):**
MEX 46% / X 27% / KOR 27%. Over 2.5 al 54% ★★★. BTTS Sí al 52%, Over 3.5 amarillas al 65% ★★★. xG: MEX 1.45 · KOR 1.30.

**Resultado real:** México 1-0 Corea del Sur · Gol: Luis Romo (MC, sin probabilidad asignada) · 2 amarillas · ~7 corners

**Evaluación (resumen):**
✅ 1X2, marcador exacto 1-0, Under 2.5 (no jugada), BTTS No. ❌ Over 2.5 ★★★ (FALLO PRINCIPAL), Over 3.5 amarillas ★★★ (FALLO PRINCIPAL), BTTS Sí, goleadores modelados.

**Sesgos detectados:** Tensión táctica en partidos igualados suprime goles. No extrapolar outliers arbitrales. Props en partido cerrado caen en segunda línea (Romo).

====================================================

### Partido: Escocia vs Marruecos — 19 Jun 2026 (J2 Grupo C · Foxborough MA)

**Predicción dada (resumen):**
MAR 46% / X 26% / SCO 28%. xG: MAR 1.45 · SCO 0.75. Under 2.5 al 52% ★★. BTTS No al 70% ★★★. Árbitro Tantashev sin historial WC → 3.4 amarillas estimadas. EV+: BTTS No, Saibari anytime 32%, Under 2.5, Hakimi asistencia 28%.

**Resultado real:** Marruecos 1-0 Escocia · Saibari gol 1ªp · Asistencia: Brahim Díaz · 2 amarillas · 7 corners · SCO xG real 0.51, MAR xG real 0.99 · Beach 2 paradas (AUS confusión: dato de otro partido)

**Evaluación (resumen):**
✅ 1X2, marcador exacto 1-0 (3/3 torneo), BTTS No, Under 2.5, Saibari anytime, posesión MAR ~59%, remates MAR superiores. ❌ Hakimi asistencia (fue Brahim Díaz), Over 7.5 corners (7 reales), McTominay y Brahim Díaz anytime goleador.

**Sesgos detectados:** xG favorito vs bloque bajo sobreestimado (-32%). BTTS No con xG rival <0.80 = confianza directa 72-75%. Árbitro debut WC: usar 2.8-3.2/pj, no torneo. Asistencia: mediapunta de elite sobre lateral. Corners se reducen con bloque profundo extremo del rival.

====================================================

### Partido: Estados Unidos vs Australia — 19 Jun 2026 (J2 Grupo D · Lumen Field, Seattle)

**Predicción dada (resumen):**
USA 52% / X 24% / AUS 24%. Under 2.5 al 52% ★★. BTTS No al 72% ★★★. Over 7.5 corners al 65% ★★★. Over 3.5 amarillas al 68% ★★★. McKennie anytime ★★ (+16.9%). Marcador más probable: 1-0 USA (22.5%). Pulisic en duda → no jugó. xG estimado: USA 1.55 · AUS 0.65.

**Resultado real (Sofascore):**
- Marcador: **Estados Unidos 1 - 0 Australia**
- Goleador: Alex Freeman (RB) — 1ª parte · sin probabilidad asignada
- Pulisic: no jugó (baja confirmada)
- Amarillas totales: **7** — Circati, Bos (1ªp) / Balogun, Robinson, Richards, Souttar, Italiano (2ªp)
- Corners totales: **11** (5 en 1ªp + 6 en 2ªp)
- Remates totales: USA 15 · AUS ~7
- Remates a puerta: USA 4 · AUS 2
- Paradas Beach: **2** (vs 5-7 estimadas)
- McKennie: 2 remates bloqueados en 1ªp, 0 remates en 2ªp, 0 SOnT en todo el partido
- Balogun: 2 remates totales (1 bloqueado), 0 a puerta, 1 amarilla en 2ªp
- Posesión estimada: USA ~60% · AUS ~40%

**Evaluación:**

Aciertos:
- ✅ **Dirección 1X2 correcta: Victoria USA** (4/4 en el torneo — rachas perfectas del favorito)
- ✅ **Marcador exacto 1-0 USA** — era el más probable del modelo (22.5%). 4/4 partidos con el marcador exacto más probable acertado. Racha estadísticamente muy significativa.
- ✅ **BTTS No (72%, EV+7.9% ★★★)** — Australia no marcó. 4/4 cuando se predijo.
- ✅ **Under 2.5 goles (52%, EV+5.5% ★★)** — 1 gol total. Sesgo tensión táctica activo confirmado.
- ✅ **Over 7.5 corners (65%, EV+10.4% ★★★)** — 11 corners reales. Acierto amplio.
- ✅ **Over 3.5 amarillas (68%, EV+10.2% ★★★)** — 7 amarillas reales. El modelo incluso subestimó (estimado 4.5 → real 7). Zwayer superó su propio promedio.
- ✅ **USA Clean Sheet** — Australia no marcó.
- ✅ **Pulisic no jugó** — la duda era la mayor incógnita previa y se resolvió correctamente.

Fallos:
- ❌ **McKennie anytime (18%, EV+16.9% ★★)** — 0 SOnT en todo el partido. 2 remates bloqueados en 1ªp pero 0 remates en 2ªp. Patrón repetido: en partidos de 1 gol el mediocampista "segunda línea" tampoco convierte.
- ❌ **USA -1.5 hándicap (32%, EV+3.8%)** — Partido 1-0. Solo 1 gol de diferencia.
- ⚠️ **xG USA: estimado 1.55 → generó 15 remates pero solo 4 a puerta y 1 gol.** Beach apenas necesitó intervenir (2 paradas). El bloque 5-4-1 de AUS bloqueó más remates de lo esperado (5 bloqueados en total). La defensa australiana fue más efectiva de lo modelado.
- ⚠️ **Beach paradas: estimado 5-7 → real 2.** El bloque colectivo de AUS redujo los remates a puerta de USA mucho más de lo esperado. Cuando hay posesión pero el rival defiende en bloque profundo compacto, los remates a puerta son menores que los remates totales.
- ⚠️ **Goleador: Freeman (RB) sin probabilidad asignada.** 4º partido consecutivo donde el goleador o un goleador clave no estaba en el top-3 del modelo: Romo (MC), Irankunda, Freeman (RB). Patrón estructural confirmado.

**Sesgos nuevos detectados:**
1. **Goleador en partidos de 1-0: el lateral con vocación ofensiva es candidato real.** Freeman (39 pases, 1 cruce, 1 remate a puerta = gol) jugó como un RB ofensivo. En el esquema de Pochettino los laterales atacan. El modelo tiene un punto ciego sistemático: no asigna probabilidad de gol a los laterales en esquemas de posesión ofensiva. Incorporar en análisis futuros.
2. **Zwayer en partido físico eliminatorio supera su media de temporada.** 7 amarillas vs 4.94 estimadas por su promedio. En contexto de partido con implicación directa en la clasificación, árbitros UEFA elite estrictos escalan su nivel de tarjetas. Ajuste: +1 sobre promedio de temporada en partidos eliminatorios de fase de grupos con ambos equipos en 3 pts.
3. **Paradas de portero con posesión rival 38-40%: reducir drásticamente.** Ceder el 60% de posesión pero en bloque bajo genera pocos remates a puerta. Beach hizo 2 paradas. La estimación de 5-7 era incorrecta porque asumía que USA generaría más remates a puerta al tener posesión, pero el bloque los convirtió en bloqueados y tiros lejanos.

**Ajustes incorporados al modelo (ver sección "Estado general" arriba):**
1. Goleador en partidos de 1-0: abrir probabilidad 12-18% al lateral ofensivo en esquemas atacantes.
2. Árbitro UEFA elite estricto + partido físico eliminatorio: añadir +1 amarilla sobre promedio de temporada.
3. Paradas de portero en bloque bajo: estimar en función de remates a puerta (no remates totales), y reducir cuando el equipo inferior tiene posesión <40% porque los remates se bloquean colectivamente antes de llegar al portero.

====================================================
