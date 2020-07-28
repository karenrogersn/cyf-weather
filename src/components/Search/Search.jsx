/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import './../../App.css';

const Search = (props) => {
  return (
    <header className="app__header">
      <nav className="nav-bar">
        <form onSubmit={props.handleSubmit}>
          <input
            id="search-input"
            type="text"
            placeholder="Type in a city name"
            onChange={props.handleInputChange}
            value={props.cityQuery}
          />
          <button onClick={props.click}>FIND WEATHER</button>
        </form>
      </nav>
    </header>
  );
};

export default Search;
