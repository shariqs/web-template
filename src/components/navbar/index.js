import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Menu } from "antd";
import { faHome, faBacon, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.scss";
import { get } from "lodash";

const Navbar = () => {
  const history = useHistory();
  const [currentPage, setCurrentPage] = useState("home");
  const location = get(history, "location.pathname", "");

  const handleClick = (e) => {
    setCurrentPage(e.key);
    history.push(`${e.key}`);
  };

  return (
    <Menu onClick={handleClick} selectedKeys={[location || currentPage]} mode="horizontal">
      <Menu.Item key="/home" icon={<FontAwesomeIcon icon={faHome} />}>
        Home
      </Menu.Item>
      <Menu.Item key="/about" icon={<FontAwesomeIcon icon={faBacon} />}>
        About
      </Menu.Item>
      <Menu.Item key="/signup" icon={<FontAwesomeIcon icon={faUser} />}>
        Signup
      </Menu.Item>
    </Menu>
  );
};

export default Navbar;
