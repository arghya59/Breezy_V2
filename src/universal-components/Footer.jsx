import React from 'react'
import './style.css'

export default function Footer() {
  const date = new Date()
  const year = date.getFullYear()
  return (
    <div className='footer'>
               <div>Copyright © {year} Breezy by Arghya Banerjee All Right Reserved. Powered by <a rel="noreferrer" target="_blank" href='https://openweathermap.org/'>OpenWeather</a></div>
    </div>
  )
}
