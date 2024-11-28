const cityInput = document.getElementById('cityInput');
const getWeatherBtn = document.getElementById('getWeatherBtn');
const temperatureElement = document.getElementById('temperature');
const descriptionElement = document.getElementById('description');
const humidityElement = document.getElementById('humidity');
const windSpeedElement = document.getElementById('windSpeed');
const weatherInfoElement = document.querySelector('.weather-info');

getWeatherBtn.addEventListener('click', () => {
    const city = cityInput.value;  

    
    if (!city) {
        weatherInfoElement.style.display = 'none';  
        return;
    }

    
    temperatureElement.textContent = '';
    descriptionElement.textContent = '';
    humidityElement.textContent = '';
    windSpeedElement.textContent = '';

    
    // fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9147dbdaac498c64b3e72b6b149731ed&units=metric`)
    //     .then(response => {
    //         if (!response.ok) {
    //             throw new Error('City not found');
    //         }
    //         return response.json();
    //     })
    //     .then(data => {
            
    //         const temperature = data.main.temp;
    //         const description = data.weather[0].description;
    //         const humidity = data.main.humidity;
    //         const windSpeed = data.wind.speed;

    //         temperatureElement.textContent = `Temperature: ${temperature}°C`;
    //         descriptionElement.textContent = `Weather: ${description}`;
    //         humidityElement.textContent = `Humidity: ${humidity}%`;
    //         windSpeedElement.textContent = `Wind Speed: ${windSpeed} m/s`;

    //         weatherInfoElement.style.display = 'block';  
    //     })
    //     .catch(error => {
    //         weatherInfoElement.style.display = 'none';  
    //     });

    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9147dbdaac498c64b3e72b6b149731ed&units=metric`)
        .then(response => {
            const data = response.data;
            const temperature = data.main.temp;
            const description = data.weather[0].description;
            const humidity = data.main.humidity;
            const windSpeed = data.wind.speed;

            temperatureElement.textContent = `Temperature: ${temperature}°C`;
            descriptionElement.textContent = `Weather: ${description}`;
            humidityElement.textContent = `Humidity: ${humidity}%`;
            windSpeedElement.textContent = `Wind Speed: ${windSpeed} m/s`;

            weatherInfoElement.style.display = 'block';  
        })
        .catch(error => {
            weatherInfoElement.style.display = 'none';  
        });
});


