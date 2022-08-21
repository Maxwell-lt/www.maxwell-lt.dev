import React from "react";

import { CssBaseline, Theme, createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import Nav from "./Nav";
import About from "./About";

const darkTheme: Theme = createTheme({
  palette: {
    primary: {
      main: "#ACC359"
    },
    secondary: {
      main: "#F1C941"
    },
    background: {
      default: "#303030"
    },
    text: {
      primary: '#F0F0F0',
    },
    mode: 'dark'
  }
});

const lightTheme: Theme = createTheme({
  palette: {
    primary: {
      main: "#ACC359"
    },
    secondary: {
      main: "#F1C941"
    },
    background: {
      default: "#F0F0F0"
    },
    text: {
      primary: '#303030',
    },
    mode: 'light'
  }
});

class App extends React.Component<{}, { theme: boolean }> {
  constructor(props: any) {
    super(props);
    this.state = { theme: true }
  }

  render() {
    return (
      <ThemeProvider theme={this.state.theme ? darkTheme : lightTheme}>
        <CssBaseline></CssBaseline>
        <Nav currentTheme={this.state.theme} switchTheme={(newTheme: boolean) => this.setState({ theme: newTheme })} />

        <About />
      </ThemeProvider>

    );
  }
}

export default App;
