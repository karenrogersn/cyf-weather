import React, { Component } from 'react';
import './App.css';

import CurrentWeather from '../src/components/CurrentWeather/CurrentWeather.jsx';
import FutureWeather from '../src/components/FutureWeather/FutureWeather.jsx';
import Search from '../src/components/Search/Search.jsx';
// import SearchLogic from './components/SearchLogic/SearchLogic.jsx';
// import FakeWeather from './data/FakeWeather.json';

import Axios from 'axios';

require('dotenv').config();

class App extends Component {
  state = {
    // jsonData: FakeWeather,
    weatherInCities: {},
    query: '',
    isLoading: false
  };

  componentDidMount() {
    this.fetchWeatherData();
  }

  fetchWeatherData = () => {
    const city = 'San Francisco';
    const apiKey = process.env.REACT_APP_WEATHER_API;
    Axios.get(
      `http://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=8&units=metric&appid=${apiKey}`
    )
      .then((response) => {
        // console.log(response);
        console.log('response.data: ', response.data);
        this.setState({
          weatherInCities: response.data
        });
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  };

  updateSearchQuery = (event) => {
    console.log('handleinput', event.target.value);
    const value = event.target.value;
    this.setState({
      query: value
    });
  };

  render() {
    // const weatherInCities = ;
    return (
      <div className="app">
        <main className="app__main">
          {/* <Search
            cityQuery={this.state.query}
            click={this.fetchWeatherData}
            handleInputChange={this.updateSearchQuery}
          /> */}
          <CurrentWeather weatherData={this.state.weatherInCities} loading={this.state.isLoading} />
          <FutureWeather /* weatherData={this.state.weatherInCities} */ />
        </main>
      </div>
    );
  }
}

export default App;
