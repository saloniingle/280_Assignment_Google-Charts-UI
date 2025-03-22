// Load the Google Charts library
google.charts.load('current', {'packages':['corechart']});

// Set a callback to run when the Google Visualization API is loaded
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    // Create the data table
    var data = new google.visualization.DataTable();
    data.addColumn('date', 'Date');
    data.addColumn('number', 'Price (USD)');

    // Fetch and process the CSV file
    fetch('APU0000709112.csv')
        .then(response => response.text())
        .then(csvText => {
            // Parse CSV data
            const rows = csvText.split('\n').slice(1); // Skip header row
            const chartData = rows
                .filter(row => row.trim()) // Remove empty rows
                .map(row => {
                    const [date, price] = row.split(',');
                    const [year, month, day] = date.split('-');
                    return [
                        new Date(parseInt(year), parseInt(month) - 1, parseInt(day)),
                        parseFloat(price)
                    ];
                });

            // Add the data to the chart
            data.addRows(chartData);

            // Set chart options
            var options = {
                title: 'Milk Price Trend (1995-2024)',
                curveType: 'function',
                legend: { position: 'bottom' },
                hAxis: {
                    title: 'Date',
                    format: 'yyyy',
                    gridlines: { count: 10 }
                },
                vAxis: {
                    title: 'Price (USD per Gallon)',
                    minValue: 2.0,
                    maxValue: 5.0
                },
                animation: {
                    duration: 1000,
                    easing: 'out'
                },
                backgroundColor: '#ffffff',
                chartArea: {
                    width: '80%',
                    height: '70%'
                }
            };

            // Instantiate and draw the chart
            var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
            chart.draw(data, options);
        })
        .catch(error => {
            console.error('Error loading CSV file:', error);
            document.getElementById('chart_div').innerHTML = 'Error loading data. Please check the console for details.';
        });
} 