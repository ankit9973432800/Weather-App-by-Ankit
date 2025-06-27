const apiKey= "f6061d86c20f52a4e69005fbf18ede7c";
const apiUrl= "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox= document.querySelector(".search input");
const searchBtn= document.querySelector(".search Button");
const WhetherIcon=document.querySelector(".Whether-Icon");





async function checkWeather(city){
    const response = await fetch (apiUrl + city +`&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";

    }else{
        
    var data = await response .json();
    

document.querySelector(".city").innerHTML=data.name;
document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°C";
document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
document.querySelector(".wind").innerHTML=data.wind.speed + "km/h";

if (data.weather[0].main=="Clouds"){
    WhetherIcon.src = "images/clouds.png"
}
else if(data.weather[0].main=="Rain"){
    WhetherIcon.src = "images/rain.png"

}else if(data.weather[0].main=="Drizzle"){
    WhetherIcon.src = "images/drizzle.png"

}else if(data.weather[0].main=="Mist"){
    WhetherIcon.src = "images/mist.png"

}

document.querySelector(".weather").style.display="block";
document.querySelector(".error").style.display="none";


    }



}

searchBtn.addEventListener("click" ,()=>{

checkWeather(searchBox.value);
})

checkWeather();


