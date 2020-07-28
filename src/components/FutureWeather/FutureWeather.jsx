import React from 'react';

import './../../App.css';
// import WeatherChunks from './../WeatherChunks/WeatherChunks';

const FutureWeather = (props) => {
  let weatherInfo = props.weatherData;
  // let weatherIcon = props.weatherIcon;

  if (!weatherInfo) {
    return 'No info to display';
  }

  const weatherData = weatherInfo.map((element) => {
    return (
      <div className="next-forecast" key={element.dt}>
        <li>{element.dt_txt.slice(-8, -3)}</li>
        <li>{element.weather[0].id}</li>
        <li>{Math.round(element.main.temp)}&#8451;</li>
      </div>
    );
  });

  return (
    <div>
      <section className="detailed-forecast">
        <p>Future Weather Here</p>
        <ul className="detailed-forecast">{weatherData}</ul>
      </section>
    </div>
  );
};

export default FutureWeather;

/* <div>
          <p>{weatherInfo.list[5].dt_txt.slice(-8, -3)}</p>
          <img className="next-forecast" src={overcast} alt="clouds icon" />
          <p>{weatherInfo.list[5].main.temp}</p>
        </div>
        <div>
          <p>{weatherInfo.list[6].dt_txt.slice(-8, -3)}</p>
          <img className="next-forecast" src={overcast} alt="clouds icon" />
          <p>{weatherInfo.list[6].main.temp}</p>
        </div>
        <div>
          <p>{weatherInfo.list[7].dt_txt.slice(-8, -3)}</p>
          <img className="next-forecast" src={overcast} alt="clouds icon" />
          <p>{weatherInfo.list[7].main.temp}</p>
        </div>
        <div>
          <p>{weatherInfo.list[8].dt_txt.slice(-8, -3)}</p>
          <img className="next-forecast" src={overcast} alt="clouds icon" />
          <p>{weatherInfo.list[8].main.temp}</p>
        </div>
        <div>
          <p>{weatherInfo.list[9].dt_txt.slice(-8, -3)}</p>
          <img className="next-forecast" src={overcast} alt="clouds icon" />
          <p>{weatherInfo.list[9].main.temp}</p>
        </div>
        <div>
          <p>{weatherInfo.list[10].dt_txt.slice(-8, -3)}</p>
          <img className="next-forecast" src={overcast} alt="clouds icon" />
          <p>{weatherInfo.list[10].main.temp}</p>
        </div>
        <div>
          <p>{weatherInfo.list[11].dt_txt.slice(-8, -3)}</p>
          <img className="next-forecast" src={overcast} alt="clouds icon" />
          <p>{weatherInfo.list[11].main.temp}</p>
        </div> */
