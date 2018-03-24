var forecastCanvas = document.getElementById("forecastChart");

Chart.defaults.global.defaultFontFamily = "Roboto";
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontColor = '#fff';

var forecastData = {
  labels: ["Pike", "Pike-perch", "Perch", "Catfish", "Chub"],
  datasets: [{
    label: "Forecast of fish for today",
    data: [50, 35, 75, 20, 10],
    backgroundColor: 'rgba(252, 252, 252, 0.6)',
    borderColor: '#CC3333',
    pointBorderColor: '#CC3333',
    pointBackgroundColor: '#fff',
    pointRadius: 5,
    pointHoverRadius: 15,
    pointHitRadius: 30,
    pointBorderWidth: 2,
    
  }]
};

var lineChart = new Chart(forecastCanvas, {
    type: 'line',
    data: forecastData,
    options: {
        legend: {
            display: false,
        },
        maintainAspectRatio: false,

    }
});