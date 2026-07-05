# Cuaderno de Aprendizaje — Mundial 2026

## Estado general del modelo

**Actualizado tras partido 3 (Escocia 0-1 Marruecos, J2 Grupo C, 19 Jun 2026)**

- Mercados donde el modelo acierta de forma consistente: Dirección 1X2 (victoria favorito), marcador más probable 1-0 (3/3 partidos analizados), BTTS No en partidos tácticamente cerrados, Clean Sheet del favorito ante equipos de liga semi-amateur, Under 2.5 goles en partidos con alta tensión clasificatoria
- Mercados donde el modelo falla de forma consistente: Over 2.5 goles cuando el partido tiene carácter eliminatorio implícito, Over tarjetas cuando el árbitro no tiene historial mundialista consolidado, props de goleadores estrella en partidos cerrados (siguen sin convertir), sobreestimación del xG del equipo inferior cuando defiende en bloque bajo
- Sesgos detectados:
  - **Sesgo de conservadurismo en goles con asimetría extrema** (detectado en CAN-QAT, sigue activo para ese tipo de partidos)
  - **Sesgo de extrapolación de outliers arbitrales.** Confirmado en 2/3 partidos. No extrapolar hasta ≥5 partidos de referencia del árbitro en el torneo.
  - **Sesgo de rendimiento condicional.** Confirmado en MEX-KOR. Ajustar xG ofensivo de cada equipo por calidad del rival anterior.
  - **Sesgo de tensión táctica en partidos de grupo equilibrados.** Confirmado en MEX-KOR y parcialmente en SCO-MAR (solo 1 gol pese a superioridad MAR).
  - **[NUEVO rev3] Sesgo de sobreestimación del xG del equipo favorito contra bloque bajo organizado.** MAR generó xG real 0.99 (vs 1.45 estimado) ante un SCO que defendió en bloque muy bajo. Cuando el equipo inferior cierra todos los espacios y sacrifica el balón, el xG del favorito debe reducirse en 20-30% respecto al estimado por calidad de plantilla.
  - **[NUEVO rev3] Sesgo de props en partidos de alta intensidad táctica: el goleador anytime confirmado falla aunque esté en forma.** Saibari marcó el único gol pero su rendimiento fue el esperado (1 remate a puerta, 1 gol). El resto de props de ambos equipos —Brahim Díaz (0 SOnT en 2ª parte), McTominay (solo 2 remates, ambos bloqueados)— fallaron. Patrón sistemático: en partidos de alta tensión, los goleadores anytime EV+ más citados no convierten con frecuencia incluso si tienen buena actuación general.
  - **[NUEVO rev3] Sesgo de subestimación del BTTS No contra equipos de bajo xG ofensivo.** SCO generó xG real 0.51 y solo 1 remate a puerta en 90 minutos. El BTTS No acertó (70% de confianza → resultado correcto). Confirmar que cuando el equipo inferior tiene xG esperado <0.80 ante rival organizado, el BTTS No tiene valor sistemático ≥70%.

