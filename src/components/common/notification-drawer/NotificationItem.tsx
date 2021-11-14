import { Box } from "@mui/system";
import React from "react";
import "./notificationitem.scss";
import CloseIcon from "@mui/icons-material/Close";
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
          <div className="notification-drawer-category">
            <p>{category}</p>
            <div className="notification-close-icon">
              <CloseIcon fontSize="small" />
            </div>
          </div>
          <p>{message}</p>
          <p className="notification-times-ago">{time}</p>
        </Box>
      </div>
    </React.Fragment>
  );
}

export default NotificationItem;
