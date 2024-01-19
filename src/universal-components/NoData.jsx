import React from 'react'
import logo from "../assets/bgs/no_file.svg"

export default function NoData() {
    return (
        <div id="Home">
            <div id='Msg_for_no_data'>
            <div ><img src={logo} alt="Data illustrations by Storyset"/></div>             
                <h3>Sorry!</h3>
                <p>No data to show please search</p>
            </div>
        </div>
    )
}
