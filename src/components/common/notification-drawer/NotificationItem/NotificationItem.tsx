import { Box } from "@mui/system";
import React, { useState } from "react";
import "./notificationitem.scss";
import CloseIcon from "@mui/icons-material/Close";
import { Typography } from "@mui/material";
import { bindActionCreators } from "redux";
import { useDispatch } from 'react-redux';
import { notificationActionCreator } from "../../../../store/action-creators";

interface NotificationItemProps {
  category: string;
  time: string;
  message: string;
  index: number,
  notifications: string[],
};

function NotificationItem({ category, time, message, index, notifications }: NotificationItemProps) {

  const dispatch = useDispatch()
  const { resetNotification } = bindActionCreators(notificationActionCreator, dispatch)

  const removeNotification = () => {

    const temp = notifications.filter((_, idx) => idx !== index)

    console.log("filtered array >> ", temp)
    resetNotification(temp)
  }

  return (
    <React.Fragment>
      <Box className="notification-item">
        <div className="notification-drawer-category">
          <Typography className="notification-drawer-category heading" variant="caption" >{category}</Typography>
          <div className="notification-close-icon">
            <CloseIcon  fontSize="small" onClick={() => removeNotification()}/>
          </div>
        </div>
        <Typography className="heading" variant="subtitle2" >{message}</Typography>
        <Typography className="heading" variant="caption" component="h2" >{time}</Typography>
      </Box>
    </React.Fragment>
  );
}

export default NotificationItem;
