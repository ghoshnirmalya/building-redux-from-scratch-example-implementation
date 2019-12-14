import React, { Component } from "react";
import createStore from "my-redux";

import "./App.css";

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

  state = { count: 0 };

  handleClick = () => {
    this.store.dispatch({
      type: "INCREMENT",
      payload: {
        count: 1
      }
    });

    this.setState({ count: this.store.getState().count });
  };

  render() {
    console.log(this.store.getState());

    return (
      <div className="App">
        <header className="App-header">
          <button className="App-button" onClick={this.handleClick}>
            Click
          </button>
          You have clicked {this.store.getState().count} times
        </header>
      </div>
    );
  }
}

export default App;
