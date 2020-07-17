import React, { Component } from 'react';
import Search from './../Search/Search';
import CurrentWeather from '../CurrentWeather/CurrentWeather';
import FutureWeather from '../FutureWeather/FutureWeather';
import axios from 'axios';

require('dotenv').config();
//importing API
const apiKey = process.env.REACT_APP_WEATHER_API;
// import { fetchData } from '../../../src/services/OpenWeatherApi';

const instance = axios.create({
  baseURL: 'http://api.openweathermap.org'
});

class SearchLogic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherInCities: [],
      query: ''
    };
  }
  //making a call to the API
  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    const city = this.state.query;
    return new Promise((resolve, reject) => {
      instance
        .get(`/data/2.5/forecast?q=${city}&cnt=8&units=metric&appid=${apiKey}`)
        .then((response) => {
          this.setState({
            weatherInCities: response.data
          });
          console.log('response.data: ', response.data);
          // const weatherInfo = response.data;
          resolve(response);
        })
        .catch((error) => reject(error));
    });
  };

  //   fetchWeatherData() {
  //     const name = this.state.query;
  //     fetchData(name)
  //       .then((response) => {
  //         // console.log(response);
  //         // console.log(response.data);
  //         this.setState({
  //           weatherInCities: response.data
  //         });
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   }

  //updating the query as the user searches
  updateSearchQuery = (event) => {
    console.log(event.target.value);
    const value = event.target.value;
    this.setState({
      query: value
    });
  };

  render() {
    // console.log(this.state.query);
    // const cityFilter = this.state.weatherInCities.filter((city) => {
    //   return city.name.includes(this.state.query);
    // });
    return (
      <div>
        <Search handleInputChange={this.updateSearchQuery} query={this.state.query} />
        {/* {cityFilter.map((city) => {
          return <CurrentWeather key={city.id} city={city} />;
          // <FutureWeather key={city.id} city={city} />
        })} */}
      </div>
    );
  }
}

export default SearchLogic;
