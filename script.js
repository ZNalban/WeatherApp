const apiKey = "621c6cc088dc37204dbac04620725d74";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    data = await response.json();
    console.log(data.weather[0].main);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + `°C`;
    document.querySelector(".humidity").innerHTML = data.main.humidity + `%`;
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    switch (data.weather[0].main) {
        case "Clear":
            weatherIcon.src = "images/clear.gif";
            break;
        case "Clouds":
            weatherIcon.src = "images/cloudy.gif";
            break;
        case "Drizzle":
            weatherIcon.src = "images/drizzle.gif";
            break;
        case "Mist":
            weatherIcon.src = "images/mist.gif";
            break;
        case "Rain":
            weatherIcon.src = "images/rain.gif";
            break;
        case "Snow":
            weatherIcon.src = "images/snow.gif";
            break;
    }
}

searchBtn.addEventListener("click", () => checkWeather(searchBox.value));