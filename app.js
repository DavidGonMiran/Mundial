// ── TAB SWITCHING ──
function switchTab(id, btn) {
  document.querySelectorAll('.tc').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('tab-' + id).classList.add('active');
  btn.classList.add('active');
  if (id === 'simulacion') initSimCharts();
  if (id === 'visualizacion') initVizCharts();
}

// ── HALF TABS ──
function showHalf(h, btn) {
  ['full','first','second'].forEach(s => {
    const el = document.getElementById('stats-' + s);
    if (el) el.style.display = s === h ? 'block' : 'none';
  });
  document.querySelectorAll('.htab').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
}

// ── CHART DEFAULTS ──
document.addEventListener('DOMContentLoaded', () => {
  if (typeof Chart !== 'undefined') {
    Chart.defaults.color = '#8b9ab3';
    Chart.defaults.borderColor = '#1e2d45';
    Chart.defaults.font.family = 'Inter';
  }
});

let simDone = false, vizDone = false;

function initSimCharts() {
  if (simDone) return; simDone = true;

  new Chart(document.getElementById('goalsChart'), {
    type: 'bar',
    data: {
      labels: ['0', '1', '2', '3', '4+'],
      datasets: [{ label: '%', data: CHART_DATA.goals,
        backgroundColor: ['#f0a500bb','#f0a500bb','#00d084bb','#886622bb','#555555bb'],
        borderColor: ['#f0a500','#f0a500','#00d084','#886622','#555555'],
        borderWidth: 1, borderRadius: 4 }]
    },
    options: { responsive: true, maintainAspectRatio: false,
      plugins: { legend: { display: false }, tooltip: { callbacks: { label: c => ` ${c.raw}%` } } },
      scales: { y: { beginAtZero: true, ticks: { callback: v => v + '%' }, grid: { color: '#1e2d45' } },
        x: { title: { display: true, text: 'Goles totales', color: '#8b9ab3', font: { size: 11 } }, grid: { display: false } } } }
  });

  new Chart(document.getElementById('cornersChart'), {
    type: 'bar',
    data: {
      labels: ['≤6', '7', '8', '9', '10', '11+'],
      datasets: [{ label: '%', data: CHART_DATA.corners,
        backgroundColor: '#00c9d4bb', borderColor: '#00c9d4', borderWidth: 1, borderRadius: 4 }]
    },
    options: { responsive: true, maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: { y: { beginAtZero: true, ticks: { callback: v => v + '%' }, grid: { color: '#1e2d45' } },
        x: { title: { display: true, text: 'Corners totales', color: '#8b9ab3', font: { size: 11 } }, grid: { display: false } } } }
  });

  new Chart(document.getElementById('cardsChart'), {
    type: 'bar',
    data: {
      labels: ['0–1', '2', '3', '4', '5', '6+'],
      datasets: [{ label: '%', data: CHART_DATA.cards,
        backgroundColor: '#ef4444bb', borderColor: '#ef4444', borderWidth: 1, borderRadius: 4 }]
    },
    options: { responsive: true, maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: { y: { beginAtZero: true, ticks: { callback: v => v + '%' }, grid: { color: '#1e2d45' } },
        x: { title: { display: true, text: 'Amarillas totales', color: '#8b9ab3', font: { size: 11 } }, grid: { display: false } } } }
  });

  new Chart(document.getElementById('winChart'), {
    type: 'doughnut',
    data: {
      labels: [HOME_NAME, 'Empate', AWAY_NAME],
      datasets: [{ data: CHART_DATA.win,
        backgroundColor: [HOME_COLOR, '#4a5568', AWAY_COLOR],
        borderColor: [HOME_COLOR2, '#6b7280', AWAY_COLOR2], borderWidth: 2 }]
    },
    options: { responsive: true, maintainAspectRatio: false, cutout: '65%',
      plugins: { legend: { position: 'bottom', labels: { padding: 14, font: { size: 11 } } },
        tooltip: { callbacks: { label: c => ` ${c.label}: ${c.raw}%` } } } }
  });
}

