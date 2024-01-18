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
import AirIndex from './components/AirIndex';

//Icons...
import { GiSpeedometer } from "react-icons/gi";
import { IoMdAlert } from "react-icons/io";
import { MdLightMode } from "react-icons/md";
import { FaCity } from "react-icons/fa";
import { TbUvIndex } from "react-icons/tb";

//Elements...
export default function Home() {
  const weather = useContext(WeatherContext)
  console.log("Home Rerendered")

  // //Data structuring...
  if (weather.data) {
    console.log("true")
    var data = {
      //Current
      cityName: weather.data.city.name,
      country: weather.data.city.country,
      state: weather.data.city.state,
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
      timezone_offset: weather.data.weather.timezone_offset,
      uvi: weather.data.weather.current.uvi,
      wind: { speed: weather.data.weather.daily[0].wind_speed, gust: weather.data.weather.daily[0].wind_gust, deg: weather.data.weather.daily[0].wind_deg },
      //Daily
      daily: weather.data.weather.daily,
      //Hourly
      hourly: weather.data.weather.hourly,
      //All Day...
      all_day: [ [ "Morning", Math.round(weather.data.weather.daily[0].temp.morn)], [ "Evening", Math.round(weather.data.weather.daily[0].temp.eve)] , ["Day", Math.round(weather.data.weather.daily[0].temp.day)] , [ "Night",  Math.round(weather.data.weather.daily[0].temp.night)]]
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
              timeAndDate={dayjs(data.current_date).format("dddd, DD MMM, h:mm A")}
              temp={data.temperature}
              maxTemp={data.max_temp}
              minTemp={data.min_temp}
              feelsLike={data.feels_like}
              status={data.status}
            />

            <SevenDayForecast
              sevendayData={data.daily}
              timezone={data.timezone_offset}
            />
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
              <HourlyData
                hourly={data.hourly}
                timezone={data.timezone_offset}
              />

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

              <div id='pressure_container' className='other_section_card'>
                <div className='-card-'>
                  <div className='card_title'>
                    <GiSpeedometer className='m icon_property' /> Pressure
                  </div>
                  <div className='pressure_data small_card_result'>
                    <p>{data.pressure}<span className='unit'>mb</span> </p>
                    <p>Seems Normal</p>
                  </div>
                </div>
              </div>

              <div id='snow_container' className='other_section_card small_cards'>
                <div className='-card-'>
                  <div className='card_title'>
                    <div className='m icon_property' />Snow
                  </div>
                  <div className='snow_data'>
                    <p className='smallcard_data_text'>22 <span className='unit'>mm</span></p>
                    <p>Due point is right now</p>
                  </div>

                </div>
              </div>

              <Wind
                deg={data.wind.deg}
                speed={data.wind.speed}
                gust={data.wind.gust}
              />

              {/* UV Index */}
              <div id='pressure_container' className='other_section_card'>
                <div className='-card-'>
                  <div className='card_title'>
                    <TbUvIndex className='m icon_property' /> UV Index
                  </div>
                  <div className='pressure_data small_card_result'>
                    <p>{data.uvi}</p>
                    <p>Low</p>
                  </div>
                </div>
              </div>

              {/* Morning to Evening */}
              <div id='morning_evening_temp_container' className='other_section_card'>
                <div className='-card-'>
                  <div className='card_title'>
                    <IoMdAlert className='m icon_property' /> Today's Forecast for City-name
                  </div>

                  <div className='wide_card_result'>

                    {data.all_day.map((item, index) => {
                      return (
                        <div className='day_time_section'>
                          <div>{item[0]}</div>
                          <div>{item[1]}&deg;</div>
                          <img src='' alt='icon' className='m-e-icons' />
                        </div>
                      )
                    })}



                  </div>
                </div>
              </div>

              {/* City Details */}
              <div id='City_details_container' className='other_section_card'>
                <div className='-card-'>
                  <div className='card_title'>
                    <FaCity className='m icon_property' /> City details
                  </div>

                  <div className='small_card_result'>
                    <div className='city_list'>
                      <p><span>City:</span> <span>{data.cityName}</span></p>
                      <p><span>State:</span> <span>{data.state}</span></p>
                      <p><span>Country</span> <span>{data.country}</span> </p>
                      <p><span>Latitude:</span> <span>{data.lat}</span> </p>
                      <p>
                        <span>Longitude</span>
                        <span>{data.lon}</span>
                      </p>

                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className='last_dec'> Breezy gives you 96% of accurate real time weather data</div>
          </div>

        </section>


        : "No data"}
    </>
  )

}
