const express = require("express");
const app = express();

const path = require("path");
const cors = require("cors");

const mysql = require("mysql");
// this is all sample code
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "booksdb",
});

app.get("/api/test", (req, res) => {
  db.query("SELECT * FROM book", [], (err, result) => {
    if (err) console.log(err);
    res.send(result);
  });
});

app.get("/api/test/:category", (req, res) => {
  db.query(
    "SELECT * FROM book WHERE category=?",
    [req.params.category],
    (err, result) => {
      if (err) console.log(err);
      res.status(200);
      res.send(result);
      res.end();
    }
  );
});

app.get("/api/html", (req, res) => {
  db.query("SELECT * FROM author", [], (err, result) => {
    if (err) console.log(err);
    res.send(result);
  });
});

app.post("/api/a", (req, res) => {
  // res.render("test2", { key: "hi" });
  // res.sendFile(path.join(__dirname, "./test2.html"));

  res.send(
    JSON.stringify({
      message: "good!",
    })
  );
});
// end of sample code

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
