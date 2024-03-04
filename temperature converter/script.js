function convertTemperature() {
    const temperatureInput = parseFloat(document.getElementById('temperatureInput').value);
    const unitSelect = document.getElementById('unitSelect').value;
    let result;
  
    if (unitSelect === 'celsius') {
      result = {
        fahrenheit: (temperatureInput * 9 / 5) + 32,
        kelvin: temperatureInput + 273.15
      };
    } else if (unitSelect === 'fahrenheit') {
      result = {
        celsius: (temperatureInput - 32) * 5 / 9,
        kelvin: (temperatureInput - 32) * 5 / 9 + 273.15
      };
    } else if (unitSelect === 'kelvin') {
      result = {
        celsius: temperatureInput - 273.15,
        fahrenheit: (temperatureInput - 273.15) * 9 / 5 + 32
      };
    }
  
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = '';
    
    const resultList = document.createElement('ul');
    
    if (result.celsius) {
      const celsiusItem = document.createElement('li');
      celsiusItem.textContent = result.celsius.toFixed(2) + ' Celsius';
      resultList.appendChild(celsiusItem);
    }
  
    if (result.fahrenheit) {
      const fahrenheitItem = document.createElement('li');
      fahrenheitItem.textContent = result.fahrenheit.toFixed(2) + ' Fahrenheit';
      resultList.appendChild(fahrenheitItem);
    }
  
    if (result.kelvin) {
      const kelvinItem = document.createElement('li');
      kelvinItem.textContent = result.kelvin.toFixed(2) + ' Kelvin';
      resultList.appendChild(kelvinItem);
    }
  
    resultElement.appendChild(resultList);
  }