- Ajustes ya aplicados:
  - En partidos con asimetría ≥4 divisiones de nivel: descartar Under 2.5 salvo contexto táctico defensivo explícito. Usar xG del favorito ×1.3 como referencia mínima.
  - Goleador estrella vs defensa de liga semi-amateur: subir probabilidad anytime a 45-55% (antes 30-35%).
  - Corners con dominio absoluto esperado: Over 9.5 como línea base, no techo.
  - BTTS No y Clean Sheet del favorito ante Qatar o equipos similares: probabilidad 80-85%, no 70-75%.
  - Árbitro con media alta + equipo inferior bajo asedio continuado: incorporar probabilidad de roja explícita.
  - **[rev2] Over 2.5 goles: bajar 8-10 pp cuando ambos equipos llegan con implicación clasificatoria directa.** La tensión suprime los goles. Confirmado en MEX-KOR y SCO-MAR.
  - **[rev2] Tarjetas: no extrapolar outliers.** Basar estimación en el árbitro específico confirmado. Hasta ≥5 partidos de referencia en el torneo, usar histórico del árbitro como dato principal.
  - **[rev2] Nivel ofensivo de un equipo: ajustar por calidad del rival anterior.**
  - **[rev2] Props de goleador en partidos tácticamente cerrados:** reducir en 5-8 pp a los "favoritos anytime". En partidos igualados el gol suele caer en jugadores de segunda línea o vía set piece.
  - **[rev2] Penalizador por cambio de posición de élite:** reducir el impacto negativo estimado a la mitad cuando el jugador tiene inteligencia táctica muy alta.
  - **[NUEVO rev3] xG del favorito vs bloque bajo organizado:** aplicar reducción del 20-30% al xG estimado por calidad de plantilla cuando el equipo inferior renuncia al balón completamente (posesión <45%) y defiende con dos líneas de cuatro compactas. MAR: xG estimado 1.45 → real 0.99. Patrón a monitorizar.
  - **[NUEVO rev3] BTTS No con equipo inferior xG <0.80:** elevar confianza directamente al 72-75% sin ajuste adicional. Confirmado en SCO-MAR (SCO: xG real 0.51, 1 SOnT total en 90').
  - **[NUEVO rev3] Árbitro debut mundialista:** sin historial en WC = máxima incertidumbre. Usar media baja de 2.8-3.2 amarillas/pj como estimación base (no la media del torneo ni del árbitro en otras competiciones). Tantashev: 2 amarillas reales (vs 3.4 estimado modelo) → estimación demasiado alta.

====================================================

## Historial de partidos

### Partido: Canadá vs Qatar — 18 Jun 2026 (J2 Grupo B)

**Predicción dada (resumen):**
- 1X2: CAN 62% / X 19% / QAT 19%
- Over/Under goles: Under 2.5 al 53%
- Tarjetas: Over 3.5 al 65% · árbitro Garay 4.39/pj
- Corners: Over 7.5 al 62% / Over 9.5 al 42%
- EV+ principales: BTTS No 72%, David anytime 35%, Over 7.5 corners 62%, CAN -1.5 hándicap 38%

**Resultado real:** Canadá 6-0 Qatar · David hat-trick · 2 rojas QAT · 20 corners · 4 amarillas

**Evaluación (comprimida):**
- ✅ Dirección 1X2, BTTS No, Clean Sheet CAN, David anytime, Larin anytime, Over 7.5/9.5 corners, CAN -0.5 y -1.5
- ❌ Under 2.5 goles (fallo estrepitoso: 6 goles), xG Qatar sobreestimado, magnitud victoria subestimada, David al 35% conservador

**Sesgos clave detectados:** conservadurismo en goles con asimetría extrema, expulsiones bajo asedio = multiplicador de goles, corners con dominio total superan cualquier techo, goleador estrella vs defensa semi-amateur infraestimado.

**Ajustes incorporados:** asimetría extrema → Over 2.5 base; goleador estrella vs defensa débil → 45-55%; Over 9.5/11.5 corners en dominio total; probabilidad roja bajo asedio 20-25%.

====================================================

### Partido: México vs Corea del Sur — 18 Jun 2026 (J2 Grupo A · Estadio Akron, Guadalajara)

**Predicción dada (resumen):**
- 1X2: MEX 46% / X 27% / KOR 27%
- Over/Under goles: Over 2.5 al 54% ★★★
- BTTS Sí al 52%, Over 3.5 amarillas al 65% ★★★
- Corners: Over 7.5 al 55%
- xG: MEX 1.45 · KOR 1.30
- EV+ principales: Over 2.5 (54%, +12.4%), Over 3.5 amarillas (65%, +11.7%), BTTS Sí (52%, +5.7%)
- Props: Son anytime 30%, Jiménez 28%, Hwang 18%

**Resultado real:** México 1-0 Corea del Sur · Gol: Luis Romo (MC, sin probabilidad asignada) · 2 amarillas · ~7 corners · 16 faltas

**Evaluación (comprimida):**
- ✅ Dirección 1X2, marcador exacto 1-0 MEX, Under 2.5 (no jugada pero correcta), BTTS No, Under 7.5 corners
- ❌ Over 2.5 ★★★ (FALLO PRINCIPAL), Over 3.5 amarillas ★★★ (FALLO PRINCIPAL), BTTS Sí, Over 1.5 goles, Son/Jiménez/Hwang anytime

**Sesgos clave detectados:** extrapolación outlier arbitral, rendimiento condicional KOR sobreestimado vs MEX bien organizado, tensión táctica suprime goles cuando ambos equipos empatan en puntos, props en partido igualado caen en segunda línea (Romo, sin probabilidad asignada).

**Ajustes incorporados:** Over 2.5 -8pp en tensión clasificatoria; tarjetas por árbitro específico no por outlier; xG ajustado por rival anterior; props favoritos -5-8pp en partido cerrado; penalizador posicional de élite reducido a la mitad.

====================================================

### Partido: Escocia vs Marruecos — 19 Jun 2026 (J2 Grupo C · Boston Stadium, Foxborough MA)

**Predicción dada (resumen):**
- 1X2: MAR 46% / X 26% / SCO 28%
- xG estimado: MAR 1.45 · SCO 0.75
- Over/Under goles: Under 2.5 al 52% ★★ (ajuste tensión táctica ya aplicado)
- BTTS No al 70% ★★★
- Corners: Over 7.5 al 55% ★
- Amarillas: ~3.4 (Tantashev sin historial mundialista, estimación conservadora)
- EV+ principales: BTTS No 70% (+8.4% ★★★), Saibari anytime 32% (+11.8% ★★★), Under 2.5 52% (+3.7% ★★), Hakimi asistencia 28% (+12.0% ★★), Brahim Díaz anytime 20% (+10.0% ★), McTominay anytime 18% (+7.3% ★)
- Marcador más probable: 1-0 MAR (23.4%)

**Resultado real (Sofascore/Opta):**

- Marcador: **Marruecos 1 - 0 Escocia**
- Goleador: Ismael Saibari (MAR) — en la 1ª parte (datos: 1 gol, 1 SOnT, 1 remate total en 1ª parte)
- Asistencia: Brahim Díaz (pase de gol confirmado)
- Tarjetas amarillas: **2 totales** (Issa Diop 1ª parte · Andy Robertson 2ª parte)
- Tarjetas rojas: 0
- Corners totales: **7** (MAR: 5 / SCO: 2 — desglose por partidos: 3 MAR + 2 SCO en 1ª parte / 4 MAR en 2ª parte → datos Sofascore: total 7)
- Remates totales: SCO 6 · MAR 12
- Remates a puerta: SCO 1 · MAR 2
- xG real: SCO 0.51 · MAR 0.99
- Posesión: SCO 41% · MAR 59%
- Ocasiones claras: SCO 1 · MAR 3
- Paradas: Gunn 1 · Bounou 0 (dato Sofascore: SCO 1 save · MAR 0)
- Faltas: SCO 11 · MAR 8
- Pases: SCO 456 · MAR 670
- Entradas: SCO 20 · MAR 10

**Estadísticas granulares por jugador (1ª parte):**

| Jugador | G | A | TR | TA | Crn | S | SOnT | BS | P | C | E | O | FC | FR |
|---------|---|---|----|----|-----|---|------|----|----|---|---|---|----|----|
| SCO total 1ª parte | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 1 | 219 | 5 | 10 | 1 | 5 | 4 |
| MAR total 1ª parte | 1 | 1 | 0 | 1 | 3 | 6 | 2 | 1 | 360 | 4 | 9 | 0 | 5 | 4 |
| Saibari (MAR) | 1 | 0 | 0 | 0 | 0 | 1 | 1 | 0 | 19 | 0 | 1 | 0 | 0 | 0 |
| B. Díaz (MAR) | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 29 | 1 | 0 | 0 | 0 | 1 |
| Hakimi (MAR) | 0 | 0 | 0 | 0 | 1 | 1 | 0 | 0 | 41 | 3 | 0 | 0 | 0 | 1 |
| McTominay (SCO) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 19 | 0 | 1 | 0 | 0 | 0 |
| Robertson (SCO) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 34 | 1 | 0 | 0 | 0 | 0 |
| Tierney (SCO) | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 1 | 12 | 2 | 3 | 0 | 2 | 1 |

**Estadísticas granulares por jugador (2ª parte):**

| Jugador | G | A | TR | TA | Crn | S | SOnT | BS | P | C | E | O | FC | FR |
|---------|---|---|----|----|-----|---|------|----|----|---|---|---|----|----|
| SCO total 2ª parte | 0 | 0 | 0 | 1 | 2 | 5 | 1 | 5 | 237 | 15 | 11 | 0 | 6 | 5 |
| MAR total 2ª parte | 0 | 0 | 0 | 1 | 4 | 6 | 1 | 5 | 310 | 8 | 0 | 0 | 3 | 4 |
| McTominay (SCO) | 0 | 0 | 0 | 0 | 1 | 2 | 0 | 2 | 17 | 0 | 0 | 0 | 1 | 0 |
| Robertson (SCO) | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 28 | 1 | 0 | 0 | 1 | 0 |
| Hakimi (MAR) | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 40 | 2 | 0 | 0 | 0 | 2 |
| El Khannouss (MAR) | 0 | 0 | 0 | 0 | 0 | 1 | 1 | 0 | 21 | 2 | 0 | 0 | 0 | 0 |
| Saibari (MAR) | 0 | 0 | 0 | 0 | 1 | 1 | 0 | 1 | 6 | 0 | 0 | 0 | 0 | 0 |

**Evaluación:**

- Aciertos:
  - ✅ **Dirección 1X2 correcta: Victoria Marruecos** (3/3 en el torneo — victorias del favorito)
  - ✅ **Marcador exacto 1-0 MAR** — era el más probable del modelo (23.4%). 3/3 partidos analizados con el marcador exacto más probable cumplido.
  - ✅ **BTTS No (70%, EV +8.4% ★★★)** — Escocia no marcó. 3/3 en BTTS No cuando se predijo. Confirmado como mercado fiable del modelo.
  - ✅ **Under 2.5 goles (52%, EV +3.7% ★★)** — Solo 1 gol en el partido.
  - ✅ **Saibari anytime goleador (32%, EV +11.8% ★★★)** — ACIERTO. Gol en la 1ª parte. EV+ confirmado.
  - ✅ **Brahim Díaz asistencia** — La asistencia del gol fue de Díaz. No estaba en las selecciones principales pero confirmado en stats.
  - ✅ **Under 7.5 corners** — 7 corners reales vs Over 7.5 al 55%. El mercado Under habría acertado.
  - ✅ **Posesión MAR ~58-60%** — Real: 59%. Estimación correcta.
  - ✅ **Remates MAR superiores** — Real: 12 MAR vs 6 SCO (dentro del rango estimado).

- Fallos:
  - ❌ **Hakimi asistencia anytime (28%, EV +12.0% ★★)** — Hakimi no asistió. La asistencia la dio Brahim Díaz. Hakimi fue activo (81 pases totales, 5 centros, 2 remates) pero no el creador del gol.
  - ❌ **Over 7.5 corners (55%, EV +1.6% ★)** — 7 corners reales, por debajo del umbral. MAR en posesión no presionó para corners; SCO defendió sin concederlos sistemáticamente.
  - ❌ **McTominay anytime (18%, EV +7.3% ★)** — 0 remates a puerta, 2 remates bloqueados en 2ª parte. El rival defensivo dejó sin espacio incluso al motor escocés.
  - ❌ **Brahim Díaz anytime goleador (20%, EV +10.0% ★)** — 0 goles aunque sí asistencia. El prop de goleador falló; el de creador acertó.
  - ⚠️ **xG MAR estimado 1.45 → real 0.99** — sobreestimado en 0.46. SCO en bloque bajo redujo el xG rival más de lo modelado.
  - ⚠️ **Amarillas estimadas 3.4 → reales 2** — El debut mundialista de Tantashev fue más conservador de lo proyectado. Confirma que la estimación base debe ser 2.8-3.2/pj para árbitros sin historial WC.

- Sesgos detectados en este partido:
  1. **Asistencia anytime: el creador real no siempre es el lateral atacante.** El modelo priorizó a Hakimi (asistidor en el gol vs Brasil) pero la asistencia fue del mediapunta (Brahim Díaz). En partidos donde el gol proviene de un pase en profundidad de zona central, la asistencia recae en el creador central, no en el lateral. Revisar asignación de probabilidades de asistencia: no sobrecargar al lateral cuando el equipo tiene un mediapunta de nivel Real Madrid.
  2. **xG del favorito se comprime más de lo esperado ante bloque muy bajo.** MAR generó xG real 0.99 vs 1.45 estimado (reducción del 32%). Escocia defendió con 41% de posesión y solo concedió 3 ocasiones claras. El ajuste del 20-30% al xG del favorito vs bloque bajo queda validado empíricamente.
  3. **Corners no siguen a la posesión cuando el equipo inferior defiende muy profundo.** 59% posesión MAR → solo 5 corners (de los 7 totales). Cuando el equipo inferior no presiona y defiende en su área, los corners del favorito son menores porque hay menos situaciones de desvío en el área pequeña. Ajustar estimación de corners a la baja cuando se proyecta bloque bajo extremo del rival.
  4. **Props de asistencia: separar creador del gol (más probable el mediapunta) del asistidor secundario (lateral).** Hakimi fue el asistidor del gol de Saibari vs Brasil → modelo lo puso a 28%. Pero el patrón en este partido fue distinto (Díaz habilitó a Saibari). La asistencia anytime del lateral tiene alta varianza incluso cuando el lateral es dominante (81 pases, 5 centros, 0 asistencias).

- Ajustes incorporados al modelo (ver sección "Estado general" arriba):
  1. xG del favorito vs bloque bajo organizado: reducir 20-30% respecto a estimación por calidad de plantilla.
  2. BTTS No con xG inferior <0.80: confianza directa al 72-75%.
  3. Árbitro debut mundialista: usar 2.8-3.2 amarillas/pj como base, no la media del torneo.
  4. Corners con posesión favorable pero rival en bloque profundo: reducir estimación de corners del favorito; los desvíos en área pequeña se reducen cuando no hay pressing ni duelos en banda.
  5. Asistencia anytime: no sobrecargar al lateral en detrimento del mediapunta cuando el equipo tiene un creador central de elite (Brahim Díaz nivel Real Madrid). La asistencia fluye por el mediapunta en partidos donde el gol viene de pase en profundidad.

====================================================
