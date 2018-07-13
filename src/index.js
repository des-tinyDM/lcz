import "normalize.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "react-widgets/dist/css/react-widgets.css";
import ThemeProvider from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./ducks/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,

  document.getElementById("root")
);
