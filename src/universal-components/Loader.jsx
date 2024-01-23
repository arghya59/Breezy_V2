import React from 'react'

export default function Loader({loaderText}) {
  return (
    <div className='loadrer-sec'>
      <div className="loader"></div>
      <p className='Loader_text'>{loaderText}</p>
    </div>
  )
}
