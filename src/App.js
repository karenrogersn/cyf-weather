import React from 'react';
import './App.css';
import overcast from '../src/img/weather-icons/weather02-512.jpg';

function App() {
  return (
    <div className="app">
      <header className="app__header">
        <nav className="nav-bar">
          <form className="form" action="">
            <input type="text" placeholder="Type in a city name" />
            <button>FIND WEATHER</button>
          </form>
        </nav>
      </header>
      <main className="app__main">
        <section className="general-forecast">
          <div className="forecast-caption">
            <img className="forecast-img" src={overcast} alt=" clouds icon" />
            <p>overcast clouds</p>
          </div>
          <div className="temperature">
            <p>
              <strong>Temperature </strong> 10°C to 11°C
            </p>
          </div>
          <div className="percentages">
            <ul>
              <li>
                <strong>Humidity </strong>
              </li>
              <li>78%</li>
              <li>
                <strong>Pressure</strong>
              </li>
              <li>1008.48</li>
            </ul>
          </div>
        </section>
        <section className="detailed-forecast">
          <div>
            <p>03:00</p>
            <img className="next-forecast" src={overcast} alt="clouds icon" />
            <p>8°C</p>
          </div>
          <div>
            <p>06:00</p>
            <img className="next-forecast" src={overcast} alt="clouds icon" />
            <p>9°C</p>
          </div>
          <div>
            <p>09:00</p>
            <img className="next-forecast" src={overcast} alt="clouds icon" />
            <p>14°C</p>
          </div>
          <div>
            <p>12:00</p>
            <img className="next-forecast" src={overcast} alt="clouds icon" />
            <p>17°C</p>
          </div>
          <div>
            <p>15:00</p>
            <img className="next-forecast" src={overcast} alt="clouds icon" />
            <p>18°C</p>
          </div>
          <div>
            <p>18:00</p>
            <img className="next-forecast" src={overcast} alt="clouds icon" />
            <p>16°C</p>
          </div>
          <div>
            <p>21:00</p>
            <img className="next-forecast" src={overcast} alt="clouds icon" />
            <p>13°C</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
