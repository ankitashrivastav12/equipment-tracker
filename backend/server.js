const express = require("express");
const fs = require("fs");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const DATA_FILE = "./equipment.json";

const readData = () => JSON.parse(fs.readFileSync(DATA_FILE));
const writeData = (data) =>
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));

app.get("/api/equipment", (req, res) => {
  res.json(readData());
});

app.post("/api/equipment", (req, res) => {
  const data = readData();
  const newItem = { id: uuidv4(), ...req.body };
  data.push(newItem);
  writeData(data);
  res.status(201).json(newItem);
});

app.put("/api/equipment/:id", (req, res) => {
  const data = readData();
  const index = data.findIndex((e) => e.id === req.params.id);
  data[index] = { ...data[index], ...req.body };
  writeData(data);
  res.json(data[index]);
});

app.delete("/api/equipment/:id", (req, res) => {
  const data = readData().filter((e) => e.id !== req.params.id);
  writeData(data);
  res.json({ message: "Deleted" });
});

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
