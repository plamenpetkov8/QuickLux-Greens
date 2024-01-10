import { Box } from "@mui/material";
import AppHeader from "../components/AppHeader";
import CheckoutMain from "../components/CheckoutMain";

function Checkout() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      sx={{
        height: "100vh",
      }}
    >
      <AppHeader />
      <CheckoutMain />
    </Box>
  );
}

export default Checkout;
