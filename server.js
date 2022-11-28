const express = require("express");
const app = express();

const mysql = require("mysql");
// this is all sample code
const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "booksdb",
});

app.get("/test", (req, res) => {
  db.query("SELECT * FROM book", [], (err, result) => {
    if (err) console.log(err);
    res.send(result);
  });
});

app.get("/test/:category", (req, res) => {
  db.query(
    "SELECT * FROM book WHERE category=?",
    [req.params.category],
    (err, result) => {
      if (err) console.log(err);
      res.send(result);
    }
  );
});
// end of sample code

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
