import "@progress/kendo-theme-default/dist/all.css";
import React, { Component } from "react";
import { Provider } from "react-redux";
import styled, { ThemeProvider } from "styled-components";
import "./App.css";
import PageHeader from "./components/PageHeader";
import NavigationBar from "./components/NavigationBar";

import { store } from "./reduxs/store";

import {
  ITheme,
  themWhite as ThemeWhite,
  themeDark as ThemeDark
} from "./AppThemes";
import EngagementsList from "./dashboard/EngagementsPage/EngagementsList";
import SearchFilter from "./dashboard/EngagementsPage/SearchFilter";

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
        <Provider store={store}>
          <ThemeProvider theme={this.state.theme}>
            <div>
              <PageHeader></PageHeader>
              <NavigationBar></NavigationBar>
              <SearchFilter></SearchFilter>
              <EngagementsList></EngagementsList>
            </div>
          </ThemeProvider>
        </Provider>
      </Application>
    );
  }
}

export default App;
