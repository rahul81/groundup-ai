import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { ListItem, ListItemText, Collapse, List, ListItemIcon } from "@mui/material";
import clsx from "clsx";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { DrawerItem } from "./DrawerMenuItem";


const DrawerSubMenuItem: React.FC<DrawerItem> = (item:DrawerItem): React.ReactElement =>{
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

   export default DrawerSubMenuItem;