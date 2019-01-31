import React, { Component } from 'react';
import Logo from '../components/Logo/Logo';
import SearchBar from '../components/SearchBar/SearchBar';
import Title from '../components/Title/Title';
import Result from '../components/Result/Result';
import Instructions from '../components/Instructions/Instructions';
import 'tachyons';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: ''
    }
  }

  onRouteChange = (route) => {
    this.setState({ route: route });
  }

  onSubmitSearch = (toSearch) => {
    console.log(toSearch);
  }

  render() {
    return (
      <div className="App">
        <div className="all">
          <div id="logo">
            <Logo />
          </div>
          <div className="center pt4 contents">
            <Title onRouteChange={this.onRouteChange} />
            <SearchBar onSubmitSearch={this.onSubmitSearch} onRouteChange={this.onRouteChange} />
            <div id="data" className="mt4">
              {
                this.state.route === 'instructions' ?
                  <Instructions />
                :
                  this.state.route === 'submit' ?
                  <Result />
                :
                  <div></div>
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
