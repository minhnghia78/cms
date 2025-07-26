import React from "react";
import {
  Layout,
  Typography,
  Input,
  Badge,
  Avatar,
  Button,
  Space,
  Row,
  Col,
  Flex,
  TabsProps,
  Tabs,
} from "antd";
import {
  SearchOutlined,
  BellOutlined,
  MessageOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Logo from "./Logo";
import logo from "../assets/voz-logo.png";
import { Link } from "react-router-dom";

const { Header: AntHeader } = Layout;
const { Title } = Typography;
const { Search } = Input;

interface HeaderProps {
  username?: string;
}

const Header: React.FC<HeaderProps> = ({ username }) => {
  const handleSearch = (value: string) => {
    console.log("Search:", value);
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Forums",
    },
    {
      key: "2",
      label: "Latest",
    },
  ];

  return (
    <Flex vertical style={{ backgroundColor: "var(--main-color)" }}>
      <Flex align="center" gap={16}>
        <Logo imgUrl={logo} />
      </Flex>
      <Flex
        justify="space-between"
        style={{ height: "100%", padding: "0 64px" }}
      >
        <Col style={{ marginLeft: "24px" }}>
          <Tabs items={items} type="card" className="header-tabs" />
        </Col>
        {/* Center section - Search */}
        <Col style={{ maxWidth: "500px", marginLeft: "24px" }}>
          <Search
            placeholder="Search forums..."
            allowClear
            onSearch={handleSearch}
            style={{
              maxWidth: "100%",
            }}
            styles={{
              input: {
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                borderColor: "rgba(255, 255, 255, 0.2)",
                color: "white",
              },
            }}
          />
        </Col>

        {/* Right section - User actions */}
        <Col>
          <Space size="middle" align="center">
            {/* Messages */}
            <Badge count={3} size="small">
              <Button
                type="text"
                shape="circle"
                icon={
                  <MessageOutlined
                    style={{ color: "white", fontSize: "18px" }}
                  />
                }
                style={{
                  border: "none",
                  background: "transparent",
                }}
              />
            </Badge>

            {/* Notifications */}
            <Badge count={5} size="small">
              <Button
                type="text"
                shape="circle"
                icon={
                  <BellOutlined style={{ color: "white", fontSize: "18px" }} />
                }
                style={{
                  border: "none",
                  background: "transparent",
                }}
              />
            </Badge>

            {/* User menu */}
            {username ? (
              <Space>
                <Avatar size={32} icon={<UserOutlined />} />
                <Typography.Text
                  style={{
                    color: "white",
                    fontWeight: 500,
                  }}
                >
                  {username}
                </Typography.Text>
              </Space>
            ) : (
              <Space>
                <Link to={"/login"}>
                  <Button
                    type="default"
                    size="middle"
                    style={{
                      color: "white",
                      borderColor: "rgba(255, 255, 255, 0.5)",
                      backgroundColor: "transparent",
                    }}
                  >
                    Login
                  </Button>
                </Link>
                <Button
                  type="primary"
                  size="middle"
                  style={{
                    backgroundColor: "#f59e0b",
                    borderColor: "#f59e0b",
                  }}
                >
                  Register
                </Button>
              </Space>
            )}
          </Space>
        </Col>
      </Flex>
    </Flex>
  );
};

export default Header;
