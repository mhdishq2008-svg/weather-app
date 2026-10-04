const apiKey = "25b3835779bb5cf92d0fc816839cdea8";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    const data = await response.json();
    
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main === "Clouds") {
        weatherIcon.src = "imagezz/clouds.png";
    } else if (data.weather[0].main === "Clear") {
        weatherIcon.src = "imagezz/clear.png";
    } else if (data.weather[0].main === "Rain") {
        weatherIcon.src = "imagezz/rain.png";
    } else if (data.weather[0].main === "Drizzle") {
        weatherIcon.src = "imagezz/drizzle.png";
    } else if (data.weather[0].main === "Mist") {
        weatherIcon.src = "imagezz/mist.png";
    } else if (data.weather[0].main === "Snow") {
        weatherIcon.src = "imagezz/snow.png";
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});