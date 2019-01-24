import React, { Component } from 'react';
import Logo from '../components/Logo/Logo';

import 'tachyons';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Logo />
        <div className="mx-auto pt5 contents">
          <h1>Zomato Easy Search</h1> {/* TITLE */}
          {/* Search Bar */}
          {/* Restaurant List */}
        </div>
      </div>
    );
  }
}

export default App;
