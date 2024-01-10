import { Box, Button, Grid, Stack } from "@mui/material";

import EditorListItem from "./EditorListItem";
import { useEditor } from "../contexts/EditorContext";

function EditorList() {
  const { ingredients, save, addEmptyItem } = useEditor();
  function handleSubmit(e) {
    e.preventDefault();

    save();
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{
          marginTop: 10,
          marginLeft: 10,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Grid container gap={2}>
          {ingredients.map((item) => (
            <EditorListItem key={item.id} data={item} />
          ))}
        </Grid>
        <Stack direction="row" marginTop={3} gap={2}>
          <Box flex={1} />
          <Button variant="contained" size="large" onClick={addEmptyItem}>
            Add
          </Button>
          <Button
            sx={{ marginRight: 2 }}
            variant="contained"
            size="large"
            type="submit"
          >
            Save
          </Button>
        </Stack>
      </form>
      <Box flex={1} />
    </>
  );
}

export default EditorList;
