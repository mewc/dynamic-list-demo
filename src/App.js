import React, { Component } from 'react';
import './App.css';
import DynamicList from "./DynamicList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <DynamicList/>
      </div>
    );
  }
}

export default App;
