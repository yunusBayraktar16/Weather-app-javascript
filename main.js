const url = 'https://api.openweathermap.org/data/2.5/';
const key = '6ad45cda045396ed339aef36531864e6';

const setQuery = (event) => {
    if (event.key == "Enter") {
        getResult(searchBar.value);
    }
}

const getResult = (cityName) => {
    let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=en`;
    fetch(query)
        .then(weather => {
            return weather.json();
        })
        .then(displayResult)
}
let city = document.querySelector(".city");
let temp = document.querySelector(".temp");
let desc = document.querySelector(".desc");
let minmax = document.querySelector(".minmax");

const displayResult = (result) => {
    city.innerHTML = `${result.name},${result.sys.country}`;
    temp.innerHTML = `${Math.round(result.main.temp)}°C`;
    desc.innerHTML = `${result.weather[0].description}`;
    minmax.innerHTML = `${Math.round(result.main.temp_min)}°C/${Math.round(result.main.temp_max)}°C`;
}

const searchBar = document.getElementById('searchBar');
searchBar.addEventListener('keypress', setQuery);
