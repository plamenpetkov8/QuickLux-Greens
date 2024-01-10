import { useState } from "react";
import { Box, Button, Stack, TextField } from "@mui/material";

import OrderSummaryDialog from "./OrderSummaryDialog";

function OrderForm() {
  const [openModal, setOpenModal] = useState(false);

  // Make all input elements controlled
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");

  // Derived state
  const data = { name, number, email, address, notes };

  function handleSubmit(e) {
    e.preventDefault();

    if (e.type === "submit") {
      setOpenModal(true);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Stack direction="column" gap={5}>
          <TextField
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            required
            label="Name"
            placeholder="Enter your name"
          />
          <TextField
            value={number}
            onChange={(e) => {
              setNumber(e.target.value);
            }}
            required
            type="tel"
            inputProps={{ pattern: "\\d{10}" }}
            label="Mobile Number"
            placeholder="Enter your mobile number"
          />
          <TextField
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            type="email"
            label="Email"
            placeholder="Enter your email"
          />
          <TextField
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
            label="Address"
            placeholder="Enter your delivery address"
          />
          <TextField
            value={notes}
            onChange={(e) => {
              setNotes(e.target.value);
            }}
            multiline={true}
            label="Additional notes"
            placeholder="Enter your additional notes"
          />
          <Stack display="flex" flexDirection="row">
            <Box flexGrow={1} />
            <Button variant="contained" type="submit">
              Submit Order
            </Button>
          </Stack>
        </Stack>
      </form>
      <OrderSummaryDialog open={openModal} data={data} />
    </>
  );
}

export default OrderForm;
