import axios from "axios";

// const url = `${process.env.REACT_APP_API_BASE}?lat=${lat}&lon=${long}&exclude=minutely&units=${tempUnit}&appid=${process.env.REACT_APP_API_KEY}`

const getDataByCityName = (city) => {
    const geoURL = `${process.env.REACT_APP_GEOCODING_API_BASE}/geo/1.0/direct?q=${city}&limit=5&appid=${process.env.REACT_APP_API_KEY}`

    let cityData

    axios.get(geoURL).then(function (response) {
            console.log("Getting City", response)
            cityData = response
        });
    

} 

export {getDataByCityName}