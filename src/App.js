import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Booking from './components/Booking';
import Menu from './components/Menu';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Booking />
        <Menu />
        <Footer />
      </div>
    );
  }
}

export default App;
