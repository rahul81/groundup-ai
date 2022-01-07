import React, { useState, Dispatch, useEffect } from 'react'
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import NotificationItem from "./NotificationItem/NotificationItem";
import { Toolbar, Typography } from "@mui/material";
import './notificationdrawer.scss'
import { RootState } from "../../../store/reducers";
import { NotificatioState } from "../../../store/reducers/notificationReducer";
import { useDispatch, useSelector } from "react-redux";

interface NotificationsProps {
  notifications: any[],
  removeNotification: React.Dispatch<React.SetStateAction<Array<string>>>
}

interface NotificationDrawerProps {
  openNotificationDrawer: boolean ;
  setopenNotificationDrawer: React.Dispatch<React.SetStateAction<boolean>>;
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

export default function NotificationDrawer(props: NotificationDrawerProps) {
  const dispatch = useDispatch();
  const { notification }: NotificatioState = useSelector((state: RootState) => state.notification)
  const [notificationContent, setnotificationContent] = useState();
  const showNotification = ()=>{
    console.log(notification)
  }

  useEffect(() => {
    setnotificationContent(notification.notification)
    console.log(notification)
  }, [notification])

  const [notifications, removeNotification] = useState<NotificationsProps["notifications"]>(["Alert", "Bookings", "Alert", "Bookings"])

  return (
    <React.Fragment>
      <Drawer anchor="right" open={props.openNotificationDrawer} onClose={() => { props.setopenNotificationDrawer(!props.openNotificationDrawer) }}>
        <Toolbar />
        <NotificationItems notifications={notifications} removeNotification={removeNotification} />
      </Drawer>
    </React.Fragment>
  );
}