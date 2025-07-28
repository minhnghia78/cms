import React, { useState } from "react";
import {
  Layout,
  Row,
  Col,
  notification,
  Button,
  Space,
  Typography,
  Card,
  Menu,
  Avatar,
} from "antd";
import {
  AppstoreOutlined,
  CloseOutlined,
  LaptopOutlined,
  MailOutlined,
  NotificationOutlined,
  SettingOutlined,
  SoundOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { HeaderFeatureItemProps } from "./HeaderFeatureItem/feature.type";
import { useAuthStore } from "../store";
import Sider from "antd/es/layout/Sider";
import { Outlet, useNavigate } from "react-router-dom";
import { logoutApi } from "../store/authStore";

const { Content } = Layout;

interface ForumLayoutProps {
  children?: React.ReactNode;
}

const ForumLayout: React.FC<ForumLayoutProps> = ({ children }) => {
  const [showNotification, setShowNotification] = useState(true);
  const [api, contextHolder] = notification.useNotification();
  const navigate = useNavigate();

  const [collapseMenu, setCollapseMenu] = useState<boolean>(true);

  const username = useAuthStore((state) => state.username);

  const logout = () => {
    logoutApi();
    navigate("/login");
  };

  const featureHeaderItem: HeaderFeatureItemProps[] = [
    {
      key: 1,
      featureUrl: "#",
      label: "New posts",
    },
    {
      key: 2,
      featureUrl: "#",
      label: "Find threads",
    },
    {
      key: 3,
      featureUrl: "#",
      label: "Watched",
    },
    {
      key: 4,
      featureUrl: "#",
      label: "Search forums",
    },
    {
      key: 5,
      featureUrl: "#",
      label: "Mark forums read",
    },
  ];
  const items = [
    {
      key: "1",
      icon: <UserOutlined />,
      label: "User",
    },
    {
      key: "2",
      icon: <LaptopOutlined />,
      label: "Laptop",
    },
    {
      key: "3",
      icon: <NotificationOutlined />,
      label: "Notification",
    },
    {
      key: "user",
      label: (
        <Button
          onClick={() => logout()}
          style={{ backgroundColor: "transparent", padding: 0, border: 0 }}
        >
          <Avatar size="small" icon={<UserOutlined />} />
          {!collapseMenu && (
            <span style={{ color: "#0d0c0c" }}>{username}</span>
          )}
        </Button>
      ),
    },
  ];

  const openNotification = () => {
    const key = `open${Date.now()}`;
    const btn = (
      <Space>
        <Button
          type="primary"
          size="small"
          onClick={() => {
            api.destroy(key);
            setShowNotification(false);
          }}
        >
          Allow
        </Button>
        <Button
          size="small"
          onClick={() => {
            api.destroy(key);
            setShowNotification(false);
          }}
        >
          Block
        </Button>
      </Space>
    );

    api.info({
      message: "Push Notifications",
      description:
        "VOZ would like your permission to enable push notifications.",
      btn,
      key,
      icon: <SoundOutlined style={{ color: "#1e3a8a" }} />,
      duration: 0,
      placement: "bottomRight",
      style: {
        width: 400,
      },
    });
  };

  React.useEffect(() => {
    if (showNotification) {
      setTimeout(() => {
        openNotification();
      }, 2000);
    }
  }, [showNotification]);

  return (
    <Layout>
      <Sider
        width="15%"
        collapsed={collapseMenu}
        style={{ background: "pink" }}
        onMouseEnter={() => setCollapseMenu(false)}
        onMouseLeave={() => setCollapseMenu(true)}
      >
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          style={{ height: "100%", borderRight: 0 }}
          items={items}
        />
      </Sider>
      <Layout style={{ minHeight: "100vh" }}>
        {/* Header */}

        {/* Main Content Area */}
        <Content style={{ padding: "50px", backgroundColor: "#f3f4f6" }}>
          <div style={{ maxWidth: "1200px" }}>
            <Row>
              {/* Right Sidebar - Trending Content */}
              <Outlet />
            </Row>

            {/* Additional Content Area */}
            {children && <Card style={{ marginTop: "24px" }}>{children}</Card>}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default ForumLayout;
