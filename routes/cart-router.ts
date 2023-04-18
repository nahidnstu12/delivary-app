import express from "express";
import { create, fetchAll } from "../controller/cart-controller";
const router = express.Router();

router.get("/", fetchAll);
router.post("/", create);

export default router;
