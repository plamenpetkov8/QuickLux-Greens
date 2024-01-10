import { Link } from "react-router-dom";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import IngredientsList from "./IngredientsList";
import { useIngredients } from "../contexts/IngredientsContext";

function MakeOrderContainer() {
  const { totalPrice } = useIngredients();

  return (
    <Container maxWidth="xxl">
      <IngredientsList />
      <Stack direction="row" gap={5} marginTop={5}>
        <Typography align="center" alignSelf="center" variant="h5">
          Total Sum: {totalPrice ? totalPrice.toFixed(2) : totalPrice}$
        </Typography>
        <Box flexGrow={1} />
        <Button
          component={Link}
          to="/checkout"
          size="large"
          variant="contained"
          endIcon={
            <AddShoppingCartIcon sx={{ transform: "scale(1)" }} color="white" />
          }
          sx={{
            gap: "5px",
            // fontSize: 24,
            borderRadius: "5px",
            fontWeight: 600,
          }}
        >
          Proceed to Checkout
        </Button>
      </Stack>
    </Container>
  );
}

export default MakeOrderContainer;
