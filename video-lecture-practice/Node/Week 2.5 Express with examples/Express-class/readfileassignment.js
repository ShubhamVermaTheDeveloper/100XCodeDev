const fs = require("fs");
const express = require("express");

const app = express();

app.get("/", function (req, res) {
  fs.readFile();
});
