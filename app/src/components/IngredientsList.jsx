import { Grid } from "@mui/material";

import IngredientsListItem from "./IngredientsListItem";
import { useIngredients } from "../contexts/IngredientsContext";

function IngredientsList() {
  const { ingredients } = useIngredients();

  return (
    <Grid container spacing={2}>
      {ingredients.map((item) => (
        <IngredientsListItem key={item.id} item={item} />
      ))}
    </Grid>
  );
}

export default IngredientsList;
