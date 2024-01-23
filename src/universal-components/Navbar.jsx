import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { RxHamburgerMenu } from "react-icons/rx";
import { FaLocationDot } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
//Components...
import Search from "./Search"
import logo from "../assets/branding/breezy.png"

import { WeatherContext } from '../context/Context'


export default function Navbar() {
    const weather = useContext(WeatherContext)
    console.log("Navbar has loaded")
    return (
        <>
            <nav id="nav">
                <div>
                    <Link className="navitems" to="/"><img className="brand" src={logo} alt="Breezy" /></Link>

                    <div id='search' className="navitems">
                        <IoSearch className='search-icons' />
                        <Search />
                        <FaLocationDot onClick={weather.getLocationWeather} className='search-icons location' />
                    </div>

                    <div id="hamburger" className="navitems">
                        <span>
                            <RxHamburgerMenu className="" />
                        </span>
                    </div>
                </div>

            </nav>
        </>
    )


}