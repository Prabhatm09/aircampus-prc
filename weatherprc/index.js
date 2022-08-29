// //  q=${city}&units=metric&appid="
// const weatherApi = {

//      key: "5142a079c21f6cb2df156c3a42bfec63",
//      baseUrl : "https://api.openweathermap.org/data/2.5/weather"
// }

const searchInputBox = document.querySelector("#input-box");
//event listner function on keyup
searchInputBox.addEventListener("keyup" , (e)=>{

    if(e.key == "Enter")
    // console.log(searchInputBox.value);
    getweatherinfo(searchInputBox.value);
});

//get weather info
function getweatherinfo(city){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=5142a079c21f6cb2df156c3a42bfec63`)
    .then(res => {
        return res.json();
    }).then(showeather);
}

//show weather 
function showeather(weather){
    console.log(weather);

    let weatherinfo = document.querySelector(".weather-info");
    weatherinfo.classList.add("active")

    let city = document.querySelector("#city");
    city.innerText = `${weather.name} , ${weather.sys.country}`

    let temperature = document.querySelector("#temp");
    temperature.innerhtml = `${Math.floor(weather.main.temp)}&deg;C`

    let minMax = document.querySelector("#min-max");
    minMax.innerHTML = `${Math.floor(weather.main.temp_min)}&deg;C /  ${Math.ceil(weather.main.temp_max)}&deg;C`

    let weathertype = document.querySelector("#weather");
    weathertype.innerHTML =  `${weather.weather[0].main}`

    

}

