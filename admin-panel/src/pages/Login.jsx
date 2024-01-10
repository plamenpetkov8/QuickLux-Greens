import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, FormControlLabel, Stack, TextField } from "@mui/material";

import { useAuth } from "../contexts/FakeAuthContext";
import AppHeader from "../components/AppHeader";

export default function Login() {
  // PRE-FILL FOR DEV PURPOSES
  const [email, setEmail] = useState("demoadmin@acme.com");
  const [password, setPassword] = useState("4pwd@1234mnbv");

  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (email && password) login(email, password);
  }

  useEffect(
    function () {
      if (isAuthenticated) navigate("/app", { replace: true });
    },
    [isAuthenticated, navigate]
  );

  return (
    <Box
      display="flex"
      flexDirection="column"
      sx={{
        height: "100vh",
      }}
    >
      <AppHeader />

      <form
        onSubmit={handleSubmit}
        style={{
          gap: "2rem",
          width: "100%",
          margin: "auto",
          display: "flex",
          borderRadius: "7px",
          flexDirection: "column",
        }}
      >
        <FormControlLabel
          label="Email address"
          labelPlacement="top"
          control={
            <TextField
              margin="dense"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              sx={{ width: "40%" }}
            />
          }
        />

        <FormControlLabel
          label="Password"
          labelPlacement="top"
          control={
            <TextField
              margin="dense"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              sx={{ width: "40%" }}
            />
          }
        />
        <Stack display="flex" flexDirection="row" width="70%">
          <Box flexGrow={1} />
          <Button size="large" variant="contained" type="primary">
            Login
          </Button>
        </Stack>
      </form>
    </Box>
  );
}
