import React, { Component } from "react";

import { AppContainer } from "./styled/Containers";
import { ThemeProvider } from "styled-components";
import Nav from "./components/TopNav";
import { Main } from "./routes";
import "./reset.css";

const light = {
  secondaryColor: "white",
  primaryColor: "#8f3985",
  borderColor: "#25283d"
};
const inverted = {
  secondaryColor: "#8f3985",
  primaryColor: "white",
  borderColor: "#ccc"
};
class App extends Component {
  state = {
    light: true
  };
  onChangeTheme() {}
  render() {
    return (
      <ThemeProvider theme={this.state.light ? light : inverted}>
        <AppContainer className="App">
          <Nav />
          {Main}
        </AppContainer>
      </ThemeProvider>
    );
  }
}

export default App;
