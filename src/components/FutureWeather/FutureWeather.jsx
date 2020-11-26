import React from 'react';

import './../../App.css';
import '../FutureWeather/FutureWeather.css';
import { weatherFunction } from '../../utils/Utils';

const FutureWeather = (props) => {
  let weatherInfo = props.weatherData;

  if (!weatherInfo) {
    return 'City not found';
  }

  const weatherData = weatherInfo.map((element) => {
    return (
      <ul className='next-forecast' key={element.dt}>
        {/* time */}
        <li className='caption'>{element.dt_txt.slice(-8, -3)}</li>
        {/* icon */}
        <li>{weatherFunction(element.weather[0].id)}</li>
        {/* temperature */}
        <li className='caption'>{Math.round(element.main.temp)}&deg;C</li>
      </ul>
    );
  });

  return <div className='forecast-container'>{weatherData}</div>;
};

export default FutureWeather;
