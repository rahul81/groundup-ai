import React, { useState, } from 'react'
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import NotificationItem from "./NotificationItem/NotificationItem";
import { Toolbar, Typography } from "@mui/material";
import './notificationdrawer.scss'

interface NotificationsProps {
  notifications: string[],
  removeNotification: React.Dispatch<React.SetStateAction<Array<string>>>
}

const NotificationItems: React.FC<NotificationsProps> = ({ notifications, removeNotification }) => (
  <Box role="presentation"  >
    <List style={{ width: "21.25rem" }}>
      {notifications.length != 0 ? notifications.map((text, index) => (
        <NotificationItem key={index} removeNotification={removeNotification}
          notifications={notifications}
          index={index} category={text} message="Idling detected at Crane A, Zone A" time="1 Hr ago" />
      ))
        :
        <Box className="no-notification-box"  >
          <Typography m={5} className="heading" variant="h5" component="h2">No notifications</Typography>
          <img className="notification-no-img" alt="no-notification" src="/assets/svg/notebook.svg" />
        </Box>
      }
    </List >
  </Box >
);

export default function NotificationDrawer() {
  const [notifications, removeNotification] = useState<NotificationsProps["notifications"]>(["Alert", "Bookings", "Alert", "Bookings"])
  return (
    <React.Fragment>
      <Drawer anchor="right" open={true} >
        <Toolbar />
        <NotificationItems notifications={notifications} removeNotification={removeNotification} />
      </Drawer>
    </React.Fragment>
  );
}