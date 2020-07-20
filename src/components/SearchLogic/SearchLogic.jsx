// import React, { Component } from 'react';
// import Search from './../Search/Search';
// import CurrentWeather from '../CurrentWeather/CurrentWeather';
// import FutureWeather from '../FutureWeather/FutureWeather';
// // import axios from 'axios';

// // require('dotenv').config();
// //importing API
// // const apiKey = process.env.REACT_APP_WEATHER_API;
// // import { fetchData } from '../../../src/services/OpenWeatherApi';

// class SearchLogic extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       query: ''
//     };
//   }

//   //updating the query as the user searches
//   updateSearchQuery = (event) => {
//     console.log(event.target.value);
//     const value = event.target.value;
//     this.setState({
//       query: value
//     });
//   };

//   render() {
//     // console.log(this.state.query);
//     // const cityFilter = this.state.weatherInCities.filter((city) => {
//     //   return city.name.includes(this.state.query);
//     // });
//     return (
//       <div>
//         <Search handleInputChange={this.updateSearchQuery} query={this.state.query} />
//         {/* {cityFilter.map((city) => {
//           return <CurrentWeather key={city.id} city={city} />;
//           // <FutureWeather key={city.id} city={city} />
//         })} */}
//       </div>
//     );
//   }
// }

// export default SearchLogic;
