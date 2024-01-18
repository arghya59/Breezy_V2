import React from 'react'
//import sunny from "../../../Assets/weather_icons/01d.png"
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useContext } from 'react';
//import { WeatherDataContext } from "../../../App"
//import getDateAndTime from '../../../module';
import dayjs from 'dayjs';
import { SlCalender } from "react-icons/sl";

export default function SevenDayForecast() {

   // const weather_Data = useContext(WeatherDataContext)
    //const forecastSevenDays = weather_Data.weatherData.daily
    //console.log(forecastSevenDays)


    return (
        <>
            <div className='daily-container'>
                <h3 className='card-heading'><SlCalender className='m'/> 8-Day forecast</h3>
                <hr id='line' />
                {/* {
                    forecastSevenDays.map((value, index) => {

                        const day = dayjs(getDateAndTime(value.dt, weather_Data.weatherData.timezone_offset)).format("dddd")
                        const date = dayjs(getDateAndTime(value.dt, weather_Data.weatherData.timezone_offset)).format("DD MMM")
                        const maxTemp = Math.round(value.temp.max)
                        const minTemp = Math.round(value.temp.min)
                        const status = value.weather[0].main

                        return (
                            <div className='daily-list-container' key={index}>
                                <ul className='daily-list' >
                                    <li className='daily-date'>
                                        <p className='daily-date-day'>{index !== 0 ? day : "Today"}</p>
                                        <p className='daily-date-date'>{date}</p>
                                    </li>
                                    <li className='daily-temp'>

                                        <p>
                                            <IoIosArrowUp className='daily-temp-icons' /> {maxTemp}&deg;
                                        </p>
                                        <p>
                                            <IoIosArrowDown className='daily-temp-icons' /> {minTemp}&deg;
                                        </p>
                                    </li>
                                    <li className='daily-status'>
                                        <span>{status}</span>
                                        <p><img className='daily-status-icon' src="" alt='status' /></p>
                                    </li>
                                </ul>
                            </div>
                        )

                    })
                } */}
            </div>
        </>
    )
}
