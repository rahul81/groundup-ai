import { Box } from "@mui/system";
import React, { useState } from "react";
import "./notificationitem.scss";
import CloseIcon from "@mui/icons-material/Close";
import { Typography } from "@mui/material";
import { getTokenFirebase, onMessageListener } from "../../../../firebase";

interface NotificationItemProps {
  category: string;
  time: string;
  message: string;
  index: number,
  removeNotification: React.Dispatch<React.SetStateAction<Array<string>>>
  notifications: string[],
};

function NotificationItem({ category, time, message, index, removeNotification, notifications }: NotificationItemProps) {
  const [isTokenFound, setTokenFound] = useState(false);
  getTokenFirebase(setTokenFound);

  onMessageListener().then(payload => {
    console.log(payload);
    console.log('payload');
  }).catch(err => console.log('failed: ', err));

  return (
    <React.Fragment>
      <Box className="notification-item">
        {isTokenFound && <h1> Notification permission enabled 👍🏻 </h1>}
        {!isTokenFound && <h1> Need notification permission ❗️ </h1>}
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
