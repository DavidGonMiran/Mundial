# Cuaderno de Aprendizaje — Mundial 2026

## Estado general del modelo

**Actualizado tras partido 2 (México 1-0 Corea del Sur, J2 Grupo A, 18 Jun 2026)**

- Mercados donde el modelo acierta de forma consistente: Dirección 1X2 (victoria favorito), marcador más probable en partidos ajustados (1-0), BTTS No en partidos tácticamente cerrados, Clean Sheet del favorito ante equipos de liga semi-amateur
- Mercados donde el modelo falla de forma consistente: Over 2.5 goles cuando el partido tiene carácter eliminatorio implícito (ambos equipos con 3 puntos), Over tarjetas cuando el punto de partida es un outlier arbitral, sobreestimación del nivel ofensivo de un equipo basándose en su partido anterior ante un rival de menor calidad
- Sesgos detectados:
  - **Sesgo de conservadurismo en goles con asimetría extrema** (detectado en CAN-QAT, sigue activo para ese tipo de partidos)
  - **Sesgo de extrapolación de outliers arbitrales.** Un partido con número anómalo de tarjetas/rojas no predice el patrón del torneo. Tratar como outlier hasta tener ≥5 partidos de referencia.
  - **Sesgo de rendimiento condicional.** El modelo extrapola el nivel ofensivo de un equipo de su último partido sin ajustar por la calidad del rival anterior. KOR vs CZE no predice bien el ataque de KOR vs MEX bien organizado.
  - **Sesgo de tensión táctica en partidos de grupo equilibrados.** Cuando ambos equipos llegan con los mismos puntos y el resultado tiene impacto clasificatorio directo, la intensidad táctica suprime los goles de forma sistemática.

- Ajustes ya aplicados:
  - En partidos con asimetría ≥4 divisiones de nivel: descartar Under 2.5 salvo contexto táctico defensivo explícito. Usar xG del favorito ×1.3 como referencia mínima.
  - Goleador estrella vs defensa de liga semi-amateur: subir probabilidad anytime a 45-55% (antes 30-35%).
  - Corners con dominio absoluto esperado: Over 9.5 como línea base, no techo.
  - BTTS No y Clean Sheet del favorito ante Qatar o equipos similares: probabilidad 80-85%, no 70-75%.
  - Árbitro con media alta + equipo inferior bajo asedio continuado: incorporar probabilidad de roja explícita.
  - **[NUEVO rev2] Over 2.5 goles: bajar 8-10 pp cuando ambos equipos llegan igualados en puntos y el partido es tácticamente de "final de grupo".** La tensión suprime los goles.
  - **[NUEVO rev2] Tarjetas: no extrapolar outliers.** Basar estimación en el árbitro específico confirmado, no en el último partido visto. Hasta tener 5+ partidos de referencia en el torneo, usar histórico del árbitro como dato principal.
  - **[NUEVO rev2] Nivel ofensivo de un equipo: ajustar por calidad del rival anterior.** Un buen rendimiento ofensivo ante un rival débil o desorganizado no es directamente extrapolable a partidos ante rivales mejor organizados.
  - **[NUEVO rev2] Props de goleador en partidos tácticamente cerrados:** reducir en 5-8 pp a los "favoritos anytime". En partidos igualados el gol suele caer en jugadores de segunda línea o via set piece.
  - **[NUEVO rev2] Penalizador por cambio de posición de élite:** si un jugador de inteligencia táctica muy alta (tipo Álvarez) baja a una posición atípica, el impacto negativo estimado debe reducirse a la mitad respecto a lo que indicaría el cambio de posición en un jugador estándar.

====================================================

## Historial de partidos

### Partido: Canadá vs Qatar — 18 Jun 2026 (J2 Grupo B)

**Predicción dada (resumen):**

