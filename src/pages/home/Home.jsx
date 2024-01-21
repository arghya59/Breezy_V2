import React, { Fragment, useContext } from 'react'

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
import Pressure from './components/Pressure';
import HourlyData from './components/HourlyData';
import Precipitation from './components/Precipitation';
import Wind from './components/Wind';
import Map from './components/Map';
import Sys from './components/Sys';
import AirIndex from './components/AirIndex';
import Loader from "../../universal-components/Loader"

//Icons...
import { IoMdAlert } from "react-icons/io";
import { FaCity } from "react-icons/fa";
import { TbUvIndex } from "react-icons/tb";
import NoData from '../../universal-components/NoData';
import { GiSunset } from "react-icons/gi";
import { FiSunrise } from "react-icons/fi";
import { MdNightlightRound } from "react-icons/md";
import { BsFillSunFill } from "react-icons/bs";


//Elements...
export default function Home() {
  const weather = useContext(WeatherContext)
  console.log("Home Rerendered")
  console.log(weather)

  //Data structuring...
  if (weather.data) {
    var data = {
      //Current
      cityName: weather.data.city.name,
      country: weather.data.city.country,
      state: weather.data.city.state,
      lat: weather.data.weather.lat,
      lon: weather.data.weather.lon,
      temperature: Math.round(weather.data.weather.current.temp),
      weather_Icon: weather.data.weather.current.weather[0].icon,
      feels_like: Math.round(weather.data.weather.current.feels_like),
      max_temp: Math.round(weather.data.weather.daily[0].temp.max),
      min_temp: Math.round(weather.data.weather.daily[0].temp.min),
      humidity: weather.data.weather.current.humidity,
      pressure: weather.data.weather.current.pressure,
      dew_point: weather.data.weather.current.dew_point,
      visibility: weather.data.weather.current.visibility,
      current_date: getDateAndTime(weather.data.weather.current.dt, weather.data.weather.timezone_offset),
      sunrise: getDateAndTime(weather.data.weather.current.sunrise, weather.data.weather.timezone_offset),
      sunset: getDateAndTime(weather.data.weather.current.sunset, weather.data.weather.timezone_offset),
      status: weather.data.weather.current.weather[0].main,
      rain: weather.data.weather.daily[0].rain,
      pop: weather.data.weather.daily[0].pop,
      timezone_offset: weather.data.weather.timezone_offset,
      uvi: Math.round(weather.data.weather.current.uvi),
      wind: { speed: weather.data.weather.daily[0].wind_speed, gust: weather.data.weather.daily[0].wind_gust, deg: weather.data.weather.daily[0].wind_deg },
      //Daily
      daily: weather.data.weather.daily,
      //Hourly
      hourly: weather.data.weather.hourly,
      //All Day...
      all_day: weather.data.weather.daily[0].temp
    }

    var uvIndex, uvColor, uvAlert
    switch (true) {
      case (data.uvi >= 0 && data.uvi <= 2):
        uvIndex = "Low"
        uvColor = { color: "#7bc124" }
        uvAlert = "You can safely stay outside"
        break;

      case (data.uvi >= 3 && data.uvi <= 5):
        uvIndex = "Moderate"
        uvColor = { color: "#ffbf04" }
        uvAlert = "Seek shade during midday hour!"
        break;

      case (data.uvi >= 6 && data.uvi <= 7):
        uvIndex = "High"
        uvColor = { color: "#ff7300" }
        uvAlert = "Seek shade during midday hour!"
        break;

      case (data.uvi >= 8 && data.uvi <= 10):
        uvIndex = "Extreme"
        uvColor = { color: "#e5231f" }
        uvAlert = "Avoid being outside during midday hours!"
        break;

      default:
        break;
    }

  }

  console.log("Processed Data : ", data)

  return (
    <Fragment>
      {weather.isLoading ? (
        <Loader />
      ) : (
        <Fragment>
          {weather.data && weather.error == false ?
            <section id='Home'>

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
                  weather_Icon={data.weather_Icon}
                />
                <SevenDayForecast
                  sevendayData={data.daily}
                  timezone={data.timezone_offset}
                />
              </div>

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
                    lat= {data.lat}
                    lon={data.lon}
                  />

                  <Map />

                  <Sys
                    sunrise={dayjs(data.sunrise).format("h:mm A")}
                    sunset={dayjs(data.sunset).format("h:mm A")}
                  />

                  <Pressure pressure={data.pressure} />

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
                      <div className='uvi_card'>
                        <p>{data.uvi}</p>
                        <p className='uv_status' style={uvColor}>{uvIndex}</p>
                        <p className='uv_alert'>{uvAlert}</p>
                      </div>
                    </div>
                  </div>

                  {/* Morning to Evening */}
                  <div id='morning_evening_temp_container' className='other_section_card'>
                    <div className='-card-'>
                      <div className='card_title'>
                        <IoMdAlert className='m icon_property' /> Today's Forecast for {data.cityName}
                      </div>

                      <div className='wide_card_result'>

                        <div className='all_day_temp'>
                          <div>Morning</div>
                          <div>{Math.round(data.all_day.morn)}&deg;</div>
                          <FiSunrise className='m-e-icons' />
                        </div>

                        <div className='all_day_temp'>
                          <div>Evening</div>
                          <div>{Math.round(data.all_day.eve)}&deg;</div>
                          <GiSunset className='m-e-icons' />
                        </div>

                        <div className='all_day_temp'>
                          <div>Day</div>
                          <div>{Math.round(data.all_day.day)}&deg;</div>
                          <BsFillSunFill className='m-e-icons' />
                        </div>

                        <div className='all_day_temp'>
                          <div>Night</div>
                          <div>{Math.round(data.all_day.night)}&deg;</div>
                          <MdNightlightRound className='m-e-icons' />
                        </div>
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
                <div className='last_dec'> Breezy gives you accurate and real time weather data</div>
              </div>
            </section>

            : <NoData />}
        </Fragment>
      )}
    </Fragment>
  )

}
