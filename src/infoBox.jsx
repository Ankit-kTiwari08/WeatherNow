import { useState } from "react"; 
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./infoBox.css";
import Switch from '@mui/material/Switch';
import Link from '@mui/material/Link';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';


export default function InfoBox({info}){
  const [isCelsius, setIsCelsius] = useState(true);

    const INIT_URL="https://plus.unsplash.com/premium_photo-1694475228639-d6f193b42535?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const HOT_URL= "https://images.unsplash.com/photo-1525490829609-d166ddb58678?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL= "https://images.unsplash.com/photo-1603726574752-a85dc808deab?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL= "https://images.unsplash.com/photo-1447584402565-2a5b35a7ea8a?q=80&w=879&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

     const newsLink = `https://news.google.com/search?q=${info.city}+weather`;

      const displayTemp = isCelsius ? info.temp : (info.temp * 9/5 + 32).toFixed(1);
      const unit = isCelsius ? "°C" : "°F";

    return(
        <div className="InfoBox">
            <div className="cardContainer">
            <Card className="custom-card" sx={{ maxWidth: 345 }}>
            <CardMedia
             sx={{ height: 140 }}
             image={
              info.humidity > 80
              ? RAIN_URL
              : info.temp > 25
              ? HOT_URL
              : info.temp < 14
              ? COLD_URL
              : INIT_URL
          }
          title="weather"
        />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {info.city} &nbsp; {displayTemp}{unit}
        {
          info.humidity > 80
            ? <ThunderstormIcon />
            : info.temp > 25
            ? <SunnyIcon />
            : info.temp < 14
            ? <AcUnitIcon />
            : <SunnyIcon />
        }
      </Typography>

        <Typography variant="body2" sx={{ color: "text.secondary" }}>
              <Switch
                checked={!isCelsius}
                onChange={() => setIsCelsius(!isCelsius)}
                size="small"
              />
              Show in {isCelsius ? "°F" : "°C"}
            </Typography>

        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         <i><b> {info.weather}</b></i>. Weather in {info.city} feels like {info.feelsLike}°C.<br/>Min: {info.tempMin}°C | Max: {info.tempMax}°C,<br/> Max: {info.tempMax}°C.<br/> Humidity: {info.humidity}%
         
        </Typography>
         <Typography sx={{ mt: 1 }}>
              <Link
                href={newsLink}
                target="_blank"
                rel="noopener noreferrer"
                underline="hover"
              >
                🔗 Latest Weather News in {info.city}
              </Link>
            </Typography>
       </CardContent>
    </Card>
    </div>
        </div>
    );
}