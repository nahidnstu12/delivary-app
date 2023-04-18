import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import "./db";
import "./routes";
import foodRouter from "./routes/food-router";
import cartRouter from "./routes/cart-router";

dotenv.config();

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

const port = process.env.PORT;

// router
app.use("/foods", foodRouter);
app.use("/carts", cartRouter);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
