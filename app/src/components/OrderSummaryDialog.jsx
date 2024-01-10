import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

import OrderSummary from "./OrderSummary";
import { useIngredients } from "../contexts/IngredientsContext";

function OrderSummaryDialog({ open, data }) {
  const { reset } = useIngredients();
  return (
    <Dialog open={open}>
      <DialogTitle>Products purchased</DialogTitle>
      <DialogContent>
        <OrderSummary />
      </DialogContent>

      <DialogTitle>Personal information</DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid xs={6} item>
            <Typography>Name: {data.name}</Typography>
          </Grid>
          <Grid xs={6} item>
            <Typography>Number: {data.number}</Typography>
          </Grid>
          <Grid xs={6} item>
            <Typography>Email: {data.email}</Typography>
          </Grid>
          <Grid xs={6} item>
            <Typography>Address: {data.address}</Typography>
          </Grid>
          <Grid xs={6} item>
            <Typography>Notes: {data.notes}</Typography>
          </Grid>
        </Grid>
      </DialogContent>

      <DialogTitle align="center" variant="h4">
        Delivery is on its way!
      </DialogTitle>
      <DialogTitle align="center" variant="h4">
        Thank you!
      </DialogTitle>
      <DialogActions>
        <Button to="/" component={Link} onClick={reset}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default OrderSummaryDialog;