- Resultado más probable: Victoria Canadá (62%) — marcador más probable 1-0 (24.5%) o 2-0 (18.2%)
- 1X2 (probabilidades): CAN 62% / X 19% / QAT 19%
- Over/Under goles: Under 2.5 al 53% (modelo apuntaba a partido contenido con Qatar resistiendo)
- Tarjetas (over/under): Over 3.5 amarillas al 65% — árbitro Garay 4.39/pj
- Corners (over/under): Over 7.5 al 62% / Over 9.5 al 42%
- Mercados EV+ destacados: BTTS No (72%, EV +9.4%), Over 3.5 amarillas (65%, EV +10.5%), Jonathan David anytime (35%, EV +27%), Over 7.5 corners (62%, EV +8.6%), CAN Clean Sheet (55%, EV +7.1%), CAN -1.5 hándicap (38%, EV +4.6%)

**Resultado real (Opta/Sofascore):**

- Marcador: **Canadá 6 - 0 Qatar** (resultado histórico — mayor goleada del torneo hasta la fecha)
- Goleadores: Jonathan David x3, Cyle Larin x1, Nathan Saliba x1, + 1 gol más
- Tarjetas reales: 4 amarillas totales (Cornelius-CAN + 1 más CAN / Khoukhi-QAT + Fathy-QAT) + **2 rojas Qatar** (Madibo, El Amin)
- Corners reales: **20 corners totales** (dominio absoluto de Canadá)
- Remates: CAN 34 totales / 10 a puerta — QAT muy limitado (16 remates, 8 bloqueados, 0 a puerta relevantes)
- Asistencia: 52.497 en BC Place Vancouver
- Árbitro: Cristián Garay Reyes (Chile) — confirmado

**Evaluación:**

- Aciertos:
  - ✅ Dirección 1X2 correcta: Victoria Canadá
  - ✅ BTTS No — Qatar no marcó, portería a cero confirmada
  - ✅ CAN Clean Sheet — confirmado
  - ✅ Jonathan David anytime goleador — hat-trick (8 remates, 5 a puerta)
  - ✅ Cyle Larin anytime goleador — confirmado
  - ✅ Over 7.5 corners — confirmado con enorme holgura (20 reales)
  - ✅ Over 9.5 corners — confirmado con enorme holgura
  - ✅ CAN -0.5 hándicap — confirmado
  - ✅ CAN -1.5 hándicap — confirmado (ganaron por 6)
  - ✅ Qatar sin generar peligro — confirmado (0 goles, sin remates a puerta relevantes)

- Fallos:
  - ❌ **Under 2.5 goles (53%)** — fallo estrepitoso. Acabó 6-0. El modelo subestimó masivamente la capacidad goleadora de Canadá y la fragilidad defensiva de Qatar con 10 y luego 9 hombres
  - ❌ **Magnitud de victoria subestimada** — el marcador más probable predicho era 1-0/2-0; la realidad fue 6-0. La diferencia de nivel generó una goleada histórica no capturada por el modelo
  - ❌ **xG Qatar estimado en 0.55** — generoso. Qatar no generó prácticamente nada en términos de ocasiones reales
  - ❌ **Probabilidad goleador David al 35%** — conservadora. Con hat-trick y 8 remates, el modelo infraestimó su impacto ante defensas de este nivel

- Sesgo detectado en este partido:
  1. **Conservadurismo en goles con asimetría extrema de nivel.** El modelo asigna Under 2.5 en partidos donde la brecha es Liga Champions vs liga semi-amateur. Incorrecto: en esos contextos el Over 2.5 tiene valor sistemático y el margen de victoria puede ser muy amplio.
  2. **Expulsiones de equipo inferior bajo asedio = efecto multiplicador brutal.** Las 2 rojas de Qatar (Madibo, El Amin) convirtieron un partido difícil en una goleada histórica. El modelo no ponderó esta probabilidad de colapso bajo presión extrema.
  3. **Corners con dominio absoluto: el techo real es muy superior.** Over 9.5 era el techo del modelo; la realidad fue 20 corners. En partidos donde un equipo domina el 65%+ de posesión contra bloque bajo sin calidad, los corners pueden superar 15-18.
  4. **Goleador estrella vs defensa semi-amateur: probabilidad insuficiente.** David al 35% anytime era conservador. Frente a centrales de Qatar Stars League, el nivel de conversión de un striker de Juventus es mucho mayor.

