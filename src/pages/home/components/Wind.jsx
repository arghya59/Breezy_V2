import React from 'react'
import { FaWind } from "react-icons/fa";
import { CgArrowLongDownL } from "react-icons/cg";

export default function Wind({ deg, gust, speed }) {

    let direction

    switch (true) {
        case deg === 0:
            direction = "N"
            break;
        case deg > 0 && deg < 90:
            direction = "NE"
            break;
        case deg === 90:
            direction = "E"
            break;
        case deg > 90 && deg < 180:
            direction = "SE"
            break;
        case deg === 180:
            direction = "S"
            break;
        case deg > 180 && deg < 270:
            direction = "SW"
            break;
        case deg === 270:
            direction = "W"
            break;
        case deg > 270 && deg < 360:
            direction = "NW"
            break;
        case deg === 360:
            direction = "N"
    }

    return (
        <div id='windDetails_container' className='other_section_card'>
            <div className='-card-'>
                <div className='card_title'>
                    <FaWind className='m icon_property' /> Wind
                </div>

                <div className='wide_card_result'>

                    <div className='wind_data'>
                        <div className='wind'>
                            {speed ? Math.round(speed * 3.6) : "--"} <div className='wind_unit'><p >k/h</p> <p>Wind</p></div>
                        </div>

                        {
                            gust ?
                                <>
                                    <hr id='line' />
                                    <div className='wind'>
                                        {gust ? Math.round(gust * 3.6) : "--"} <div className='wind_unit'><p>k/h</p> <p>Gusts</p></div>
                                    </div>
                                </>

                                :

                                null

                        }
                    </div>
                    <hr id='wind_section_divider' className='vertical_line'></hr>
                    <div className='wind_meter_sec'>
                        <div className='wind_deg'>
                            <CgArrowLongDownL className='wind_arrow' style={{ "--i": `${deg}deg` }} />
                            <p className='direction'>{direction}</p>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}
