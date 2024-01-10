import { Box } from "@mui/material";

import AppHeader from "../components/AppHeader";
import MakeOrderContainer from "../components/MakeOrderContainer";

function Ingredients() {
  return (
    <Box sx={{ height: "100vh" }}>
      <AppHeader />
      <MakeOrderContainer />
    </Box>
  );
}

export default Ingredients;
