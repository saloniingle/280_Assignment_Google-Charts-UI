# Milk Price Time Series Visualization

This project visualizes the Average Price of Milk (Fresh, Whole, Fortified) in U.S. City Average using Google Charts.

## Features
- Interactive line chart showing milk price trends
- Responsive design
- Smooth animations
- Clear data visualization with proper axis labels

## Setup
1. Download the data from FRED (Federal Reserve Bank of St. Louis):
   - Visit: https://fred.stlouisfed.org/series/APU0000709112
   - Download the CSV file
   - Place the CSV file in the project directory

2. Open the project:
   - Open `index.html` in a web browser
   - The chart will automatically load and display the data

## Data Source
The data is sourced from the Federal Reserve Bank of St. Louis Economic Data (FRED) series APU0000709112.

## ChatGPT Prompt
To get the data in JSON format from ChatGPT, use the following prompt:

```
get Average Price: Milk, Fresh, Whole, Fortified (Cost per Gallon/3.8 Liters) in U.S. City Average time series data for the last 10 years in JSON format from FRED.
```

## Technical Details
- Built using Google Charts API
- Pure JavaScript implementation
- No external dependencies required
- Responsive design that works on all screen sizes 