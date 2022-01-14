import React, { useState } from "react";
import { Form, Select as AntSelect } from "antd";
import { Input, Select, Button } from "component-library";
import FormItem from "antd/lib/form/FormItem";
import "./index.scss";

const { Option } = AntSelect;

const Signup = () => {
  const [inputState, setInputState] = useState("");

  // Overwrites how error messages are displayed (https://ant.design/components/form/#validateMessages)
  const validateMessages = {
    required: "${label} is required!",
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="1">+1</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );

  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <div className="signup-wrapper fade-in">
      <div className="content-wrapper">
        <div className="section-block">
          <div className="section-label">No Form - no state</div>
          <p>
            If we're using 'component-library' without a form, and <b>without state management</b>, the component will not recognize its input value.
          </p>
          <div className="section-content">
            <Input required={true} label={"Test Name"} placeholder={"Please enter your first name"} />
          </div>
        </div>

        <div className="section-block">
          <div className="section-label">No Form - state</div>
          <p>
            If we're using 'component-library' without a form, but <b>with state management</b>, the component will work as intended.
          </p>
          <div className="section-content">
            <Input required={true} value={inputState} label={"Test Name"} placeholder={"Please enter your first name"} onChange={(e) => setInputState(e.target.value)} />
          </div>
        </div>

        <div className="section-block">
          <div className="section-label">Form - no state</div>
          <p>
            If we're using 'component-library' with a form, state management <b>is not needed</b>.
          </p>
          <div className="section-content">
            <Form name="test-form" onFinish={onFinish} validateMessages={validateMessages}>
              <FormItem name={"First Name"} rules={[{ required: true, min: 1, max: 50 }]}>
                <Input required={true} label={"First Name"} placeholder={"Please enter your first name"} />
              </FormItem>
              <FormItem name={"Last Name"} rules={[{ required: true, min: 1, max: 50 }]}>
                <Input required={true} label={"Last Name"} placeholder={"Please enter your last name"} />
              </FormItem>
              <FormItem name={"Email"} rules={[{ required: true }]}>
                <Input required={true} label={"Email"} placeholder={"Please enter your email"} />
              </FormItem>
              <FormItem name={"Phone"} rules={[{ required: true, message: "Please enter your phone number!" }]}>
                <Input required={true} label={"Phone"} placeholder={"Please enter your phone number"} addonBefore={prefixSelector} />
              </FormItem>
              <FormItem name={"Gender"} rules={[{ required: true }]}>
                <Select required={true} label={"Select Gender"} placeholder="select your gender">
                  <Option value="male">Male</Option>
                  <Option value="female">Female</Option>
                  <Option value="other">Other</Option>
                </Select>
              </FormItem>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
