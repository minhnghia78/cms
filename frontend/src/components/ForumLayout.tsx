import React, { useState } from 'react';
import { 
  Layout,
  Row,
  Col,
  notification,
  Button,
  Space,
  Typography,
  Card
} from 'antd';
import { CloseOutlined, SoundOutlined } from '@ant-design/icons';
import Header from './Header';
import ForumSidebar from './ForumSidebar';
import TrendingContent from './TrendingContent';
import { HeaderFeatureItemProps } from './HeaderFeatureItem/feature.type';
import HeaderFeatures from './HeaderFeatures';

const { Content } = Layout;

interface ForumLayoutProps {
  children?: React.ReactNode;
}

const ForumLayout: React.FC<ForumLayoutProps> = ({ children }) => {
  const [showNotification, setShowNotification] = useState(true);
  const [api, contextHolder] = notification.useNotification();

  // Mock user data - replace with actual auth context later
  const mockUser = {
    name: 'mnghialeo'
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
      message: 'Push Notifications',
      description: 'VOZ would like your permission to enable push notifications.',
      btn,
      key,
      icon: <SoundOutlined style={{ color: '#1e3a8a' }} />,
      duration: 0,
      placement: 'bottomRight',
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
    <Layout style={{ minHeight: '100vh'}}>
      {/* Header */}
        <Header user={mockUser} />
        <HeaderFeatures items={featureHeaderItem} />
      
      {/* Main Content Area */}
      <Content style={{ padding: '24px', backgroundColor: '#f3f4f6' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Row gutter={[24, 24]}>
            {/* Left Sidebar - Forum Categories */}
            <Col xs={24} lg={12}>
              <ForumSidebar />
            </Col>
            
            {/* Right Sidebar - Trending Content */}
            <Col xs={24} lg={12}>
              <TrendingContent />
            </Col>
          </Row>
          
          {/* Additional Content Area */}
          {children && (
            <Card style={{ marginTop: '24px' }}>
              {children}
            </Card>
          )}
        </div>
      </Content>
    </Layout>
  );
};

export default ForumLayout;
