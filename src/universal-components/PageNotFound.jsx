import React from 'react'
import logo from '../assets/bgs/Error_Page_not_Found.svg'
import "./style.css"
import { Link } from 'react-router-dom'

export default function PageNotFound() {
    return (
        <div id='Home'>
            <div id='Msg_for_no_data'>
                <div id='error'>
                    <img src={logo} alt='Image by jcomp on Freepik' />
                </div>
                <h3>Page Not Found</h3>
                <Link to="/" className="Go_Back">Home</Link>
            </div>
        </div>
    )
}
