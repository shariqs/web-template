import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Checkbox } from "antd";
import { Button } from "component-library";
import "./index.scss";

const About = () => {
  const history = useHistory();
  const [count, setCount] = useState(0);

  return (
    <div className="about-wrapper">
      <div className="content-wrapper">
        <h1>The is the about page!</h1>
        <Button onClick={() => setCount(count + 1)}>You've clicked this button about {count} times</Button>
        <Checkbox className="noselect">Click Me</Checkbox>
      </div>
    </div>
  );
};

export default About;
