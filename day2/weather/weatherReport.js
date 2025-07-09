const axios = require('axios');

const city = process.argv[2];
const apiKey = '';

if (!city) {
  console.log("⚠️ Please provide a city name.");
  process.exit();
}

const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

axios.get(url)
  .then(response => {
    const data = response.data;
    console.log(`📍 City: ${data.name}`);
    console.log(`🌡️ Temperature: ${data.main.temp}°C`);
    console.log(`⛅ Condition: ${data.weather[0].description}`);
  })
  .catch(error => {
    if (error.response && error.response.status === 404) {
      console.log(`❌ City "${city}" not found.`);
    } else {
      console.log("🚨 Error fetching weather data:", error.message);
    }
  });

