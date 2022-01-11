import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useThemeSwitcher } from "react-css-theme-switcher";
import { Input, Button, Dropdown, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { getThemeColors, someAPICall, setTheme } from "../../actions";
import "./index.scss";
import { get } from "lodash";

const Home = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { switcher, status, themes } = useThemeSwitcher();

  // Redux-hooks
  const { state, themeName, themeColors } = useSelector((state) => ({
    state: state,
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

  dispatch(getThemeColors());
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
              Change Theme <DownOutlined />
            </a>
          </Dropdown>
        </Button>
        <div className="text">This text is the theme's primary color via css variables</div>
        <div style={{ color: themeColors.secondaryColor }}>This text is the theme's secondary color via inline-styles</div>

        <Button onClick={() => dispatch(someAPICall())}>Make API Request</Button>
        <Button onClick={() => history.push(`/about`)}>Go to About</Button>
        <Input style={{ width: 300, marginTop: 15 }} placeholder="This is a placeholder" />
      </div>
    </div>
  );
};

export default Home;
