import { ListItem, ListItemText, Badge, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

export interface DrawerItem{
    text: string;
    id: string;
    notifications?: number;
    subMenu?: DrawerItem[];
}

const DrawerMenuItem: React.FC<DrawerItem> = (item:DrawerItem): React.ReactElement =>{
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
          <Typography variant="body1">
            {item.text}
            {item.notifications && <Badge badgeContent={item.notifications} color="primary" style={{left: '2rem'}}></Badge>}
          </Typography>
        </ListItemText>
      </ListItem>
    );
  }

  export default DrawerMenuItem;