import React, { useContext } from 'react'
import "./style.css"
import { WeatherContext } from '../context/Context'

export default function Search() {
    console.log("Search has loaded")
    const weather = useContext(WeatherContext)
    
    //Clear the search value
    function clear(e) {
       e.target.value = ""
    }
    return (
        <input id='Search' onClick={clear} onKeyDown={weather.getCity} placeholder="Search" maxLength={20} type='search' />
    )
}
