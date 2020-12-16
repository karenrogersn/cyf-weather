import React from 'react';
import './../../App.css';
import '../CurrentWeather/CurrentWeather.css';
import FutureWeather from './../FutureWeather/FutureWeather';

import { weatherFunction } from '../../utils/Utils';

const CurrentWeather = (props) => {
  let weatherInfo = props.weatherData.list;

  if (!weatherInfo) {
    return 'City not found';
  }
  let icon = weatherInfo[0].weather[0].id;

  let weatherIcon = weatherFunction(icon);
  if (weatherInfo) {
    return (
      <section className='general-forecast'>
        <div className='container'>
          {weatherIcon}
          <p className='description'>{weatherInfo[0].weather[0].description}</p>
          <div className='temperature'>
            <p className='current-temp'>
              <strong className='temp-capitalize'>temperature</strong>
              <span className='temp-degrees'>
                {Math.floor(weatherInfo[0].main.temp_min)}&deg;C to{' '}
                {Math.ceil(weatherInfo[0].main.temp_max)}&deg;C
              </span>
            </p>
          </div>
          <div className='percentages'>
            <section className='category'>
              <p className='data'>
                <strong>Humidity</strong>
              </p>
              <p className='data'>{weatherInfo[0].main.humidity}%</p>
            </section>
            <section className='category'>
              <p className='data'>
                <strong>Pressure </strong>
              </p>
              <p className='data'>{weatherInfo[0].main.pressure}</p>
            </section>
          </div>
        </div>
        <FutureWeather weatherData={weatherInfo} />
      </section>
    );
  }
};

//Celcius degrees symbol
/* &deg;C */

export default CurrentWeather;
