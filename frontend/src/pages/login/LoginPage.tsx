import { Button, Checkbox, Flex, Form, FormProps, Input } from "antd";
import React from "react";
import { LoginFormType } from "../../types/auth.types";
import { useAuthStore } from "../../store";
import { loginApi } from "../../store/authStore";
import { useNavigate } from "react-router-dom";
import { LoginForm } from "../../components/Login/LoginForm/LoginForm";
import { LoginHeader } from "../../components/Login/LoginHeader/LoginHeader";

export const LoginPage = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const username = useAuthStore((state) => state.username);
  const token = useAuthStore((state) => state.token);

  const onFinish: FormProps<LoginFormType>["onFinish"] = async (values) => {
    const result = await loginApi(values);

    if (result.success) {
      console.log("Login successful!");

      navigate("/");
    } else {
      console.log("Login failed: " + (result.error || "Check credentials."));
    }
  };

  const onFinishFailed: FormProps<LoginFormType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <div
        style={{
          gap: 40,
          justifyItems: "center",
          alignContent: "center",
          background: "pink",
          height: "100%",
          width: "50%",
        }}
      >
        <Flex vertical style={{ width: "60%" }}>
          <LoginHeader />
          <LoginForm
            form={form}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          />
        </Flex>
      </div>
    </>
  );
};
