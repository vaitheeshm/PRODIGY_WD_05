document.getElementById('getWeather').addEventListener('click', function() {
    const city = document.getElementById('city').value;
    const apiKey = 'YOUR API KEY'; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => {
            console.log('Response:', response);
            return response.json();
        })
        .then(data => {
            console.log('Data:', data);
            const weatherInfo = document.getElementById('weatherInfo');
            if (data.cod === 200) {
                weatherInfo.innerHTML = `
                    <h1> ${data.main.temp}°C</h1>
                    <h2>${data.name}</h2>
                    <p>Weather: ${data.weather[0].description}</p>
                    <p>🗺️lat: ${data.coord.lat}</p><p>lon: ${data.coord.lon}</p>
                `;
            } else {
                weatherInfo.innerHTML = `<p>City not found</p>`;
            }
        })
        .catch(error => {
            console.error('Error:', error);
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<p>Failed to fetch weather data</p>`;
        });
});
