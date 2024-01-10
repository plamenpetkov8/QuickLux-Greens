import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";

import OrderSummary from "./OrderSummary";
import OrderForm from "./OrderForm";

function CheckoutMain() {
  return (
    <>
      <Accordion defaultExpanded>
        <AccordionSummary>
          <Typography variant="h6">Order Summary</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <OrderSummary />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary>
          <Typography variant="h6">Order Details</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <OrderForm />
        </AccordionDetails>
      </Accordion>
    </>
  );
}

export default CheckoutMain;
