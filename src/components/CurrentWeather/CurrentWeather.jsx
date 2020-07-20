/* eslint-disable no-unused-vars */
import React from 'react';
// import overcast from '../../img/weather-icons/weather02-512.jpg';
import './../../App.css';
// var _ = require('lodash');

const CurrentWeather = (props) => {
  // console.log('theWeather:', weatherInfo);
  let weatherInfo = props.weatherData;
  return (
    <section className="general-forecast">
      <div className="forecast-caption">{props.loading ? 'Loading' : <p>{weatherInfo.cod}</p>}</div>
    </section>

    /* <img className="forecast-img" src={overcast} alt=" clouds icon" />*/
    // <div className="temperature">
    //   <p>
    //     <strong>Temperature </strong>
    //     {weatherInfo[0].main.temp_min} to {weatherInfo[0].main.temp_max}
    //   </p>
    // </div>
    // <div className="percentages">
    //   <ul>
    //     <li>
    //       <strong>Humidity </strong>
    //     </li>
    //     <li>{weatherInfo[0].main.humidity}</li>
    //     <li>
    //       <strong>Pressure </strong>
    //     </li>
    //     <li>{weatherInfo[0].main.pressure}</li>
    //   </ul>
    // </div>
  );
};

export default CurrentWeather;
