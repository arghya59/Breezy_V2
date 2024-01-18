import React, {useContext} from 'react'
import "./style.css"
import { FaSearchLocation } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export default function Search() {

    // function clear() {
    //     searchTag.current.value = ""
    // }
    return (
        <div id='search'>
            <FaSearchLocation className='search-icons' />
                <input id='Search' placeholder="Search" maxLength={20} type='search' />
            <FaLocationDot className='search-icons' />
        </div>
    )
}
