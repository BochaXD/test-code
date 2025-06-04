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
  return a + b;
}

function evaluar(valor) {
  if (valor > 0) return "positivo";
  else if (valor < 0) return "negativo";
  else return "cero";
}

module.exports = { app, suma, evaluar };
