import { createContext, useState } from "react";
//package call..
import { getDataByCityName, getWeather } from '../modules/api'

//Context creation...
const WeatherContext = createContext()

const Context = (props) => {
    const [data, setData] = useState()
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState({condition: false, data: ""});

    function stopLoading() {
        setLoading(false)
    }

    //Getting city details....
    async function getCity(event) {
        try {
            if (event.key === "Enter") {
                console.log("Event happened")
                setLoading(
                    {condition: true, data: `Getting data for ${event.target.value.charAt(0).toUpperCase() + event.target.value.slice(1)}...`}
                )
                const response = await getDataByCityName(event.target.value)
                const dataResponse = await getWeather(response[0].lat, response[0].lon)
                //console.log(dataResponse)
                setData({
                    city: {
                        name: response[0].name,
                        country: response[0].country,
                        state: response[0].state
                    },
                    weather: dataResponse
                })
                setError(false)
                setLoading(false)
                console.log("Loading", loading)
            }
        } catch (error) {
            setError(true)
            setLoading({
                ...loading,
                condition: false
            })
            console.log("Failed to get data", error)
        }
    }

    //Getting geo location of device....
    async function getLocationWeather() {
        try {
            if (navigator.geolocation) {
                setLoading(
                    {condition: true, data: `Getting data for your device location...`}
                )
                console.log("Clicked")
                navigator.geolocation.getCurrentPosition(async (position) => {
                    const { latitude, longitude } = position.coords
                    const response = await getDataByCityName({ latitude, longitude })
                    const dataResponse = await getWeather(latitude, longitude)

                    setData({
                        city: {
                            name: response[0].name,
                            country: response[0].country,
                            state: response[0].state
                        },
                        weather: dataResponse
                    })

                    setLoading(false)

                }, (error) => {
                    console.error('Error getting user location:', error);
                    throw new Error("Your location has blocked by the browser")
                })
            }
            else {
                console.log("GeoLocation is not supported")
            }

        } catch (error) {
            console.log("cant")
        }
    }
    return (
        <WeatherContext.Provider value={{ data, getCity, loading, stopLoading, error, getLocationWeather }}>
            {/* Wrapping its children */}
            {props.children}
        </WeatherContext.Provider>
    )
}

export default Context
export { WeatherContext }


//{setCity, fetchData, city, data}