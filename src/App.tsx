import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import FooterContainer from "./components/Footer/FooterContainer";
import Page from "./Pages/Page";
import { ThemeProvider } from "styled-components";
import { theme } from "./assets/styles/theme";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <HeaderContainer />
        <Page />
        <FooterContainer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
