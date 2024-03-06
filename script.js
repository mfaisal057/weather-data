let searchbtn = document.querySelector("#searchbtn")
let input = document.querySelector("#input-box")
let temprature = document.querySelector(".temp")
let humidiy = document.querySelector(".humidiy")
let wind = document.querySelector(".wind")
let discription = document.querySelector(".discription")
let cityName = document.querySelector(".city")
let weatherImg = document.querySelector(".weather-icon")


async function checkweather(city){
    const apiKey = "5f99bec73e494e1eba8348f5b2963d00";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey} `

    const weatherData = await fetch(`${apiUrl}`).then(responce=>responce.json())

     console.log(weatherData)

    temprature.innerHTML = `${Math.floor(weatherData.main.temp-273.15)+ '°C'}`
    humidiy.innerHTML = `${weatherData.main.humidity + '%'}`
    wind.innerHTML = `${weatherData.wind.speed + 'Km/h'}`
    discription.innerHTML = `${weatherData.weather[0].main}`
    cityName.innerHTML = `${weatherData.name}`


    switch(weatherData.weather[0].main){
        case 'Clouds':
        weatherImg.src = "images/clouds.png";
        break;
        case 'Clear':
        weatherImg.src = "images/clear.png";
        break;
        case 'Rain':
        weatherImg.src = "images/rain.png";
        break;
        case 'Mist':
        weatherImg.src = "images/mist.png";
        break;
        case 'Snow':
        weatherImg.src = "images/snow.png";
        break;
    }




}

searchbtn.addEventListener('click',function(){
    checkweather(input.value)
})