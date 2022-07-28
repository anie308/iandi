import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../src/redux/store";
import NotifyProvider from "./components/context/NotifyProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <NotifyProvider>
        <App />
      </NotifyProvider>
    </BrowserRouter>
  </Provider>
);
