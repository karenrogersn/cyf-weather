import React from 'react';
import './../../App.css';

const Search = (props) => {
  return (
    <div>
      <header className="app__header">
        <nav className="nav-bar">
          <form>
            <input
              type="text"
              placeholder="Type in a city name"
              onChange={props.handleInputChange}
              value={props.query}
            />
            <button>FIND WEATHER</button>
          </form>
        </nav>
      </header>
    </div>
  );
};

export default Search;
// onClick={}
