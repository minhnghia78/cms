import React from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Box, 
  InputBase, 
  Badge, 
  Avatar, 
  Button, 
  IconButton, 
  Chip,
  Container,
  useMediaQuery,
  styled,
  alpha,
  useTheme
} from '@mui/material';
import { 
  Search as SearchIcon, 
  Notifications as NotificationsIcon, 
  Chat as ChatIcon,
  Person as PersonIcon
} from '@mui/icons-material';
import Logo from './Logo';
import logo from '../assets/voz-logo.png';
interface HeaderProps {
  user?: {
    name: string;
    avatar?: string;
  };
}

// Styled components
const SearchWrapper = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const NavButton = styled(Button)(({ theme }) => ({
  color: theme.palette.grey[300],
  '&:hover': {
    color: theme.palette.common.white,
  },
  '&.active': {
    color: theme.palette.primary.light,
    borderBottom: `2px solid ${theme.palette.primary.main}`,
  },
}));

const Header: React.FC<HeaderProps> = ({ user }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <AppBar position="static" color="primary" sx={{ boxShadow: 3 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo */}
          <Box sx={{ display: 'flex', alignItems: 'center', mr: 3 }}>
            <Logo imgUrl={logo} />
            
          </Box>
          
          {/* Navigation */}
          {!isMobile && (
            <Box sx={{ display: 'flex', flexGrow: 1 }}>
              <NavButton className="active">
                Forums
              </NavButton>
              <NavButton>
                Latest
              </NavButton>
              
            </Box>
          )}

          {/* Search and User Menu */}
          <Box sx={{ display: 'flex', alignItems: 'center', ml: 'auto' }}>
            {!isMobile && (
              <SearchWrapper>
                <SearchIconWrapper>
                  <SearchIcon fontSize="small" />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ 'aria-label': 'search' }}
                />
              </SearchWrapper>
            )}

            {user ? (
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <IconButton color="inherit" size="small" sx={{ position: 'relative' }}>
                  <Badge badgeContent={3} color="error">
                    <NotificationsIcon fontSize="small" />
                  </Badge>
                </IconButton>
                <IconButton color="inherit" size="small" sx={{ mx: 1 }}>
                  <ChatIcon fontSize="small" />
                </IconButton>
                <Chip
                  avatar={
                    user.avatar ? (
                      <Avatar alt={user.name} src={user.avatar} />
                    ) : (
                      <Avatar sx={{ bgcolor: 'primary.light' }}>
                        {user.name.charAt(0).toUpperCase()}
                      </Avatar>
                    )
                  }
                  label={user.name}
                  variant="filled"
                  sx={{ 
                    bgcolor: 'rgba(255,255,255,0.1)', 
                    color: 'white',
                    '&:hover': { bgcolor: 'rgba(255,255,255,0.2)' },
                    cursor: 'pointer'
                  }}
                />
              </Box>
            ) : (
              <Button 
                variant="contained" 
                color="secondary"
                startIcon={<PersonIcon />}
                size="small"
              >
                Sign In
              </Button>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
