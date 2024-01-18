import React from 'react'
import { MdOutlineShareLocation } from "react-icons/md";

export default function PopUp() {
    return (
        <>
            <section className='pop-up-overlay'>
                <div className='popupbox'>
                    <div> <MdOutlineShareLocation className='location-icon-of-popup' /></div>
                    <div className='pop-up-msg'>Allow your device location</div>
                    <p className='pop-up-sub-msg'>Dummy dymmy dummy</p>
                    <div className='not-now'><span>Not now</span></div>
                </div>
            </section>
        </>
    )
}
