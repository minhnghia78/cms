import React from 'react';
import { MessageSquare, Users, HelpCircle, Cpu, Monitor, Smartphone, Gamepad2, Settings } from 'lucide-react';

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
    icon: <MessageSquare className="w-5 h-5 text-blue-500" />,
    threads: '19',
    messages: '46',
    isSection: true
  },
  {
    id: 'general',
    name: 'Góp ý',
    icon: <HelpCircle className="w-5 h-5 text-orange-500" />,
    threads: '3.3K',
    messages: '68.4K',
    isSection: true
  },
  {
    id: 'tech-news',
    name: 'Tin tức iNet',
    icon: <Monitor className="w-5 h-5 text-blue-500" />,
    threads: '1K+',
    messages: '78.1K'
  },
  {
    id: 'reviews',
    name: 'Review sản phẩm',
    icon: <Settings className="w-5 h-5 text-blue-500" />,
    threads: '1K+',
    messages: '149K'
  },
  {
    id: 'sharing',
    name: 'Chia sẻ kiến thức',
    icon: <Users className="w-5 h-5 text-blue-500" />,
    threads: '1K+',
    messages: '127.2K'
  }
];

const hardwareData: ForumCategory[] = [
  {
    id: 'hardware-section',
    name: 'Máy tính',
    icon: <Cpu className="w-5 h-5 text-orange-500" />,
    threads: '',
    messages: '',
    isSection: true
  },
  {
    id: 'consulting',
    name: 'Tư vấn cấu hình',
    icon: <HelpCircle className="w-5 h-5 text-orange-500" />,
    threads: '5.6K',
    messages: '58.5K'
  },
  {
    id: 'overclocking',
    name: 'Overclocking & Cooling & Modding',
    icon: <Cpu className="w-5 h-5 text-orange-500" />,
    threads: '2.1K',
    messages: '55.4K'
  },
  {
    id: 'amd',
    name: 'AMD',
    icon: <Cpu className="w-5 h-5 text-orange-500" />,
    threads: '4.3K',
    messages: '181.3K'
  },
  {
    id: 'intel',
    name: 'Intel',
    icon: <Cpu className="w-5 h-5 text-orange-500" />,
    threads: '2.9K',
    messages: '89.1K'
  },
  {
    id: 'gpu',
    name: 'GPU & Màn hình',
    icon: <Monitor className="w-5 h-5 text-orange-500" />,
    threads: '10K',
    messages: '408.1K'
  },
  {
    id: 'software',
    name: 'Phần cứng chung',
    icon: <Settings className="w-5 h-5 text-orange-500" />,
    threads: '10.8K',
    messages: '148.3K'
  },
  {
    id: 'mobile',
    name: 'Thiết bị ngoại vi & Phụ kiện & Mạng',
    icon: <Smartphone className="w-5 h-5 text-orange-500" />,
    threads: '8.8K',
    messages: '469.7K'
  }
];

interface ForumSidebarProps {
  className?: string;
}

const ForumCategoryItem: React.FC<{ category: ForumCategory }> = ({ category }) => {
  if (category.isSection) {
    return (
      <div className="px-4 py-3 bg-gray-50 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {category.icon}
            <span className="font-semibold text-gray-800">{category.name}</span>
          </div>
          {category.threads && (
            <div className="flex space-x-6 text-sm text-gray-600">
              <div className="text-center">
                <div className="font-medium">{category.threads}</div>
                <div className="text-xs">Threads</div>
              </div>
              <div className="text-center">
                <div className="font-medium">{category.messages}</div>
                <div className="text-xs">Messages</div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="px-4 py-3 hover:bg-gray-50 border-b border-gray-100 cursor-pointer transition-colors">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3 flex-1">
          {category.icon}
          <span className="text-gray-700 hover:text-blue-600">{category.name}</span>
        </div>
        <div className="flex space-x-6 text-sm text-gray-500">
          <div className="text-center min-w-[50px]">
            <div className="font-medium">{category.threads}</div>
            <div className="text-xs">Threads</div>
          </div>
          <div className="text-center min-w-[60px]">
            <div className="font-medium">{category.messages}</div>
            <div className="text-xs">Messages</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ForumSidebar: React.FC<ForumSidebarProps> = ({ className = '' }) => {
  return (
    <div className={`w-full bg-white border border-gray-200 rounded-lg shadow-sm ${className}`}>
      {/* Daị sánh Section */}
      <div className="border-b border-gray-200">
        <div className="px-4 py-3 bg-gray-100 border-b border-gray-200">
          <h2 className="font-bold text-gray-800">Daị sánh</h2>
        </div>
        {forumData.map((category) => (
          <ForumCategoryItem key={category.id} category={category} />
        ))}
      </div>

      {/* Máy tính Section */}
      <div>
        <div className="px-4 py-3 bg-gray-100 border-b border-gray-200">
          <h2 className="font-bold text-gray-800">Máy tính</h2>
        </div>
        {hardwareData.map((category) => (
          <ForumCategoryItem key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default ForumSidebar; 