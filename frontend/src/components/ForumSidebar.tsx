import React from 'react';
import {
  Card,
  Typography,
  List,
  Space,
  Divider
} from 'antd';
import {
  MessageOutlined,
  TeamOutlined,
  QuestionCircleOutlined,
  DesktopOutlined,
  MonitorOutlined,
  MobileOutlined,
  PlayCircleOutlined,
  SettingOutlined
} from '@ant-design/icons';

const { Title, Text } = Typography;

interface ForumCategory {
  id: string;
  name: string;
  icon: React.ReactNode;
  threads: string;
  messages: string;
  isSection?: boolean;
  subcategories?: ForumCategory[];
}

const forumData: ForumCategory[] = [
  {
    id: 'announcements',
    name: 'Thông báo',
    icon: <MessageOutlined style={{ color: '#1e3a8a' }} />,
    threads: '19',
    messages: '46',
    isSection: true
  },
  {
    id: 'general',
    name: 'Góp ý',
    icon: <QuestionCircleOutlined style={{ color: '#f59e0b' }} />,
    threads: '3.3K',
    messages: '68.4K',
    isSection: true
  },
  {
    id: 'forum',
    name: 'Việt Nam Cộng hoà',
    icon: <TeamOutlined style={{ color: '#10b981' }} />,
    threads: '1.2M',
    messages: '51.8M',
    isSection: false,
    subcategories: [
      {
        id: 'politics',
        name: 'Chính trị',
        icon: <MessageOutlined style={{ color: '#6b7280' }} />,
        threads: '823K',
        messages: '43.2M'
      },
      {
        id: 'economy',
        name: 'Kinh tế',
        icon: <MessageOutlined style={{ color: '#6b7280' }} />,
        threads: '156K',
        messages: '4.2M'
      },
      {
        id: 'society',
        name: 'Xã hội',
        icon: <MessageOutlined style={{ color: '#6b7280' }} />,
        threads: '234K',
        messages: '4.4M'
      }
    ]
  },
  {
    id: 'technology',
    name: 'Công nghệ',
    icon: <DesktopOutlined style={{ color: '#3b82f6' }} />,
    threads: '234K',
    messages: '3.4M',
    isSection: false,
    subcategories: [
      {
        id: 'computers',
        name: 'Máy tính',
        icon: <MonitorOutlined style={{ color: '#6b7280' }} />,
        threads: '123K',
        messages: '1.8M'
      },
      {
        id: 'mobile',
        name: 'Di động',
        icon: <MobileOutlined style={{ color: '#6b7280' }} />,
        threads: '89K',
        messages: '1.2M'
      },
      {
        id: 'software',
        name: 'Phần mềm',
        icon: <SettingOutlined style={{ color: '#6b7280' }} />,
        threads: '67K',
        messages: '890K'
      }
    ]
  },
  {
    id: 'games',
    name: 'Giải trí',
    icon: <PlayCircleOutlined style={{ color: '#ef4444' }} />,
    threads: '567K',
    messages: '12.3M',
    isSection: false,
    subcategories: [
      {
        id: 'pc-games',
        name: 'Game PC',
        icon: <PlayCircleOutlined style={{ color: '#6b7280' }} />,
        threads: '234K',
        messages: '5.6M'
      },
      {
        id: 'mobile-games',
        name: 'Game Mobile',
        icon: <MobileOutlined style={{ color: '#6b7280' }} />,
        threads: '178K',
        messages: '3.2M'
      },
      {
        id: 'console-games',
        name: 'Game Console',
        icon: <PlayCircleOutlined style={{ color: '#6b7280' }} />,
        threads: '155K',
        messages: '3.5M'
      }
    ]
  }
];

interface CategoryItemProps {
  category: ForumCategory;
  isSubcategory?: boolean;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ category, isSubcategory = false }) => {
  return (
    <List.Item
      style={{
        padding: isSubcategory ? '8px 16px 8px 48px' : '12px 16px',
        cursor: 'pointer',
        borderRadius: '8px',
        margin: '4px 0',
        transition: 'all 0.2s ease',
      }}
      className="category-item"
    >
      <List.Item.Meta
        avatar={category.icon}
        title={
          <Text 
            strong={!isSubcategory}
            style={{ 
              color: isSubcategory ? '#6b7280' : '#111827',
              fontSize: isSubcategory ? '14px' : '15px'
            }}
          >
            {category.name}
          </Text>
        }
        description={
          <Space split={<Text type="secondary">•</Text>}>
            <Text type="secondary" style={{ fontSize: '12px' }}>
              {category.threads} threads
            </Text>
            <Text type="secondary" style={{ fontSize: '12px' }}>
              {category.messages} messages
            </Text>
          </Space>
        }
      />
    </List.Item>
  );
};

const ForumSidebar: React.FC = () => {
  return (
    <Card 
      title={
        <Title level={4} style={{ margin: 0, color: '#111827' }}>
          Forum Categories
        </Title>
      }
      style={{ 
        height: 'fit-content',
        borderRadius: '12px',
        boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'
      }}
    >
      <style>
        {`
          .category-item:hover {
            background-color: #f3f4f6 !important;
          }
          .ant-list-item {
            border-bottom: none !important;
          }
        `}
      </style>
      
      <List
        dataSource={forumData}
        split={false}
        renderItem={(category) => (
          <div key={category.id}>
            <CategoryItem category={category} />
            
            {category.subcategories && (
              <>
                <Divider style={{ margin: '8px 0' }} />
                {category.subcategories.map((subcat) => (
                  <CategoryItem 
                    key={subcat.id} 
                    category={subcat} 
                    isSubcategory={true} 
                  />
                ))}
                <Divider style={{ margin: '16px 0' }} />
              </>
            )}
          </div>
        )}
      />
    </Card>
  );
};

export default ForumSidebar; 