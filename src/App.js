import React, { Component } from 'react';
import './App.css';

import CurrentWeather from './CurrentWeather/CurrentWeather.jsx';
import FutureWeather from './FutureWeather/FutureWeather.jsx';
import Search from './Search/Search.jsx';
import FakeWeather from './data/FakeWeather.json';

class App extends Component {
  //setting json file data in the state of root component to pass it down as props to futureWeather component
  state = {
    jsonData: FakeWeather
  };
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
