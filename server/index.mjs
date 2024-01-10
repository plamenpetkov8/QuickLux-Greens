import express from "express";
import cors from "cors";
import "express-async-errors";
import ingredients from "./routes/ingredients.mjs";

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());

// Load the /posts routes
app.use("/ingredients", ingredients);

// start the Express server
app.listen(PORT, (test1, test2, test3) => {
  console.log(`Server is running on port: ${PORT}`);
});
