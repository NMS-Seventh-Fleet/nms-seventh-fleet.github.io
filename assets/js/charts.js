      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Age', 'Ajauri'],
          [ 3425,      -3136],
        ]);

        var options = {
        
          hAxis: {minValue: -6000, maxValue: 6000, gridlines: {color: '#252525'}, minorGridlines: {color: '#252525'} },
          vAxis: {minValue: -6000, maxValue: 6000, gridlines:{color: '#252525'}, minorGridlines: {color: '#252525'} },
          legend: 'none',
          backgroundColor:'#252525',
          pointShape: 'star',
          pointSize: 15,
          series: {0:{color: 'yellow', visibleInLegend: false},}
        
        };

        var chart = new google.visualization.ScatterChart(document.getElementById('chart_div'));

        chart.draw(data, options);
      }