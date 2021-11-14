import { Box } from "@mui/system";
import React from "react";
import "./notificationitem.scss";

type NotificationItemProps = {
  category: string;
  time: string;
  message: string;
};

function NotificationItem({ category, time, message }: NotificationItemProps) {
  return (
    <React.Fragment>
      <div className="notification-sidebar-items">
        <Box className="notification-item">
          <p>{category}</p>
          <p>{message}</p>
          <p className="notification-times-ago">{time}</p>
        </Box>
      </div>
    </React.Fragment>
  );
}

export default NotificationItem;
