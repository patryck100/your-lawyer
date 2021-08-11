import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";


import "./index.css";
import App from "./App";

ReactDOM.render(
  //BrowserRouter is a component that gives the functionalities of the react router to the app
  //because the provider is surrending everything and passing "store" as props, it allows anything inside to access the redux
  <Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
