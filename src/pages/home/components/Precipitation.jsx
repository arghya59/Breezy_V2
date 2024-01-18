import React from 'react'
import { WiHumidity } from "react-icons/wi";

export default function Precipitation({rain, pop}) {
    return (
        

        <div id='Precipitation_container' className='other_section_card small_cards' >
            <div className='-card-'>
                <div className='card_title'>
                    <WiHumidity className='m icon_property' />Precipitation
                </div>
                <div className='small_card_result'>
                <p>{rain ? Math.round(rain) : "0"} <span className='unit'>mm</span></p>
                    <p>Chances of rain: { pop===1 ? "100" : "0" }%</p>
                </div>

            </div>
        </div>
    )
}
