import React from 'react'
import { PiThermometerHot } from "react-icons/pi";

export default function SmallCard({ title, humidity, dew_point }) {
    return (
        <div id='humid_and_dew_container' className='other_section_card small_cards' >
            <div className='-card-'>
                <div className='card_title'>
                    <PiThermometerHot className='m icon_property' />{title}
                </div>
                <div className='small_card_result'>
                    <p>
                        <span>{humidity}<span className='unit'> %</span> </span>
                    </p>
                    <p>Due point is <b>{dew_point}&deg;c</b> right now</p>
                </div>

            </div>
        </div>
    )
}
