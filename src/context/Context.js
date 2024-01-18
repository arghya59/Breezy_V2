import {createContext, useState } from "react";
//package call..
import {getDataByCityName , getWeather} from '../modules/api'

//Context creation...
const WeatherContext = createContext()

const Context = (props) => {
    const [city, setCity] = useState()
    const [data, setData] = useState({})

    async function getCity(event){
        if(event.key === "Enter"){
            console.log("Event happened")
            const response = await getDataByCityName(event.target.value)
            const dataResponse = await getWeather(response[0].lat, response[0].lon)
            console.log(dataResponse)
            setData(dataResponse)
            setData({
                cityName : response[0].name,
                country : response[0].country,
                weather: dataResponse
            })
        }
    }

    
        return( 
            <WeatherContext.Provider  value={{ data, getCity }}>
                {/* Wrapping its children */}
                {props.children}
            </WeatherContext.Provider>
        )
}   

export default Context
export {WeatherContext}


//{setCity, fetchData, city, data}