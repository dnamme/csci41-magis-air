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
// end of sample code

const sampmsg = { message: "ok" };

/**
 * Pages
 */
app.get("/", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "./pages/index.html"));
});

app.get("/flights", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "./pages/flights.html"));
});

app.get("/routes", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "./pages/routes.html"));
});

/**
 * API
 */
app.get("/api/upcoming-flights", (req, res) => {
  res.status(200).setHeader("content-type", "application/json").send(sampmsg);
});

app.get("/api/flights/:year/:month/:day", (req, res) => {
  res.status(200).setHeader("content-type", "application/json").send({
    year: req.params.year,
    month: req.params.month,
    day: req.params.day,
  });
});

app.get("/api/flight/:id", (req, res) => {
  res.status(200).setHeader("content-type", "application/json").send({
    id: req.params.id,
  });
});

/**
 * Running the app
 */
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  console.log(`Open via the link: http://localhost:${port}`);
});
