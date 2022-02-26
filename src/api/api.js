import axios from "axios"

const instance = axios.create({
    baseURL:'http://api.openweathermap.org/data/2.5/',
    // withCredentials:true,
    // headers: {'appid':'f8e74434dec1483a8e7d3b0f9aa47d34'}
  });

  export const getWeatherData=(location)=>{
    return instance('weather?&units=metric&id=625665&appid=f8e74434dec1483a8e7d3b0f9aa47d34')
     .then(({data})=> ({temp:Math.round(data.main.temp) ,icon:data.weather[0].icon }))
   }