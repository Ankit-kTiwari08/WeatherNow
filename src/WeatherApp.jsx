import SearchBox from "./SearchBox"
import InfoBox from "./infoBox"

import { useState } from "react";

export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo]= useState({
        city:"Delhi",
        feelsLike:32,
        temp:30,
        tempMin:25,
        tempMax:35,
        humidity:60,
        weather:"Clear"
    });
 let updateInfo=(newInfo)=>{
    setWeatherInfo(newInfo);
 }
     return(
        <div style={{textAlign:"center"}}>
          <h2>🌤️ WeatherNow</h2> 
          <SearchBox updateInfo={updateInfo}/>
          <InfoBox info={weatherInfo}/>
        </div>
    );
}