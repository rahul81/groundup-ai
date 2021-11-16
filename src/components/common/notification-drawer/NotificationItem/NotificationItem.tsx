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
  removeNotification: React.Dispatch<React.SetStateAction<Array<string>>>
  notifications: string[],
};

function NotificationItem({ category, time, message, index, removeNotification, notifications }: NotificationItemProps) {

  return (
    <React.Fragment>
        <Box className="notification-item">
          <div className="notification-drawer-category">
            <Typography className="notification-drawer-category heading" variant="caption" >{category}</Typography>
            <div className="notification-close-icon">
              <CloseIcon onClick={() => {
                removeNotification(notifications.filter((_, i) => i !== index))
              }} fontSize="small" />
            </div>
          </div>
          <Typography className="heading" variant="subtitle2" >{message}</Typography>
          <Typography className="heading" variant="caption" component="h2" >{time}</Typography>
        </Box>
    </React.Fragment>
  );
}

export default NotificationItem;
