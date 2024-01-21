import {createContext, useState } from "react";
//package call..
import {getDataByCityName , getWeather} from '../modules/api'

//Context creation...
const WeatherContext = createContext()

const Context = (props) => {
    const [data, setData] = useState()
    const [error, setError] = useState(false)
    const [isLoading, setIsLoading] = useState(false);

    function stopLoading(){
        setIsLoading(false)
    }

    async function getCity(event){
        try {
            if(event.key === "Enter"){
                console.log("Event happened")
                setIsLoading(true)
                const response = await getDataByCityName(event.target.value)
                const dataResponse = await getWeather(response[0].lat, response[0].lon)
                //console.log(dataResponse)
                setData({
                    city: {
                        name : response[0].name,
                        country : response[0].country,
                        state: response[0].state
                    } ,
                    weather: dataResponse
                })
                setError(false)
                setIsLoading(false)
            }
        } catch (error) {
            setError(true)
            setIsLoading(false)
            console.log("Failed to get data")
        }
    }
        return( 
            <WeatherContext.Provider  value={{ data, getCity, isLoading, stopLoading, error }}>
                {/* Wrapping its children */}
                {props.children}
            </WeatherContext.Provider>
        )
}   

export default Context
export {WeatherContext}


//{setCity, fetchData, city, data}