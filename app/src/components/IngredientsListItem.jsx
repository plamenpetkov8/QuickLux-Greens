import {
  Fab,
  Box,
  Grid,
  Card,
  CardMedia,
  Typography,
  CardContent,
  Stack,
} from "@mui/material";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import { useIngredients } from "../contexts/IngredientsContext";

function IngredientsListItem({ item }) {
  const [selected, setSelected] = useState(0);
  const { addToCart, removeFromCart } = useIngredients();
  const { id, name, price, pricePer } = item;

  function handleAdd() {
    setSelected((sel) => sel + 1);
    addToCart({ id, name, price });
  }

  function handleRemove() {
    setSelected((sel) => sel - 1);
    removeFromCart({ id, price });
  }

  return (
    <Grid xs={3} item onClick={handleAdd}>
      <Card sx={{ height: "100%", display: "flex", cursor: "pointer" }}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            flex: "1 0 auto",
          }}
        >
          <Typography component="div" variant="h5">
            {name}
          </Typography>
          <Typography variant="subtitle1" component="div">
            <strong>Price:</strong> {price}$/{pricePer}
          </Typography>
          <Box flexGrow={1} />

          {!selected ? null : (
            <Stack direction="row" gap={2}>
              <Fab
                size="small"
                aria-label="remove"
                onClick={(e) => {
                  handleRemove();
                  e.stopPropagation();
                }}
              >
                <RemoveIcon />
              </Fab>
              <Typography variant="h5">{selected}x</Typography>
              <Fab
                size="small"
                aria-label="add"
                onClick={(e) => {
                  handleAdd();
                  e.stopPropagation();
                }}
              >
                <AddIcon />
              </Fab>
            </Stack>
          )}
        </CardContent>
        <CardMedia
          component="img"
          image={`assets/${name.toLowerCase()}.png`}
          alt={`${name} image`}
          sx={{ flex: 1, transform: "scale(0.5)" }}
        />
      </Card>
    </Grid>
  );
}

export default IngredientsListItem;
