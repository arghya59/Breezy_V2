import React from "react"
import { Link } from "react-router-dom"
import { RxHamburgerMenu } from "react-icons/rx";
// import { FaSearchLocation } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
//Components...
import Search from "./Search";
import logo from "../assets/branding/breezy.png"


export default function Navbar() {
    console.log("Navbar has loaded")
    return (
        <>
            <nav id="nav">
                <div>
                    <Link className="navitems" to="/"><img className="brand" src={logo} alt="Breezy"/></Link>

                    <div id='search' className="navitems">
                        <IoSearch className='search-icons' />
                        <Search />
                        <FaLocationDot className='search-icons' />
                    </div>

                    <div className="navitems">
                        <span>
                            <RxHamburgerMenu />
                        </span>
                    </div>
                </div>

            </nav>
        </>
    )


}