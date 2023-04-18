import express from "express";
import { fetchAll } from "../controller/food-controller";
const router = express.Router();

router.get("/", fetchAll);

export default router;
