import { Link } from "react-router-dom";
import { AppBar, Avatar, IconButton, Toolbar, Typography } from "@mui/material";

import HomeIcon from "./HomeIcon";

function AppHeader() {
  return (
    <header>
      <AppBar
        component="nav"
        edge="start"
        aria-label="home button"
        position="relative"
        color="primary"
      >
        <Toolbar>
          <IconButton
            component={Link}
            to="/"
            edge="start"
            disableRipple
            sx={{ mr: 2 }}
          >
            <HomeIcon fontSize="large" sx={{ color: "white" }} />
          </IconButton>
          <Typography
            variant="h6"
            color="white"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            QuickLux Greens
          </Typography>
          <Avatar
            // position="absolute"
            alt="Salad"
            src="salad.png"
            aria-label="application's logo"
            sx={{ width: 64, height: 64, marginTop: "-1%" }}
            // sx={{ width: 64, height: 64 }}
          />
        </Toolbar>
      </AppBar>
    </header>
  );
}

export default AppHeader;
