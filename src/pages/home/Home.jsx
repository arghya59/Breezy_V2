import React, { useContext } from 'react'

//Context
import { WeatherContext } from '../../context/Context'

//Modules
import dayjs from 'dayjs';
import getDateAndTime from '../../modules/modules';

//Css
import './style.css'

//Component call
import MainTemp from './components/MainTemp';
import SevenDayForecast from './components/SevenDayForecast';
import SmallCard from './components/SmallCard';
import Visibility from './components/Visibility';
//import Footer from './components/Footer';
import HourlyData from './components/HourlyData';
import Precipitation from './components/Precipitation';
import Wind from './components/Wind';
import Map from './components/Map';
import Sys from './components/Sys';
import Pressure from './components/Pressure';
import Snow from './components/Snow';
import AirIndex from './components/AirIndex';
//import CityDetails from './components/CityDetails';
//import Alert from './components/Alert';
//import MorToEve from './components/MorToEve';
//import Uvi from './components/Uvi';


let cloud = "Data"

//Elements...
export default function Home() {
  const weather = useContext(WeatherContext)
  console.log("Home Rerendered")
  console.log(weather.data.weather.lat)

  // //Data structuring...
  if (weather.data) {
    var data = {
      cityName: weather.data.cityName,
      country: weather.data.country,
      lat: weather.data.weather.lat,
      lon: weather.data.weather.lon,
      temperature: Math.round(weather.data.weather.current.temp),
      feels_like: Math.round(weather.data.weather.current.feels_like),
      max_temp: Math.round(weather.data.weather.daily[0].temp.max),
      min_temp: Math.round(weather.data.weather.daily[0].temp.min),
      humidity: weather.data.weather.current.humidity,
      pressure: weather.data.weather.current.pressure,
      dew_point: weather.data.weather.current.dew_point,
      visibility: weather.data.weather.current.visibility,
      current_date: getDateAndTime(weather.data.weather.current.dt, weather.data.weather.timezone_offset),
      sunrise: weather.data.weather.current.sunrise,
      sunset: weather.data.weather.current.sunset,
      status: weather.data.weather.current.weather[0].main,
      rain: weather.data.weather.daily[0].rain,
      pop: weather.data.weather.daily[0].pop,
      wind: { speed: weather.data.weather.daily[0].wind_speed, gust: weather.data.weather.daily[0].wind_gust, deg: weather.data.weather.daily[0].wind_deg }
    }

  }
  console.log("Processed Data : ", data)

  return (
    <>
      {weather.data ?

        <section id='Home'>

          {/*------------------
              Main Section 
          --------------------*/}


          <div className='main-result'>
            <MainTemp
              city={data.cityName}
              country={data.country}
              timeAndDate= {dayjs(data.current_date).format("dddd, DD MMM, h:mm A")}
              temp={data.temperature}
              maxTemp={data.max_temp}
              minTemp={data.min_temp}
              feelsLike={data.feels_like}
              status={data.status}
            />

            <SevenDayForecast />
          </div>

          {/*------------------
              Sub Section 
              --------------------*/}
              
          <div className='side_section'>
            <div id='other_section_container'>
              <SmallCard
                title="Humidity"
                humidity={data.humidity}
                dew_point={Math.round(data.dew_point)}
              />
              <Visibility
                visibility={data.visibility}
              />
              <HourlyData />
              <Precipitation
                rain={data.rain}
                pop={data.pop}
              />
              <AirIndex
                lat={data.lat}
                lon={data.lon}
              />
              <Map />
              <Sys />
              {/* <Pressure /> */}
              {/* <Snow /> */}
              <Wind
                deg={data.wind.deg}
                speed={data.wind.speed}
                gust={data.wind.gust}
              />
              {/* <Uvi /> */}
              {/* <MorToEve /> */}
              {/* <CityDetails /> */}
            </div>
            {/* <Footer /> */}
          </div>

        </section>


        : "No data"}
    </>
  )

}
