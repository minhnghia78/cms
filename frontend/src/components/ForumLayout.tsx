import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Snackbar, 
  Alert, 
  Button, 
  Stack,
  Typography,
  useTheme
} from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import Header from './Header';
import ForumSidebar from './ForumSidebar';
import TrendingContent from './TrendingContent';
import { HeaderFeatureItemProps } from './HeaderFeatureItem/feature.type';
import HeaderFeatures from './HeaderFeatures';

interface ForumLayoutProps {
  children?: React.ReactNode;
}

const ForumLayout: React.FC<ForumLayoutProps> = ({ children }) => {
  const theme = useTheme();
  const [showNotification, setShowNotification] = useState(true);

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

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'grey.100' }}>
      {/* Header */}
      <Header user={mockUser} />
      <HeaderFeatures items={featureHeaderItem} />
      
      {/* Main Content Area */}
      <Container maxWidth="xl" sx={{ py: 3 }}>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, gap: 3 }}>
          {/* Left Sidebar - Forum Categories */}
          <Box sx={{ flex: { xs: '1 1 100%', lg: '1 1 50%' } }}>
            <ForumSidebar />
          </Box>
          
          {/* Right Sidebar - Trending Content */}
          <Box sx={{ flex: { xs: '1 1 100%', lg: '1 1 50%' } }}>
            <TrendingContent />
          </Box>
        </Box>
        
        {/* Additional Content Area */}
        {children && (
          <Box sx={{ mt: 3 }}>
            {children}
          </Box>
        )}
      </Container>
      
      {/* Notification Banner */}
      <Snackbar
        open={showNotification}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        sx={{
          '& .MuiPaper-root': {
            maxWidth: 'none',
            bgcolor: theme.palette.primary.main,
            color: 'white',
            borderRadius: 2
          }
        }}
      >
        <Alert
          severity="info"
          icon={false}
          sx={{
            width: '100%',
            bgcolor: 'inherit',
            color: 'inherit',
            '& .MuiAlert-message': {
              width: '100%',
              p: 0
            }
          }}
        >
          <Stack direction="row" alignItems="center" spacing={2}>
            <Box 
              sx={{ 
                width: 24, 
                height: 24, 
                borderRadius: '50%', 
                bgcolor: 'primary.light',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Typography variant="caption">📢</Typography>
            </Box>
            <Typography sx={{ flexGrow: 1 }}>
              VOZ would like your permission to enable push notifications.
            </Typography>
            <Stack direction="row" spacing={1}>
              <Button 
                size="small" 
                variant="contained" 
                color="primary"
                onClick={() => setShowNotification(false)}
                sx={{ bgcolor: 'primary.light' }}
              >
                Allow
              </Button>
              <Button 
                size="small" 
                variant="contained" 
                color="inherit"
                onClick={() => setShowNotification(false)}
                sx={{ bgcolor: 'grey.500', color: 'white' }}
              >
                Block
              </Button>
            </Stack>
            <Button 
              size="small" 
              color="inherit"
              onClick={() => setShowNotification(false)}
              sx={{ minWidth: 'auto', p: 0.5 }}
            >
              <CloseIcon fontSize="small" />
            </Button>
          </Stack>
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ForumLayout;
