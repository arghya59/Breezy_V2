import React from 'react'
import './style.css'

export default function Footer() {
  const date = new Date()
  const year = date.getFullYear()
  const name = process.env.REACT_APP_NAME;
  const key = process.env.REACT_APP_API_KEY
  return (
    <div className='footer'>
               <div>Copyright © {year} Breezy by {key} All Right Reserved. Powered by <a rel="noreferrer" target="_blank" href='https://openweathermap.org/'>OpenWeather</a></div>
    </div>
  )
}
