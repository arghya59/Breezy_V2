import React from 'react'
import { FaWind } from "react-icons/fa";
import { TbArrowMoveRight } from "react-icons/tb";

export default function Wind({ deg, gust, speed }) {
    return (
        <div id='windDetails_container' className='other_section_card'>
            <div className='-card-'>
                <div className='card_title'>
                    <FaWind className='m icon_property' /> Wind
                </div>

                <div className='wide_card_result'>

                    <div className='wind_data'>
                        <div className='wind'>
                            {speed ? Math.round(speed * 3.6) : "--"} <div className='wind_unit'><p >Kph</p> <p>Wind</p></div>
                        </div>

                        {
                            gust ?
                                <>
                                    <hr id='line' />
                                    <div className='wind'>
                                        {gust ? Math.round(gust * 3.6) : "--"} <div className='wind_unit'><p>Kph</p> <p>Gusts</p></div>
                                    </div>
                                </>

                                :

                                ""

                        }
                    </div>
                    <div className='wind_meter_sec'>
                        <div className='wind_deg'>
                            <TbArrowMoveRight className='wind_arrow' style={{ "--i": `${deg}deg` }} />
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}
