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

  state = { count: 0 }

  handleClick = () => {
    this.store.dispatch({
      type: "INCREMENT",
      payload: {
        count: 1
      }
    })

    this.setState({ count: this.store.getState().count });
  }

  render = () =>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button className="App-button" onClick={this.handleClick}>
          Click
        </button>
        You have clicked {this.state.count} times
      </header>
    </div>
}

export default App;
