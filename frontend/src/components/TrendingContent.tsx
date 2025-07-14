import React from 'react';
import { MessageSquare, Eye, ThumbsUp } from 'lucide-react';

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
    title: 'Arsenal FC Official VOZ: Mùa giải 2025-2026: Keep the Faith, Gunners!',
    author: 'Karina (aespa)',
    replies: 7000,
    views: '27K',
    timestamp: 'May 27, 2025',
    category: 'Sports'
  },
  {
    id: '4',
    title: 'Anh em ở Nhật vào tâm sự nhi',
    author: 'Cau_thu_',
    replies: 73000,
    views: '21K',
    timestamp: 'Feb 21, 2022',
    category: 'Life'
  },
  {
    id: '5',
    title: 'TP.HCM: Cháy cứ xử ở phường Phú Thọ Hoà, 8 người tử vong',
    author: 'Tí Một Phết Bọ',
    replies: 0,
    views: '02M',
    timestamp: 'Monday at 7:02 AM',
    category: 'News'
  }
];

const getAvatarColor = (name: string) => {
  const colors = [
    'bg-blue-500',
    'bg-green-500', 
    'bg-purple-500',
    'bg-red-500',
    'bg-yellow-500',
    'bg-indigo-500',
    'bg-pink-500',
    'bg-teal-500'
  ];
  
  const index = name.charCodeAt(0) % colors.length;
  return colors[index];
};

const TrendingContent: React.FC = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
      <div className="px-4 py-3 bg-gray-100 border-b border-gray-200 rounded-t-lg">
        <h2 className="font-bold text-gray-800 flex items-center space-x-2">
          <span>🔥</span>
          <span>Trending content</span>
        </h2>
      </div>
      
      <div className="divide-y divide-gray-100">
        {trendingPosts.map((post) => (
          <div key={post.id} className="p-4 hover:bg-gray-50 cursor-pointer transition-colors">
            <div className="flex items-start space-x-3">
              {/* User Avatar */}
              <div className={`w-8 h-8 ${getAvatarColor(post.author)} rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0`}>
                {post.author.charAt(0).toUpperCase()}
              </div>
              
              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-medium text-gray-900 line-clamp-2 hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
                
                <div className="mt-2 flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center space-x-2">
                    <span className="font-medium text-gray-700">{post.author}</span>
                    <span>•</span>
                    <span>{post.timestamp}</span>
                  </div>
                </div>
                
                <div className="mt-2 flex items-center space-x-4 text-xs text-gray-500">
                  <div className="flex items-center space-x-1">
                    <MessageSquare className="w-3 h-3" />
                    <span>Replies: {post.replies.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Eye className="w-3 h-3" />
                    <span>{post.views}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="px-4 py-3 bg-gray-50 border-t border-gray-200 rounded-b-lg">
        <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
          View all trending content →
        </button>
      </div>
    </div>
  );
};

export default TrendingContent; 