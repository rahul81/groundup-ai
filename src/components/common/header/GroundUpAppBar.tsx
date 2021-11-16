import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import MoreIcon from '@mui/icons-material/MoreVert';
import GroundUpTabs from '../ground-up-tabs/GroundUpTabs';
import { Button } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/reducers';
import { useHistory } from 'react-router';
import { USER_ADMIN, USER_ADMIN_USER_MANAGEMENT, USER_NOTIFICATION } from '../../../constants/ContextPaths';
import clsx from 'clsx';
import NotificationDrawer from "../notification-drawer/NotificationDrawer";

interface HeadersProps {
  handleDrawerToggle: ()=>void;
  headerTab: number;
  setHeaderTab: (index:number)=>void;
  }

export default function GroundUpAppBar(props: HeadersProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const [openNotificationDrawer, setopenNotificationDrawer] = React.useState<Boolean>(false);
  const history = useHistory();

  const {username} = useSelector((state: RootState) => state.login);


  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const toggleNotificationDrawer = () => {
    setopenNotificationDrawer(!openNotificationDrawer);
  };
  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {openNotificationDrawer && <NotificationDrawer />}
      <MenuItem onClick={handleMenuClose}>Settings</MenuItem>
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show notifications"
          color="inherit"
          onClick={()=>history.push(USER_NOTIFICATION)}
        >
          <SettingsOutlinedIcon />
        </IconButton>
        <p>Settings</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={4} color="primary">
            <NotificationsNoneIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <Typography style={{textTransform: 'capitalize'}}>Welcome {username}!</Typography>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={props.handleDrawerToggle}
            sx={{ display: { xs: 'block', sm: 'none' },mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Box component="img"
            sx={{
              height: 233,
              width: 350,
              marginRight:5,
              maxHeight: { xs: 22, md: 22 },
              maxWidth: { xs: 150, md: 150 },
            }}
            alt="GROUNDUP.AI"
            src="/assets/images/logoE6.png"/>
          <GroundUpTabs index={props.headerTab} setIndex={props.setHeaderTab}/>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
            <IconButton
              size="large"
              aria-label="show Settings"
              color="inherit"
              onClick={()=>history.push(USER_ADMIN_USER_MANAGEMENT)}
            >
              <SettingsOutlinedIcon />
            </IconButton>
            <IconButton
              size="large"
              aria-label="show notifications"
              color="inherit"
              onClick={()=>toggleNotificationDrawer()}
            >
              <Badge badgeContent={17} color="primary">
                <NotificationsNoneIcon />
              </Badge>
            </IconButton>
            <div style={{height: '28px', border: '1px solid rgba(0, 0, 0, 0.5)', margin:'0 .5rem 0 .7rem'}}></div>
            <Typography style={{textTransform: 'capitalize'}}>Welcome {username}!</Typography>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}