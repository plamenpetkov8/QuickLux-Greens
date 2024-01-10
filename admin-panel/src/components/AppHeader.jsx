import { Link } from "react-router-dom";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";

import { useAuth } from "../contexts/FakeAuthContext";
function AppHeader() {
  const { logout } = useAuth();

  return (
    <header>
      <AppBar
        edge="start"
        component="nav"
        color="primary"
        position="relative"
        aria-label="home button"
      >
        <Toolbar>
          <Typography variant="h6" color="white" component="div">
            Admin Panel
          </Typography>
          <Box flexGrow={1} />
          <Button to="/" variant="content" component={Link} onClick={logout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </header>
  );
}

export default AppHeader;
