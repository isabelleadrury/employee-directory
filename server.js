const express = require("express");
const app = express();
const { employees } = require("./app");

import app from "#app";
const PORT = 3000;

app.get("/", (request, response) => {
  response.send("Hello, Employees!");
});

app.get("/employees/:id", (req, res) => {
  console.log(typeof req.params.id);
  const employeeId = Number(req.params.id);
  const foundEmployee = employees.find(
    (employee) => employee.id === employeeId
  );
  if (!foundEmployee) {
    return res.status(404).json({ error: "Employee not found" });
  }
  res.json(foundEmployee);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
