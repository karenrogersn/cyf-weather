import React from 'react';
import './../../App.css';

const Search = () => {
  return (
    <div>
      <header className="app__header">
        <nav className="nav-bar">
          <form className="form" action="">
            <input type="text" placeholder="Type in a city name" />
            <button>FIND WEATHER</button>
          </form>
        </nav>
      </header>
    </div>
  );
};

export default Search;
