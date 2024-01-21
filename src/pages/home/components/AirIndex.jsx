import React, { Fragment, useEffect, useState } from 'react'
import { MdOutlineLensBlur } from "react-icons/md";
import { Circle } from 'rc-progress';
import { airPollution } from '../../../modules/api';
import MiniLoader from '../../../universal-components/MiniLoader';

export default function AirIndex({ lat, lon }) {
    console.log('AirIndex rendered')
    const [airIndex, setAirIndex] = useState()
    useEffect(() => {
        async function getData() {
            const airData = await airPollution(lat, lon)
            setAirIndex(airData)
        }
        getData()
    }, [])

    let index, color, percent, aqi, components
    if (airIndex) {
        aqi = airIndex.list[0].main.aqi
        components = [
            ["Co2", airIndex.list[0].components.co],
            ["o3", airIndex.list[0].components.o3],
            ["So2", airIndex.list[0].components.so2],
            ['No2', airIndex.list[0].components.no2],
            ["pm2.5", airIndex.list[0].components.pm2_5],
            ["pm10", airIndex.list[0].components.pm10]
        ]

        switch (aqi) {
            case 1:
                index = "Good"
                color = "#7bc124"
                percent = 15
                break;
            case 2:
                index = "Fair"
                color = "#c9df00"
                percent = 25
                break;
            case 3:
                index = "Moderate"
                color = "#ffbf04"
                percent = 50
                break;
            case 4:
                index = "Poor"
                color = '#ff7300'
                percent = 75
                break;
            case 5:
                index = `Very Poor`
                color = '#e5231f'
                percent = 100
                break;
            default:
                index = 0
                break;
        }

    }


    // let progress = setInterval(() => {
    //     target++
    //     if (target === percent) {
    //         clearInterval(progress);
    //     }
    //     console.log(target)

    // }, 100)

    return (
        <div id='air_index_container' className='other_section_card'>
            <div className='-card-'>
                <div className='card_title'>
                    <MdOutlineLensBlur className='m icon_property' /> Air Quality
                </div>
                {airIndex ?
                    <Fragment>
                        <div className='aqi_result_container'>
                            <div className='aqi_meter'>
                                <Circle className='air_quality'
                                    percent={percent}
                                    gapDegree={70}
                                    strokeWidth={6}
                                    strokeColor={{
                                        '0%': '#7bc124',
                                        '25%': "#c9df00",
                                        '50%': "#ffbf04",
                                        '75%': '#ff7300',
                                        '100%': '#e5231f',
                                    }}
                                />
                                <div className='aqi_status' style={{ color: color }}>{index}</div>
                            </div>

                            <hr className='vertical_line' style={{ height: "80%" }}></hr>

                            <div className='parameters'>
                                {components.map((value, index) => {
                                    return (
                                        <ul key={{ index }}>
                                            <li>{value[0]}:</li>
                                            <li>
                                                {value[1]}
                                                <span> μg/m3</span>
                                            </li>
                                        </ul>
                                    )
                                })}
                            </div>
                        </div>
                    </Fragment>

                    : <MiniLoader />}
            </div>
        </div>
    )
}
