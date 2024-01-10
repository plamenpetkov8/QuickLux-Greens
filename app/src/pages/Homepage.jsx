import { Link } from "react-router-dom";
import { Box, Button, Stack, Typography } from "@mui/material";

import AppHeader from "../components/AppHeader";

function Homepage() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      sx={{
        height: "100vh",
      }}
    >
      <AppHeader />
      <Stack
        flexGrow={1}
        sx={{
          gap: "2.5rem",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundImage:
            'linear-gradient(rgba(36, 42, 46, 0.8), rgba(36, 42, 46, 0.8)),url("bg.png")',
        }}
      >
        <Typography
          variant="h1"
          sx={{ fontSize: "4.5rem", color: "white", fontWeight: 400 }}
        >
          Welcome to Salad Lab
        </Typography>
        <Typography
          variant="h2"
          sx={{ fontSize: "1.9rem", color: "white", fontWeight: 400 }}
        >
          Create your own fresh salad on the fly and have it delivered in no
          time
        </Typography>
        <Button
          component={Link}
          size="large"
          to="/ingredients"
          variant="contained"
          sx={{
            display: "inline-block",
            textDecoration: "none",
            fontSize: "1.6rem",
            fontWeight: 600,
            padding: "1rem 3rem",
            borderRadius: "5px",
          }}
        >
          Order Salad
        </Button>
      </Stack>
    </Box>
  );
}

export default Homepage;
