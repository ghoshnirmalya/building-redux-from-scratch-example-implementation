import React, { Component } from 'react';
import createStore from "my-redux";

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    const initialState = {
      count: 0
    };

    const reducer = (state = initialState, action) =>
      action.type === "INCREMENT"
        ? { count: state.count + action.payload.count }
        : state;

    this.store = createStore(reducer, initialState);
  }

  handleClick = () => {
    this.store.dispatch({
      type: "INCREMENT",
      payload: {
        count: this.store.getState().count + 1
      }
    })

    console.log(this.store.getState());
  }

  render() {
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
            Learn React
          </a>
          <button className="App-button" onClick={this.handleClick}>Click</button>
        </header>
      </div>
    );
  }
}

export default App;
