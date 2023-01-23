import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { store } from "./state";
import { Provider } from "react-redux";
import "./api/axios.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
