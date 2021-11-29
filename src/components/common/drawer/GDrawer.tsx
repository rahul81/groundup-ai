import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import './g-drawer.scss'
import DrawerLayout from './drawer-components/DrawerLayout';
import { DrawerItem } from './drawer-components/DrawerMenuItem';

const drawerWidth = 300;

interface Props {
  window?: () => Window;
  children: React.ReactNode;
  mobileOpen: boolean;
  items: DrawerItem[];
  handleDrawerToggle: ()=>void;
}

export default function GroundUpDrawer(props: Props) {
  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        variant="temporary"
        open={props.mobileOpen}
        onClose={props.handleDrawerToggle}
        ModalProps={{
          keepMounted: true, 
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <DrawerLayout items={props.items}/>
      </Drawer>
      <Drawer
        className="drawer-panel"
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          width: drawerWidth,
          [`& .MuiDrawer-paper`]: { width: drawerWidth }
        }}
      >
        <DrawerLayout items={props.items}/>
      </Drawer>
      <Box 
        component="main"
        className="main-component"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          marginTop: {xs: '50px', md: '64px'}}}
        >
        <Box sx={{ flex: '1 1 auto'}}>
          {props.children}
        </Box>
      </Box>
      
    </Box>
  );
}