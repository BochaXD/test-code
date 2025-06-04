
const express = require("express");
const app = express();

app.use(express.json());

app.get("/hello", (req, res) => {
  res.status(200).json({ message: "Hello World!" });
});

app.post("/sum", (req, res) => {
  const { a, b } = req.body;
  if (typeof a !== "number" || typeof b !== "number") {
    return res.status(400).json({ error: "Invalid input" });
  }
  res.json({ result: a + b });
});
function suma(a, b) {
  const resultado = a + b;
  return resultado;
}

module.exports = app;
