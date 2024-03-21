
const apiKey = "28ad7d84c59db1f458b565f923a14176";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search-box input");
const searchBtn = document.querySelector(".search-box button");
const weatherIcon = document.querySelector(".weather-icon");
const error404 = document.querySelector(".not-found");
const tempe = document.querySelector(".weather-box");
const weatherDetails = document.querySelector(".weather-details");

async function checkWeather(city){
const responce = await fetch(apiUrl + city + `&appid=${apiKey}`);
let data = await responce.json();

console.log(data);

if(data?.cod == "404" ){
    error404.style.visibility = "visible";
    weatherIcon.style.visibility = "hidden";
    tempe.style.visibility = "hidden";
    weatherDetails.style.visibility = "hidden";
    return;                            
}
else{
    error404.style.visibility = "hidden";
    weatherIcon.style.visibility = "visible";
    tempe.style.visibility = "visible";
    weatherDetails.style.visibility = "visible";
}


document.querySelector(".city").innerHTML = data.name;
document.querySelector(".temperature").innerHTML = Math.round(data?.main?.temp) + "°C";
document.querySelector(".info-humidity").innerHTML = data?.main.humidity + "%";
document.querySelector(".info-wind").innerHTML = data.wind.speed + " Km/h";

if(data.weather[0].main == "Clouds"){
weatherIcon.src = "images/cloud.png";
}
else if(data.weather[0].main == "Clear"){
weatherIcon.src = "images/clear.png";
}
else if(data.weather[0].main == "Rain"){
weatherIcon.src = "images/rain.png";
}
else if(data.weather[0].main == "Drizzel"){
weatherIcon.src = "images/snow.png";
}
else if(data.weather[0].main == "Mist"){
weatherIcon.src = "images/mist.png";
}


}

searchBtn.addEventListener("click", ()=>{
checkWeather(searchBox.value);
})
