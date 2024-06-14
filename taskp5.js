const apiKey = 'ec057085c88727a1708b50c399cc8ea5'; 

function getWeatherByLocation() {
    const location = document.getElementById('location-input').value;
    if (location) {
        fetchWeather(location);
    } else {
        alert('Please enter a location.');
    }
}

function fetchWeather(location) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => displayWeather(data))
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('Failed to fetch weather data. Please try again.');
        });
}

function displayWeather(data) {
    if (data.cod === 200) {
        const location = data.name;
        const temperature = data.main.temp;
        const conditions = data.weather[0].description;

        document.getElementById('location').textContent = `Location: ${location}`;
        document.getElementById('temperature').textContent = `Temperature: ${temperature} °C`;
        document.getElementById('conditions').textContent = `Conditions: ${conditions}`;
    } else {
        alert('Location not found. Please enter a valid location.');
    }
}
