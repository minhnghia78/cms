import React from 'react';
import { 
  Card, 
  Typography, 
  List, 
  Avatar, 
  Button,
  Space,
  Divider,
  Tag
} from 'antd';
import {
  MessageOutlined,
  EyeOutlined,
  FireOutlined,
  RightOutlined
} from '@ant-design/icons';

const { Title, Text, Paragraph } = Typography;

interface TrendingPost {
  id: string;
  title: string;
  author: string;
  authorAvatar?: string;
  replies: number;
  views: string;
  timestamp: string;
  category?: string;
}

const trendingPosts: TrendingPost[] = [
  {
    id: '1',
    title: 'MSI 2025 - G2 Meme Lord, LPL tấu hài, LCK đi du lịch, LCP thong thả',
    author: 'Lambdadelta Vietnam',
    replies: 6000,
    views: '15K',
    timestamp: 'Jun 15, 2025',
    category: 'Gaming'
  },
  {
    id: '2',
    title: '[CLB Chứng khoán] Chia sẻ kinh nghiệm đầu tư chứng khoán 2025 - Vì mục tiêu tăng trưởng 20%/năm',
    author: 'Ban nick Two Step Ahead',
    replies: 45000,
    views: '31K',
    timestamp: 'Dec 31, 2024',
    category: 'Finance'
  },
  {
    id: '3',
    title: 'Tips chơi game mobile hay nhất 2025',
    author: 'GameMaster2025',
    replies: 2500,
    views: '8.5K',
    timestamp: 'Jan 10, 2025',
    category: 'Gaming'
  },
  {
    id: '4',
    title: 'Hướng dẫn build PC gaming tốt nhất với ngân sách 30 triệu',
    author: 'PCBuilder Pro',
    replies: 1200,
    views: '12K',
    timestamp: 'Jan 8, 2025',
    category: 'Technology'
  },
  {
    id: '5',
    title: 'Review iPhone 16 Pro Max sau 6 tháng sử dụng',
    author: 'TechReviewer',
    replies: 890,
    views: '5.2K',
    timestamp: 'Jan 5, 2025',
    category: 'Technology'
  }
];

const onlineUsers = [
  { id: '1', name: 'Admin', avatar: '👤', status: 'online' },
  { id: '2', name: 'Moderator1', avatar: '👤', status: 'online' },
  { id: '3', name: 'TechGuru', avatar: '👤', status: 'online' },
  { id: '4', name: 'GameFan', avatar: '👤', status: 'online' },
  { id: '5', name: 'NewUser123', avatar: '👤', status: 'online' },
];

const categoryColors: Record<string, string> = {
  'Gaming': '#ef4444',
  'Finance': '#10b981',
  'Technology': '#3b82f6',
};

const TrendingContent: React.FC = () => {
  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      {/* Trending Posts Section */}
      <Card 
        title={
          <Space>
            <FireOutlined style={{ color: '#ef4444' }} />
            <Title level={4} style={{ margin: 0, color: '#111827' }}>
              Trending Posts
            </Title>
          </Space>
        }
        extra={
          <Button type="link" size="small">
            View All <RightOutlined />
          </Button>
        }
        style={{ 
          borderRadius: '12px',
          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'
        }}
      >
        <List
          dataSource={trendingPosts}
          split={false}
          renderItem={(post, index) => (
            <List.Item
              style={{
                padding: '12px 0',
                cursor: 'pointer',
                borderRadius: '8px',
                marginBottom: '8px',
                transition: 'all 0.2s ease',
              }}
              className="trending-item"
            >
              <List.Item.Meta
                avatar={
                  <Avatar 
                    style={{ 
                      backgroundColor: '#1e3a8a',
                      color: 'white'
                    }}
                  >
                    {post.author.charAt(0).toUpperCase()}
                  </Avatar>
                }
                title={
                  <div>
                    <Paragraph 
                      ellipsis={{ rows: 2, expandable: false }}
                      style={{ 
                        margin: 0,
                        fontWeight: 500,
                        color: '#111827',
                        fontSize: '14px',
                        lineHeight: '1.4'
                      }}
                    >
                      {post.title}
                    </Paragraph>
                    <Space size="small" style={{ marginTop: '4px' }}>
                      {post.category && (
                        <Tag 
                          color={categoryColors[post.category] || '#6b7280'}
                          style={{ fontSize: '11px', margin: 0 }}
                        >
                          {post.category}
                        </Tag>
                      )}
                    </Space>
                  </div>
                }
                description={
                  <Space split={<Text type="secondary">•</Text>} size="small">
                    <Text type="secondary" style={{ fontSize: '12px' }}>
                      by {post.author}
                    </Text>
                    <Space size="small">
                      <MessageOutlined style={{ fontSize: '11px' }} />
                      <Text type="secondary" style={{ fontSize: '12px' }}>
                        {post.replies.toLocaleString()}
                      </Text>
                    </Space>
                    <Space size="small">
                      <EyeOutlined style={{ fontSize: '11px' }} />
                      <Text type="secondary" style={{ fontSize: '12px' }}>
                        {post.views}
                      </Text>
                    </Space>
                    <Text type="secondary" style={{ fontSize: '12px' }}>
                      {post.timestamp}
                    </Text>
                  </Space>
                }
              />
            </List.Item>
          )}
        />
      </Card>

      {/* Online Users Section */}
      <Card 
        title={
          <Space>
            <div 
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: '#10b981',
                animation: 'pulse 2s infinite'
              }}
            />
            <Title level={4} style={{ margin: 0, color: '#111827' }}>
              Online Users ({onlineUsers.length})
            </Title>
          </Space>
        }
        size="small"
        style={{ 
          borderRadius: '12px',
          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'
        }}
      >
        <style>
          {`
            @keyframes pulse {
              0%, 100% { opacity: 1; }
              50% { opacity: 0.5; }
            }
            .trending-item:hover {
              background-color: #f3f4f6 !important;
              padding-left: 8px !important;
              padding-right: 8px !important;
            }
          `}
        </style>
        
        <Space wrap size="small">
          {onlineUsers.map((user) => (
            <Space key={user.id} size="small">
              <Avatar 
                size="small" 
                style={{ 
                  backgroundColor: '#f59e0b',
                  fontSize: '10px'
                }}
              >
                {user.name.charAt(0).toUpperCase()}
              </Avatar>
              <Text style={{ fontSize: '12px' }}>{user.name}</Text>
            </Space>
          ))}
        </Space>
        
        <Divider style={{ margin: '12px 0' }} />
        
        <div style={{ textAlign: 'center' }}>
          <Text type="secondary" style={{ fontSize: '12px' }}>
            Total members: 1,234,567 • New today: 42
          </Text>
        </div>
      </Card>
    </Space>
  );
};

export default TrendingContent; 