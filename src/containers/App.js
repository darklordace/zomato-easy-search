import React, { Component } from 'react';
import Logo from '../components/Logo/Logo';
import SearchBar from '../components/SearchBar/SearchBar'
import 'tachyons';
import './App.css';

class App extends Component {
  onSubmitSearch = (toSearch) => {
    console.log(toSearch);
  }

  render() {
    return (
      <div className="App">
        {/* Navigation Bar */}
        <div className="all">
          <Logo />
          <div className="center pt4 contents">
            <h1>Zomato Easy Search</h1> {/* TITLE */}
            <SearchBar onSubmitSearch={this.onSubmitSearch} />
            {/* Restaurant List */}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
