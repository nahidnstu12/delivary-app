//currently not used

import express from "express";
import foodRouter from "./routes/food-router";

const app = express();

app.use("/foods", foodRouter);
