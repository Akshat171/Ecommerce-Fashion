import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import App from "./App_Main";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import quantityReducer from "./components/redux/reducer";
import { createStore } from "redux";
const store = createStore(quantityReducer);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
