import { React, useContext } from 'react'
import { MdOutlineLensBlur } from "react-icons/md";
import { Circle } from 'rc-progress';
//Context
//import { WeatherDataContext } from "../../../App"

export default function AirIndex() {
    // const air_data = useContext(WeatherDataContext)
    // const aqi = air_data.airQuality.list[0].main.aqi
    // const components = [
    //     [[air_data.airQuality.list[0].components.co], ["Co"]],
    //     [[air_data.airQuality.list[0].components.so2], ['So2']],
    //     [[air_data.airQuality.list[0].components.o3], ["O3"]],
    //     [[air_data.airQuality.list[0].components.no2], ["No2"]],
    //     [[air_data.airQuality.list[0].components.pm10], ["PM10"]],
    //     [[air_data.airQuality.list[0].components.pm2_5], ["PM2.5"]],
    // ]

    // //AQI Index...
    // let index, color, percent


    // // let progress = setInterval(() => {
    // //     target++
    // //     if (target === percent) {
    // //         clearInterval(progress);
    // //     }
    // //     console.log(target)
        
    // // }, 100)


    // switch (aqi) {
    //     case 1:
    //         index = "Good"
    //         color = "#7bc124"
    //         percent = 15
    //         break;
    //     case 2:
    //         index = "Fair"
    //         color = "#c9df00"
    //         percent = 25
    //         break;
    //     case 3:
    //         index = "Moderate"
    //         color = "#ffbf04"
    //         percent = 50
    //         break;
    //     case 4:
    //         index = "Poor"
    //         color = '#ff7300'
    //         percent = 75
    //         break;
    //     case 5:
    //         index = `Very Poor`
    //         color = '#e5231f'
    //         percent = 100
    //         break;
    //     default:
    //         index = 0
    //         break;
    // }

    return (
        <div id='air_index_container' className='other_section_card'>
            <div className='-card-'>
                <div className='card_title'>
                    <MdOutlineLensBlur className='m icon_property' /> Air Quality
                </div>
                {/* <div className='aqi_result_container'>
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
                                    <li>{value[1]}:</li>
                                    <li>
                                        {value[0]}
                                        <span> μg/m3</span>
                                    </li>
                                </ul>
                            )
                        })}
                    </div>
                </div> */}
            </div>
        </div>
    )
}
