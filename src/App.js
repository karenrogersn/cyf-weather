import React, { Component } from 'react';
import './App.css';

import CurrentWeather from '../src/components/CurrentWeather/CurrentWeather.jsx';
import FutureWeather from '../src/components/FutureWeather/FutureWeather.jsx';
import Search from '../src/components/Search/Search.jsx';
import FakeWeather from './data/FakeWeather.json';

// require('dotenv').config();

//importing API
import { fetchData } from '../src/services/OpenWeatherApi';

class App extends Component {
  //setting json file data in the state of root component to pass it down as props to futureWeather component
  state = {
    jsonData: FakeWeather,
    weatherInCities: []
  };

  componentDidMount() {
    this.fetchWeatherData();
  }

  fetchWeatherData() {
    fetchData()
      .then((response) => {
        // console.log(response);
        // console.log(response.data);
        this.setState({
          weatherInCities: response.data
        });
      })
      .catch((error) => {
        // console.log(error);
      });
  }

  render() {
    return (
      <div className="app">
        <main className="app__main">
          <Search />
          <CurrentWeather />
          <FutureWeather FakeWeather={this.state.jsonData} />
        </main>
      </div>
    );
  }
}

export default App;
