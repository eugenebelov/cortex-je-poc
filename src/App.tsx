import "@progress/kendo-theme-default/dist/all.css";
import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";
import "./App.css";
import PageHeader from "./components/PageHeader";
import NaviagtionBar from "./components/NavigationBar";
import {
  ITheme,
  themWhite as ThemeWhite,
  themeDark as ThemeDark
} from "./AppThemes";

enum ThemeType {
  DARK = "dark",
  LIGHT = "light"
}

interface IThemeState {
  theme: ITheme;
}

const Application = styled.div``;

class App extends Component {
  state = {
    theme: {} as ITheme
  } as IThemeState;

  componentDidMount() {
    const t = window.localStorage.getItem("theme");
    switch (t) {
      case ThemeType.LIGHT:
        this.setState({ theme: ThemeWhite });
        break;
      case ThemeType.DARK:
      default:
        this.setState({ theme: ThemeDark });
        break;
    }
  }

  render() {
    return (
      <Application>
        <ThemeProvider theme={this.state.theme}>
          <div>
            <PageHeader></PageHeader>
            <NaviagtionBar></NaviagtionBar>
          </div>
        </ThemeProvider>
      </Application>
    );
  }
}

export default App;
