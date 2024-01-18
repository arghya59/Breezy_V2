import React from 'react'
import icon from "../../../assets/weather_icons/02n.png"
import getDateAndTime from '../../../modules/modules';
import dayjs from 'dayjs';

export default function HourlyData({hourly, timezone}) {
    let hourlyData = []
    for( let i=0 ; i<25; i++){
        hourlyData.push(hourly[i])
    }

    return (
        <div id='hourly_forecast' className='other_section_card'>
            <div className='hourly_data_title'>Next 24 hours</div>
            <div className='hours_container'>
                {hourlyData.map((value, index) => {
                    // eslint-disable-next-line
                        return (
                        <div className='hour_card' key={index}>
                            <p>
                                {(index===0 )? "Now" : dayjs(getDateAndTime(value.dt, timezone)).format("h A")}
                            </p>
                            <img className='hourly_icon' src={icon} alt='' />
                            <p>
                                {Math.round(value.temp)}&deg;
                            </p>
                        </div>
                    )
                
                })}


            </div>
        </div>
    )
}
