import express from "express";
import cors from "cors";
const app = express();
app.use(cors());

app.get("/getTodos", (req, res) => {
  const todos = {
    title: "heyhey",
    desc: "heyheydesc",
    id: 1,
  };
  res.json(todos);
});

app.listen(3000);
