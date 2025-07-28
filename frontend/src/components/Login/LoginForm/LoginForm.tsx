import { Button, Checkbox, Flex, Form, Input, Tooltip } from "antd";
import React, { useState } from "react";
import { LoginFormType } from "../../../types/auth.types";
import { LoginFormProps } from "./LoginForm.types";
import {
  ExclamationCircleOutlined,
  EyeInvisibleOutlined,
  EyeOutlined,
} from "@ant-design/icons";

export const LoginForm = ({
  form,
  onFinish,
  onFinishFailed,
}: LoginFormProps) => {
  const [visible, setVisible] = useState(false);

  return (
    <Form
      form={form}
      name="basic"
      style={{
        width: "100%",
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      layout="vertical"
    >
      <Form.Item<LoginFormType>
        label="Username"
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<LoginFormType>
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input
          placeholder="Enter password"
          type={visible ? "text" : "password"}
          suffix={
            <>
              <span
                onClick={() => setVisible(!visible)}
                style={{ cursor: "pointer" }}
              >
                {visible ? <EyeInvisibleOutlined /> : <EyeOutlined />}
              </span>
              <Tooltip
                title={`Mdasmdasm dasdmsmd adsasdsa \n sfadasdas`}
                color="black"
                open
              >
                <ExclamationCircleOutlined />
              </Tooltip>
            </>
          }
        />
      </Form.Item>

      <Form.Item>
        <Flex justify="space-between" align="center">
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <a href="">Forgot password</a>
        </Flex>
      </Form.Item>

      <Form.Item>
        <Button block type="primary" htmlType="submit">
          Log in
        </Button>
        <div style={{ justifySelf: "center" }}>
          <a href="">Register now!</a>
        </div>
      </Form.Item>
    </Form>
  );
};
