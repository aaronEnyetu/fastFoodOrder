import { useState } from 'react';
import './App.css';

import DrinkDropdown from './DrinkDropdown';
import DesertDropdown from './DesertDropdown';
import PizzaDropdown from './PizzaDropdown';
import SaladDropdown from './SaladDropdown';
import InstructionList from './InstructionList';
import 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learning React
        </a>
      </header>
    </div>
  );
}

export default App;
