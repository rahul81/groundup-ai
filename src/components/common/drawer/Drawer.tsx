import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Badge from '@mui/material/Badge';
import { useHistory } from 'react-router';
import './drawer.scss'
import { Collapse, ListItemIcon } from '@mui/material';
import { useEffect, useState } from 'react';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import clsx from 'clsx';
import { NOTIFICATION, USER_ADMIN, USER_ADMIN_USER_MANAGEMENT, USER_NOTIFICATION } from '../../../constants/ContextPaths';

const drawerWidth = 300;

interface DrawerItem{
  text: string;
  id: string;
  notifications?: number;
  subMenu?: DrawerItem[];
}

interface DrawerItemProps{
  items: DrawerItem[];
}

interface Props {
  window?: () => Window;
  children: React.ReactNode;
  mobileOpen: boolean;
  items: DrawerItem[];
  handleDrawerToggle: ()=>void;
}

 const DisplayDrawerSubMenuItem: React.FC<DrawerItem> = (item:DrawerItem): React.ReactElement =>{
  const history = useHistory();
  const [openMenu, setOpenMenu] = useState(true);
  const [activeSubMenu, setActiveSubMenu] = useState('');
  const [activeMenu, setActiveMenu] = useState('');
  
  const menuClicked = (subItem: DrawerItem)=>{
    history.push(subItem.id);
  }

  useEffect(() => {
    return history.listen((location) => {
      setActiveSubMenu(location.pathname);
      setActiveMenu(location.pathname);
    })
  },[history])
  
  useEffect(() => {
    const location = history.location;
    if(!activeMenu){
      setActiveSubMenu(location.pathname);
      setActiveMenu(location.pathname);
    }
  },[])

  return (
    <>
      <ListItem button key={item.text} selected={activeMenu.indexOf(item.id)>-1}onClick={()=>setOpenMenu(!openMenu)}>
        <ListItemText style={{marginLeft: '2rem'}}> 
          <span>{item.text}</span>
        </ListItemText>
        {openMenu ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse
          key={item.text + '-collapsable'}
          in={openMenu}
          timeout="auto"
          unmountOnExit
        >
        {(item.subMenu || []).map((subItem)=>
          <List component='li' disablePadding key={subItem.text}>
            <ListItem button key={subItem.text} onClick={()=>menuClicked(subItem)} sx={{padding:0}}>
              <ListItemIcon>
                {/* */}
              </ListItemIcon>
              <ListItemText className={clsx("submenu-item", {["active"]: activeSubMenu==subItem.id})} key={subItem.id} sx={{margin:0}}>{subItem.text}</ListItemText>
            </ListItem>
          </List>
        )}
      </Collapse>
    </>
  )
 }

const DisplayDrawerItem: React.FC<DrawerItem> = (item:DrawerItem): React.ReactElement =>{
  const history = useHistory();
  const [activeMenu, setActiveMenu] = useState('');

  useEffect(() => {
    return history.listen((location) => {
      setActiveMenu(location.pathname);
    })
  },[history])

  useEffect(() => {
    setActiveMenu(history.location.pathname);
  },[])

  return (
    <ListItem button key={item.text}  selected={activeMenu.indexOf(item.id)>-1} onClick={()=>history.push(item.id)}>
      <ListItemText className="menu-item-text">
        <span>{item.text}</span>
        {item.notifications && <Badge badgeContent={item.notifications} color="primary" style={{left: '2rem'}}></Badge>}
      </ListItemText>
    </ListItem>
  );
}

const DrawerItems: React.FC<DrawerItemProps> = (props:DrawerItemProps): React.ReactElement =>{
  return (
    <>
      <Toolbar />
      <Box sx={{ overflow: 'auto' }}>
        <List>
          {(props.items || []).map((item:DrawerItem, index) => {
            if(item.subMenu){
               return <DisplayDrawerSubMenuItem text={item.text} id={item.id} subMenu={item.subMenu}/>
            }else{
              return <DisplayDrawerItem text={item.text} id={item.id} notifications={item.notifications}/>
            }
        })}
        </List>
      </Box>
    </>);
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
        <DrawerItems items={props.items}/>
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
        <DrawerItems items={props.items}/>
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