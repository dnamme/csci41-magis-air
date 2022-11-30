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
function set_json(res) {
  res.status(200).setHeader("content-type", "application/json");
  return res;
}

function set_error(res, msg = "") {
  res.status(400).setHeader("content-type", "application/json").send({
    message: msg,
  });
  return res;
}

app.post("/api/message", (req, res) => {
  if (!req.query.name || !req.query.email || !req.query.message) {
    set_error(res, "No name, email, or message!");
  } else {
    set_json(res).send({
      name: req.query.name,
      email: req.query.email,
      message: req.query.message,
    });

    console.log(`Message from ${req.query.name} (${req.query.email}):`);
    console.log(req.query.message);
  }
});

app.get("/api/upcoming-flights", (req, res) => {
  set_json(res).send(sampmsg);
});

app.get("/api/flights/:mode/:year/:month/:day/:from/:to", (req, res) => {
  // mode = 0b01 = 1 = arrivals only
  // mode = 0b10 = 2 = departures only
  // mode = 0b11 = 3 = both departures and arrivals
  set_json(res).send({
    mode: req.params.mode,
    from: req.params.from,
    to: req.params.to,
    year: req.params.year,
    month: req.params.month,
    day: req.params.day,
  });

  /*

  SELECT ... FROM ... WHERE
    (
      ARRIVAL DATE IS IN RANGE OF DATE
      CITY ID = :from // add if :from is not null
    )
    OR
    (
      DEPARTURE DATE IS IN RANGE OF DATE
      CITY ID = :to // add if :to is not null
    )

  SELECT ... FROM ... WHERE
    ()

  SELECT ... FROM ... WHERE
    ()
    AND
    ()

  */
});

app.get("/api/flight/:id", (req, res) => {
  set_json(res).send({
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
