import React from 'react'
import { MdLightMode } from "react-icons/md";
import { IoMdMoon } from "react-icons/io";
import { BsFillSunriseFill } from "react-icons/bs";

export default function Sys({ sunrise, sunset }) {

    let sunriseTime = sunrise.split(" ")
    let sunsetTime =  sunset.split(" ")

    console.log(sunriseTime)
    return (
        <div id='sunrise_or_sunset_container' className='other_section_card'>
            <div className='-card-'>
                <div className='card_title'>
                    <BsFillSunriseFill className='m icon_property' /> Sunrise
                </div>

                <div id='sys_section' className='wide_card_result'>
                    <div className='day_time_section'>
                        <MdLightMode className='sys-icons'/>

                        <div className='sys_data'>
                            <p>Sunrise</p>
                            <p>{sunriseTime[0]} <span className='unit'>{sunriseTime[1]}</span> </p>
                        </div>
                    </div>

                    <hr className='vertical_line'/>
                   
                    <div className='day_time_section'>
                        <IoMdMoon style={{color: "#b0bec5"}} className='sys-icons'/>
                        <div className='sys_data'>
                            <p>Sunset</p>
                            <p>{sunsetTime[0]} <span className='unit'>{sunsetTime[1]}</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
