import { useState } from 'react'
//import './App.css'
import WeatherApp from './WeatherApp';
function App() {
    let handleClick = () => {
      console.log("Button Clicked");
    }
  return (
    <>
      {/* <SearchBox />
      <InfoBox /> */}
      <WeatherApp/>
    </>
  )
}

export default App
