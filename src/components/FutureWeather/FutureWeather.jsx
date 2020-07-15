import React from 'react';
import overcast from '../../img/weather-icons/weather02-512.jpg';
// import FutureWeatherSingle from './../FutureWeatherSingle/FutureWeatherSingle';
import './../../App.css';

const FutureWeather = (props) => {
  //passing data from json file as props
  const jsonData = props.FakeWeather;
  return (
    <div>
      {/* <FutureWeatherSingle jsonData={props.jsonData} /> */}
      <section className="detailed-forecast">
        <div>
          <p>{jsonData.list[5].dt_txt.slice(-8, -3)}</p>
          <img className="next-forecast" src={overcast} alt="clouds icon" />
          <p>{jsonData.list[5].main.temp}</p>
        </div>
        <div>
          <p>{jsonData.list[6].dt_txt.slice(-8, -3)}</p>
          <img className="next-forecast" src={overcast} alt="clouds icon" />
          <p>{jsonData.list[6].main.temp}</p>
        </div>
        <div>
          <p>{jsonData.list[7].dt_txt.slice(-8, -3)}</p>
          <img className="next-forecast" src={overcast} alt="clouds icon" />
          <p>{jsonData.list[7].main.temp}</p>
        </div>
        <div>
          <p>{jsonData.list[8].dt_txt.slice(-8, -3)}</p>
          <img className="next-forecast" src={overcast} alt="clouds icon" />
          <p>{jsonData.list[8].main.temp}</p>
        </div>
        <div>
          <p>{jsonData.list[9].dt_txt.slice(-8, -3)}</p>
          <img className="next-forecast" src={overcast} alt="clouds icon" />
          <p>{jsonData.list[9].main.temp}</p>
        </div>
        <div>
          <p>{jsonData.list[10].dt_txt.slice(-8, -3)}</p>
          <img className="next-forecast" src={overcast} alt="clouds icon" />
          <p>{jsonData.list[10].main.temp}</p>
        </div>
        <div>
          <p>{jsonData.list[11].dt_txt.slice(-8, -3)}</p>
          <img className="next-forecast" src={overcast} alt="clouds icon" />
          <p>{jsonData.list[11].main.temp}</p>
        </div>
      </section>
    </div>
  );
};

export default FutureWeather;
