import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Form, Select } from "antd";
import { Input as MyInput } from "component-library";
import FormItem from "antd/lib/form/FormItem";
import "./index.scss";

const { Option } = Select;

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");

  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
    },
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
        <Form name="test-form" onFinish={onFinish} validateMessages={validateMessages}>
          <FormItem name={"First Name"} rules={[{ required: true, min: 1, max: 50 }]}>
            <MyInput required={true} label={"First Name"} placeholder={"Please enter your first name"} value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          </FormItem>
          <FormItem name={"Last Name"} rules={[{ required: true, min: 1, max: 50 }]}>
            <MyInput required={true} label={"Last Name"} placeholder={"Please enter your last name"} value={lastName} onChange={(e) => setLastName(e.target.value)} />
          </FormItem>
          <FormItem name={"Email"} rules={[{ required: true, type: "email" }]}>
            <MyInput required={true} label={"Email"} placeholder={"Please enter your email"} value={email} onChange={(e) => setEmail(e.target.value)} />
          </FormItem>
          <FormItem name={"Phone"} rules={[{ required: true, type: "number", message: "Please enter your phone number!" }]}>
            <MyInput required={true} label={"Phone"} placeholder={"Please enter your phone number"} value={phone} addonBefore={prefixSelector} onChange={(e) => setPhone(e.target.value)} />
          </FormItem>
          <FormItem name={"Gender"} rules={[{ required: true, type: "string" }]}>
            <Select value={gender} placeholder="select your gender" onChange={(e) => setGender(e)}>
              <Option value="male">Male</Option>
              <Option value="female">Female</Option>
              <Option value="other">Other</Option>
            </Select>
          </FormItem>
        </Form>
      </div>
    </div>
  );
};

export default Signup;
