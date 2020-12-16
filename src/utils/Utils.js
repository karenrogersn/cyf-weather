import React from 'react';
// import App from '../App';

import clear from '../img/weather-icons/clear.svg';
import drizzle from '../img/weather-icons/drizzle.svg';
import fog from '../img/weather-icons/fog.svg';
import mcloudy from '../img/weather-icons/mostlycloudy.svg';
import pcloudy from '../img/weather-icons/partlycloudy.svg';
import rain from '../img/weather-icons/rain.svg';
import snow from '../img/weather-icons/snow.svg';
import storm from '../img/weather-icons/storm.svg';

//function to display the weather img according to the weather of the city we're visiting

export const weatherFunction = (id) => {
  switch (true) {
    case id < 300:
      id = <img className='forecast-img' src={storm} alt='storm icon' />;
      break;
    case id >= 300 && id < 500:
      id = <img className='forecast-img' src={drizzle} alt='drizzle icon' />;
      break;
    case id >= 500 && id < 600:
      id = <img className='forecast-img' src={rain} alt='rain icon' />;
      break;
    case id >= 600 && id < 700:
      id = <img className='forecast-img' src={snow} alt='snow icon' />;
      break;
    case id >= 700 && id < 800:
      id = <img className='forecast-img' src={fog} alt='fog icon' />;
      break;
    case id === 800:
      id = <img className='forecast-img' src={clear} alt='clear icon' />;
      break;
    case id === 801:
      id = <img className='forecast-img' src={pcloudy} alt='particularly cloudy icon' />;
      break;
    case id > 800 && id < 806:
      id = <img className='forecast-img' src={mcloudy} alt='mostly cloudy icon' />;
      break;
    default:
      id = 'missing id';
  }
  return id;
};

let $background = document.querySelector('.app');
let $searchBtn = document.querySelector('.button');

// let lightBlue = 'rgb(156, 206, 244)'; //color1
// let blue = 'rgb(36, 145, 250)'; //color2
// let grey = 'rgb(162, 182, 202)'; //color3

//function tu change the background color according to the weather of the city we're visiting.

export const backgroundColor = (id, lightBlue, blue, grey) => {
  $searchBtn.addEventListener(
    'click',
    ((e) => {
      switch (true) {
        case id === 800:
        case id > 800 && id < 806:
          $background.style.backgroundColor = blue;
          break;
        case id < 300:
        case id >= 300 && id < 800:
          $background.style.backgroundColor = grey;
          break;
        default:
          $background.style.backgroundColor = lightBlue;
      }
    },
    false)
  );
  return id;
};
