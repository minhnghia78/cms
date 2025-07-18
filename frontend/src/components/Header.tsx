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

const { Header: AntHeader } = Layout;
const { Title } = Typography;
const { Search } = Input;

interface HeaderProps {
  user?: {
    name: string;
    avatar?: string;
  };
}

const Header: React.FC<HeaderProps> = ({ user }) => {
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
      <Flex align="space-between" style={{ height: "100%", padding: "0 64px" }}>
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
            {user ? (
              <Space align="center">
                <Avatar
                  src={user.avatar}
                  icon={<UserOutlined />}
                  size="default"
                  style={{
                    backgroundColor: "#f59e0b",
                    border: "2px solid rgba(255, 255, 255, 0.3)",
                  }}
                />
                <Typography.Text
                  style={{
                    color: "white",
                    fontWeight: 500,
                    marginLeft: "8px",
                  }}
                >
                  {user.name}
                </Typography.Text>
              </Space>
            ) : (
              <Space>
                <Button
                  type="default"
                  size="small"
                  style={{
                    color: "white",
                    borderColor: "rgba(255, 255, 255, 0.5)",
                    backgroundColor: "transparent",
                  }}
                >
                  Login
                </Button>
                <Button
                  type="primary"
                  size="small"
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
