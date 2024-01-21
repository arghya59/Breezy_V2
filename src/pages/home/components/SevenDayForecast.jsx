import React from 'react'
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import dayjs from 'dayjs';
import getDateAndTime from '../../../modules/modules';

export default function SevenDayForecast({ sevendayData, timezone }) {

    return (
        <>
            <div className='daily-container'>
                <h3 className='card-heading'><SlCalender className='m' /> 8-Day forecast</h3>
                <hr id='line' />
                {
                    sevendayData.map((value, index) => {

                        const day = dayjs(getDateAndTime(value.dt, timezone)).format("dddd")
                        const date = dayjs(getDateAndTime(value.dt, timezone)).format("DD MMM")
                        const maxTemp = Math.round(value.temp.max)
                        const minTemp = Math.round(value.temp.min)
                        const status = value.weather[0].main
                        const icon = value.weather[0].icon

                        return (
                            <div className='daily-list-container' key={index}>
                                <ul className='daily-list' >
                                    <li className='daily-date'>
                                        <p className='daily-date-day'>{index !== 0 ? day : "Today"}</p>
                                        <p className='daily-date-date'>{date}</p>
                                    </li>
                                    <li className='daily-status-report'>
                                        <span>{status}</span>
                                    </li>
                                    <li className='daily-status'>

                                        <p><img className='daily-status-icon' src={require(`../../../assets/weather_icons/${icon}.png`)} alt='status' /></p>
                                        <span className='daily-temp'>
                                            <p>
                                                <IoIosArrowUp className='daily-temp-icons' /> 
                                                <span>{maxTemp}&deg;</span>
                                            </p>
                                            <p>
                                                <IoIosArrowDown className='daily-temp-icons' /> 
                                                <span>{minTemp}&deg;</span>
                                            </p>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        )

                    })
                }
            </div>
        </>
    )
}
