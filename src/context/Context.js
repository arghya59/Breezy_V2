import {createContext, useState } from "react";
//package call..
import {getDataByCityName} from '../modules/api'

//Context creation...
const WeatherContext = createContext()



export const search = ()=> {
    fetchData()
}

const Context = (props) => {
    const [city, setCity] = useState("London")
    const [data, setData] = useState(null)

    const name = "Arghya"

    function fetchData(){
        const response = getDataByCityName(city)
        setData(response)
    }
        return( 
            <WeatherContext.Provider value={name}>
                {/* Wrapping its children */}
                {props.children}
            </WeatherContext.Provider>
        )
}   

export default Context
export {WeatherContext}


//{setCity, fetchData, city, data}