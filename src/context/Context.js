import {createContext, useState } from "react";
//package call..
import {getDataByCityName , getWeather} from '../modules/api'

//Context creation...
const WeatherContext = createContext()

const Context = (props) => {
    const [data, setData] = useState()
    const [error, setError] = useState(false)
    async function getCity(event){
        try {
            if(event.key === "Enter"){
                console.log("Event happened")
                const response = await getDataByCityName(event.target.value)
                const dataResponse = await getWeather(response[0].lat, response[0].lon)
                setError(false)
                console.log(dataResponse)
                setData({
                    city: {
                        name : response[0].name,
                        country : response[0].country,
                        state: response[0].state
                    } ,
                    weather: dataResponse
                })
            }
        } catch (error) {
            console.log("Failed to get data")
           setError(true)
        }
    }
    
        return( 
            <WeatherContext.Provider  value={{ data, getCity, error }}>
                {/* Wrapping its children */}
                {props.children}
            </WeatherContext.Provider>
        )
}   

export default Context
export {WeatherContext}


//{setCity, fetchData, city, data}