import React from 'react';
import { 
  Box, 
  Paper, 
  Typography, 
  List, 
  ListItem, 
  ListItemAvatar, 
  ListItemText, 
  Avatar, 
  Button,
  Stack,
  Divider
} from '@mui/material';
import {
  Chat as MessageIcon,
  Visibility as EyeIcon,
  LocalFireDepartment as FireIcon
} from '@mui/icons-material';

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
    'primary.main',
    'success.main', 
    'secondary.main',
    'error.main',
    'warning.main',
    'info.main',
    'purple',
    'teal'
  ];
  
  const index = name.charCodeAt(0) % colors.length;
  return colors[index];
};

const TrendingContent: React.FC = () => {
  return (
    <Paper elevation={1}>
      <Box sx={{ 
        px: 2, 
        py: 1.5, 
        bgcolor: 'grey.100', 
        borderBottom: 1, 
        borderColor: 'grey.300',
        borderTopLeftRadius: 'inherit',
        borderTopRightRadius: 'inherit',
        display: 'flex',
        alignItems: 'center',
        gap: 1
      }}>
        <FireIcon color="error" fontSize="small" />
        <Typography variant="subtitle1" fontWeight="bold" color="text.primary">
          Trending content
        </Typography>
      </Box>
      
      <List disablePadding sx={{ 
        '& .MuiListItem-root': { 
          px: 2, 
          py: 2,
          '&:hover': { bgcolor: 'grey.50' },
          cursor: 'pointer'
        } 
      }}>
        {trendingPosts.map((post, index) => (
          <React.Fragment key={post.id}>
            {index > 0 && <Divider variant="inset" component="li" />}
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: getAvatarColor(post.author) }}>
                  {post.author.charAt(0).toUpperCase()}
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography 
                    variant="body2" 
                    fontWeight="medium" 
                    color="text.primary"
                    sx={{
                      display: '-webkit-box',
                      overflow: 'hidden',
                      WebkitBoxOrient: 'vertical',
                      WebkitLineClamp: 2,
                      '&:hover': { color: 'primary.main' }
                    }}
                  >
                    {post.title}
                  </Typography>
                }
                secondary={
                  <Box sx={{ mt: 1 }}>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 0.5 }}>
                      <Typography variant="body2" fontWeight="medium" color="text.primary">
                        {post.author}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        •
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {post.timestamp}
                      </Typography>
                    </Stack>
                    
                    <Stack direction="row" spacing={2} sx={{ mt: 1 }}>
                      <Stack direction="row" alignItems="center" spacing={0.5}>
                        <MessageIcon fontSize="inherit" color="action" />
                        <Typography variant="caption" color="text.secondary">
                          Replies: {post.replies.toLocaleString()}
                        </Typography>
                      </Stack>
                      <Stack direction="row" alignItems="center" spacing={0.5}>
                        <EyeIcon fontSize="inherit" color="action" />
                        <Typography variant="caption" color="text.secondary">
                          {post.views}
                        </Typography>
                      </Stack>
                    </Stack>
                  </Box>
                }
              />
            </ListItem>
          </React.Fragment>
        ))}
      </List>
      
      <Box sx={{ 
        p: 2, 
        borderTop: 1, 
        borderColor: 'grey.200', 
        bgcolor: 'grey.50',
        borderBottomLeftRadius: 'inherit',
        borderBottomRightRadius: 'inherit'
      }}>
        <Button 
          color="primary" 
          size="small" 
          sx={{ 
            fontSize: '0.875rem', 
            fontWeight: 'medium',
            '&:hover': { bgcolor: 'transparent' } 
          }}
        >
          View all trending content →
        </Button>
      </Box>
    </Paper>
  );
};

export default TrendingContent; 