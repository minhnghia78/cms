import React from 'react';
import { Skeleton as AntdSkeleton, Card, Space, Divider } from 'antd';

// Generic skeleton for any component
export const GenericSkeleton: React.FC<{ rows?: number; avatar?: boolean }> = ({ 
  rows = 3, 
  avatar = false 
}) => (
  <div className="p-4">
    <AntdSkeleton
      avatar={avatar}
      paragraph={{ rows }}
      active
    />
  </div>
);

// Skeleton for Header component
export const HeaderSkeleton: React.FC = () => (
  <div className="bg-white border-b border-gray-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        <AntdSkeleton.Button size="large" active />
        <Space size="middle">
          <AntdSkeleton.Button size="small" active />
          <AntdSkeleton.Button size="small" active />
          <AntdSkeleton.Button size="small" active />
        </Space>
        <AntdSkeleton.Avatar size="large" active />
      </div>
    </div>
  </div>
);

// Skeleton for Forum Sidebar
export const SidebarSkeleton: React.FC = () => (
  <div className="space-y-4 p-4">
    <Card>
      <AntdSkeleton.Button size="large" block active />
      <Divider />
      <Space direction="vertical" className="w-full" size="middle">
        {[...Array(5)].map((_, index) => (
          <div key={index} className="flex items-center space-x-3">
            <AntdSkeleton.Avatar size="small" active />
            <AntdSkeleton.Button size="small" active style={{ width: 120 }} />
          </div>
        ))}
      </Space>
    </Card>
    
    <Card>
      <AntdSkeleton.Button size="default" active style={{ width: 150 }} />
      <Divider />
      <Space direction="vertical" className="w-full" size="small">
        {[...Array(3)].map((_, index) => (
          <AntdSkeleton.Button key={index} size="small" active style={{ width: 100 + index * 20 }} />
        ))}
      </Space>
    </Card>
  </div>
);

// Skeleton for Trending Content
export const TrendingContentSkeleton: React.FC = () => (
  <div className="space-y-4 p-4">
    <div className="flex items-center space-x-2 mb-4">
      <AntdSkeleton.Avatar size="small" active />
      <AntdSkeleton.Button size="default" active style={{ width: 200 }} />
    </div>
    
    {[...Array(6)].map((_, index) => (
      <Card key={index} className="mb-4">
        <div className="flex items-start space-x-4">
          <AntdSkeleton.Avatar size="large" active />
          <div className="flex-1 space-y-2">
            <AntdSkeleton.Button size="default" active style={{ width: '80%' }} />
            <div className="flex items-center space-x-4">
              <AntdSkeleton.Button size="small" active style={{ width: 60 }} />
              <AntdSkeleton.Button size="small" active style={{ width: 80 }} />
              <AntdSkeleton.Button size="small" active style={{ width: 100 }} />
            </div>
            <AntdSkeleton.Button size="small" active style={{ width: 120 }} />
          </div>
        </div>
      </Card>
    ))}
  </div>
);

// Skeleton for Header Features
export const HeaderFeaturesSkeleton: React.FC = () => (
  <div className="bg-gray-100 border-b border-gray-200 p-2">
    <div className="max-w-7xl mx-auto">
      <Space size="small">
        {[...Array(5)].map((_, index) => (
          <AntdSkeleton.Button key={index} size="small" active style={{ width: 80 + index * 10 }} />
        ))}
      </Space>
    </div>
  </div>
);

export default {
  Generic: GenericSkeleton,
  Header: HeaderSkeleton,
  Sidebar: SidebarSkeleton,
  TrendingContent: TrendingContentSkeleton,
 