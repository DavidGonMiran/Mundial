# Cuaderno de Aprendizaje — Mundial 2026

## Revisión 50 | Actualizado: 05 Jul 2026 (post-auditoría del tramo rev40–rev49)

-----

## NOTA DE AUDITORÍA — REV.50 (05 Jul 2026)

*Auditoría del tramo rev40–rev49 solicitada por el usuario. El usuario confirmó aplicar todas las recomendaciones **excepto** modificar la cuota diana ≈3.0 de la combinación, que se conserva intacta por ser requisito de una promo de penaltis de Winamax. Esta revisión **no incorpora ningún partido nuevo** (no hay P48): parte del contenido íntegro de rev49 y solo aplica los cambios de gobernanza que se detallan a continuación, con su motivo.*

1. **R38 — corners R32: RETIRADA, contador de recuperación anulado.** *Motivo:* la "recuperación" 2/3 era ilusoria. El contador solo avanzaba con el mercado activamente proyectado, y el mercado no se proyecta precisamente por estar en BAJA obligatoria; además, los tres resultados reales posteriores (P43: 6, P44: 5, P46: 12 corners) habrían **fallado** cualquier línea Over manejada. No es "casi recuperada": el modelo de proyección de corners de R32 se sigue equivocando 5 partidos seguidos, simplemente no se apuesta. Pasa a **RETIRADA** para R32; el contador de recuperación queda anulado; cualquier modelo futuro de corners de R32 deberá reconstruirse bajo una regla nueva (siguiente número libre), no reactivando R38.

2. **R13 extendida (variante de GOL): RETIRADA.** *Motivo:* 0 valor predictivo y empeoramiento hasta el doblete de Ounahi (P46, "el contraejemplo más dañino"). El único caso de apoyo posterior (P47) no revierte el historial. El contador de redefiniciones nunca la degradó porque nunca se re-acotó su ámbito — punto ciego del contador, que solo detecta sobreajuste, no reglas que fallan sin re-acotarse. Se retira la variante de gol; la variante de **asistencia** se mantiene en observación (BAJA).

3. **R40 (pick individual): variante CERRADA.** *Motivo:* 0/2 en aplicaciones reales como pick de jugador y 2 redefiniciones acumuladas (a una del umbral). Se cierra formalmente la variante de pick individual para que no pueda reactivarse y disparar una 3ª redefinición → BAJA obligatoria. El mercado colectivo (o BTTS Sí como proxy) sigue disponible.

4. **Tarjetas en eliminatoria (R43 / R48 / R49): techo ★★.** *Motivo:* cuatro reglas creadas en serie para el mismo mercado (R42→R43→R48→R49), cada una nacida al topar la anterior con un caso no cubierto — sobreajuste distribuido que el contador de redefiniciones no ve (se registra como "reglas nuevas", no como redefiniciones). Todas en BAJA/MEDIA, y las tarjetas han sido base de ★★★/★★ recientes que fallaron (P46 Under 4.5 TA ★★★; P44 Under 3.5 TA ★★). Se impone un techo de **★★ máximo** a cualquier mercado de tarjetas en rondas eliminatorias hasta que R48 **y** R49 acumulen ≥3 partidos de muestra (hoy 1/2 y 1/1). *No se fusionan las cuatro reglas* en un marco único, pese a haberse valorado: hacerlo exigiría renumerar/reutilizar reglas existentes, algo prohibido por las reglas fijas del cuaderno. Se deja anotado como posible reorganización futura mediante una regla-marco nueva, sin ejecutarla aquí.

5. **Registro de ROI real (P44–P47): pendiente; conclusión provisional.** *Motivo:* la comparación ROI real (−16.25%, −3.25€/20€) vs teórico ★★★ (+18.18%) se apoya solo en 4 partidos con dato, todos tempranos (P39, P40, P42, P43); P44–P47 tienen la columna de ROI real en blanco y no hay bankroll base antes de P45. La divergencia es grande y de origen **estructural** (combinadas de varias patas vs mercados sueltos), pero **no está verificada de forma sostenida en todo el tramo**. Se mantiene el requisito de registrar las apuestas reales de cada partido; hasta entonces, la lectura "la selección manual resta valor" queda como direccional, no concluyente.

6. **Corrección de integridad — recuento ★★★.** *Motivo:* la lectura acumulada declaraba 11/17 aciertos ★★★ (64.7%), pero la propia tabla de ROI teórico suma **13/17 (76.5%)**. El desfase (−2) entró en rev46 (decía 9/12, la tabla daba 10/12) y se arrastró. Corregido a 13/17 (76.5%). Los % de ROI no se ven afectados (se calculan aparte y son coherentes). Nota: el ★★★ rendía **mejor** de lo declarado, lo que refuerza la lectura de que el staking sistemático supera a las combinadas manuales.

7. **Combinación "más segura" a cuota ≈3.0: cuota conservada, etiqueta corregida.** *Motivo:* la cuota diana ≈3.0 **se mantiene intacta** por ser requisito de una promo de penaltis de Winamax (decisión explícita del usuario). Se corrige únicamente la etiqueta: una cuota ≈3.0 implica ~33% de probabilidad conjunta, de modo que la mayoría de estas combinaciones deben perder por diseño (0/4 en P44–P47, todas por una sola pata). Se documenta como apuesta **de alta varianza y motivada por promo**, no como la apuesta "más segura" del informe. No se altera ninguna regla de construcción del parlay.

*Estos siete cambios se registran aquí como acciones de auditoría y **no** incrementan el contador de `REGISTRO DE REDEFINICIONES`, reservado a reformulaciones surgidas del análisis partido a partido. Las entradas de cada regla y el `RESUMEN DE SESGOS ACTIVOS` se han actualizado para reflejar los nuevos estados.*

-----

## OBJETIVOS FIJOS DE PRESENTACIÓN (transversales, no ligados a un partido concreto)

**Objetivo permanente — Combinación más segura a cuota ≈3.0 (Winamax) [añadido 02 Jul 2026]:**
Además de las selecciones EV+ individuales de cada informe, todo dashboard debe incluir la combinación (parlay) MÁS SEGURA — es decir, de MÁXIMA probabilidad conjunta y por tanto de menor riesgo, no necesariamente de mayor EV — que alcance una cuota total ≈3.0 en Winamax. Reglas de construcción:

- Las patas deben salir exclusivamente de selecciones ya marcadas como EV+ en el propio informe de ese partido (no se inventan patas nuevas solo para completar cuota).
- Pueden combinarse libremente mercados de equipo (1X2, hándicap, goles, BTTS) y mercados de jugador (goleador, asistencia, remates, tarjeta), sin restricción de tipo.
- Ante varias combinaciones posibles que ronden cuota 3.0, se prioriza siempre la de mayor probabilidad conjunta estimada sobre la de mayor EV combinado — el criterio rector es seguridad, no maximización de valor.
- Respetar los sesgos activos del cuaderno al elegir patas: evitar corners mientras R38 esté en BAJA obligatoria, y evitar props individuales de R40 mientras esté en 0/2.
- Mostrar siempre: patas, probabilidad y cuota estimada de cada pata, probabilidad conjunta, cuota combinada total, EV combinado y Kelly sugerido para la combinada.

**Anotación de auditoría (rev50, 05 Jul 2026):** la cuota diana ≈3.0 se conserva **sin cambios** por ser requisito de una promo de penaltis de Winamax. A efectos de honestidad del modelo, esta combinación se considera una apuesta de **alta varianza y motivada por promo**, no la apuesta "más segura" del informe: una cuota ≈3.0 equivale a ~33% de probabilidad conjunta, por lo que la mayoría de estas combinaciones perderán por diseño (registro real 0/4 en P44–P47, todas por una sola pata fallida). Las reglas de construcción de arriba no se modifican; solo se ajusta la lectura de riesgo de la combinada.

Esta sección se mantiene igual en cada revisión salvo que el usuario pida modificar el objetivo explícitamente; no se sustituye por el resumen de un partido.

-----

## ESTADO GENERAL DEL MODELO

*Actualizado tras partido 47 (Francia 1-0 Paraguay, Octavos de Final / Ronda de 16, 04 Jul 2026) — con predicciones pre-partido completas*

**Marcador confirmado por periodos:**
1ªp: 0-0. 1 TA (Barcola, FRA), 0 TR. 7 corners (todos de Francia — Paraguay 0). Remates: Francia 5 (0 a puerta), Paraguay 2 (0 a puerta). Dominio territorial total de Francia ya desde el arranque.
2ªp: Gol decisivo de **Kylian Mbappé** (sin asistencia registrada en los datos aportados). 2 TA más (Manu Koné y Michael Olise, ambas de Francia), 0 TR — las 3 tarjetas del partido completo recayeron enteramente en jugadores franceses, ninguna en Paraguay. 7 corners más (5 Francia + 2 Paraguay). Mbappé cierra el partido con 5 remates, 4 a puerta, 1 gol.

