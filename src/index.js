import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

import "./index.css";
import App from "./App";

ReactDOM.render(
  //BrowserRouter is a component that gives the functionalities of the react router to the app
  //because the provider is surrending everything and passing "store" as props, it allows anything inside to access the redux
  //persist gate allows persist state data in the local window browser so then if the page is refreshed the user won't lose the cart for example
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}> 
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
