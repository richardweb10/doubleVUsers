import React, { Component } from "react";
import { Provider } from "react-redux";
import App from "./App";
import configureStore from "./store/configureStore";

const store = configureStore({});

export default class Index extends Component{
  render() {
    return (
      <Provider store={store} >
        <App />
      </Provider>
    )
  }
}


