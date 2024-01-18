
/**  
 * 
 
    const Weeks = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
]
*/


const Months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
]


const getDateAndTime = function (unixDate, timezone) {
    // console.log(unixDate, "and " , timezone)
    const dateObj = new Date((unixDate + timezone) * 1000)
    //const weekDayName = Weeks[dateObj.getUTCDay()]
    const monthDayName = Months[dateObj.getUTCMonth()]
    const date = dateObj.getUTCDate()
    const hours = dateObj.getUTCHours()
    const minutes = dateObj.getUTCMinutes()
    // const period = hours >= 12 ? "PM" : "AM" 
    // console.log(time)
    // console.log(`${weekDayName}, ${date} ${monthDayName}, ${hours % 12 || 12}:${minutes} ${period}`)
    return `${dateObj.getUTCFullYear()}-${monthDayName}-${date} ${hours}:${minutes}`
}


export default getDateAndTime
