import React from 'react';
import './../../App.css';
import FutureWeather from './../FutureWeather/FutureWeather';

import clear from './../../img/weather-icons/clear.svg';
import drizzle from './../../img/weather-icons/drizzle.svg';
import fog from './../../img/weather-icons/fog.svg';
import mcloudy from './../../img/weather-icons/mostlycloudy.svg';
import pcloudy from './../../img/weather-icons/partlycloudy.svg';
import rain from './../../img/weather-icons/rain.svg';
import snow from './../../img/weather-icons/snow.svg';
import storm from './../../img/weather-icons/storm.svg';

const CurrentWeather = (props) => {
  let weatherInfo = props.weatherData.list;

  if (!weatherInfo) {
    return 'No info to display';
  }

  let id = props.weatherData.list[0].weather[0].id;

  function renderSwitch() {
    switch (true) {
      case id < 300:
        id = <img className="forecast-img" src={storm} alt="storm icon" />;
        break;
      case id >= 300 && id < 500:
        id = <img className="forecast-img" src={drizzle} alt="drizzle icon" />;
        break;
      case id >= 500 && id < 600:
        id = <img className="forecast-img" src={rain} alt="rain icon" />;
        break;
      case id >= 600 && id < 700:
        id = <img className="forecast-img" src={snow} alt="snow icon" />;
        break;
      case id >= 700 && id < 800:
        id = <img className="forecast-img" src={fog} alt="fog icon" />;
        break;
      case id === 800:
        id = <img className="forecast-img" src={clear} alt="clear icon" />;
        break;
      case id === 801:
        id = <img className="forecast-img" src={pcloudy} alt="particularly cloudy icon" />;
        break;
      case id > 800 && id < 806:
        id = <img className="forecast-img" src={mcloudy} alt="mostly cloudy icon" />;
        break;
      default:
        id = 'missing id';
    }
    return id;
  }

  return (
    <section className="general-forecast">
      <div className="forecast-caption">
        {/* {props.weatherIcon} */}
        {renderSwitch()}
        <p>{weatherInfo[0].weather[0].description}</p>
        <div className="temperature">
          <p>
            <strong>Temperature </strong>
            {Math.floor(weatherInfo[0].main.temp_min)}&#8451; to{' '}
            {Math.ceil(weatherInfo[0].main.temp_max)}
            &#8451;
          </p>
        </div>
        <div className="percentages">
          <ul>
            <li>
              <strong>Humidity </strong>
            </li>
            <li>{weatherInfo[0].main.humidity}%</li>
            <li>
              <strong>Pressure </strong>
            </li>
            <li>{weatherInfo[0].main.pressure}</li>
          </ul>
        </div>
      </div>
      <FutureWeather weatherData={weatherInfo} weatherIcon={renderSwitch} />
    </section>
  );
};

//Celcius degrees symbol
/* &#8451; */

export default CurrentWeather;
