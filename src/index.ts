import express, { Request, Response } from "express";
import bodyParser from "body-parser";
const app = express();
const port = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello Alex");
});
app.listen(port, () => {
  console.log("start");
});
