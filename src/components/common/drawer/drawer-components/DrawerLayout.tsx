import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import '../g-drawer.scss'
import DrawerMenuItem, { DrawerItem } from './DrawerMenuItem';
import DrawerSubMenuItem from './DrawerMenuSubItem';
import { List } from '@mui/material';

interface DrawerItemProps{
  items: DrawerItem[];
}

const DrawerLayout: React.FC<DrawerItemProps> = (props:DrawerItemProps): React.ReactElement =>{
  return (
    <>
      <Toolbar />
      <Box sx={{ overflow: 'auto' }}>
        <List>
          {(props.items || []).map((item:DrawerItem, index) => {
            if(item.subMenu){
               return <DrawerSubMenuItem text={item.text} id={item.id} subMenu={item.subMenu}/>
            }else{
              return <DrawerMenuItem text={item.text} id={item.id} notifications={item.notifications}/>
            }
        })}
        </List>
      </Box>
    </>);
}

export default DrawerLayout;