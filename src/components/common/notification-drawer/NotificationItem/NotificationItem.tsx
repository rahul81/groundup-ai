import { Box } from "@mui/system";
import React, { FC } from "react";
import "./notificationitem.scss";
import CloseIcon from "@mui/icons-material/Close";
import { Typography } from "@mui/material";


interface NotificationItemProps {
  category: string;
  time: string;
  message: string;
  index: number,
  setnotifications: React.Dispatch<React.SetStateAction<Array<string>>>
  notifications: string[],
};

function NotificationItem({ category, time, message, index, setnotifications, notifications }: NotificationItemProps) {

  const removeNotification = (index: number) => {
    console.log(notifications)
    let currentArray = notifications;
    currentArray.splice(index, 1)
    return currentArray
  }


  return (
    <React.Fragment>
      <div className="notification-sidebar-items">
        <Box className="notification-item">
          <div className="notification-drawer-category">
            <Typography className="heading" variant="caption" >{category}</Typography>
            <div className="notification-close-icon">
              <CloseIcon onClick={() => { setnotifications(removeNotification(index)) }} fontSize="small" />
            </div>
          </div>
          <Typography className="heading" variant="subtitle2" >{message}</Typography>
          <Typography className="heading" variant="caption" component="h2" >{time}</Typography>
        </Box>
      </div>
    </React.Fragment>
  );
}

export default NotificationItem;
