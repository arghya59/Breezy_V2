import axios from "axios"

//Get data of geoLocation
export const getDataByCityName = async (city) => {
    console.log(typeof(city))
    if(typeof(city) === "string"){
        console.log("ENV: ", process.env.REACT_APP_GEOCODING_API_BASE, process.env.REACT_APP_API_KEY)
        const geoURL = `${process.env.REACT_APP_GEOCODING_API_BASE}/geo/1.0/direct?q=${city}&limit=5&appid=${process.env.REACT_APP_API_KEY}`
        const cityDetails = await fetch(geoURL)
        return await cityDetails.json()
    }
    else if(typeof(city) == "object"){
        console.log("ENV: ", process.env.REACT_APP_GEOCODING_API_BASE, process.env.REACT_APP_API_KEY)
        const geoURL = `${process.env.REACT_APP_GEOCODING_API_BASE}/geo/1.0/reverse?lat=${city.latitude}&lon=${city.longitude}&limit=5&appid=${process.env.REACT_APP_API_KEY}`
        const cityDetails = await fetch(geoURL)
        return await cityDetails.json()
    }
}

//Get data of Weather data
export const getWeather = async (lat, long) => {
    console.log("ENV: ", process.env.REACT_APP_GEOCODING_API_BASE, process.env.REACT_APP_API_KEY)
    const tempUnit = "metric"
    const one_call_API = `${process.env.REACT_APP_API_BASE}?lat=${lat}&lon=${long}&exclude=minutely&units=${tempUnit}&appid=${process.env.REACT_APP_API_KEY}`

    const response = await fetch(one_call_API)

    return await response.json()
}

//Get data of Air Pollution
export const airPollution = async (lat, long) => {
    const data = await axios.get(`${process.env.REACT_APP_GEOCODING_API_BASE}/data/2.5/air_pollution?lat=${lat}&lon=${long}&appid=${process.env.REACT_APP_API_KEY}`)
    return data.data
}
