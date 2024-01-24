import React from 'react'
import { MdVisibility } from "react-icons/md";

export default function Visibility({ visibility }) {
  return (
    <div id='visibility_container' className='other_section_card small_cards'>
            <div className='-card-'>
                <div className='card_title'>
                    <MdVisibility className='m icon_property' />Visibility
                </div>
                <div className='small_card_result'>
                    <p>{Math.round(visibility / 1000)} <span className='unit'>km</span></p>
                    <p>{(visibility / 1000) >= 5 ? "Perfectly clear view" : "Barely visible "}</p>
                </div>

            </div>
        </div>
  )
}
