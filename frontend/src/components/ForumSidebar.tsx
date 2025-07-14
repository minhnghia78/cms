import React from 'react';
import {
  Box,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Stack
} from '@mui/material';
import {
  Chat as MessageIcon,
  Group as UsersIcon,
  HelpOutline as HelpIcon,
  Computer as CpuIcon,
  Monitor as MonitorIcon,
  Smartphone as SmartphoneIcon,
  SportsEsports as GamepadIcon,
  Settings as SettingsIcon
} from '@mui/icons-material';

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
    icon: <MessageIcon color="primary" />,
    threads: '19',
    messages: '46',
    isSection: true
  },
  {
    id: 'general',
    name: 'Góp ý',
    icon: <HelpIcon color="warning" />,
    threads: '3.3K',
    messages: '68.4K',
    isSection: true
  },
  {
    id: 'tech-news',
    name: 'Tin tức iNet',
    icon: <MonitorIcon color="primary" />,
    threads: '1K+',
    messages: '78.1K'
  },
  {
    id: 'reviews',
    name: 'Review sản phẩm',
    icon: <SettingsIcon color="primary" />,
    threads: '1K+',
    messages: '149K'
  },
  {
    id: 'sharing',
    name: 'Chia sẻ kiến thức',
    icon: <UsersIcon color="primary" />,
    threads: '1K+',
    messages: '127.2K'
  }
];

const hardwareData: ForumCategory[] = [
  {
    id: 'hardware-section',
    name: 'Máy tính',
    icon: <CpuIcon color="warning" />,
    threads: '',
    messages: '',
    isSection: true
  },
  {
    id: 'consulting',
    name: 'Tư vấn cấu hình',
    icon: <HelpIcon color="warning" />,
    threads: '5.6K',
    messages: '58.5K'
  },
  {
    id: 'overclocking',
    name: 'Overclocking & Cooling & Modding',
    icon: <CpuIcon color="warning" />,
    threads: '2.1K',
    messages: '55.4K'
  },
  {
    id: 'amd',
    name: 'AMD',
    icon: <CpuIcon color="warning" />,
    threads: '4.3K',
    messages: '181.3K'
  },
  {
    id: 'intel',
    name: 'Intel',
    icon: <CpuIcon color="warning" />,
    threads: '2.9K',
    messages: '89.1K'
  },
  {
    id: 'gpu',
    name: 'GPU & Màn hình',
    icon: <MonitorIcon color="warning" />,
    threads: '10K',
    messages: '408.1K'
  },
  {
    id: 'software',
    name: 'Phần cứng chung',
    icon: <SettingsIcon color="warning" />,
    threads: '10.8K',
    messages: '148.3K'
  },
  {
    id: 'mobile',
    name: 'Thiết bị ngoại vi & Phụ kiện & Mạng',
    icon: <SmartphoneIcon color="warning" />,
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
      <ListItem
        sx={{
          bgcolor: 'grey.100',
          borderBottom: 1,
          borderColor: 'grey.300',
          py: 1.5
        }}
      >
        <ListItemIcon sx={{ minWidth: 40 }}>
          {category.icon}
        </ListItemIcon>
        <ListItemText
          primary={category.name}
          primaryTypographyProps={{ fontWeight: 'medium', color: 'text.primary' }}
        />
        {category.threads && (
          <Box sx={{ display: 'flex', gap: 3 }}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="body2" fontWeight="medium">{category.threads}</Typography>
              <Typography variant="caption" color="text.secondary">Threads</Typography>
            </Box>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="body2" fontWeight="medium">{category.messages}</Typography>
              <Typography variant="caption" color="text.secondary">Messages</Typography>
            </Box>
          </Box>
        )}
      </ListItem>
    );
  }

  return (
    <ListItemButton
      sx={{
        borderBottom: 1,
        borderColor: 'grey.100',
        py: 1.5,
        '&:hover': { bgcolor: 'grey.50' }
      }}
    >
      <ListItemIcon sx={{ minWidth: 40 }}>
        {category.icon}
      </ListItemIcon>
      <ListItemText
        primary={category.name}
        primaryTypographyProps={{ color: 'text.primary' }}
      />
      <Stack direction="row" spacing={2} sx={{ ml: 1 }}>
        <Box sx={{ minWidth: 50, textAlign: 'center' }}>
          <Typography variant="body2" fontWeight="medium">{category.threads}</Typography>
          <Typography variant="caption" color="text.secondary">Threads</Typography>
        </Box>
        <Box sx={{ minWidth: 60, textAlign: 'center' }}>
          <Typography variant="body2" fontWeight="medium">{category.messages}</Typography>
          <Typography variant="caption" color="text.secondary">Messages</Typography>
        </Box>
      </Stack>
    </ListItemButton>
  );
};

const ForumSidebar: React.FC<ForumSidebarProps> = ({ className = '' }) => {
  return (
    <Paper elevation={1} sx={{ overflow: 'hidden' }}>
      {/* Daị sánh Section */}
      <Box>
        <Typography
          variant="subtitle1"
          sx={{
            bgcolor: 'grey.200',
            px: 2,
            py: 1.5,
            fontWeight: 'bold',
            borderBottom: 1,
            borderColor: 'grey.300'
          }}
        >
          Daị sánh
        </Typography>
        <List disablePadding>
          {forumData.map((category) => (
            <ForumCategoryItem key={category.id} category={category} />
          ))}
        </List>
      </Box>

      {/* Máy tính Section */}
      <Box>
        <Typography
          variant="subtitle1"
          sx={{
            bgcolor: 'grey.200',
            px: 2,
            py: 1.5,
            fontWeight: 'bold',
            borderBottom: 1,
            borderTop: 1,
            borderColor: 'grey.300'
          }}
        >
          Máy tính
        </Typography>
        <List disablePadding>
          {hardwareData.map((category) => (
            <ForumCategoryItem key={category.id} category={category} />
          ))}
        </List>
      </Box>
    </Paper>
  );
};

export default ForumSidebar; 