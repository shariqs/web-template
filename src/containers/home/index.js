import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useThemeSwitcher } from "react-css-theme-switcher";
import { Input as AntInput, Select as AntSelect } from "antd";
import { someAPICall, setTheme } from "../../actions";
import { Select, Button, Input } from "component-library";
import "./index.scss";

const { Option } = AntSelect;

const Home = () => {
  const dispatch = useDispatch();

  // Redux-hooks
  const { themeName, themeColors } = useSelector((state) => ({
    themeName: state.theme.name,
    themeColors: state.theme.colors,
  }));

  const { switcher, status, themes } = useThemeSwitcher();
  const [myInputValue, setMyInputValue] = useState("");

  const selectTheme = (theme) => {
    dispatch(setTheme(theme));
    switcher({ theme });
  };

  // Avoid theme change flicker
  if (status === "loading") return null;

  return (
    <div className="home-wrapper fade-in">
      <div className="content-wrapper">
        <h1>
          The current theme is: <span style={{ textTransform: "capitalize" }}>{themeName}</span>
        </h1>

        <Select value={themeName} onChange={(e) => selectTheme(e)} label={"Select Theme"} placeholder="Select Theme">
          {Object.keys(themes).map((theme) => (
            <Option value={theme}>{theme.toUpperCase()}</Option>
          ))}
        </Select>

        <br />
        <div>This text is the theme's default text color</div>
        <div className="text">This text is the theme's primary color via css variables</div>
        <div style={{ color: themeColors.secondaryColor }}>This text is the theme's secondary color via inline-styles</div>
        <br />

        <Button onClick={() => dispatch(someAPICall())}>Sample API Request</Button>

        <br />

        <Input required={true} label={"First Name"} placeholder={"Please enter your first name"} value={myInputValue} onChange={(e) => setMyInputValue(e.target.value)} />
        <AntInput required={true} style={{ width: 300, marginTop: 15 }} placeholder="This is a placeholder" />
      </div>
    </div>
  );
};

export default Home;
