import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";
import RootContainer from "./containers/RootContainer";
import { ThemeSwitcherProvider } from "react-css-theme-switcher";
import { store, persistor } from "./redux-store/storeConfiguration";
import { PersistGate } from "redux-persist/integration/react";
import "./index.scss";

// All of the themes used in the project must be defined here
const themes = {
  dark: `${process.env.PUBLIC_URL}/master-dark-theme.css`,
  light: `${process.env.PUBLIC_URL}/master-light-theme.css`,
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeSwitcherProvider themeMap={themes} defaultTheme="light" insertionPoint="styles-insertion-point">
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <RootContainer />
        </PersistGate>
      </Provider>
    </ThemeSwitcherProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
