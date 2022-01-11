import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, Checkbox } from "antd";
import "./index.scss";

const About = () => {
  const history = useHistory();
  const [count, setCount] = useState(0);

  return (
    <div className="about-wrapper">
      <div className="content-wrapper">
        <h1>The is the about page!</h1>
        <Button onClick={() => setCount(count + 1)}>Clicked {count} times</Button>
        <Button onClick={() => history.push(`/home`)}>Go to Home</Button>
        <Checkbox className="noselect">Click Me</Checkbox>
      </div>
    </div>
  );
};

export default About;
