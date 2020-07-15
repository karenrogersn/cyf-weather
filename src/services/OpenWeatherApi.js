import axios from 'axios';

//importing API KEY
require('dotenv').config();
console.log(process.env);
// console.log(require('dotenv').config());
const apiKey = process.env.REACT_APP_WEATHER_API;

const instance = axios.create({
  baseURL: 'http://api.openweathermap.org'
});

const city = 'London';

const fetchData = () => {
  return new Promise((resolve, reject) => {
    instance
      .get(`/data/2.5/forecast?q=${city}&cnt=8&units=metric&appid=${apiKey}`)
      .then((response) => {
        console.log(response.data);
        // const weatherInfo = response.data;
        resolve(response);
      })
      .catch((error) => reject(error));
  });
};

export { fetchData };
