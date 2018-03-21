import React, { Component } from 'react';

import Header from './../components/Header';
import Feedback from './Feedback';
import FlightSettings from './FlightSettings';
import Footer from './../components/Footer';

import './../stylesheet/App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
	      <Header />
	      <FlightSettings />
	      <Footer />
      </div>
    );
  }
}

export default App;
