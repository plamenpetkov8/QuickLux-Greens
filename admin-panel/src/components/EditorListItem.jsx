import { useState } from "react";
import { Fab, Grid, TextField } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";

import { useEditor } from "../contexts/EditorContext";
import { hasMaximum2DecPlaces } from "../utils/helpers";

function EditorListItem({ data }) {
  const [name, setName] = useState(data.name);
  const [price, setPrice] = useState(data.price);
  const [pricePer, setPricePer] = useState(data.pricePer);
  const { removeItem, updateItem } = useEditor();

  function handleUpdateName(e) {
    const newValue = e.target.value;
    setName(newValue);
    updateItem(data.id, "name", newValue);
  }

  function handleUpdatePrice(e) {
    const newValue = e.target.value;
    if (newValue && !hasMaximum2DecPlaces(newValue)) {
      return;
    }

    setPrice(newValue);
    updateItem(data.id, "price", newValue);
  }

  function handleUpdatePricePre(e) {
    const newValue = e.target.value;
    setPricePer(newValue);
    updateItem(data.id, "pricePer", newValue);
  }

  return (
    <>
      <Grid container xs={11.5} display="flex" columnSpacing={2}>
        <Grid xs={4} item display="flex">
          <TextField
            required
            value={name}
            sx={{ flex: 1 }}
            onChange={handleUpdateName}
          />
        </Grid>
        <Grid xs={4} item display="flex">
          <TextField
            required
            type="number"
            // sx={{ display: "flex" }}
            sx={{ flex: 1 }}
            value={price}
            onChange={handleUpdatePrice}
          />
        </Grid>
        <Grid xs={4} item display="flex">
          <TextField
            sx={{ flex: 1 }}
            required
            value={pricePer}
            onChange={handleUpdatePricePre}
          />
        </Grid>
      </Grid>
      <Grid xs={0.5} sx={{ margin: "auto", textAlign: "start" }}>
        <Fab
          size="small"
          color="error"
          aria-label="delete"
          onClick={() => removeItem(data.id)}
        >
          <RemoveIcon />
        </Fab>
      </Grid>
    </>
  );
}

export default EditorListItem;