function initVizCharts() {
  if (vizDone) return; vizDone = true;

  new Chart(document.getElementById('radarChart'), {
    type: 'radar',
    data: {
      labels: CHART_DATA.radarLabels,
      datasets: [
        { label: HOME_NAME, data: CHART_DATA.radarHome,
          backgroundColor: `${HOME_COLOR}26`, borderColor: HOME_COLOR, borderWidth: 2, pointBackgroundColor: HOME_COLOR, pointRadius: 3 },
        { label: AWAY_NAME, data: CHART_DATA.radarAway,
          backgroundColor: `${AWAY_COLOR}26`, borderColor: AWAY_COLOR, borderWidth: 2, pointBackgroundColor: AWAY_COLOR, pointRadius: 3 }
      ]
    },
    options: { responsive: true, maintainAspectRatio: false,
      plugins: { legend: { position: 'bottom', labels: { padding: 14, font: { size: 11 } } } },
      scales: { r: { min: 0, max: 100,
        ticks: { stepSize: 25, color: '#4a5568', backdropColor: 'transparent', font: { size: 9 } },
        grid: { color: '#1e2d45' }, pointLabels: { font: { size: 10 }, color: '#8b9ab3' } } } }
  });

  new Chart(document.getElementById('metricsChart'), {
    type: 'bar',
    data: {
      labels: CHART_DATA.metricsLabels,
      datasets: [
        { label: HOME_NAME, data: CHART_DATA.metricsHome,
          backgroundColor: HOME_COLOR + 'cc', borderColor: HOME_COLOR2, borderWidth: 1, borderRadius: 3 },
        { label: AWAY_NAME, data: CHART_DATA.metricsAway,
          backgroundColor: AWAY_COLOR + 'cc', borderColor: AWAY_COLOR2, borderWidth: 1, borderRadius: 3 }
      ]
    },
    options: { indexAxis: 'y', responsive: true, maintainAspectRatio: false,
      plugins: { legend: { position: 'bottom', labels: { padding: 14, font: { size: 11 } } } },
      scales: { x: { min: 0, max: 100, grid: { color: '#1e2d45' } },
        y: { grid: { display: false }, ticks: { font: { size: 10 } } } } }
  });

  new Chart(document.getElementById('probDonut'), {
    type: 'doughnut',
    data: {
      labels: [`${HOME_NAME} gana`, 'Empate', `${AWAY_NAME} gana`],
      datasets: [{ data: CHART_DATA.win,
        backgroundColor: [HOME_COLOR, '#4a5568', AWAY_COLOR],
        borderColor: [HOME_COLOR2, '#6b7280', AWAY_COLOR2], borderWidth: 2 }]
    },
    options: { responsive: true, maintainAspectRatio: false, cutout: '60%',
      plugins: { legend: { position: 'bottom', labels: { padding: 12, font: { size: 11 } } } } }
  });

  const mins = [0,10,20,30,40,45,50,60,70,80,90];
  new Chart(document.getElementById('probLine'), {
    type: 'line',
    data: {
      labels: mins.map(m => m + "'"),
      datasets: [
        { label: HOME_NAME, data: CHART_DATA.probLineHome, borderColor: HOME_COLOR, backgroundColor: `${HOME_COLOR}14`, fill: true, tension: 0.4, borderWidth: 2, pointRadius: 2 },
        { label: '⚖️ Empate', data: CHART_DATA.probLineDraw, borderColor: '#6b7280', fill: false, tension: 0.4, borderWidth: 1.5, borderDash: [4,4], pointRadius: 1 },
        { label: AWAY_NAME, data: CHART_DATA.probLineAway, borderColor: AWAY_COLOR, backgroundColor: `${AWAY_COLOR}14`, fill: true, tension: 0.4, borderWidth: 2, pointRadius: 2 }
      ]
    },
    options: { responsive: true, maintainAspectRatio: false,
      plugins: { legend: { position: 'bottom', labels: { padding: 12, font: { size: 10 } } },
        tooltip: { callbacks: { label: c => ` ${c.dataset.label}: ${c.raw}%` } } },
      scales: { y: { min: 0, max: 80, ticks: { callback: v => v + '%' }, grid: { color: '#1e2d45' } },
        x: { grid: { color: '#1e2d4530' } } } }
  });
}