**Totales partido completo (90', sin prórroga):** Francia 1 — Paraguay 0 (Mbappé). 3 TA totales (todas de Francia: Barcola 1ªp, Koné y Olise 2ªp), 0 TR — la cifra de tarjetas MÁS BAJA de cualquier partido de eliminatoria de toda la muestra hasta ahora. 14 corners totales (12 Francia + 2 Paraguay). 20 remates totales (15 Francia + 5 Paraguay), 5 a puerta (los 5 de Francia — Paraguay 0 remates a puerta en todo el partido). 24 faltas cometidas combinadas (13 Paraguay + 11 Francia — pese a lo cual las 3 tarjetas fueron todas para Francia). Orlando Gill (POR, PAR) registra 4 paradas en la 2ª parte.

**Predicciones pre-partido:** PAR 6% / X 13% / FRA 81% (c. justa FRA 1.23). Checklist R11: **1/5 PASS** (único con PASS: Paraguay ya jugó en bloque bajo en su J1 ante EE.UU.) — sin descuento aplicado al favorito. R12 aplicado (skip Gabriel Ávalos en gol). R13 extendida aplicada (skip Tchouaméni/Rabiot en gol — nota: la alineación real usó a Manu Koné en vez de Tchouaméni, ver Historial). R40 aplicado (sin prop de gol sorpresa para Paraguay). R44 aplicado sobre la baja reportada de Omar Alderete (sin prop individual asociado). **R42/R43 declarados explícitamente fuera de aplicación por decisión del análisis, no por regla formal:** pese a que R43 (tarjetas bajas no-Conmebol) habría sugerido una línea baja, se optó por retirar el mercado de tarjetas por completo de la tabla EV+, citando dos precedentes de Ilgiz Tantashev en JJ.OO. París 2024 (9 TA dirigiendo a Paraguay, 10 TA+1 TR dirigiendo a Francia) — ver R49 nueva para el resultado de esta decisión.
**Mercados ★★★:** Doble oportunidad 1X — Francia o Empate (EV+6.2%), Kylian Mbappé goleador anytime (EV+6.8%).
**Mercados ★★:** Over 2.5 goles totales (EV+9.2%), BTTS No (EV+7.1%).
**Mercados ★:** Over 8.5 corners Francia (EV+7.3%), Ousmane Dembélé goleador anytime (EV+8.0%).
**Combinación más segura:** Kylian Mbappé goleador anytime + Over 2.5 goles totales, cuota combinada 3.06, probabilidad conjunta ~44%.

**Balance (mercados evaluados a 90 minutos, convención estándar del sector):**
✅ **Doble oportunidad 1X (Francia o Empate)** — Francia gana 1-0.
✅ **Kylian Mbappé goleador anytime** — anota el único gol del partido.
❌ **Over 2.5 goles totales** — solo 1 gol en total (Under 2.5 se cumple).
✅ **BTTS No** — Paraguay no anota.
✅ **Over 8.5 corners Francia** — 12 corners de Francia.
❌ **Ousmane Dembélé goleador anytime** — no anota.
❌ **Combinación más segura (Mbappé anytime + Over 2.5 goles, cuota 3.06)** — **PIERDE en su conjunto**: acierta la pata de Mbappé, falla la de goles (mismo patrón de fallo por una sola pata que en P45/P46, con las patas invertidas de nuevo respecto a P46).

**Balance de mercados EV+ de este partido:** 4 aciertos de 6 seleccionados (66.7%) — el mejor balance desde P44 (67%), clara recuperación tras el 33.3% de P46. Los dos ★★★ aciertan ambos (primer 2/2 en el tier principal desde varias revisiones); de los dos ★★ acierta uno (BTTS No) y falla uno (Over 2.5 goles); de los dos ★ acierta uno (corners) y falla uno (Dembélé).

**Claves Rev49:**

- **R4 extiende a 25/25** "no pierde en juego" (Francia, favorito extremo ~81%, gana con claridad 1-0) y a **23/25** "resuelto en 90'" — nuevo máximo histórico en ambas rachas.

- **R11 checklist (1/5 PASS) se refuerza de nuevo, en la dirección contraria a P46:** el marcador final (1-0) resulta mucho más ajustado de lo que el abrumador dominio territorial de Francia sugería (15-5 remates, 12-2 corners). Confirma otra vez que el resultado del checklist no predice el margen final — esta vez un favorito extremo gana raspado, justo lo opuesto al favorito moderado que goleó en P46.

- **R12 sube a 8/8 casos limpios:** Gabriel Ávalos, "9" titular de Paraguay, termina el partido sin registrar ni un solo remate. Confianza ALTA cada vez más sólida.

- **R44 gestiona con cautela correcta un dato ambiguo:** Omar Alderete, reportado como baja por lesión antes del partido, aparece sin embargo con una participación mínima en los datos aportados (3 pases 1ªp + 2 pases 2ªp) — posiblemente una aparición muy breve de suplente o una recuperación de última hora, sin confirmación posible. No se ofreció ningún prop individual asociado a Alderete, por lo que la ambigüedad no generó ninguna exposición.

- **R13 extendida recibe su primer caso de apoyo tras el contraejemplo dañino de Ounahi (P46):** ni Adrien Rabiot ni Manu Koné (mediocentros titulares de Francia) anotan. Se mantiene en confianza BAJA — un solo caso limpio no revierte el historial mixto, pero corta la racha de contraejemplos.

- **Corrección de alineación pre-partido:** el informe previo proyectó un doble pivote Tchouaméni-Rabiot para Francia; los datos reales muestran a Rabiot junto a Manu Koné, sin ninguna aparición de Tchouaméni — matiz de precisión en la alineación probable, sin impacto en los mercados EV+ seleccionados.

- **NUEVA R49 — Historial de árbitro fuera del propio Mundial es señal más débil que sus datos dentro del torneo:** el análisis pre-partido citó dos precedentes de Ilgiz Tantashev en JJ.OO. París 2024 (9 TA dirigiendo a Paraguay; 10 TA+1 TR dirigiendo a la selección olímpica de Francia) para descartar el patrón base de R43/R48 y retirar el mercado de tarjetas de la tabla EV+. El resultado real fue de solo **3 TA totales** — la cifra más baja de tarjetas de toda la muestra de eliminatoria; un Under 3.5 TA habría ganado con comodidad. La cautela, aunque razonada, resultó excesivamente conservadora. Primer caso: 1/1. Confianza: BAJA.

- **R48 recibe un contraejemplo:** a diferencia de Michael Oliver (P46, 8 TA muy por encima de su perfil de grupos), Tantashev dirige este R16 con solo 3 TA, en línea con su perfil general de carrera (~3.5 TA/partido). Racha pasa a **1/2** — muestra dividida, sin patrón consistente todavía. Confianza se mantiene BAJA.

- **Asimetría de tarjetas por equipo:** las 3 TA del partido recayeron enteramente en jugadores franceses (Barcola, Koné, Olise), pese a que Paraguay cometió más faltas en total (13 vs 11) — dato informativo, sin regla nueva derivada de un solo caso.

- **Sin caso evaluable:** R40 (Paraguay no anotó), R41 (ningún central anotó; no se ofreció prop esta vez), R42 (Tantashev no es Conmebol), MP-1/MP-6/MP-7 (gol de un titular sin asistencia registrada; dominio de corners ya presente desde el inicio sin patrón claro de "urgencia de 2ª parte"; sin prórroga).

-----

## REGLAS OPERATIVAS CONSOLIDADAS (cambios relevantes únicamente)

*Nota: esta sección solo recoge reglas con cambios en revisiones recientes. Definición base de R1 (origen rev36, sin cambios estructurales desde entonces), citada por su relevancia en el historial de partidos:*

**R1 — BTTS No con xG rival <0.80**
Racha: 18/30 | Confianza: MEDIA. Regla probabilística, no determinística — un bloque bajo con contragolpe + balón parado puede romper la regla incluso con xG bajo (caso PAR P35, caso COD P39). **P40-P43 no contaron para esta racha** (xG rival estimado por encima del umbral en los cuatro casos). **P44 tampoco cuenta para la racha estricta** — el xG medio pre-partido de Ghana en fase de grupos fue 0.95, por encima del umbral de 0.80; sin embargo, el resultado real (Ghana no solo no anotó, sino que no registró ni un remate a puerta en 90 minutos) es la confirmación cualitativa más clara del mercado BTTS No hasta ahora, pese a no computar en la racha estricta. **P46 (Canadá, xG 0.95, tampoco cuenta en la racha estricta) aporta una segunda confirmación cualitativa consecutiva: Canadá no anotó pese a un xG estimado por encima del umbral.**

**R4 — Favorito gana / dirección 90'-120' (actualizada rev49)**
Racha "no pierde en juego": **25/25** (Francia, favorito extremo ~81%, gana con claridad y sin necesidad de prórroga, extiende la racha, nuevo máximo histórico). Racha resultado final resuelto en 90': **23/25**. Confianza ALTA. **Matiz rev49:** P47 es un caso "clásico" de favorito extremo ganando (a diferencia del matiz de P46 con favorito moderado), pero con un margen de solo 1 gol pese al dominio territorial absoluto (15-5 remates, 12-2 corners) — otro recordatorio de que R4 predice la dirección del resultado, no el margen.

**R11 — Checklist de confianza 1X2 (sin cambios de mecánica en rev49)**
P47 registra **1/5 PASS** (único PASS: Paraguay ya jugó en bloque bajo en su J1) y el resultado es un 1-0 ajustado pese al dominio territorial abrumador de Francia — justo lo opuesto al 2/5 PASS + goleada de P46. Se refuerza con fuerza la lectura fijada en rev45: el resultado del checklist no predice el grado de dificultad ni el margen final del partido — la muestra ya cubre desde partidos apretados hasta goleadas, prórrogas con penaltis, y ahora un favorito extremo ganando raspado.

**R12 — Skip striker titular del equipo inferior a cuota corta (actualizada rev49)**
Casos limpios: Saibari (P36), Pépé (P37), Isak + Gyökeres (P38), Gouiri con matiz metodológico (P43), Jordan Ayew (P44), Dailon Livramento (P45), Jonathan David (P46), y ahora **Gabriel Ávalos (P47): 0 remates en todo el partido** pese a ser el "9" titular de Paraguay. Racha sube a **8/8 casos limpios** (+1 caso con matiz metodológico distinto en P43). Confianza: ALTA.

**R38 — Supresión de corners en bloque ultra-defensivo (RETIRADA en auditoría rev50)**
P41: 9 corners, dentro de rango. P42: 14 corners, muy por encima. P43 y P44 no se destacaron como mercado activo (BAJA obligatoria seguía vigente) y sus resultados reales (6 y 5 corners) habrían fallado cualquier línea Over manejada en revisiones anteriores. **P46 tampoco fue mercado activo, pero su resultado real (12 corners totales) sí habría batido con holgura la línea informativa manejada (Over 8.5)** — un tercer dato consecutivo en la dirección de recuperar confianza, aunque ninguno de los tres computa formalmente por no haber sido mercado activamente proyectado. Racha de "partidos limpios consecutivos" sigue en 2/3 formalmente, sin cambios por P43, P44 ni P46. **[AUDITORÍA REV50]** El contador 2/3 queda **anulado**: la recuperación era ilusoria — el mercado no se proyecta por estar en BAJA, y los tres resultados reales (6, 5, 12 corners) habrían fallado igualmente cualquier línea Over. R38 pasa a **RETIRADA** para la proyección de corners en R32; su modelo debe reconstruirse desde cero bajo una **regla nueva** si en el futuro se decide reactivar el mercado. No usar R38 como base de ninguna apuesta.

**R39 — KO + rival persiguiendo infla tarjetas pese a árbitro conservador (sin nuevo matiz en rev48)**
Redefinida en rev43 para exigir consulta cruzada con R43 antes de recomendar mercados de tarjetas. **P46 aporta un dato relevante para la lectura de esta regla, aunque en una dirección distinta a los casos anteriores: las tarjetas se dispararon (8 TA) con un árbitro de perfil "Normal" (Oliver, no ultra-conservador como Fischer ni "activo" conocido como Turpin), y 6 de las 8 tarjetas llegaron en un primer tiempo todavía 0-0 — es decir, sin que hubiera todavía un equipo "persiguiendo" el marcador.** Esto sugiere que el fenómeno de tarjetas altas en KO no depende solo de la dinámica de persecución de resultado, sino que puede aparecer por la intensidad general del cruce desde el inicio. No se redefine R39 (que sigue centrada en la dinámica de persecución), pero se registra esta observación como complementaria — ver R48 nueva, más centrada en el contexto de ronda (octavos) que en la dinámica de marcador.

**R41 — Gol de central en KO (sin cambios en rev49)**
Racha se mantiene en 3/6. **P47 no aporta caso**: ningún central (Upamecano, Saliba, Gustavo Gómez, Canale, Alderete) anotó, pero tampoco se ofreció ningún prop de R41 en el informe de este partido, por lo que no computa ni a favor ni en contra. Confianza se mantiene en MEDIA.

**R44 — Riesgo de alineación no confirmada cerca del inicio (actualizada rev49)**
P46 gestionó correctamente las dudas de Canadá (Davies, Koné) sin ningún prop asociado. **P47 aporta un caso más ambiguo que refuerza igualmente la prudencia de no ofrecer props sobre jugadores en duda:** Omar Alderete, reportado como baja por lesión antes del partido, registra sin embargo una participación mínima en los datos aportados (3 pases 1ªp + 2 pases 2ªp) — posiblemente una aparición muy breve de suplente, sin confirmación posible con los datos disponibles. Al no haberse ofrecido ningún prop individual sobre Alderete, la ambigüedad no generó ninguna exposición. Racha de gestión correcta de dudas se mantiene sin fallos.

**R48 — Tarjetas en Octavos (R16) fuera del perfil de grupos del árbitro (actualizada rev49)**
Primer caso (P46): Michael Oliver, perfil "Normal" y media 3.0 TA en fase de grupos, dirigió un R16 con **8 TA totales**, muy por encima de su propia media. **P47 aporta un contraejemplo:** Ilgiz Tantashev, sin perfil de grupos formalmente confirmado en el cuaderno pero con una media de carrera citada de ~3.5 TA/partido, dirige este R16 (Paraguay-Francia) con solo **3 TA totales** — en línea con, o incluso por debajo de, su perfil habitual, no por encima. Racha: 1/1 → **1/2** (un caso alto, un caso bajo). Confianza: BAJA, ahora con muestra dividida — la hipótesis de que las tarjetas se disparan sistemáticamente en octavos respecto al perfil de grupos del árbitro no se sostiene todavía de forma consistente; se mantiene como factor de alerta a vigilar, pero sin poder aplicarse como ajuste direccional fiable con solo dos casos y en direcciones opuestas.

**NUEVA R49 — Historial de árbitro fuera del propio Mundial es señal más débil que sus datos dentro del torneo (rev49)**
Primer caso: el análisis pre-partido de P47 citó dos precedentes de Ilgiz Tantashev en los JJ.OO. París 2024 (9 TA dirigiendo a Paraguay en un 1-0 sobre Malí; 10 TA + 1 TR dirigiendo a la selección olímpica de Francia en un 1-0 sobre Argentina) para descartar explícitamente el patrón base de R43/R48 y retirar el mercado de tarjetas por completo de la tabla EV+ del informe. El resultado real del partido fue de solo **3 TA totales** — la cifra más baja de tarjetas de toda la muestra de eliminatoria hasta ahora, y un mercado Under 3.5 TA habría ganado con comodidad. Racha: 1/1. Confianza: BAJA (muestra de un solo caso). **Regla de aplicación:** ante un árbitro con cualquier historial dentro del propio Mundial 2026 (aunque sea solo de fase de grupos), ese dato debe primar sobre precedentes de otras competiciones (Juegos Olímpicos, ligas domésticas, copas continentales, etc.), salvo que exista una razón muy sólida y específica para lo contrario — los precedentes fuera de torneo pueden reflejar un contexto de intensidad, exigencia arbitral o grupo de jugadores muy distinto al del propio Mundial.

-----

## REGISTRO DE REDEFINICIONES (capa meta)

*Objetivo: vigilar el sobreajuste. Cada vez que una regla se matiza o redefine para excluir un caso que la incumplió, queda registrado aquí. Si una regla acumula ≥3 redefiniciones, baja automáticamente a confianza BAJA hasta sobrevivir 3 partidos consecutivos sin nuevo matiz — independientemente de lo que diga su racha "activa" en ese momento.*

*Nota rev46: R43 sufre un contraejemplo relevante en P44 (Turpin, 5 TA), pero **no se registra como redefinición formal** — el caso no se excluye del ámbito de la regla, se cuenta directamente como un fallo dentro de su racha (4/4→4/5), con la consiguiente bajada de confianza a MEDIA. Una redefinición implicaría acotar el ámbito de R43 para que el caso de Turpin quedara fuera de su alcance (p. ej., excluyendo árbitros de perfil "Activo" en grupos); no se hace así porque no hay base suficiente todavía para esa exclusión con un solo contraejemplo — se prefiere, como ya se hizo con R42/R43 en su día, dejar que la racha absorba el dato y vigilar si se repite. R39 no se redefine tampoco: el caso de P44 es una confirmación adicional de una regla ya redefinida en rev43, no un nuevo matiz de su ámbito. La tabla se mantiene sin nuevas filas desde rev43.*

*Nota rev47: ninguna regla se redefine formalmente en esta revisión. P45 aporta datos que **recuperan** la confianza de R43 (5/6, tras el contraejemplo de P44) en lugar de forzar una nueva redefinición, y aporta un matiz de contexto a R39 (contraejemplo al patrón "persecución infla tarjetas" visto en P44) que se registra como observación en su entrada de Reglas Operativas, no como redefinición de ámbito — no hay base suficiente con un solo caso para acotar el alcance de R39. La tabla se mantiene sin nuevas filas desde rev43.*

*Nota rev48: ninguna regla se redefine formalmente en esta revisión. El caso más relevante es el de R13 extendida, que recibe su contraejemplo más dañino hasta la fecha (Ounahi, doblete en octavos siendo centrocampista del favorito) — se mantiene en BAJA sin redefinición formal, exactamente el mismo criterio aplicado a sus fallos anteriores (Rodríguez P44). R7 recibe también un contraejemplo (Hakimi asistencia, no gol), pero al no ser una regla sujeta a esta tabla de redefiniciones (es una referencia de confianza baja-media, no una regla con ámbito formalmente acotado), se registra únicamente en Resumen de Sesgos Activos. Se crea una regla completamente nueva (R48, tarjetas en octavos fuera del perfil de grupos) — al ser nueva y no una redefinición de una regla existente, no entra en esta tabla, solo en Reglas Operativas Consolidadas y Resumen de Sesgos Activos.*

*Nota rev49: ninguna regla se redefine formalmente en esta revisión. R48 recibe un contraejemplo directo (Tantashev, 3 TA, muy por debajo del caso de Oliver en P46) — se cuenta como fallo dentro de su propia racha (1/1→1/2), sin necesidad de acotar su ámbito todavía (muestra demasiado pequeña, 2 casos, para excluir ningún tipo de partido). R13 extendida recibe su primer caso de apoyo tras el contraejemplo de Ounahi — no se redefine, simplemente se registra como un dato más dentro de su racha ya mixta. Se crea una regla completamente nueva (R49, precedentes de árbitro fuera del propio Mundial pesan menos que sus datos dentro del torneo) — al ser nueva, no entra en esta tabla, solo en Reglas Operativas Consolidadas y Resumen de Sesgos Activos.*

*Nota rev50 (auditoría): esta revisión **no añade redefiniciones**. Los cambios de auditoría (R38 retirada, R40 variante individual cerrada, R13 ext. variante de gol retirada, techo ★★ a tarjetas de eliminatoria) son acciones de gobernanza, no reformulaciones partido a partido, y por diseño no incrementan el contador de este registro; se documentan en la NOTA DE AUDITORÍA — REV.50 al inicio del cuaderno. La última columna (Estado de vigilancia) de R38, R40 y R13 ext. ya refleja estos cambios.*

|Regla|Nº de redefiniciones|Revisión(es)|Qué excluyó cada vez|Racha antes → después del ajuste|Estado de vigilancia|
|-----|--------------------|------------|---------------------|----------------------------------|---------------------|
|**R4**|1|rev36|Excluyó el resultado en penaltis del alcance de "favorito gana"; se separó en R4 (dirección 90'-120') + R4b (penaltis/prórroga) como factor aparte|12/13 resultado final → 22/22 "no pierde en juego" (redefinida)|🟢 Normal (1 redefinición, lejos del umbral)|
|**R38**|3|rev36, rev40, rev41|rev36: bloque bajo no garantiza menos corners si el partido llega a 120'. rev40: la supresión aplica al equipo defensivo, no al total del partido si el favorito domina en extremo. rev41: el total de corners vuelve a fallar por margen mínimo, esta vez en dirección Over — el modelo de proyección de corners en R32 necesita revisión de fondo|Degradada a BAJA en rev36 → matizada en rev40 → 3ª redefinición en rev41|🔴 BAJA obligatoria (3 redefiniciones — requiere 3 partidos consecutivos sin nuevo matiz para recuperar confianza; **2/3 conseguidos tras P42; ni P43, P44 ni P46 computan por no haber sido mercado activamente proyectado, aunque los tres resultados reales habrían sido fallos claros de línea Over si se hubiera proyectado — refuerzo cualitativo de la prudencia, sin cambiar el contador formal**) — **[AUDITORÍA REV50: RETIRADA. Contador de recuperación anulado; el modelo de corners R32 debe reconstruirse bajo una regla nueva, no reactivando R38]**|
|**R40**|2|rev40, rev41|rev40: excluyó los partidos de dominio extremo del favorito (>3x remates), donde el inferior no anota en absoluto. rev41: el patrón general se confirma (4/4 en ámbito) pero la primera aplicación como pick de jugador individual falla — el modelo aún no identifica con fiabilidad QUIÉN anotará, solo QUE alguien inesperado lo hará|3/3 (muestra completa) → 4/4 en ámbito, con salvedad sobre selección de jugador|🟡 Vigilar (2 redefiniciones — una más y baja a BAJA obligatoria; ni P43, P44 ni P46 aportan caso — en ninguno de los tres el equipo inferior llegó a anotar) — **[AUDITORÍA REV50: la variante de pick de jugador individual se CIERRA formalmente (no reactivable) para impedir que un futuro fallo dispare una 3ª redefinición → BAJA obligatoria; solo se conserva el mercado colectivo]**|
|**R39**|1|rev43|Excluyó la lectura directa "presión intensa = más tarjetas" cuando el árbitro asignado tiene un perfil de baja intervención confirmado por R43; separa expectativa de faltas (validada) de expectativa de tarjetas (dependiente del árbitro). P44 aportó un nuevo caso de apoyo (no redefinición); P45 aportó un contraejemplo (persecución sin inflar tarjetas); **P46 aporta un dato adicional relevante pero de un tipo distinto: tarjetas altas sin que hubiera aún persecución de marcador (6 de 8 TA en un 1ªp 0-0)** — no se redefine, se registra como observación complementaria (ver R48 nueva, centrada en el contexto de ronda más que en la dinámica de marcador)|Lectura directa sin matizar → consulta obligatoria cruzada con R43 antes de recomendar Under/Over tarjetas (redefinida)|🟢 Normal (1ª redefinición, con datos mixtos adicionales en P44/P45/P46 que enriquecen pero no fuerzan nuevas redefiniciones)|
|**R13 extendida**|0 redefiniciones, pero fallos consecutivos sin ajustar el criterio|—|No se ha redefinido su ámbito pese a fallar reiteradamente (2/8 acumulado a cierre de rev41; P44 aportó un nuevo caso evaluable: James Rodríguez no anota ni asiste; P45 aportó un primer dato positivo en la variante de asistencia, Mac Allister; P46 aportó el contraejemplo más dañino hasta la fecha en su variante de gol: Azzedine Ounahi, mediocampista del favorito, anota un doblete completo en octavos; **P47 aporta el primer caso de apoyo tras ese contraejemplo: ni Rabiot ni Manu Koné, mediocentros titulares de Francia, anotan**)|Sin cambios de definición, solo de confianza (MEDIA→BAJA, sostenida en BAJA)|🟢 Caso opuesto al sobreajuste — el riesgo aquí es mantener una regla que en su variante de gol acumula fallos cada vez más contundentes (de "no anota" a "anota un doblete"); P47 corta la racha de fallos pero un solo caso no basta para reconsiderar el nivel de confianza. **[AUDITORÍA REV50: la variante de GOL se RETIRA — 0 valor predictivo y fallos crecientes hasta el doblete de Ounahi; la variante de asistencia se mantiene en observación (BAJA). Punto ciego señalado: el contador de redefiniciones no la degradó nunca porque su ámbito no se re-acotó]**|
|**R42 / R43**|0 (aún no redefinidas, solo confirmadas o contradichas con más muestra)|—|R43 nace en rev40 para no forzar una redefinición prematura de R42 con un solo caso UEFA; suma casos no-Conmebol en rev41, rev42, rev43 (4/4 hasta P43); en rev46, P44 (Turpin) rompe la racha perfecta de R43 con 5 TA — se registra como fallo directo (4/5); en rev47, P45 (Fischer) recupera con 2 TA en R32 con prórroga (5/6). P46 no aportó caso a esta tabla al ser R16, no R32 — dando lugar a R48. **P47 (Tantashev, R16) tampoco aporta caso a R42/R43 por el mismo motivo de ámbito, pero es notable que el resultado real (3 TA) habría encajado perfectamente con la hipótesis base de R43 si esta hubiera aplicado — el análisis pre-partido decidió apartarse de ella igualmente, ver R49 nueva**|N/A|🟡 Vigilar — R43 se mantiene en MEDIA (5/6) sin cambios por P46 ni P47 al no aplicar ninguno de los dos; R42 se mantiene sólida (3/3), tampoco afectada (ni Oliver ni Tantashev son Conmebol)|

**Nota de uso:** esta tabla se actualiza en cada revisión en la que una regla existente cambie su condición de activación, su ámbito, o excluya explícitamente un caso que antes la habría incumplido. No se registra aquí una regla nueva (eso va solo en "Reglas Operativas Consolidadas"), solo cuando una regla *ya existente* se reformula para sobrevivir a un fallo.

-----

## EVOLUCIÓN DE BANKROLL

*Objetivo: medir resultado económico real, no solo aciertos por mercado. Un % de acierto alto no implica ROI positivo si el staking no es proporcional a la confianza real.*

### Tabla de ROI real (apuestas efectivamente jugadas)

|Partido|Bankroll antes|Apuestas jugadas (mercado / stake / cuota / resultado)|Ganancia/pérdida neta|Bankroll después|ROI% del partido|ROI% acumulado|
|-------|--------------|--------------------------------------------------------|----------------------|-----------------|-----------------|----------------|
|P39 (ENG 2-1 COD)|No proporcionado por el usuario|Combinada de 4 patas, stake total 5€: (1) Declan Rice remate anytime → **PIERDE**; (2) Corners Over 8.5 → **PIERDE**; (3) BTTS No → **PIERDE**; (4) Over 0.5 goles → **GANA**|**−5€**|No calculable|No calculable|No calculable — pendiente de bankroll de partida|
|P40 (BEL 3-2 SEN, aet)|No proporcionado por el usuario|Combinada de 2 patas, stake total 5€: (1) Doku SOT anytime → **PIERDE**; (2) Sarr SOT anytime → **GANA**|**−5€**|No calculable|No calculable|No calculable — pendiente de bankroll de partida|
|P41 (ESP 3-0 AUT)|**Sin datos**|**Sin datos**|**Sin datos**|**Sin datos**|**Sin datos**|**Sin datos**|
|P42 (POR 3-1 CRO)|**Sin datos absolutos**|Combinada de 3 patas, stake 5€: (1) 1X → **GANA**; (2) BTTS Sí → **GANA**; (3) Corners Over 8.5 → **GANA**. Retorno 16.75€ (cuota implícita 3.35). Aparte, Bruno Fernandes asistencia, stake 2.5 créditos → **PIERDE**|**+11.75€** en la combinada; **−2.5 créditos** en Fernandes (unidad de plataforma, no confirmada como euros)|No calculable sin bankroll base|No calculable sin bankroll base|Segundo resultado positivo real conocido tras P39/P40 en pérdidas|
|P43 (SUI 2-0 ALG)|**Sin datos absolutos**|Combinada de 3 patas, stake 5€: (1) BTTS Sí → **PIERDE**; (2) 1X → **GANA**; (3) Under 3.5 TA → **GANA**|**−5€**|No calculable sin bankroll base|No calculable sin bankroll base|Saldo neto acumulado de los 4 partidos con datos reales: **−3.25€** sobre 20€ apostados|
|P44 (COL 1-0 GHA)|**Sin datos** — el usuario no aportó detalle de apuestas reales para este partido|**Sin datos**|**Sin datos**|**Sin datos**|**Sin datos**|**Sin datos** — se mantiene pendiente de aportación; no afecta al cálculo teórico de la fila siguiente|
|P45 (ARG 2-2 CPV, ARG gana 3-2 en penaltis)|**83€** (bankroll vigente indicado por el usuario)|**Sin datos** — el usuario no aportó el detalle de las apuestas realmente jugadas en este partido (solo las estadísticas Opta del partido)|**Sin datos**|**Sin datos**|**Sin datos**|**Sin datos** — pendiente de aportación; no afecta al cálculo teórico de la fila siguiente|
|P46 (CAN 0-3 MAR)|**83€** (sin cambios — no se han aportado apuestas reales de este partido, bankroll vigente se mantiene)|**Sin datos** — el usuario ha aportado la tabla Opta completa del partido, pero no el detalle de las apuestas realmente jugadas|**Sin datos**|**83€ (sin cambios)**|**Sin datos**|**Sin datos** — pendiente de aportación; no afecta al cálculo teórico de la fila siguiente|
|P47 (FRA 1-0 PAR)|**83€** (sin cambios — no se han aportado apuestas reales de este partido, bankroll vigente se mantiene)|**Sin datos** — el usuario ha aportado la tabla Opta completa del partido, pero no el detalle de las apuestas realmente jugadas|**Sin datos**|**83€ (sin cambios)**|**Sin datos**|**Sin datos** — pendiente de aportación; no afecta al cálculo teórico de la fila siguiente|

### Tabla de ROI teórico (solo mercados ★★★, staking sistemático Kelly ×0.25)

|Partido|Mercados ★★★ del partido|Resultado de cada uno|ROI% teórico del partido|ROI% teórico acumulado|
|-------|--------------------------|----------------------|--------------------------|------------------------|
|P39 (ENG 2-1 COD)|Kane anytime (stake ~3%, cuota 2.40); Saka asistencia (stake ~2%, cuota 3.75)|Kane ✅ GANA (+4.2%); Saka ❌ PIERDE (−2%)|**+2.2%**|**+2.2%**|
|P40 (BEL 3-2 SEN, aet)|Lukaku anytime (stake ~3.5%, cuota 2.60); BTTS Sí (stake ~3%, cuota 1.84)|Lukaku ✅ GANA (+5.6%); BTTS Sí ✅ GANA (+2.5%)|**+8.1%**|**+10.3%**|
|P41 (ESP 3-0 AUT)|ESP sin encajar (stake ~1.88%, cuota 1.99); BTTS No (stake ~3.44%, cuota 1.62)|Ambos ✅ GANAN (+1.86% y +2.13%)|**+4.0%**|**+14.3%**|
|P42 (POR 3-1 CRO)|1X (stake ~4%, cuota 1.87); BTTS Sí (stake ~3.5%, cuota 1.80)|Ambos ✅ GANAN (+3.48% y +2.80%)|**+6.28%**|**+20.58%**|
|P43 (SUI 2-0 ALG)|BTTS Sí (stake ~3%, cuota 1.86); Under 3.5 TA (stake ~2.8%, cuota 1.80)|BTTS Sí ❌ PIERDE (−3%); Under 3.5 TA ✅ GANA (+2.24%)|**−0.76%**|**+19.82%**|
|P44 (COL 1-0 GHA)|Colombia o Empate - 1X (Kelly ×0.25, stake ~4% bankroll, cuota mercado 1.16); Under 3.5 goles totales (Kelly ×0.25, stake ~4.5% bankroll, cuota mercado 1.24)|1X ✅ **GANA** (+0.64% del bankroll); Under 3.5 goles ✅ **GANA** (+1.08% del bankroll)|**+1.72%**|**+21.54%**|
|P45 (ARG 2-2 CPV, ARG gana 3-2 en penaltis)|Under 3.5 tarjetas totales (Kelly ×0.25, stake ~4.34% bankroll = 3.60€ sobre 83€, cuota mercado 1.57); Argentina -1.5 (Kelly ×0.25, stake ~2.09% bankroll = 1.74€ sobre 83€, cuota mercado 2.10)|Under 3.5 tarjetas ✅ **GANA** (+2.05€ = +2.47% del bankroll); Argentina -1.5 ❌ **PIERDE** (−1.74€ = −2.09% del bankroll)|**+0.38%**|**+21.92%**|
|P46 (CAN 0-3 MAR)|Under 4.5 tarjetas totales (único ★★★ de este partido — Kelly ×0.25, stake ~5.18% bankroll = 4.30€ sobre 83€, cuota mercado 1.38)|Under 4.5 tarjetas ❌ **PIERDE** (8 TA totales, casi el doble de la línea) (−4.30€ = −5.18% del bankroll)|**−5.18%**|**+16.74%**|
|P47 (FRA 1-0 PAR)|Doble oportunidad 1X (Kelly ×0.25, stake ~2.3% bankroll = 1.91€ sobre 83€, cuota mercado 1.13); Kylian Mbappé anytime (Kelly ×0.25, stake ~2.0% bankroll = 1.66€ sobre 83€, cuota mercado 1.57)|1X ✅ **GANA** (+0.25€ = +0.30% del bankroll); Mbappé anytime ✅ **GANA** (+0.95€ = +1.14% del bankroll)|**+1.44%**|**+18.18%**|

**Nota de auditoría (rev50) — ROI real vs teórico:** el ROI real solo tiene dato en 4 partidos (P39, P40, P42, P43), todos del inicio del tramo, con saldo **−3.25€ sobre 20€ (−16.25%)** en combinadas de varias patas; P44–P47 tienen la columna en blanco y no hay bankroll base antes de P45. El ROI teórico ★★★ acumula **+18.18%**. La brecha (~34 pp) es grande y de origen **estructural** (combinadas de varias patas vs mercados ★★★ sueltos), no de simple varianza, pero **no está verificada de forma sostenida en todo el tramo** por falta de datos reales en la segunda mitad. Acción pendiente: registrar las apuestas realmente jugadas de cada partido para poder concluir si la selección manual resta valor de forma consistente.

**Lectura acumulada tras 9 partidos:** el staking sistemático ★★★ del modelo acumula un **+18.18%** teórico tras P39-P47, con **13 aciertos de 17 selecciones ★★★ jugadas (76.5%)** (corregido en auditoría rev50; la lectura previa declaraba 11/17 (64.7%) por un error de recuento arrastrado desde rev46 — la tabla de ROI teórico de arriba suma 13 aciertos: P39 1, P40 2, P41 2, P42 2, P43 1, P44 2, P45 1, P46 0, P47 2). P47 es el mejor resultado ★★★ desde P42: los dos mercados principales (Doble oportunidad 1X y Mbappé anytime) ganan, aportando +1.44% al acumulado — una recuperación parcial y modesta tras el batacazo de P46 (−5.18%), aunque lejos de compensarlo del todo en un solo partido, como corresponde a un staking prudente (Kelly ×0.25) que nunca apuesta a "recuperar" con un solo mercado. Es interesante que, precisamente en el partido donde el análisis decidió retirar por completo el mercado de tarjetas de la tabla EV+ (por el historial olímpico de Tantashev, ver R49 nueva), el resultado real (3 TA) habría sido otro acierto limpio de haberse mantenido un Under de línea razonable — la cautela esta vez costó una oportunidad, no evitó una pérdida, lo cual es un resultado distinto pero igualmente instructivo al de P46. El acumulado global se mantiene claramente positivo (+18.18% en 9 partidos).

-----

## GESTIÓN DE BANKROLL

Sin cambios estructurales.

|Tier     |Criterio                         |Fracción Kelly|Stake típico    |
|---------|---------------------------------|--------------|----------------|
|★★★ Elite|Racha ≥8/10 + criterios objetivos|Kelly ×0.25   |~2–5% bankroll  |
|★★★ Alta |Racha ≥6/8 + patrón sólido       |Kelly ×0.20   |~1.5–4% bankroll|
|★★ Media |Racha ≥5/8 o patrón emergente    |Kelly ×0.12   |~1–2.5% bankroll|
|★ Baja   |Alta varianza o prop sin ventaja |Kelly ×0.05   |<1% bankroll    |
|🚫 Skip   |Tipo A cuota corta + EV <+5%     |No apostar    |—               |

**ALERTAS REV49 (nuevas):** Segundo partido de OCTAVOS (R16) del cuaderno. R4 extiende a 25/25 "no pierde en juego" y 23/25 "resuelto en 90'" con Francia (favorito extremo ~81%) ganando 1-0. R11 (1/5 PASS) se refuerza en dirección contraria a P46: favorito extremo gana raspado pese a dominio territorial absoluto (15-5 remates, 12-2 corners). R12 sube a 8/8 (Ávalos sin remates). R13 extendida corta su racha de contraejemplos con un primer caso de apoyo (Rabiot/Koné sin gol), se mantiene en BAJA. R41 y R45 sin caso evaluable. R44 gestiona con cautela correcta un dato ambiguo (Alderete, participación mínima pese a baja reportada). NUEVA R49 (BAJA, 1/1): el historial de árbitro fuera del propio Mundial (JJOO Tantashev, 9 y 10 TA) pesó demasiado en la decisión pre-partido de retirar el mercado de tarjetas — el resultado real (3 TA, mínimo de la muestra) muestra que esa cautela fue excesiva; en su lugar, priorizar datos dentro del propio torneo. R48 recibe un contraejemplo directo (Tantashev 3 TA vs Oliver 8 TA) — racha 1/2, sin patrón consistente, se mantiene en BAJA. R1 (BTTS No con xG bajo) cuenta formalmente por primera vez en varias revisiones (xG Paraguay 0.50 <0.80, racha sube a 19/31). R7 sin caso evaluable (gol de un delantero centro, no de extremo/lateral).
**ALERTAS REV48 (vigentes):** Primer partido de OCTAVOS (R16) del cuaderno. R42/R43 (tarjetas bajas en eliminatoria) declaradas explícitamente fuera de ámbito para esta ronda — nace R48 (BAJA, 1/1) como alerta específica de que las tarjetas en R16 pueden dispararse muy por encima del perfil de grupos del árbitro, incluso sin persecución de marcador (6 de 8 TA llegaron en un 1ªp 0-0 con Michael Oliver). El único ★★★ del partido (Under 4.5 tarjetas) pierde con margen amplio — la selección sistemática de tarjetas necesita mayor cautela en el primer partido de cada ronda nueva del torneo. R13 extendida recibe su contraejemplo más dañino (Ounahi, doblete en octavos siendo MC del favorito) — se mantiene en BAJA. R7 recibe un contraejemplo (Hakimi asistencia, no gol). R12 sube a 7/7 (Jonathan David sin marcar). R41 baja a 3/6 (Diop sin marcar). R45 sube a 5/5 + 1 adyacente (Rahimi, suplente/impacto). R44 gestiona correctamente dos dudas simultáneas (Davies, Koné) sin ningún prop asociado. R4 extiende a 24/24 "no pierde en juego" con un favorito moderado (~50%) resolviendo con contundencia (0-3) en 90'.
**ALERTAS REV47 (vigentes):** R43 recupera terreno tras el contraejemplo de P44: Drew Fischer dirige un R32 con prórroga y solo 2 TA en 120 minutos, la racha sube a 5/6 (confianza se mantiene en MEDIA, pendiente de un partido más para restaurar ALTA). R39 recibe un contraejemplo al patrón "persecución infla tarjetas" de P44: Cabo Verde persigue el resultado y llega a la prórroga sin que las tarjetas se disparen — se registra como matiz, no como redefinición. R41 (gol de central en KO) suma un caso fuerte con Lisandro Martínez en la prórroga, racha sube a 3/5, confianza a MEDIA. R12 sube a 6/6 casos limpios (Livramento, séptimo caso). R4 extiende "no pierde en juego" a 23/23, nuevo máximo histórico, pero R4b suma un tercer caso de favorito necesitando penaltis (P35, P36, P45). R13 extendida recibe un primer dato positivo en su variante de asistencia (Mac Allister asiste el gol de L. Martínez), aunque se mantiene en BAJA por muestra pequeña. R40 requiere una corrección de atribución: el gol que iguala a 2-2 en la prórroga es un autogol argentino, no un gol genuino de Cabral — Cabo Verde solo anota un gol legítimo en todo el partido (Duarte, 2ª parte).
**ALERTAS REV46 (vigentes):** R43 baja de ALTA a MEDIA tras su primer contraejemplo relevante (Turpin, 5 TA en R32, racha 4/4→4/5) — no se excluye el caso, se cuenta como fallo directo. R39 reforzada con un nuevo caso de apoyo: Ghana acumula 3 TA en la 2ª parte persiguiendo el marcador, ilustrando por qué R43 debe consultarse siempre junto con R39 antes de recomendar mercados de tarjetas. R4 extiende a 22/22 "no pierde en juego" y 20/22 en resultado final, nuevo máximo histórico. R12 sube a 5/5 casos limpios (Ayew, sexto caso). R1 recibe su confirmación cualitativa más clara (Ghana 0 remates a puerta en 90'), aunque sigue sin computar en la racha estricta por xG pre-partido por encima del umbral. R13 extendida falla también en su versión alternativa de asistencia (James Rodríguez 0 asistencias) — vigilar si la regla, en cualquiera de sus dos formas, sigue sin aportar valor. Nueva observación sin numerar: el gol decisivo lo anota un interior/carrilero secundario (Arias) y no el creador principal nominal (Rodríguez) — un solo caso, sin regla nueva. R7 recibe un nuevo caso de apoyo con Arias.
**ALERTAS REV45 (vigentes):** R42 sube a MEDIA (3/3, Falcón Pérez el caso más extremo hasta ahora). R4 extendió a 21/21 en rev45, superado ahora por 22/22 en rev46. R12 sumó un quinto caso con matiz metodológico (Gouiri) antes del sexto caso limpio de rev46. R11 recibió una segunda lectura empírica en P43 (2/5 PASS = no descuento, no predictor de dificultad), confirmada de nuevo en P44. Primer fallo de BTTS Sí como ★★★ en P43 — vigilar sobreponderación en partidos con déficit defensivo del inferior. R38 no computó en P43 ni en P44 por no ser mercado activamente proyectado.
**ALERTAS REV44 (vigentes):** R38 en 2/3 partidos limpios consecutivos tras P42 (sin cambios por P43 ni P44, no computables). R45 en MEDIA (4/4 tras P42, sin caso evaluable en P43 ni P44). R44 en 4/4 (sin caso evaluable en P43 ni P44). R43 estuvo en ALTA (4/4 no-Conmebol) hasta su primer contraejemplo en rev46. R11 con primera validación empírica en P42, matizada en P43 y P44.
**ALERTAS REV43 (vigentes):** R39 redefinida — consultar siempre junto con R43 antes de recomendar Under/Over tarjetas; P44 es la ilustración más clara hasta ahora de por qué esta consulta cruzada es necesaria. R12 en ALTA (ahora 5/5 + 1 caso con matiz tras rev46).
**ALERTAS REV42 (vigentes):** R40 confirma definitivamente (0/2 en aplicaciones reales) que el pick de jugador individual no debe usarse; ni P43 ni P44 aportan caso al no haber gol del equipo inferior. R46 y R47 siguen en observación (BAJA, sin stake, sin nuevo caso en P42, P43 ni P44).
**ALERTA REV41 (vigente):** R38 baja a confianza BAJA obligatoria (3ª redefinición) — no fijar mercados de corners como ★★★ ni ★★ en R32 hasta recuperar validación con 3 partidos consecutivos sin nuevo matiz (2/3 conseguidos tras P42, pendiente de un partido limpio adicional donde el mercado sí se proyecte activamente).
**ALERTAS REV40 (vigente):** R43 activa en observación — ver actualización rev46 arriba (MEDIA tras su primer contraejemplo).
**ALERTAS REV39 (vigentes):** R13 extendida confianza BAJA (nuevo caso evaluable en P44, sigue fallando en su versión de gol y en su alternativa de asistencia). R42 vigente solo para árbitros Conmebol — en MEDIA (3/3). R4b reducida a factor contextual; P44 se resuelve en 90', no aporta a R4b.
**ALERTAS REV36 (origen, aún vigentes en su lógica base):** R4 redefinida — el mercado "ganador del partido" en KO debe descontar riesgo de penaltis/prórroga. R38 degradada a BAJA confianza en su formulación original. R13 extendida bajada a MEDIA (y ahora prácticamente sin evidencia de funcionar en ninguna de sus dos variantes). R39 (rev35, vigente, redefinida en rev43) — KO + jugadores favorito a 1 TA sanción + rival presión alta → evitar Under 3.5 TA salvo que R43 confirme un árbitro de perfil permisivo, en cuyo caso prevalece R43 salvo que la dinámica del partido (rival persiguiendo) sugiera lo contrario, como en P44.

-----

## REGISTRO DE ÁRBITROS WC26

*Tabla completa (origen rev36), con actualizaciones puntuales de rev37–rev48 integradas por árbitro.*

|Árbitro              |País|J1|J2|J3     |R32 |Media WC26|Perfil WC26                                                                                                                                               |Base próx.       |
|---------------------|----|--|--|-------|----|----------|----------------------------------------------------------------------------------------------------------------------------------------------------------|----------------:|
|Clément Turpin        |FRA |~4|3 |—      |5   |~4.0      |Activo en fase de grupos. **R32 COL-GHA = 5 TA totales (2 Colombia: Arias 1ªp, Ríos 2ªp; 3 Ghana: Seidu, Yirenkyi, Fatawu, las 3 en 2ªp), 0 TR** — la cifra más alta de cualquier árbitro no-Conmebol en R32 hasta ahora, rompiendo la racha de R43 (4/4→4/5). Las 3 tarjetas de Ghana llegan con el equipo ya por detrás en el marcador, consistente con R39 (KO + equipo persiguiendo infla tarjetas pese a árbitro de perfil moderado).|4.0–4.5 ctx elim.|
|Yael Falcón Pérez    |ARG |1 |1 |—      |2   |1.33      |Ultra-conservador en fase de grupos (Suecia-Túnez, México-Chequia). R32 SUI-ALG = 2 TA totales, 0 TR, ambas de Argelia — Suiza sin ninguna amonestación. Tercer caso de R42, el más extremo hasta ahora.|1.0–2.0 ctx elim.|
|Espen Eskås           |NOR |4 |—|—      |3   |3.5       |Único partido de grupos registrado. R32 POR-CRO = 3 TA total, 0 TR. Resultado intermedio: ni confirma ni contradice con claridad el patrón de R43.|2.5–3.5 ctx elim.|
|Glenn Nyberg          |SWE |—|—|—      |1   |1.0       |R32 ESP-AUT = 1 TA total, 0 TR, pese a 23 faltas cometidas — el registro más bajo en relación al volumen de faltas hasta ahora. Cuarto caso no-Conmebol consecutivo reforzando R43 (previo a su ruptura en P44).|1.0–2.0 ctx elim.|
|Said Martínez         |HON |—|—|—      |2   |2.0       |R32 BEL-SEN = 2 TA total, 0 TR, en 120 minutos. Tercer caso no-Conmebol consecutivo reforzando R43 (previo a su ruptura en P44).|1.5–2.5 ctx elim.|
|Danny Makkelie       |NED |6 |3 |—      |0   |3.75      |R32 FRA-SWE = 0 TA, 0 TR, el registro más bajo de cualquier árbitro de R32 hasta P44. Refuerza hipótesis R43 (previo a su ruptura en P44). Actuó como 4º árbitro en P46 (CAN-MAR, R16) sin intervención directa en el terreno de juego.|3.0–4.0 ctx elim.|
|Adham Makhadmeh      |JOR |—|—|—      |2   |2.0       |R32 ENG-COD = 2 TA total, 0 TR. Segundo caso no-Conmebol que refuerza R43 (previo a su ruptura en P44).|1.5–2.5 ctx elim.|
|Michael Oliver       |ING |3 |3 |—      |—   |4.7       |Normal en fase de grupos (3+3 TA). **R16 CAN-MAR = 8 TA totales (4 Canadá + 4 Marruecos), 0 TR, incorporado a la media** — la cifra de tarjetas más alta de cualquier partido de eliminatoria trackeado hasta ahora en toda la muestra, muy por encima tanto de su propia media de grupos como de los registros típicos de R32. Notablemente, 6 de las 8 TA llegaron en un primer tiempo aún 0-0. Primera muestra de octavos (R16) para el cuaderno — ver R48 nueva; refuerza mantener R42/R43 fuera de ámbito en rondas posteriores a R32.|3.5–6.0 ctx elim. (revisado al alza)|
|Ilgiz Tantashev      |UZB |?* |?* |—      |—   |~3.5*     |Debut mundialista (AFC). Grupos WC26: Escocia 1-0 Marruecos (J2), Argelia 3-3 Austria (J3) — TA exactas no confirmadas en esta revisión (pendiente de dato Opta). Media de carrera pre-Mundial citada por prensa: ~3.5 TA/partido. **R16 PAR-FRA = 3 TA totales (todas de Francia: Barcola 1ªp, Koné+Olise 2ªp), 0 TR** — la cifra más baja de tarjetas de cualquier eliminatoria de la muestra hasta ahora. Precedentes fuera del Mundial (JJ.OO. París 2024: 9 TA dirigiendo a Paraguay, 10 TA+1 TR dirigiendo a Francia) sobrestimaron notablemente el riesgo real — ver R48 (contraejemplo) y R49 nueva.|2.5–3.5 ctx elim.|
|Wilton Sampaio       |BRA |0 |— |—      |3   |1.5       |Ultra-fluido en J1; R32 NED-MAR = 3 TA, 0 RC, perfil bimodal.                          |1.5–2.5 ctx elim.|
|Félix Fischer        |ALE |1 |— |2      |—   |1.5       |Fluido                                                                                                                                                    |1.5–2.0          |
|Pierre Atcho         |GAB |0 |2 |—      |—   |1.0       |Conservador                                                                                                                                               |1.5–2.0          |
|César Ramos          |MEX |1 |3 |—      |—   |2.0       |Bimodal                                                                                                                                                   |2.0–2.5          |
|Ramón Abatti         |BRA |4 |3 |—      |—   |3.5       |Moderado                                                                                                                                                  |3.0–4.0          |
|Facundo Tello        |ARG |5 |2 |—      |—   |3.5       |Físico MC                                                                                                                                                 |2.5–3.5          |
|Jesús Valenzuela     |VEN |1 |2 |—      |1   |1.5       |Conservador estable en grupos; R32 CIV-NOR = 1 TA total. Base R42.|1.0–2.0 ctx elim.|
|Tori Penso           |USA |2 |4 |—      |—   |3.0       |Bimodal                                                                                                                                                   |2.0–4.0 ctx      |
|Iván Barton          |SLV |3 |— |—      |—   |3.0       |Debut WC26. 3 amar.                                                                                                                                       |2.5–3.0 ctx.     |
|Clément Turpin (grupos)|FRA |~4|3 |—      |—   |—         |Ver fila actualizada arriba con datos de R32.                                                                                                            |—                |
|Mustapha Ghorbal     |ALG |— |— |1      |—   |1.0       |Debut WC26. TUR-USA=1 TA. Conservador.                                                                                                                    |2.0–2.5 ctx elim.|
|Katia I. García      |MEX |— |— |0      |—   |0.0       |Debut WC26 central. TUN-NED=0 TA. Ultra-conservadora.                                                                                                     |1.0–2.0 ctx elim.|
|Ismail Elfath        |USA |3 |— |4+1TR  |—   |~3.5      |J3 URU-ESP=3TA+1TR. Activo-físico en tensión.                                                                                                             |3.5–4.5 ctx elim.|
|François Letexier    |FRA |— |— |4 (1+3)|—   |4.0       |J3 CPV-KSA=moderado en partido bloqueado.                                                                                                                 |3.0–4.5 ctx      |
|Abdulrahman Al-Jassim|QAT |3 |— |3      |—   |3.0       |J1 POR-CON=2TA. J3 PAN-ENG=3TA. Conservador.                                                                                                              |2.5–3.5 ctx      |
|Drew Fischer         |CAN |— |1 |2      |2   |1.5       |J2 FRA-IRQ=1TA. J3 CRO-GHA=2TA. **R32 ARG-CPV (con prórroga) = 2 TA totales en 120 minutos (Pina, CPV, 2ªp regulación; Montiel, ARG, 2ªp prórroga), 0 TR** — el registro más bajo de la muestra en relación a la duración del partido; refuerza R43 (5/6) tras el contraejemplo de Turpin en P44. Ultra-conservador confirmado también en eliminatoria y con prórroga.|1.5–2.5 ctx elim.|
|NOR-FRA árbitro      |TBD |— |— |2      |—   |2.0       |J3 NOR-FRA=2TA. Perfil conservador.                                                                                                                       |2.0–3.0 ctx elim.|
|SEN-IRQ árbitro      |TBD |— |— |4+1RC  |—   |~4.0      |J3 SEN-IRQ=4TA+1RC. RC Sulaka 1ªp.                                                                                                                        |3.0–4.0 ctx elim.|
|João Pinheiro        |POR |— |— |—      |2   |2.0       |DEBUT WC26. R32 CAN-RSA=2 TA total. Más conservador que carrera (4.62).                                                                                   |2.0–3.0 ctx elim.|
|Marco Mariani        |ITA |— |— |—      |5   |5.0       |R32 BRA-JPN=5 TA. R39: KO + jugadores a riesgo TA + presión alta inflaron. Carrera base 4.81.                                                            |3.5–5.0 ctx KO   |
|Jalal Jayed          |MAR |0 |— |—      |≥4  |~2.0      |R32 GER-PAR=4 TA total, toda la sanción en la prórroga. Carrera 3.73.|3.0–4.5 ctx KO+ET|
|Víctor Gomes         |RSA |— |— |—      |—   |sin datos |—                                                                                                                                                         |2.0–2.5 (debut)  |
|Aliyar Aghayev       |AZE |— |— |—      |—   |sin datos |—                                                                                                                                                         |2.0–2.5 (debut)  |
|Daniele Orsato       |ITA |— |— |—      |—   |sin datos |—                                                                                                                                                         |2.0–2.5 (debut)  |
|Szymon Marciniak     |POL |— |— |—      |—   |sin datos |—                                                                                                                                                         |2.0–2.5 (debut)  |
|Anthony Taylor       |ING |— |— |—      |—   |sin datos |—                                                                                                                                                         |2.0–2.5 (debut)  |
|Piero Maza           |CHI |— |— |—      |—   |sin datos |—                                                                                                                                                         |2.0–2.5 (debut)  |
|Rohit Saggi          |NOR |— |— |—      |—   |sin datos |—                                                                                                                                                         |2.0–2.5 (debut)  |
|Daniel Siebert       |ALE |— |— |—      |—   |sin datos |—                                                                                                                                                         |2.0–2.5 (debut)  |
|Felix Zwayer         |ALE |— |— |—      |—   |sin datos |—                                                                                                                                                         |2.0–2.5 (debut)  |
|Marco Guida          |ITA |— |— |—      |—   |sin datos |—                                                                                                                                                         |2.0–2.5 (debut)  |

*Nota rev46: se ha corregido una entrada duplicada de Turpin, consolidando toda su información (grupos + R32) en la primera fila.*
*Nota rev48: incorporado el primer dato de octavos (R16) para Michael Oliver — ver R48 nueva en Reglas Operativas Consolidadas. Su "Media WC26" pasa a incorporar el valor de R16 (3, 3, 8 → 4.7), siguiendo el mismo criterio ya aplicado a Turpin y Fischer de integrar todas las apariciones, incluidas las de eliminatoria, en la media general.*
*Nota rev49: nueva entrada para Ilgiz Tantashev (debut mundialista, AFC). Sus TA de fase de grupos (J2 Escocia-Marruecos, J3 Argelia-Austria) no están confirmadas con dato Opta exacto en esta revisión — se marca con "?*" y la media se apoya parcialmente en una cifra de carrera pre-Mundial citada por prensa (~3.5), no en datos propios del cuaderno; actualizar en cuanto se disponga de las cifras exactas de grupos. Su dato de R16 (3 TA) sí está confirmado por Opta.*

-----

## MERCADOS DE TIEMPO PARCIAL

**MP-1 — R6+R13 Tipo D suplente 2ªp:** Racha condicional sigue sin activarse limpiamente desde P39 (casos adyacentes en P39, P40, P42 y P43, ver revisiones anteriores). **Rev46:** P44 no aporta un caso. **Rev47:** P45 tampoco aporta un caso limpio. **Rev48:** P46 aporta un posible caso de apoyo con reserva (Rahimi). **Rev49:** P47 no aporta caso — el único gol (Mbappé) lo anota un titular que jugó los 90 minutos completos, no un suplente; Doué y Cherki entraron desde el banquillo en la 2ª parte pero sin gol ni asistencia registrada.
**MP-6 — Corners 2ªp urgencia favorito:** Único caso limpio de apoyo sigue siendo P42. **Rev46:** P44 no aporta un caso limpio. **Rev47:** P45 aporta una posible extensión a periodos de prórroga (9 de 13 corners en los 30' de prórroga), sin crear aún mercado nuevo. **Rev48:** P46 no aporta caso a MP-6 en su definición estricta, pero aporta una observación nueva sobre "el equipo que persigue" (Canadá, 11 de 12 corners pese a perder 0-3). **Rev49:** P47 tampoco aporta un caso limpio a MP-6 — el dominio de corners de Francia (7 de 7 ya en la 1ª parte, con el marcador aún 0-0) estaba presente desde el inicio del partido, no como un patrón específico de urgencia en la 2ª parte tras ir perdiendo o empatando; no hay "persecución" clara del marcador por parte de ningún equipo en este caso, ya que Francia dominó el territorio desde el primer minuto.
**MP-7 — Prórroga como multiplicador de TA y corners:** Contraejemplo de P40 permanece como único caso de multiplicador de tarjetas confirmado. **Rev46:** P44 no llega a prórroga. **Rev47:** P45 sí llega a prórroga y aporta evidencia dividida (corners sí se multiplican, tarjetas no). **Rev48:** P46 se resolvió en los 90' sin necesidad de prórroga. **Rev49:** P47 también se resolvió en los 90' — no aporta caso a MP-7.

-----

## HISTORIAL DE PARTIDOS

### Partidos 01–10 (resumen comprimido)

P01 CAN 6-0 QAT: ✅ 1X2, BTTS No, Over c. ❌ Under 2.5. Asimetría + 2RC = multiplicador goles.
P02 MEX 1-0 KOR: ✅ 1X2, BTTS No. ❌ Over 2.5★★★. Tensión táctica suprime goles.
P03 MAR 1-0 SCO: ✅ 1X2, BTTS No, Under 2.5, Saibari. ❌ Hakimi asist., Over 7.5c.
P04 USA 1-0 AUS: ✅ 1X2, BTTS No, Under 2.5, Over c., Over amar. ❌ McKennie. R7 (1/1).
P05 BRA 3-0 HAI: ✅ 1X2, BTTS No, Over 2.5, Vinícius/Cunha. Asimetría infraestima marcador.
P06 NED 3-1 SWE: ✅ 1X2, BTTS Sí, Over 2.5, Gakpo. ❌ Malen, Over 3.5 amar.
P07 PAR 1-0 TUR: ✅ BTTS No, Under 2.5, Over c. ❌ 1X2. RC temprano −40% amarillas.
P08 NOR 3-2 SEN: ✅ 1X2, Over 2.5, BTTS Sí, Haaland. ❌ Over 3.5 amar. Sampaio WC26=0.
P09 ALG 2-1 JOR: ✅ 1X2, Over c., Mahrez asist. ❌ Under 2.5★★★, BTTS No★★★.
P10 FRA 3-0 IRQ: ✅ 1X2, Over 2.5, BTTS No, Olise ×2 asist., FRA −2.5. ❌ Over 7.5c.

### Partidos 11–19 (resumen comprimido)

P11 ARG 2-0 AUT: ✅ 1X2, BTTS No, Under 8.5c, moda 2-0. ❌ Over 2.5 goles. Messi R9 2/2.
P12 POR 4-0 UZB: ✅ 1X2, BTTS No, Over 2.5, Ronaldo, BFernandes. ❌ Over 7.5c.
P13 ING 0-0 GHA: ✅ BTTS No, Under 2.5, Over 8.5c. ❌ 1X2 ENG. R11 ignorada (4/5).
P14 PAN 0-1 CRO: ✅ 1X2, BTTS No (11/11), Under 2.5 (7/7), Over 7.5c. ❌ Modrić asist.
P15 MAR 5-1 HAI: ✅ 1X2, Over 2.5/3.5, R6 (6/6), R7 Hakimi (4/4), R13. ❌ BTTS No, Under 9.5c.
P16 SUI 2-1 CAN: ✅ Over 7.5c, Over 2.5 amar., BTTS Sí, R6. ❌ Doble oportunidad CAN/X.
P17 RSA 1-0 KOR: ✅ BTTS No (12/13), Under 2.5 (8/8), RSA +1.5, Over 8.5c, R6 débil. ❌ 1X2 KOR.
P18 CZE 0-3 MEX: ✅ BTTS No, Under 2.5 amar., Fidalgo, SUP ×2, Sánchez asist. (R7 5/5). ❌ Under 2.5G.
P19 SCO 0-3 BRA: ✅ 1X2, BTTS No, Over 7.5c, Over 2.5 amar., Bruno G., Rayan R7 (6/6), BRA −1.5. ❌ Paquetá.

### Partidos 20–26 (resumen comprimido)

P20 BIH 3-1 QAT: ✅ 1X2, Over 2.5, Under 2.5 amar., Over 7.5c, R6+R13, R7 Alajbegović (7/7). ❌ BTTS No, Over 9.5c.
P21 ECU 2-1 GER: ✅ R7 Angulo+Plata (8/8), R13/R6 Rodríguez. ❌ 1X2 GER, BTTS No, Over 7.5c. Claves: R22/R23.
P22 CIV 2-0 CUW: ✅ 1X2 CIV, Under 9.5c, R6/R13 Pépé (11/11). ❌ Over 2.5 goles, R7 Amad 0G.
P23 JPN 1-1 SWE: ✅ JPN +0.5, BTTS Sí, Over 7.5c, Under 3.5 amar., R6/R13 Maeda (12/12), R7 Doan (8/8). ❌ Over 2.5G, Isak 0A.
P24 PAR 0-0 AUS: ✅ Under 3.5 amar. ❌ Over 7.5c (4c), PAR victoria, Over 2.5G. Claves: R28/R29.
P25 TUR 3-2 USA: ✅ Over 7.5c, Under 2.5 amar., R6+R13 Ayhan. ❌ Under 2.5G, Victoria USA. Claves: R30.
P26 TUN 1-3 NED: ✅ NED −1.5, Over 2.5/3.5, Over 7.5c, Under 2.5 amar. (R10 5/5), Dumfries R7 (10/11). ❌ BTTS No.

### Partidos 27–30 (resumen comprimido)

P27 URU 0-1 ESP | J3 Grupo H: ✅ Victoria ESP, BTTS No, Under 2.5G. ❌ BTTS Sí (R21), Over 7.5c, Over 2.5G. Claves: R32 defensa élite anula urgencia.
P28 CPV 0-0 KSA | J3 Grupo H: ✅ Over 2.5 amar., BTTS No, Under 2.5G. ❌ BTTS Sí (R21), Over 2.5G, Over 7.5c. Claves: R33 urgido xG ≤0.50 = bloqueador, R28 ≥25 entradas.
P29 PAN 0-2 ENG | J3 Grupo L: ✅ ENG −1.5 (R4 7/7), BTTS No (R1 17/24), Over 7.5c, Saka G+A (R7 11/14), Bellingham gol. ❌ Over 2.5 goles, Suplente ENG gol (trigger no activo). Claves: R34 inferior ≥2p → Over 1.5 primario.
P30 CRO 2-1 GHA | J3 Grupo L: ✅ 1X2 CRO (R4 8/8), Under 3.5 amar. (Fischer ultra-conservador). ❌ Perišić asist. (R35: MC gol <30' invalida R7), BTTS No, Under 2.5G, Over 7.5c (R22). Claves: R35 (MC gol <30' invalida R7), R22, R13 CB urgido activa.

### Partido 31 — Noruega 1-4 Francia | 26 Jun 2026 | J3 Grupo I (comprimido)

Real: NOR 1-4 FRA. Dembélé hat-trick 1ªp (2A Mbappé). Aasgaard 1G. Doué 1G 2ªp. 5 goles, 2 TA, 9 corners (4+5), 28 remates. NOR rotó ≥8 titulares. | ✅ 1X2 FRA (R4 9/9), Over 2.5G, BTTS Sí, Over 7.5c, Under 3.5 amar., Barcola asist. 2ªp (R6+R13 13/13), Doué gol. ❌ Olise 0G 0A (R36: rival ≥8 rotaciones invalida R7). | Claves: R36 nueva, R35 ampliada.

### Partido 32 — Senegal 5-0 Iraq | 26 Jun 2026 | J3 Grupo I (comprimido)

Real: SEN 5-0 IRQ. Diarra 1G 1ªp. Pape Gueye 2G 1A 2ªp. Ndiaye 1G 1A (SUP 2ªp). Sarr 1G 1A 2ªp. Sulaka RC 1ªp. 4 TA+1RC. 15 corners (9+6). Jackson 3S 2SOnT 0G. | ✅ 1X2 SEN, SEN −1.5 (R4 10/10), Over 2.5G, Over 3.5G, Over 7.5c (racha 13/15), R7 Sarr G+A (12/17), R6+R13 Ndiaye (14/14), R12 skip Jackson. ❌ Under 3.5 amar. (RC Sulaka generó frustración IRQ → 3 TA 2ªp). | Claves: R37 nueva (RC <60' reclasifica mercados), R13 extendida MC titular (1º caso: Pape Gueye).

### Partido 33 — Canadá 1-0 Sudáfrica | 28 Jun 2026 | Ronda de 32 (comprimido)

Real: CAN 1-0 RSA. Eustaquio 1G 2ªp (MC titular). Crépeau 4 paradas. 5 corners totales (4+1). 2 TA. 18 tiros CAN, 7 tiros RSA. RSA posesión ~33%. David 2S 0SOnT 0G. | ✅ CAN gana (R4 11/11), BTTS No (R1 18/28), Under 2.5G, R12 skip David, R13 extendida Eustaquio (2º caso). ❌ Over 7.5c (5 totales — GRAN FALLO), Over 3.5 TA (2 TA, Pinheiro debut WC conservador). ⚪ R6+R13 suplente (trigger no activo). | Claves: R38 NUEVA (bloque ≤30% posesión voluntaria suprime corners −40%), R10 extendida (debut WC −30% TA base).

### Partido 34 — Brasil 2-1 Japón | 30 Jun 2026 | Ronda de 32 (comprimido)

Real: BRA 2-1 JPN. Sano 1G 1ªp (JPN). Casemiro 1G 2ªp (BRA, MCD titular, R13 3er caso). Martinelli 1G 2ªp (SUP, trigger no activo). 5 TA (Casemiro+Danilo+Sano+Kamada+Suzuki). 8 corners (6+2). 24 remates. | ✅ BRA −1.5/R4 (12/12), BTTS Sí, Over 2.5G, JPN +1.5, Over 7.5c (14/17), Vinícius Over 2.5 remates, R12 skip Vinícius, R13 extendida Casemiro (3/3 → ★★). ❌ Under 3.5 TA (R39 nueva), Vinícius/Ueda/Guimarães anytime gol. | Claves: R39 nueva, R13 extendida consolidada ★★.

### Partido 35 — Alemania 1-1 Paraguay (PAR gana en penaltis) | 30 Jun 2026 | Ronda de 32 (comprimido)

Real: GER 1-1 PAR (120'), PAR gana en penaltis. Enciso (PAR) 1G 1ªp asist. Galarza; Havertz (GER) 1G 2ªp asist. Wirtz. 22 corners (16 GER+6 PAR), 4 TA (3 en prórroga). 28 remates. | ✅ Cubas TA anytime, Wirtz asist. anytime, Over 4.5 corners GER. ❌ R4 hándicap GER −0.5 (primera ruptura resultado final, 12/13), BTTS No, Musiala/R13, Under 9.5 corners (R38, fallo catastrófico), Under 3.5 TA, Over 1.5 goles GER. | Claves: R4 redefinida (penaltis fuera de "ganador"), R38 degradada, R40 nueva (Enciso), R39 reforzada (prórroga multiplicador TA).

### Partido 36 — Holanda 1-1 Marruecos (Marruecos gana en penaltis) | 29 Jun 2026 | Ronda de 32 (comprimido)

Real: NED 1-1 MAR (120'), MAR gana en penaltis. Gakpo (NED) 1G 2ªp asist. Summerville; Diop (MAR, CB) 1G 2ªp asist. Talbi. 3 TA (todas en 90'), 0 en prórroga. 13 corners. ✅ BTTS Sí, Over 2.5 TA Sampaio. ❌ Over 2.5 goles, Brobbey, Hakimi asist., Saibari, Reijnders/R13. Claves: R4b (2/2 penaltis), R13 extendida degradada (2/5), R41 confirmada (Diop/CB), R7 matizado (Hakimi 0A).

### Partido 37 — Costa de Marfil 1-2 Noruega | 30 Jun 2026 | Ronda de 32 (comprimido)

Real: CIV 1-2 NOR. Nusa (NOR) 1G 1ªp asist. Ødegaard; Haaland (NOR) 1G 2ªp; Diallo (CIV, sustituto) 1G 2ªp asist. Pépé. Noruega avanza en 90'. 1 TA total (Valenzuela, árbitro Conmebol), 17 corners. ✅ Haaland anytime, Over 2.5 goles, BTTS Sí, R4 dirección favorito. ❌ Over 3.5 TA, Pépé anytime, Nusa asistencia, Ødegaard anytime/R13. Claves: R4b se rompe (2/3), R42 nueva (árbitro Conmebol = TA baja en KO), R40 extendida confirmada 3/3, R13 cae a 2/6.

### Partido 38 — Francia 3-0 Suecia | 30 jun/01 jul 2026 | Ronda de 32 (comprimido)

Real: FRA 3-0 SWE. Mbappé (FRA) 2G asist. Dembélé+Olise; Barcola (FRA, SUP) 1G asist. Olise. 0 TA, 0 TR. 33 remates (25+8), 15 a puerta, 10 corners (9+1). | ✅ 1X2 FRA (R4 16/16), Over 2.5G, FRA −1.5, BTTS No, Olise asistencia anytime, R12 skip Isak/Gyökeres (4/4). ❌ Dembélé anytime, Elanga anytime (R40 fuera de ámbito), Under 9.5 corners (R38, falla por 1), Over 3.5 TA (0 TA). | Claves: R12 sube a ALTA (4/4), R43 nueva (Makkelie 0TA UEFA), R40 matizada.

### Partido 39 — Inglaterra 2-1 RD Congo | 01 Jul 2026 | Ronda de 32 (comprimido)

Real: ENG 2-1 COD. Cipenga (COD) 1G 1ªp asist. Mbemba (CB). Kane (ENG) 2G 2ªp asist. Gordon (SUP) ×2. 2 TA, 0 TR. 8 corners (5+3). 23 remates (17+6), 9 a puerta. | ✅ 1X2 ENG (R4 17/17), Kane anytime (★★★), Over 2.5G. ❌ Saka asistencia (★★★), ENG −1 hándicap (★★), BTTS No (★★), Over 8.5c (★★, falla por 1), Wissa anytime R40 (★). ⚪ R12 skip Bakambu. | Claves: R38 3ª redefinición→BAJA obligatoria, R43 2º caso no-Conmebol (Makhadmeh/AFC), R44 nueva, R45 nueva (suplente Gordon).

### Partido 40 — Bélgica 3-2 Senegal (aet) | 01 Jul 2026 | Ronda de 32 (comprimido)

Real: BEL 3-2 SEN (aet). Diarra (SEN) 1G 1ªp. Tielemans (BEL) 2G. Lukaku (BEL, SUP) 1G asist. Meunier (SUP). Sarr (SEN) 1G asist. Niakhaté. 2 TA, 6 corners, 38 remates. | ✅ 1X2 BEL (R4 18/18), BTTS Sí (★★★), Lukaku anytime (★★★), Sarr anytime (★★), Over 2.5G (★★). ❌ Doku Over 2.5 remates (★★), De Bruyne asistencia (★), Gueye anytime R40 (★). ⚪ R12 skip Jackson. | Claves: R45 sube a BAJA-MEDIA (3/3), R43 sube a MEDIA (3/3), R38 sigue en 0/3, R40 confirma 0/2, R44 sube a BAJA-MEDIA, nuevas R46/R47.

### Partido 41 — España 3-0 Austria | 02 Jul 2026 | Ronda de 32 (comprimido)

Real: ESP 3-0 AUT. Oyarzabal 2G asist. Cucurella x2. Porro 1G asist. Baena. 1 TA (Posch), 0 TR. 9 corners (100% ESP). 28 remates (23+5), 10 a puerta (10 ESP). | ✅ ESP gana sin encajar (★★★), BTTS No (★★★), Over 13.5 remates ESP (★★), Oyarzabal anytime (★★), Yamal Over 2.5 remates (★), Under 3.5 TA (★), R4 (19/19). ❌ Austria Over 1.5 TA (★★). ✅ R12 skip Arnautović (no titular real, no cuenta como caso limpio). | Claves: R43 sube a ALTA (4/4 no-Conmebol), R44 sube a MEDIA, R39 1ª redefinición, R38 primer indicio recuperación (1/3), R1 no cuenta (xG rival 1.1).

### Partido 42 — Portugal 3-1 Croacia | 02 Jul 2026 | Ronda de 32 (comprimido)

Real: POR 3-1 CRO. Ronaldo 1G 2ªp, Ramos (SUP) 1G 2ªp asist. Leão, Perišić (CRO) 1G 2ªp. 0-0 al descanso. 3 TA (Dias 1ªp; Modrić+Perišić 2ªp, ambas CRO). 14 corners (6+8). 28 remates (12+16). | ✅ 1X ★★★, BTTS Sí ★★★, Ronaldo anytime ★★, Over 1.5 goles ★, Corners Over 8.5 (marginal). ❌ Bruno Fernandes asistencia ★★, Modrić asistencia ★. ⚪ R40, R12 (Budimir no evaluable). | Claves: R4 20/20, R11 primera validación empírica, R38 sube a 2/3, R44 sube a 4/4, R45 sube a MEDIA, R43 no incorpora a Eskås, R7 caso mixto.

### Partido 43 — Suiza 2-0 Argelia | 03 Jul 2026 | Ronda de 32 (comprimido)

Real: SUI 2-0 ALG. Embolo 1G 1ªp (asist. Manzambi). Ndoye (SUP) 1G 2ªp. 2 TA (Chaibi 1ªp, Boudaoui 2ªp, ambas ALG), 0 TR. 6 corners (4+2). 19 remates (11+8), 7 a puerta (5+2). | ✅ Under 3.5 TA (R42 3/3, Falcón Pérez extremo), Embolo anytime. ❌ BTTS Sí (primer fallo ★★★ en varias revisiones), Mahrez anytime, Over 2.5 goles, Manzambi Over 2.5 remates. ⚪ R12 skip Gouiri (matiz: jugó pero sin producción). | Claves: R4 21/21 (máximo, resolución cómoda), R42 sube a MEDIA (3/3), R11 segunda lectura empírica (2/5→partido cómodo), R1 fuera de racha estricta (xG rival 1.35) pero contraejemplo cualitativo relevante.

### Partido 44 — Colombia 1-0 Ghana | 03-04 Jul 2026 | Dieciseisavos de Final (Ronda de 32, comprimido)

Real: COL 1-0 GHA. Arias 1G 1ªp (asist. Suárez). 5 TA (2 COL, 3 GHA, las 3 de Ghana en 2ªp), 0 TR. 5 corners (3+2). 28 remates (20+8), 8 a puerta (los 8 de Colombia — Ghana 0 a puerta en todo el partido). | ✅ 1X ★★★, Under 3.5 goles ★★★, BTTS No ★★, Díaz Over 2.5 remates ★★. ❌ Under 3.5 TA ★★ (R43 contraejemplo), Muñoz goleador ★, Rodríguez asistencia ★. | Claves: R4 22/22, R43 primer contraejemplo (Turpin 5TA, 4/4→4/5, ALTA→MEDIA), R39 reforzada, R12 sube a 5/5 (Ayew), R7 nuevo caso (Arias), R13 ext. falla también en asistencia.

### Partido 45 — Argentina 2-2 Cabo Verde (Argentina gana 3-2 en penaltis) | 03-04 Jul 2026 | Dieciseisavos de Final (Ronda de 32, comprimido)

Real: ARG 2-2 CPV (120'), ARG gana 3-2 en penaltis. Messi 1G 1ªp (asist. L.Martínez); Duarte (CPV) 1G 2ªp (asist. Mendes); L.Martínez 1G prórroga 1ªp (asist. Mac Allister); autogol de un defensor argentino iguala 2-2 en prórroga (a raíz de un disparo de Jovane Cabral que se desvía — no es gol genuino de Cabral). 2 TA (Pina CPV 2ªp reg., Montiel ARG 2ªp prórroga), 0 TR. ~13 corners (9 en prórroga). | ✅ Under 3.5 TA, Messi anytime, Under 2.5 goles. ❌ Argentina -1.5, Cabo Verde no marca, CPV Over 13.5 faltas. Combinación más segura PIERDE (falla la pata de faltas). | Claves: R43 sube a 5/6 (recuperación tras Turpin), R41 suma caso fuerte (L.Martínez, central en prórroga), R12 sube a 6/6 (Livramento), R4 extiende a 23/23 "no pierde en juego" (máximo histórico), R4b tercer caso de favorito a penaltis, R13 ext. primer dato positivo en asistencia (Mac Allister), R40 corrección de atribución (autogol, no gol de Cabral).

### Partido 46 — Canadá 0-3 Marruecos | 04 Jul 2026 | Octavos de Final (Ronda de 16, comprimido)

Real: CAN 0-3 MAR. 1ªp 0-0 con 6 TA (2 CAN+4 MAR). Ounahi ×2 (asist. B.Díaz) y Rahimi ×1 (asist. Hakimi) en 2ªp, +2 TA (ambas CAN). 8 TA totales, 0 TR — máximo de la muestra. 12 corners (11 CAN + 1 MAR). | ✅ David Over 1.5 remates ★, CAN Over 10.5 faltas ★. ❌ Under 4.5 TA ★★★ (gran fallo), Under 2.5 goles ★★, Saibari anytime ★★, Diop anytime R41 ★. Combinación PIERDE. | Claves: R12 7/7 (David), R13 ext. contraejemplo dañino (Ounahi doblete), R7 contraejemplo (Hakimi asist.), R41 baja a 3/6, R45 sube a 5/5+1, R4 24/24, NUEVA R48 (tarjetas R16 disparadas sobre perfil de grupos).

### Partido 47 — Francia 1-0 Paraguay | 04 Jul 2026 | Octavos de Final (Ronda de 16)

**Predicciones pre-partido:** PAR 6% / X 13% / FRA 81% (c. justa FRA 1.23). Checklist R11: **1/5 PASS** (único PASS: Paraguay ya jugó en bloque bajo en su J1 ante EE.UU.) — sin descuento aplicado. R12 aplicado (skip Gabriel Ávalos en gol). R13 extendida aplicada (skip Tchouaméni/Rabiot en gol). R40 aplicado (sin prop de gol sorpresa para Paraguay). R44 aplicado sobre la baja reportada de Omar Alderete (sin prop individual asociado). R42/R43 declaradas explícitamente **no aplicadas por decisión del análisis** (no por regla formal): pese a que R43 sugeriría tarjetas bajas por ser árbitro no-Conmebol, se retiró el mercado de tarjetas por completo de la tabla EV+, citando dos precedentes de Ilgiz Tantashev en JJ.OO. París 2024 (9 TA dirigiendo a Paraguay, 10 TA+1 TR dirigiendo a Francia).
**Mercados ★★★:** Doble oportunidad 1X — Francia o Empate (EV+6.2%), Kylian Mbappé goleador anytime (EV+6.8%).
**Mercados ★★:** Over 2.5 goles totales (EV+9.2%), BTTS No (EV+7.1%).
**Mercados ★:** Over 8.5 corners Francia (EV+7.3%), Ousmane Dembélé goleador anytime (EV+8.0%).

**Real (confirmado por periodos):**
1ªp: 0-0. 1 TA (Barcola, FRA), 0 TR. 7 corners (todos de Francia). Remates: FRA 5 (0 a puerta), PAR 2 (0 a puerta).
2ªp: Gol de **Kylian Mbappé** (sin asistencia registrada en los datos aportados). 2 TA más (Manu Koné y Michael Olise, ambas FRA), 0 TR. 7 corners más (5 FRA + 2 PAR). Mbappé cierra con 5 remates, 4 a puerta, 1 gol. **Marcador final: Francia 1-0 Paraguay** (resuelto en 90').
**Totales (90'):** Francia 1 — Paraguay 0. 3 TA totales (las 3 de Francia: Barcola, Koné, Olise), 0 TR — la cifra más baja de tarjetas de cualquier eliminatoria de la muestra. 14 corners totales (12 FRA + 2 PAR). 20 remates totales (15 FRA + 5 PAR), 5 a puerta (los 5 de Francia — Paraguay 0 a puerta en todo el partido). 24 faltas cometidas combinadas (13 PAR + 11 FRA). Orlando Gill (PAR) registra 4 paradas en la 2ª parte.

**Balance (mercados evaluados a 90 minutos):**
✅ Doble oportunidad 1X (Francia o Empate) — Francia gana.
✅ Kylian Mbappé goleador anytime — anota el único gol.
❌ Over 2.5 goles totales — solo 1 gol en total.
✅ BTTS No — Paraguay no anota.
✅ Over 8.5 corners Francia — 12 corners de Francia.
❌ Ousmane Dembélé goleador anytime — no anota.
❌ Combinación más segura (Mbappé anytime + Over 2.5 goles, cuota 3.06) — **PIERDE en su conjunto**: acierta Mbappé, falla goles.

**Balance de mercados EV+ de este partido:** 4 aciertos de 6 seleccionados (66.7%) — el mejor balance desde P44 (67%), clara recuperación tras el 33.3% de P46. Los dos ★★★ aciertan ambos.

**Claves Rev49:**
- **R4 extiende a 25/25** "no pierde en juego" y a **23/25** "resuelto en 90'" — nuevo máximo histórico.
- **R11 (1/5 PASS) se refuerza en dirección contraria a P46:** favorito extremo gana raspado (1-0) pese a dominar 15-5 en remates y 12-2 en corners.
- **R12 sube a 8/8:** Gabriel Ávalos, "9" titular del inferior, termina sin un solo remate.
- **R13 extendida corta la racha de contraejemplos:** ni Rabiot ni Manu Koné (MC del favorito) anotan — primer caso de apoyo tras el doblete de Ounahi en P46. Se mantiene en BAJA.
- **NUEVA R49 — Historial de árbitro fuera del propio Mundial pesa menos que sus datos dentro del torneo:** los precedentes olímpicos de Tantashev (9 y 10 TA) llevaron a retirar el mercado de tarjetas; el resultado real (3 TA, la cifra más baja de la muestra) muestra que la cautela fue excesiva. Racha 1/1, confianza BAJA.
- **R48 recibe un contraejemplo:** Tantashev (3 TA) contrasta con Oliver (8 TA, P46) — racha pasa a 1/2, sin patrón consistente.
- **Asimetría de tarjetas:** las 3 TA fueron todas de Francia pese a que Paraguay cometió más faltas (13 vs 11) — dato informativo, sin regla nueva.
- **R44 gestiona con cautela correcta un dato ambiguo:** Alderete (baja reportada) aparece con participación mínima (5 pases en total) en los datos — sin prop asociado, sin exposición.
- **Corrección de alineación:** los datos reales muestran a Rabiot-Koné como doble pivote francés, no Tchouaméni-Rabiot como se había proyectado.
- **Sin caso evaluable:** R40, R41 (sin prop ofrecido), R42, MP-1/MP-6/MP-7.

**Nota de transparencia (P47):** el gol de Mbappé no tiene asistencia registrada en los datos Opta aportados (posible acción individual o dato no capturado en la tabla simplificada). La participación de Omar Alderete (3 pases 1ªp + 2 pases 2ªp) contradice la información pre-partido de baja por lesión, sin que se pueda confirmar con los datos disponibles si jugó minutos completos, fue un cameo tardío, o si el reporte de baja pre-partido quedó desactualizado. Las TA de fase de grupos de Ilgiz Tantashev (Escocia-Marruecos, Argelia-Austria) no están confirmadas con dato Opta exacto en esta revisión.

-----

## RESUMEN DE SESGOS ACTIVOS

|Sesgo|Descripción|Regla correctora|
|-----|-----------|----------------|
|**SÓLIDO R4** Favorito no pierde en juego|25/25, nuevo máximo histórico — Francia (favorito extremo, ~81%) gana 1-0 y resuelve en 90' en P47, tras Marruecos (favorito moderado) en P46|Mantener como ancla del análisis; confianza ALTA|
|**CONTEXTUAL R4b** Favorito a penaltis/prórroga en R32|4/12 no resuelto en 90' (P35, P36 penaltis; P40 prórroga por gol; P45 penaltis; resto resueltos en 90'). Sin nuevo caso en P46 ni P47 (ambos resueltos limpiamente en 90')|No estructural — solo factor de riesgo moderado por partido|
|**ALTA R12** Skip striker titular del inferior a cuota corta|8/8 casos limpios (Saibari, Pépé, Isak, Gyökeres, Ayew, Livramento, Jonathan David, **Gabriel Ávalos P47: 0 remates**) + 1 caso con matiz metodológico (Gouiri, P43)|Skip sistemático consolidado, siempre que el jugador objetivo sea titular confirmado por fuente primaria|
|**RETIRADA (gol) / BAJA (asistencia) R13 extendida** MC/AM del favorito no anota en KO|2/8 histórico + P44 (Rodríguez no anota ni asiste) + P45 (De Paul/Enzo/Mac Allister no anotan, pero Mac Allister sí asiste) + P46 (Ounahi, MC del favorito, anota un DOBLETE — el contraejemplo más dañino de la regla hasta la fecha) + **P47 (Rabiot y Manu Koné, MC titulares de Francia, no anotan — primer caso de apoyo tras el contraejemplo de Ounahi)**|**[AUDITORÍA REV50]** Variante de GOL **RETIRADA** (sin apuesta). Variante de asistencia en observación (BAJA); el caso de apoyo de P47 corta la racha de contraejemplos pero no basta por sí solo para reconsiderarla|
|**MEDIA R40 (2 redefiniciones formales; variante individual cerrada en auditoría rev50)** Gol del equipo inferior desde perfil inesperado|5/5 en ámbito (patrón general); 0/2 en aplicaciones reales como pick individual; sin caso evaluable en P41-P44; P45 requirió corrección (autogol, no gol genuino de Cabral). **Sin caso evaluable en P46** (el equipo inferior, Canadá, no anotó)|**[AUDITORÍA REV50]** Variante de pick individual **CERRADA** (no reactivable). Usar solo el mercado colectivo o BTTS Sí como proxy|
|**MEDIA R41** Gol de central en KO|3/6 tras P46 — Issa Diop no anota. **Sin caso evaluable en P47** (ningún central anotó, pero tampoco se ofreció prop de R41 en el informe)|Prop ★ de bajo stake para gol de central, con preferencia por fases de mayor desgaste (2ª parte/prórroga); ver R47 para la variante de asistencia|
|**MEDIA R42 (sin cambios)** Árbitros Conmebol en KO con TA muy baja|Sampaio, Valenzuela y Falcón Pérez — 3/3 bajo el perfil de GS confirmado en R32; Turpin (P44) y Fischer (P45) no son casos de R42 al ser UEFA/Concacaf. **P46 (Oliver, ING) y P47 (Tantashev, UZB) tampoco son casos de R42**|Reducir estimación TA un 25–30% vs perfil GS con árbitro Conmebol en eliminatoria|
|**MEDIA R43 (fuera de ámbito en P46 y P47)** Tarjetas bajas en R32 independiente de confederación|4/4 casos no-Conmebol hasta P43; P44 (Turpin) rompió la racha con 5 TA (4/5); P45 (Fischer) aportó un nuevo caso confirmatorio fuerte (2 TA en 120', 5/6). P46 no aplica (R16, no R32). **P47 (Tantashev) tampoco aplica formalmente por ser R16, pero su resultado real (3 TA) habría encajado con la hipótesis base de R43 si se hubiera usado — el análisis decidió apartarse de ella por precedentes olímpicos, ver R49**|Aplicar con cautela moderada en R32, consultando siempre R39; para octavos en adelante, usar R48/R49 en su lugar. **[AUDITORÍA REV50: en eliminatoria, techo ★★ para cualquier mercado de tarjetas hasta que R48 y R49 tengan ≥3 partidos de muestra]**|
|**NORMAL R39 (1ª redefinición)** KO + jugadores favorito a riesgo TA + rival presión alta → evitar Under 3.5 TA salvo que R43 confirme perfil permisivo|P44 aportó un caso de apoyo (Ghana); P45 aportó un contraejemplo (persecución sin inflar tarjetas bajo Fischer). P46 aportó un dato de tipo distinto: tarjetas altas (8 TA) sin persecución de marcador. **P47 no aporta caso nuevo a R39** (no hubo mercado de tarjetas activo ni dinámica de persecución relevante — el partido estuvo cerrado 0-0 hasta el gol de Mbappé)|Consultar siempre junto con R43/R48/R49 antes de recomendar Under/Over tarjetas en KO|
|**RETIRADA R38 (auditoría rev50 — antes BAJA obligatoria, 3ª redefinición)** Supresión/proyección de corners en R32|Falló en 3 partidos consecutivos antes de P41; P41 y P42 sin fallo mayor; P43, P44, P46 y ahora **P47 no computan formalmente (mercado no proyectado activamente en R32; P46 y P47 además son R16, fuera de ámbito estricto), pero el resultado real de P47 (14 corners) vuelve a ser informativamente alto**|**RETIRADA:** no usar como base de ninguna apuesta. Reconstruir el modelo de corners de R32 bajo una regla nueva si en el futuro se reactiva el mercado|
|**MEDIA R44** Riesgo de alineación no confirmada cerca del inicio|4/4 partidos consecutivos hasta P42; P45 resolvió sin sorpresas las dudas de Argentina; P46 gestionó correctamente las dudas de Canadá. **P47 aporta un caso más ambiguo pero igualmente bien gestionado: Alderete (baja reportada) aparece con participación mínima en los datos, sin ningún prop asociado, por lo que la ambigüedad no generó exposición**|Reforzar la reducción de stake en props individuales cuando haya dudas de alineación sin confirmar|
|**MEDIA R45** Impacto decisivo de suplentes del equipo favorito en R32/KO|Barcola, Gordon, Lukaku y Gonçalo Ramos — 4/4 hasta P42; caso adyacente de Ndoye en P43; P46 suma a Rahimi. **Sin caso evaluable en P47** (el gol lo anota un titular, Mbappé, que jugó los 90 minutos)|Considerar con stake ★★ mercados de gol/asistencia de suplente del favorito en KO, cuando la cuota de mercado ofrezca margen|
|**BAJA R46** Favoritos de R32 remontando tras ir perdiendo al descanso|2/2 (Inglaterra P39, Bélgica P40); sin caso evaluable en P41-P47|Vigilar en próximos partidos; no aplicar todavía como mercado con stake|
|**BAJA R47** Centrales del equipo inferior asistiendo (no anotando) en KO|2/2 (Mbemba P39, Niakhaté P40); sin caso evaluable en P41-P47|Vigilar como sub-patrón; no aplicar todavía como mercado con stake|
|**BAJA R48** Tarjetas en Octavos (R16) pueden dispararse muy por encima del perfil de grupos del árbitro|1/2 — Michael Oliver pasó de 3.0 TA en grupos a 8 TA en R16 (P46); **Tantashev (P47) hace justo lo contrario: 3 TA, en línea con su perfil general, no por encima — muestra dividida, sin patrón consistente**|No aplicar como ajuste direccional fiable todavía; seguir aplicando colchón/cautela en la primera muestra de cada ronda, pero sin asumir automáticamente que las tarjetas subirán. **[AUDITORÍA REV50: techo ★★ para mercados de tarjetas de eliminatoria hasta que R48 y R49 tengan ≥3 partidos de muestra]**|
|**NUEVA BAJA R49** Historial de árbitro fuera del propio Mundial pesa menos que sus datos dentro del torneo|1/1 — los precedentes olímpicos de Tantashev (9 y 10 TA) llevaron a retirar el mercado de tarjetas en P47; el resultado real (3 TA, la cifra más baja de la muestra) muestra que esos precedentes sobrestimaron el riesgo|Priorizar el historial dentro del propio Mundial 2026 (aunque sea solo de grupos) sobre precedentes de otras competiciones, salvo razón muy sólida en contra|
|**GOBERNANZA (auditoría rev50) — Techo de confianza en tarjetas de eliminatoria**|Proliferación de 4 reglas en serie para el mismo mercado (R42→R43→R48→R49), todas BAJA/MEDIA; el contador de redefiniciones no ve este sobreajuste porque se registra como "reglas nuevas". Los ★★★/★★ recientes de tarjetas fallaron (P46 Under 4.5 TA ★★★; P44 Under 3.5 TA ★★)|Cualquier mercado de tarjetas en ronda eliminatoria queda **topado a ★★ máximo** hasta que R48 **y** R49 acumulen ≥3 partidos de muestra (hoy 1/2 y 1/1). Consolidación de las 4 reglas en un marco único: pendiente — requeriría una regla-marco nueva, no se renumera lo existente|
|**VIGENTE R7** Extremo/lateral favorito: gol > asistencia en KO|P41 y P42 casos mixtos; P44 aportó un caso de apoyo (Arias); P45 aportó otro caso de apoyo (Messi); P46 aportó un contraejemplo (Hakimi asiste, no anota). **Sin caso evaluable en P47** (el gol lo anota un delantero centro, Mbappé, no un extremo/lateral; ningún extremo/lateral de Francia registra gol ni asistencia)|Mantener como referencia de baja-media confianza, vigilar próximos casos|
|**VIGENTE R1** BTTS No con xG rival bajo|18/30 — P40-P46 no contaron para la racha estricta (xG rival estimado por encima del umbral). **P47 sí cuenta para la racha estricta: el xG pre-partido estimado de Paraguay fue 0.50, por debajo del umbral de 0.80, y Paraguay no anotó — racha sube a 19/31**|Regla probabilística, no determinística; vigilar si el modelo sobreestima sistemáticamente el xG de equipos con ataque limitado bajo presión de KO|
|**NUEVO (sin numerar, observación P43)** BTTS Sí como pick sistemático puede fallar en partidos con defensa sólida del favorito|Primer fallo relevante tras varios aciertos consecutivos (P40, P42); sin nuevo caso evaluable en P44-P46 (no se recomendó BTTS Sí en ninguno de estos partidos)|Vigilar si conviene bajar la confianza sistemática de BTTS Sí cuando el favorito cuenta con una pareja de centrales sólida|
|**NUEVO (sin numerar, observación P43, reforzada P46)** Jugador en racha de forma puede colapsar en el partido siguiente|Manzambi (P43); **ahora un segundo caso: Ismael Saibari (P46), tras marcar en sus tres partidos de grupos y el penalti decisivo vs NED, no anota en octavos**|No aplicar todavía como ajuste sistemático, pero empieza a acumular muestra — vigilar de cerca en próximos partidos con jugadores en rachas destacadas|
|**NUEVO (sin numerar, observación P45)** Los corners se multiplican en la prórroga con mayor consistencia que las tarjetas|Un solo caso (P45): 9 de 13 corners en los 30' de prórroga, tarjetas sin multiplicador|No se crea mercado nuevo con un solo caso; vigilar en próximos partidos con prórroga si el patrón se repite|
|**NUEVO (sin numerar, observación P45)** Favorito extremo con rival en bloque bajo puede necesitar penaltis pese a una brecha de calidad amplia|Un solo caso reciente: Argentina (74% pre-partido) necesita penaltis ante Cabo Verde|Vigilar si R11 debería ponderar más el criterio "rival ya jugó en bloque bajo en J1"|
|**NUEVO (sin numerar, observación P46)** El equipo que persigue el marcador puede generar la inmensa mayoría de los corners del partido, incluso perdiendo con claridad|Un solo caso: Canadá genera 11 de los 12 corners totales pese a caer 0-3 ante Marruecos. **Sin caso evaluable en P47** (ningún equipo "persiguió" el marcador de forma prolongada — Francia dominó corners desde el 0-0 inicial)|No se crea regla ni mercado nuevo con un solo caso; vigilar como posible extensión de MP-6 hacia "el equipo que persigue" en general, sea o no favorito|
|**NUEVO (sin numerar, observación P47)** Asimetría entre faltas cometidas y tarjetas recibidas por equipo|Un solo caso: Paraguay comete más faltas que Francia (13 vs 11) mientras que las 3 TA del partido recaen enteramente en jugadores franceses|No se crea regla ni mercado nuevo con un solo caso; vigilar si el criterio arbitral pesa más el tipo/momento de la falta que el volumen bruto por equipo|

**Nota de transparencia (P45, vigente):** la identidad exacta del defensor argentino que provoca el autogol del 2-2 en la prórroga fue confirmada por el usuario como un autogol (no un gol genuino de Jovane Cabral), pero el jugador concreto que lo provoca no se ha especificado; se registra como "autogol de un defensor argentino, jugador exacto sin confirmar".

**Nota de transparencia (P46):** ver detalle completo en la ficha de Partido 46 del Historial — reparto de asistencias inferido de totales agregados, condición de "suplente" de Rahimi no confirmada explícitamente, y reconstrucción de los remates totales de Jonathan David a partir de dos entradas parcialmente duplicadas en los datos de segunda parte.

**Nota de transparencia (P47):** ver detalle completo en la ficha de Partido 47 del Historial — el gol de Mbappé no tiene asistencia registrada en los datos aportados; la participación mínima de Alderete (5 pases en total) contradice el reporte pre-partido de baja por lesión sin que se pueda confirmar el motivo exacto; las TA de fase de grupos de Ilgiz Tantashev no están confirmadas con dato Opta exacto en esta revisión.

-----

*Fin rev50 (post-auditoría del tramo rev40–rev49; sin partido nuevo respecto a rev49).*
