import React, { useContext } from 'react'
import {WeatherContext} from '../../context/Context'

export default function Home() {

  const  a = useContext(WeatherContext)
  console.log(a)
  return (
    <div>
      {a}
    </div>
  )
}