- Ajuste a aplicar en próximos partidos:
  1. **Regla de asimetría extrema (≥4 divisiones diferencia):** no jugar Under 2.5 salvo que el favorito tenga táctica defensiva explícita o contexto clasificatorio que invite a administrar. El Over 2.5 es la apuesta base.
  2. **Goleador estrella en asimetría extrema:** subir probabilidad anytime a 45-55%. Jonathan David en particular: tratar como 45%+ anytime cuando enfrenta defensa sin nivel europeo.
  3. **Corners en dominio unilateral:** usar Over 10.5 o Over 11.5 como mercado de valor cuando se espera 65%+ posesión del favorito contra bloque bajo sin calidad.
  4. **BTTS No y Clean Sheet ante equipos tipo Qatar:** probabilidad 80-85%, no 70-75%.
  5. **Rojas bajo presión:** cuando un equipo de nivel muy inferior defiende bajo asedio continuado durante 90 minutos, hay probabilidad no despreciable (20-25%) de al menos 1 roja por desesperación o cansancio.
  6. **Hándicap -2.5 o -3.5:** en asimetría extrema, estos hándicaps tienen valor EV+ que el modelo no estaba considerando.

====================================================

### Partido: México vs Corea del Sur — 18 Jun 2026 (J2 Grupo A · Estadio Akron, Guadalajara)

**Predicción dada (resumen):**

- Resultado más probable: Victoria México (46%) — marcador más probable 1-0 MEX (18.2%) o 1-1 (14.8%)
- 1X2 (probabilidades): MEX 46% / X 27% / KOR 27%
- Over/Under goles: Over 2.5 al 54% — modelo esperaba partido abierto con goles de ambos lados
- BTTS: Sí al 52% — modelo esperaba que Corea marcara dado su nivel ofensivo vs Chequia
- Tarjetas: Over 3.5 amarillas al 65% — estimación interna 4.2 amarillas (ajuste por outlier J1)
- Corners: Over 7.5 al 55% — estimación ~9 corners totales
- xG estimado MEX: 1.45 · xG estimado KOR: 1.30
- Mercados EV+ destacados: Over 2.5 goles (54%, EV +12.4% ★★★), Over 3.5 amarillas (65%, EV +11.7% ★★★), BTTS Sí (52%, EV +5.7% ★★), Over 7.5 corners (55%, EV +4.4% ★★), Over 1.5 goles (72%, EV +4.3% ★★)
- Props destacados: Son Heung-min anytime (30%), Jiménez anytime (28%), Hwang In-beom anytime (18%)

**Resultado real (Sofascore):**

- Marcador: **México 1 - 0 Corea del Sur**
- Goleador: Luis Romo (MEX, 2ª parte) — único gol del partido, jugador sin probabilidad asignada en props
- Tarjetas amarillas reales: **2 totales** (Kang-In KOR 1ª parte + Seung-Ho KOR 2ª parte)
- Tarjetas rojas: 0
- Corners reales: **~7 totales** (por debajo del Over 7.5)
- Remates totales: MEX ~11 · KOR ~12 — partido más parejo en remates de lo esperado
- Remates a puerta 1ª parte: 1 (Quiñones MEX) — primera parte extremadamente cerrada
- Remates a puerta 2ª parte: ~5 totales (Romo, Jiménez, Gallardo MEX; Hyun-Jun, Gue-Sung KOR)
- Portero KOR Seung-Gyu: 3 paradas totales · Portero MEX Rangel: 2 paradas
- Son Heung-min: 0 goles, 0 remates a puerta, impacto mínimo — sustitución en 2ª parte
- Hwang In-beom: 0 goles, 1 remate bloqueado, sin impacto ofensivo relevante
- Faltas totales partido: 16 — partido limpio y controlado tácticamente
- Árbitro: pendiente de confirmar en registros

**Evaluación:**

- Aciertos:
  - ✅ Dirección 1X2 correcta: Victoria México
  - ✅ Marcador exacto 1-0 MEX — era el más probable del modelo (18.2%), cumplido
  - ✅ Under 2.5 goles — aunque el modelo lo tenía solo al 46%, fue el resultado real
  - ✅ BTTS No — Corea no generó prácticamente nada en la 1ª parte; sin gol en todo el partido
  - ✅ MEX 1X doble oportunidad — confirmado
  - ✅ Under 7.5 corners (~7 reales) — el modelo tenía el Over al 55%, el mercado acertó más

