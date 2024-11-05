const apikey = "b30a4c0219e3e0f5ecdd58721b226342";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchbox = document.querySelector(".search input")
const searchbtm = document.querySelector(".search button")
const weathericon = document.querySelector(".weather-icon")
async function checkweather(city){//function which takes city as argument in order to take city from user
const response  = await fetch(apiurl + city +`&appid=${apikey}`)// it will fetch api url , city , api key all data will be stored in variable response
if(response.status == 404){
  document.querySelector(".error").style.display ="block"
  document.querySelector(".weather").style.display ="none"
}

else{
  var data = await response.json(); //all the json data of response wil be stored in data variable
document.querySelector(".city").innerHTML = data.name;
document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
document.querySelector(".wind").innerHTML = data.wind.speed  + "kp/h";


if (data.weather[0].main === "Clouds"){
  weathericon.src = "images/clouds.png"
}
else if(data.weather[0].main === "Clear"){
  weathericon.src = "images/clear.png"
}
else if(data.weather[0].main === "Rain"){
  weathericon.src = "images/rain.png"
}
else if(data.weather[0].main === "Drizzle"){
  weathericon.src = "images/drizzle.png"
}
else if(data.weather[0].main === "Mist"){
  weathericon.src = "images/mist.png"
}
else if(data.weather[0].main === "Snow"){
  weathericon.src = "images/snow.png"
}
else if(data.weather[0].main === "Smoke"){
  weathericon.src = "images/mist.png"
}
else if(data.weather[0].main === "Haze"){
  weathericon.src = "images/haze.png"
}
document.querySelector(".weather").style.display = "block"
document.querySelector(".error").style.display ="none"
}
}


searchbtm.addEventListener("click", () => {
  checkweather(searchbox.value)

}
);
searchbox.addEventListener("keydown", (event) => {
  if (event.key === "Enter"){
    checkweather(searchbox.value)
  }
}
);
