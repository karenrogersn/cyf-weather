import React, { Component } from 'react';
import './App.css';

import CurrentWeather from '../src/components/CurrentWeather/CurrentWeather.jsx';
import Search from '../src/components/Search/Search.jsx';
import Error from '../src/components/Error/Error.jsx';
// import { backgroundColor } from './utils/Utils';

import axios from 'axios';

require('dotenv').config();

class App extends Component {
  state = {
    weatherInCities: [],
    query: '',
    errorMessage: null
  };

  componentDidMount() {
    this.fetchWeatherData();
  }

  fetchWeatherData = () => {
    const city = this.state.query;
    const apiKey = process.env.REACT_APP_WEATHER_API;
    if (this.state.query) {
      axios
        .get(
          `http://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=8&units=metric&appid=${apiKey}`
        )
        .then((response) => {
          console.log(response);
          console.log('response.data:', response.data);
          this.setState({
            weatherInCities: response.data
          });
        })
        .catch((error) => {
          // console.log(error, 'error');
          // console.log(error.response.data.message);
          this.setState({ errorMessage: 'Please try again...' });
        });
    }
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

  clearFunction = () => {
    this.setState({ errorMessage: null });
  };

  render() {
    return (
      <div className='app'>
        {this.state.errorMessage && (
          <Error onClose={this.clearFunction}>{this.state.errorMessage}</Error>
        )}
        <Search
          handleSubmit={this.handleSubmit}
          cityQuery={this.state.query}
          click={this.fetchWeatherData}
          handleInputChange={this.updateSearchQuery}
        />
        {this.state.weatherInCities && !this.state.errorMessage && (
          <main className='app-main'>
            <CurrentWeather weatherData={this.state.weatherInCities} />
          </main>
        )}
      </div>
    );
  }
}

export default App;
