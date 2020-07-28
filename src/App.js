import React, { Component } from 'react';
import './App.css';

import CurrentWeather from '../src/components/CurrentWeather/CurrentWeather.jsx';
// import FutureWeather from '../src/components/FutureWeather/FutureWeather.jsx';
import Search from '../src/components/Search/Search.jsx';

import Axios from 'axios';

require('dotenv').config();

class App extends Component {
  state = {
    weatherInCities: [],
    query: ''
  };

  componentDidMount() {
    this.fetchWeatherData();
  }

  fetchWeatherData = () => {
    const city = this.state.query;
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

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="app">
        <main className="app__main">
          <Search
            handleSubmit={this.handleSubmit}
            cityQuery={this.state.query}
            click={this.fetchWeatherData}
            handleInputChange={this.updateSearchQuery}
          />
          <CurrentWeather weatherData={this.state.weatherInCities} />
          {/* <FutureWeather
            weatherData={this.state.weatherInCities}
      
          /> */}
        </main>
      </div>
    );
  }
}

export default App;
