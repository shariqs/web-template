import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useThemeSwitcher } from "react-css-theme-switcher";
import { Input, Dropdown, Menu } from "antd";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { someAPICall, setTheme } from "../../actions";
import { get } from "lodash";
import { Button, Input as MyInput } from "component-library";
import "./index.scss";

const Home = () => {
  const dispatch = useDispatch();

  const { switcher, status, themes } = useThemeSwitcher();
  const [myInputValue, setMyInputValue] = useState("");

  // Redux-hooks
  const { themeName, themeColors } = useSelector((state) => ({
    themeName: state.theme.name,
    themeColors: state.theme.colors,
  }));

  const handleClick = (e) => {
    let theme = get(e, "key", "light");
    dispatch(setTheme(theme));
    switcher({ theme });
  };

  const menu = (
    <Menu onClick={handleClick}>
      {Object.keys(themes).map((theme) => (
        <Menu.Item key={theme} style={{ textTransform: "capitalize" }}>
          {theme} Theme
        </Menu.Item>
      ))}
    </Menu>
  );

  // Avoid theme change flicker
  if (status === "loading") return null;

  return (
    <div className="home-wrapper fade-in">
      <div className="content-wrapper">
        <h1>
          The current theme is: <span style={{ textTransform: "capitalize" }}>{themeName}</span>
        </h1>
        <Button>
          <Dropdown overlay={menu} trigger={["click"]}>
            <a onClick={(e) => e.preventDefault()}>
              Change Theme <FontAwesomeIcon icon={faChevronDown} />
            </a>
          </Dropdown>
        </Button>

        <br />
        <div className="text">This text is the theme's primary color via css variables</div>
        <div style={{ color: themeColors.secondaryColor }}>This text is the theme's secondary color via inline-styles</div>
        <br />

        <Button onClick={() => dispatch(someAPICall())}>Sample API Request</Button>

        <br />

        <MyInput required={true} label={"First Name"} placeholder={"Please enter your first name"} value={myInputValue} onChange={(e) => setMyInputValue(e.target.value)} />
        <Input required={true} style={{ width: 300, marginTop: 15 }} placeholder="This is a placeholder" />
      </div>
    </div>
  );
};

export default Home;
