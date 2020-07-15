import React from 'react';
import overcast from '../../img/weather-icons/weather02-512.jpg';
import './../../App.css';

//importing data from json file
import FakeWeatherData from '../../data/FakeWeather.json';

const CurrentWeather = (props) => {
  const theWeather = FakeWeatherData.list;
  console.log('theWeather:', theWeather);
  return (
    <div>
      <section className="general-forecast">
        <div className="forecast-caption">
          <img className="forecast-img" src={overcast} alt=" clouds icon" />
          <p>{theWeather[0].weather[0].description}</p>
          <div className="temperature">
            <p>
              <strong>Temperature </strong>
              {theWeather[0].main.temp_min} to {theWeather[0].main.temp_max}
            </p>
          </div>
          <div className="percentages">
            <ul>
              <li>
                <strong>Humidity </strong>
              </li>
              <li>{theWeather[0].main.humidity}</li>
              <li>
                <strong>Pressure </strong>
              </li>
              <li>{theWeather[0].main.pressure}</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CurrentWeather;
