import React from "react"
import { Link } from "react-router-dom"
import { RxHamburgerMenu } from "react-icons/rx";
import { FaSearchLocation } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
//Components...
import Search from "./Search";


export default function Navbar() {
    console.log("Navbar has loaded")
    return (
        <>
            <nav id="nav">
                <div>
                    <Link className="navitems" to="/">Breezy</Link>

                    <div id='search' className="navitems">
                        <FaSearchLocation className='search-icons' />
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