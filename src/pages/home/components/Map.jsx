import React from 'react'
import { FaMap } from "react-icons/fa";
import { MapContainer, TileLayer } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
const urlApi = `https://tile.openweathermap.org/map/{layer}/{z}/{x}/{y}.png?appid=308b7589a9fe549f5268a8ea57fc5465`

export default function Map({lat, lon}) {
    const coords = [lat , lon]
    return (
        <div id='map_container' className='other_section_card'>
            <div className='-card-'>
                <div className='card_title map_title'>
                    <FaMap className='m icon_property' /> Map
                </div>

                <div className='Map'>
                    <MapContainer center={coords} zoom={13} scrollWheelZoom={false} className='map_styler' >
                        <TileLayer layer={"precipitation_new"}
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                    </MapContainer>
                </div>
            </div>
        </div>
    )
}
