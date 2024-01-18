import React from "react"
import { Link } from "react-router-dom"
import { RxHamburgerMenu } from "react-icons/rx";
import Search from "./Search";


export default function Navbar({search, value}) {
   
    return (
        <>
            <nav id="nav">
                <div>
                    <Link className="navitems" to="/">Breezy</Link>

                    <Search  className="navitems"/>

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