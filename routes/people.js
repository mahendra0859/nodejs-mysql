const express = require("express");
const mysqlConnection = require("../db/connection");

const router = express.Router();

module.exports = router;

router.get("/", (req, res) => {
  mysqlConnection.query("SELECT * FROM people", (err, rows, fileds) => {
    if (err) res.status(500).json({ err });
    else res.json({ data: rows, fileds });
  });
});
