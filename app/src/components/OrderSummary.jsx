import { Box, Chip, Stack, Typography } from "@mui/material";

import { capitalizeFirstLetterOnly } from "../utils/helpers";
import { useIngredients } from "../contexts/IngredientsContext";

function OrderSummary() {
  const { totalPrice, orderList } = useIngredients();

  return (
    <Stack direction="column">
      <Stack direction="row" useFlexGap flexWrap="wrap" gap={2}>
        {orderList.map((item) => (
          <Chip
            key={item.name + item.id}
            variant="outlined"
            label={`${item.amount}x ${capitalizeFirstLetterOnly(
              item.name
            )} - ${(item.price * item.amount).toFixed(2)}$`}
          />
        ))}
      </Stack>
      <Stack direction="row" marginTop={2}>
        <Typography>Total Price: {totalPrice.toFixed(2)}$</Typography>
        <Box flexGrow={1} />
      </Stack>
    </Stack>
  );
}

export default OrderSummary;