- Fallos:
  - ❌ **Over 2.5 goles (54%, EV +12.4% ★★★)** — FALLO PRINCIPAL. Solo 1 gol en todo el partido. La selección con mayor EV+ fue la mayor pérdida
  - ❌ **Over 1.5 goles (72%, EV +4.3%)** — fallo. Solo 1 gol total
  - ❌ **BTTS Sí (52%, EV +5.7%)** — fallo. Corea no generó ni un remate a puerta en 45 minutos; Son completamente anulado
  - ❌ **Over 3.5 amarillas (65%, EV +11.7% ★★★)** — FALLO PRINCIPAL. Solo 2 amarillas reales vs 4.2 estimadas. Extrapolación del outlier J1 completamente errónea
  - ❌ **Over 7.5 corners (55%, EV +4.4%)** — fallo leve (~7 reales, partido muy cerrado)
  - ❌ **Son Heung-min anytime (30%)** — fallo. Sin remates a puerta, anulado por el bloque MEX
  - ❌ **Hwang In-beom anytime (18%)** — fallo. Sin impacto ofensivo
  - ❌ **Jiménez anytime (28%)** — fallo. 2 remates en 2ª parte pero sin gol

- Sesgos detectados en este partido:
  1. **Extrapolación de outlier arbitral como patrón de torneo.** El modelo elevó las probabilidades de Over 3.5 amarillas basándose en las 3 rojas del partido inaugural MEX-RSA. Ese partido fue un outlier extremo, no un indicador del estilo arbitral del torneo. El partido MEX-KOR tuvo solo 2 amarillas y 0 rojas. Lección crítica: un partido con tarjetas anómalas es un outlier, no un patrón. No extrapolar hasta tener ≥5 partidos de referencia.
  2. **Rendimiento ofensivo condicionado por la calidad del rival anterior.** El modelo asignó xG 1.30 a KOR basándose en sus 2 goles vs Chequia. Pero KOR no generó un solo remate a puerta en los primeros 45 minutos ante MEX bien organizado. El nivel ofensivo de un equipo debe ajustarse por la calidad defensiva del rival específico, no simplemente extrapolarse del partido anterior.
  3. **Tensión táctica en partidos de grupo equilibrados suprime los goles.** Ambos equipos llegaban con 3 puntos y sabían que el resultado tenía impacto clasificatorio directo. En estos contextos, la intensidad táctica produce partidos más cerrados de lo que los xG históricos sugieren. El modelo no tenía este filtro activo.
  4. **Props de goleador en partidos igualados: las grandes figuras se anulan mutuamente.** Son, Hwang y Jiménez fueron los tres irrelevantes ofensivamente. El gol llegó de Romo, centrocampista secundario que el modelo no tenía en props. En partidos de alta tensión táctica, el gol suele caer en un jugador de segunda línea o vía balón parado.
  5. **El cambio posicional de Álvarez al eje defensivo fue menos dañino de lo estimado.** El modelo aplicó -10% solidez defensiva. En realidad, la inteligencia lectora de Álvarez compensó con creces su posicionamiento atípico. MEX mantuvo portería a cero con relativa comodidad (2 paradas Rangel).

- Ajustes incorporados al modelo (ver sección "Estado general" arriba):
  1. Over 2.5 goles: bajar 8-10 pp cuando ambos equipos llegan igualados en puntos con implicación clasificatoria directa
  2. Tarjetas: basar estimación en el árbitro específico confirmado, nunca en el partido anterior visto. No extrapolar outliers hasta ≥5 partidos de referencia
  3. Nivel ofensivo de un equipo: ajustar por calidad del rival anterior antes de extrapolar
  4. Props en partidos tácticamente cerrados: reducir favoritos anytime en 5-8 pp, contemplar jugadores de segunda línea y especialistas en balón parado
  5. Penalizador por cambio posicional de élite: reducir el impacto negativo estimado a la mitad cuando el jugador tiene inteligencia táctica muy alta

====================================================
