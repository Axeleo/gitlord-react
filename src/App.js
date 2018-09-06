import React, { Component } from 'react';
import './App.css';
import PartyFinder from './PartyFinder'

class App extends Component {
  render() {
    return (
    <div className="wrapper">
      <header>
        <h1>GitLord</h1>
      </header>
      <PartyFinder />
    </div>
    )
  }
}

export default App;
