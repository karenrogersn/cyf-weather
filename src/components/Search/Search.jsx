/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-constructor */
import '../Search/search.css';
import React, { Component } from 'react';

const Search = (props) => {
  return (
    <nav className='nav-bar'>
      <form className='form' onSubmit={props.handleSubmit}>
        <input
          className='input'
          id='search-input'
          type='text'
          placeholder='Type in a city name'
          onChange={props.handleInputChange}
          value={props.cityQuery}
        />
        <button className='button' onClick={props.click}>
          find weather
        </button>
      </form>
    </nav>
  );
};

export default Search;
