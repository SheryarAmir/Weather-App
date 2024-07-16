import React, { useEffect, useRef, useState } from 'react'
import './Weather.css'
import search_icon from "../assets/search.png"
import clear from "../assets/clear.png"
import cloud from "../assets/cloud.png"
import drizzle from "../assets/drizzle.png"
import humidity from "../assets/humidity.png"
import rain from "../assets/rain.png"
import snow from "../assets/snow.png"
import wind from "../assets/wind.png"
const Weather = () => {

const inputRef=useRef()
    const [weatherData , setWeatherData]=useState(false)

    const allicons={
        "01d": clear,
        "01n":clear,
       "02d":cloud,
       "02n":cloud,
       "03d":cloud,
       "02n":cloud,

       "04d":drizzle,
       "04n":drizzle,

       "09n":rain,
       "09d":rain,

       "10d":rain,
       "10d":rain,

       "10n":snow,
       "13d":snow,

    }
    const search= async (city)=>{

        if(city===""){
            alert("Enter the city Name to knoe the weather update")

            return; 
        }

        try{
const url=`https://api.openweathermap.org/data/2.5/weather?q= ${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`

const response = await fetch(url);
const data= await response.json();

if (!response.ok){

    alert(data.message)
    return;
}
console.log(data);
const icon=allicons[data.weather[0].icon] || clear
setWeatherData({
    humidity: data.main.humidity,
    windSpeed :data.wind.speed,
    temperature :Math.floor(data.main.temp),
    loction:data.name,
    icon :icon
})
        }
        catch(error){
weatherData=(false)
console.log("error to featching data")
        }

    }


    useEffect(()=>{

        search("china")
    },[])
  return (
    <div className='Weather'>

<div className="Search-bar">
    <input ref={inputRef} type="text" placeholder='search' />
    <img src={search_icon}  onClick={()=>search(inputRef.current.value)} alt="" />
</div>

{weatherData ? <>
    <div className="city-degree">
      <img className='weather-icon'  src={weatherData.icon} alt="" />
      <p  className='degree' >{weatherData.temperature}</p>
      <p  className='degree'>{weatherData.loction} *C </p>

      </div>

      <div className="weather-data">
        <div className="col">
            
            <img src={humidity} alt="" />

            <div>
                <p>{weatherData.humidity}</p>
                <span>humidity</span>
            </div>
        </div>

        <div className="col">
            <img src={wind} alt="" />

            <div>
                <p>{weatherData.windSpeed}</p>
                <span>Wind Speed</span>
            </div>
        </div>
      </div>
      </>  :<></>}
    
    

    </div>
  )
}

export default Weather
