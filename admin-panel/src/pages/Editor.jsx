import { Box } from "@mui/material";

import AppHeader from "../components/AppHeader";
import EditorList from "../components/EditorList";

function Editor() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      sx={{
        height: "100vh",
      }}
    >
      <AppHeader />
      <EditorList />
    </Box>
  );
}

export default Editor;
