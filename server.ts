import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import "./db";


dotenv.config();

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

const port = process.env.PORT;

app.get('/', (req:any, res:any) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});