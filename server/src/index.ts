import express, { Express, Request, Response } from "express";
import cors from 'cors';
const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.json({msg: "alive"});
});

app.get("/users", async (req: Request, res: Response) => {
  const users = [
    {name: "halil", age: 23},
    {name: "kemal", age: 34},
    {name: "bilal", age: 67},
  ]
  res.json(users);
});

app.listen(3000, () => {
  console.log("App running on port 3000");
});
