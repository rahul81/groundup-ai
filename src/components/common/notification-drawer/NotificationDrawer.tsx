import React, { useState,} from 'react'
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import NotificationItem from "./NotificationItem/NotificationItem";
import { Toolbar } from "@mui/material";

interface notificationsProps {
  notifications : string[],
  setnotifications: React.Dispatch<React.SetStateAction<Array<string>>>
}

const NotificationItems:React.FC<notificationsProps> = ({notifications, setnotifications}) => (
  <Box sx={{ width: "auto"  }} role="presentation"  >
    <List style={{ width: "21.25rem" }}>
      {notifications.map((text, index) => (
        <NotificationItem key={index}   setnotifications={setnotifications}
        notifications={notifications}
        index={index} category={text} message="Idling detected at Crane A, Zone A" time="1 Hr ago" />
      ))}
    </List>
  </Box>
);


export default function NotificationDrawer() {
   const [notifications, setnotifications] = useState<notificationsProps["notifications"]>(["Alert", "Bookings", "Alert", "Bookings"])
  return (
    <React.Fragment>
        <Drawer anchor="right" open={true} >
          <Toolbar />
          <NotificationItems notifications={notifications} setnotifications={setnotifications}/>
        </Drawer>
    </React.Fragment>
  );
}