import express from "express";

const app = express();
const PORT = 8000;

app.use(express.json());

app.get("/hello", (req, res) => res.send("Hello!"));

app.post("/hell", (req, res) => res.send(`Hello ${req.body.name}`));

app.listen(8000, () => {
  console.log(`Port is listen at ${PORT}!`);
});
