import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import "./notificationdrawer.scss";

import NotificationItem from "./NotificationItem";
import { Toolbar } from "@mui/material";

type Anchor = "top" | "left" | "bottom" | "right";

export default function NotificationDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (event.type === "keydown" && ((event as React.KeyboardEvent).key === "Tab" || (event as React.KeyboardEvent).key === "Shift")) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor: Anchor) => (
    <Box sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }} role="presentation" onClick={toggleDrawer(anchor, false)} onKeyDown={toggleDrawer(anchor, false)}>
      <List style={{ width: "340px" }}>
        {["Alert", "Bookings", "Alert", "Bookings"].map((text, index) => (
          <NotificationItem category="Alert" message="Idling detected at Crane A, Zone A" time="1 Hr ago" />
        ))}
      </List>
    </Box>
  );

  return (
    <React.Fragment>
      <div className="notification-drawer">
        <Drawer anchor="right" open={true} onClose={toggleDrawer("top", false)}>
          <Toolbar />
          {list("top")}
        </Drawer>
      </div>
    </React.Fragment>
  );
}
