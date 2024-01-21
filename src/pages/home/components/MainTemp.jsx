import React from 'react'
import { Link } from 'react-router-dom'
import { BsCalendarDate } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";
import { MdOutlineKeyboardDoubleArrowUp, MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";


export default function MainTemp({ city, country, timeAndDate, temp, status, maxTemp, minTemp, feelsLike, weather_Icon }) {
    return (
        <>

            <div id='details'>
                <div id='prediction-section'>

                    <div id='predictions'>
                        <Link className='active'>Today</Link>
                        <span className='divider'>|</span>
                        <Link>Tomorrow</Link>
                    </div>
                    <div id="line" />
                </div>
                <div className='title'>Now</div>
                <div id='main-result'>
                    <div id='temp'> {(temp || temp === 0) ? <>{temp}&deg;<sup>c</sup></> : "--"}</div>
                    <div className='icon'>
                        <img className='temp_icon' src={ require(`../../../assets/weather_icons/${weather_Icon}.png`) } alt='status' />
                    </div>
                </div>
                <div id='status'>{(status) ? <>{status}</> : "--"}</div>
                <div className='more-info-section'>
                    <div className='low-and-high'>
                        <span>Day: {(maxTemp || maxTemp === 0) ? <> {maxTemp} &deg;c</> : "--"} <MdOutlineKeyboardDoubleArrowUp /></span>
                        <span>|</span>
                        <span> Night: {(minTemp || minTemp === 0) ? <>{minTemp} &deg;c</> : "--"} <MdOutlineKeyboardDoubleArrowDown /></span>
                    </div>
                </div>
                <span id='feels-like'>Feels like: {(feelsLike || feelsLike === 0) ? <> {feelsLike} &deg;<sup>c</sup></> : "--"} </span>
                <hr id='line' />
                <div className='date-and-time'><BsCalendarDate className='m' /> {timeAndDate ? timeAndDate : "--"} </div>
                <div id='place'><GrLocation className='m' /> {(city) ? <> {city}, {country} </> : "--"}</div>




            </div>
        </>
    )
}
