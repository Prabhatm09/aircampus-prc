const wrapper = document.querySelector(".wrapper"),
inputPart = wrapper.querySelector(".input-part"),
infoText = inputPart.querySelector(".info-box "),
inputField = inputPart.querySelector('input');
locationBtn = inputPart.querySelector("button");

wIcon = document.querySelector(".weather-part img")

let api;

inputField.addEventListener("keyup" , e =>{
    if(e.key == 'Enter' && inputField.value  != ""){
        requestApi(inputField.value);
    }
});

locationBtn.addEventListener("click" , ()=>{
    
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(onSuccess , onError)
    }else{
        alert("Your browser not support geolocation api")
    }
})

function onSuccess(position){
    const{lat , lon} = position.coords;
    api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=
    `
}

function onError(error){
    infoText.innerText = error.message;
    infoText.classList.add("error")
}

function requestApi(city){
 api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=5142a079c21f6cb2df156c3a42bfec63`
    fetchData();
}

function fetchData(){
    infoText.innerText = "Getting weather details...";
    infoText.classList.add('pending')
    fetch(api).then(res => res.json()).then(result => weatherDetails(result));

}
function weatherDetails(info){
    if(info.cod == "404"){
        infoText.classList.replace("pending" , "error")
        infoText.innerText = `${inputField.value} isnt valid city`
    }else{

        const city = info.name;
        const country = info.sys.country;
        const {description  , id} = info.weather[0]
        const {feels_like  , humidity , temp} = info.main;


        if(id == 800){
            wIcon.src = "./animated/day.svg";
        }else if(id >= 200 && id <= 232){
            wIcon.src = "./animated/thunder.svg";
        }else if(id >= 600 && id <= 622){
            wIcon.src = "./animated/snowy-1.svg";
        }else if(id >= 701 && id <= 781){
            wIcon.src = "./animated/cloudy.svg";
        }else if(id >= 801 && id <= 804){
            wIcon.src = "./animated/weather.svg";
        }else if((id >= 300 && id <= 321 ) || (id >= 500 && id <= 531)) {
            wIcon.src = "./animated/rainy-1.svg";
        }

wrapper.querySelector(".temp .numb").innerText = Math.floor(temp);
wrapper.querySelector(".weather").innerText = description;
wrapper.querySelector(".location span").innerText = `${city} , ${country}`;
wrapper.querySelector(".temp .numb-2").innerText = Math.floor(feels_like);
wrapper.querySelector(".humidty span").innerText = humidity;

        infoText.classList.remove("pending" , "error")
        wrapper.classList.add("active")
    }
 console.log(info);   
}