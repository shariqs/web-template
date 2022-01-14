import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import RootContainer from "./containers/RootContainer";
import { ThemeSwitcherProvider } from "react-css-theme-switcher";
import { store } from "./redux-store/storeConfiguration";
import "./index.scss";

// All of the themes used in the project must be defined here
const themes = {
  dark: `${process.env.PUBLIC_URL}/master-dark-theme.css`,
  light: `${process.env.PUBLIC_URL}/master-light-theme.css`,
  wacky: `${process.env.PUBLIC_URL}/master-wacky-theme.css`,
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeSwitcherProvider themeMap={themes} defaultTheme="light" insertionPoint="styles-insertion-point">
      <Provider store={store}>
        <RootContainer />
      </Provider>
    </ThemeSwitcherProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
