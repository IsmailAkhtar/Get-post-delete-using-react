import React, { Component } from 'react';
import './App.css';
import Blog from './containers/Blog/Blog';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1 className="MainHeading">Using JSON-Placeholder Apis for Get,post and delete data</h1>
        <Blog />
      </div>
    );
  }
}

export default App;
