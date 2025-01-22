import React from 'react'
import PropTypes from 'prop-types'
import { format } from 'date-fns';


export default function Weather(props) {

    const currentDate = () => {
        return format(new Date(), 'EEEE, do MMMM yyyy');
    }

    const currentTime = () => {
        return format(new Date(), 'hh:mm:ss a');
    }


    return (
        <>
            {props.weather && props.weather.weather &&
                <div className='weather-box'>
                    <div className='box1-details'>
                        <p className='location'>{props.weather.name}, {props.weather.sys.country}</p>
                        <p className='time'>{currentTime()}</p>
                        <p className='day-date'>{currentDate()}</p>
                        <p className='Temperature'>{props.weather.main.temp}&deg;C</p>
                    </div>
                    <div className='box2-details'>
                        <div className='symbol-details'>
                            <img src={`https://openweathermap.org/img/wn/${props.weather.weather[0].icon}@2x.png`} alt="" className='Symbol' />
                            <p className='symbol-text'>{props.weather.weather[0].description.toUpperCase()}</p>
                        </div>
                        <div className='weather-details'>
                            <div>
                                <p>Temperature</p>
                                <p>{props.weather.main.temp}</p>
                            </div>
                            <div>
                                <p>Humidity</p>
                                <p>{props.weather.main.humidity}</p>
                            </div>
                            <div>
                                <p>Visibility</p>
                                <p>{props.weather.visibility}</p>
                            </div>
                            <div>
                                <p>Wind Speed</p>
                                <p>{props.weather.wind.speed}</p>
                            </div>
                        </div>
                    </div>
                </div>
            }
            {!props.weather.weather &&
                <p>No data found    </p>
            }
        </>
    )
}
