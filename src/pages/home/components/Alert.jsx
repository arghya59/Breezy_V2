import React from 'react'
import { GoAlertFill } from "react-icons/go";
import dayjs from 'dayjs';
import getDateAndTime from '../../../modules/modules';

export default function Alert({ alert, timezone }) {

    const sender = alert[0].sender_name
    const start = getDateAndTime(alert[0].start, timezone)

    return (
        <div className='alert'>
            <div id='alertTitle' className='card_title'>
                <GoAlertFill className='m alertIcon' />
                <div>
                    <p>Severe Weather condition</p>
                    <p>by {sender}</p>
                </div>
            </div>
            <hr id='line' className='alert_divider'></hr>

            <div className='content'>
                <p className='warning'> Warning :
                    {alert.map((val, i) => {
                        return (
                            <span key={i + "Warning"}> <GoAlertFill className='small_alert_logo'/> {val.event}</span>
                        )
                    })}
                </p>
                <p>{alert[0].description}</p>
                <p>These condition started at {dayjs(start).format("h:mm A")} on {dayjs(start).format("dddd DD MMMM")}.</p>
            </div>
        </div>
    )
}
