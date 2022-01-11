import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useThemeSwitcher } from "react-css-theme-switcher";
import { Switch, Input, Button } from "antd";
import { testFunction } from "../../actions";
import "./index.scss";

const Home = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [isDarkMode, setIsDarkMode] = useState();
  const { switcher, currentTheme, status, themes } = useThemeSwitcher();

  // Redux-hooks
  const { state, test } = useSelector((state) => ({
    state: state,
    test: state.test,
  }));

  const toggleTheme = (isChecked) => {
    setIsDarkMode(isChecked);
    switcher({ theme: isChecked ? themes.dark : themes.light });
  };

  // Avoid theme change flicker
  if (status === "loading") return null;

  return (
    <div className="home-wrapper fade-in">
      <div className="content-wrapper">
        <h1>The current theme is: {currentTheme}</h1>
        <h2>
          API call made: <b>{JSON.stringify(test)}</b>
        </h2>
        <div className="switch-wrapper">
          <Switch className="switch" checked={isDarkMode} onChange={toggleTheme} />
          <span>Change Theme</span>
        </div>
        <Button onClick={() => dispatch(testFunction())}>API Cal</Button>
        <Button onClick={() => history.push(`/about`)}>Go to About</Button>
        <Input style={{ width: 300, marginTop: 15 }} placeholder="This is a placeholder" />
      </div>
    </div>
  );
};

export default Home;
