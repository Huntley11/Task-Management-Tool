import React, { useState } from "react";
import axios from 'axios'

import './cssFiles/Weather.css'

function Weather() {
    const key = `54c9698cb1a54db39a323634232705`
    const [data, setData] = useState({})
    const [location, setLocation] = useState('')

    const url = `http://api.weatherapi.com/v1/current.json?key=${key}&q=${location}&aqi=no`

    const searchLocation = (event) => {
        if (event.key === 'Enter') {
            axios.get(url).then((response) => {
                setData(response.data)
                console.log(response.data)
            })
            setLocation('')
        }

    }

    return (
        <div className="weather-api">
            <div className="search">
                <input
                    value={location}
                    onChange={event => setLocation(event.target.value)}
                    onKeyPress={searchLocation}
                    placeholder="Home Location"
                    type="text"
                />
            </div>
            <div className="weather-container">
                <div className="top">
                    <div className="location">
                        {data.location ? <p>{data.location.name} </p> : null}
                    </div>
                    <div className="temp">
                        {data.current ? <h3 className="bold">{data.current.temp_f}°F</h3> : null}
                    </div>
                    <div className="description">
                        {data.current ? <p>{data.current.condition.text}</p> : null}
                    </div>
                </div>

                <div className="bottom">
                    <div className="feels">
                        {data.current ? <p className="bold">{data.current.feelslike_f}°F</p> : null}
                        {data.current ? <p>Feels Like</p> : null}
                    </div>
                    <div className="humidity">

                        {data.current ? <p className="bold">{data.current.humidity} %</p> : null}
                        {data.current ? <p>Humidity</p> : null}
                        
                    </div>
                    <div className="wind">

                        {data.current ? <p className="bold">{data.current.wind_mph} MPH</p> : null}
                        {data.current ? <p>Wind Speed</p> : null}
                        
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Weather