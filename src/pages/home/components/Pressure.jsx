import React from 'react'
import { GiSpeedometer } from "react-icons/gi";


/***
 * According to Geo-sciences LibreTexts, high pressure is defined as values greater than 1013.2 mb and low pressure is below 1013.2 mb. 
At sea level, the average barometric pressure is around 1,013 millibars, or 29.92 inches of Mercury. "High pressure" basically means "above-average pressure". 
According to The Weather Prediction, lower pressure will have values less than 1013 mb and significant low pressure will be much lower than this, for example 990 mb. Values around 1013 mb and higher indicate an influence from a high pressure system. 
According to Social Fishing, high pressure is usually: 1018hPa-1030hPa. Low pressure is usually: below 1014hPa. 
Barometric pressure changes affect our bodies in a handful of ways. Some people may be more sensitive to weather changes than others, like people with migraine or arthritis. "If there's a fall in barometric pressure, that means a storm or some kind of weather change is coming". 
 */

export default function Pressure({pressure}) {
    let status

    switch (true) {
      case (pressure > 1013.2):
        status = "Quite higher than usual"
        break;

        case (pressure < 1013.2):
        status = "Quite lower than usual"
        break;

        case (pressure === 1013):
            status = "Average pressure"
            break;

      default:
        break;
    }

    return (
        <div id='pressure_container' className='other_section_card'>
            <div className='-card-'>
                <div className='card_title'>
                    <GiSpeedometer className='m icon_property' /> Pressure
                </div>
                <div className='pressure_data small_card_result'>
                    <p>{pressure}<span className='unit'>mb</span> </p>
                    <p>{status}</p>
                </div>
            </div>
        </div>
    )
}
