const express = require("express");
const app = express();

const path = require("path");
const cors = require("cors");

const mysql = require("mysql");
const { send } = require("process");

/**
 * App and connection setup
 */
app.use(
  cors({
    origin: "*",
  }),
  express.json(),
  express.static("static")
);

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "magisdb",
});

/*
// this is all sample code
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
*/

const sampmsg = { message: "ok" };

/**
 * Helper functions
 */
function set_json(res) {
  res.status(200).setHeader("content-type", "application/json");
  return res;
}

function send_error(res, msg = "") {
  res.status(400).setHeader("content-type", "application/json").send({
    message: msg,
  });
  return res;
}

function send_file(res, dir) {
  res.status(200).sendFile(path.join(__dirname, dir));
  return res;
}

function format_date(raw, hr = null, min = null, sec = null) {
  let dt = new Date(raw);

  return `${dt.getFullYear()}-${(dt.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${dt.getDate().toString().padStart(2, "0")} ${
    hr === null ? dt.getHours().toString().padStart(2, "0") : hr
  }:${min === null ? dt.getMinutes().toString().padStart(2, "0") : min}:${
    sec === null ? dt.getSeconds().toString().padStart(2, "0") : sec
  }`;
}

/**
 * Pages
 */
app.get("/", (req, res) => {
  send_file(res, "./static/index.html");
});

app.get("/routes", (req, res) => {
  send_file(res, "./static/routes.html");
});

app.get("/flights", (req, res) => {
  send_file(res, "./static/flights.html");
});

app.get("/booking", (req, res) => {
  send_file(res, "./static/booking.html");
});

app.get("/about", (req, res) => {
  send_file(res, "./static/about.html");
});

app.get("/admin", (req, res) => {
  send_file(res, "./static/admin.html");
});

/**
 * API
 */

app.post("/api/message", (req, res) => {
  let key = null;

  if (req.query.name && req.query.email && req.query.message) {
    key = "query";
  } else if (req.body.name && req.body.name && req.body.message) {
    key = "body";
  } else {
    send_error(res, "No name, email, or message!");
    return;
  }

  set_json(res).send({
    name: req[key].name,
    email: req[key].email,
    message: req[key].message,
  });

  console.log(
    `Message from ${req[key].name} (${req[key].email}): ${req[key].message}`
  );
});

/*
  getting three next flights

  SELECT f.flightid, f.routeid, f.deptime, f.arrivetime, f.cost, r.origin, r.destination, r.flighttype
  FROM flight f, route r
  WHERE f.deptime >= "2022-12-02 02:30:57"
  AND f.routeid = r.routeid
  ORDER BY f.deptime ASC
  LIMIT 3;

  SELECT f.deptime time, r.origin city, f.code flight
  FROM flight f, route r
  WHERE f.deptime >= "2022-12-02 02:30:57"
  AND f.routeid = r.routeid
  ORDER BY f.deptime ASC
  LIMIT 3;
*/

app.get("/api/upcoming/departures", async (req, res) => {
  const ct_string = format_date(Date.now());

  db.query(
    "SELECT f.deptime time, r.origin city, f.code flight FROM flight f, route r WHERE f.deptime >= ? AND f.routeid = r.routeid ORDER BY f.deptime ASC LIMIT 3",
    [ct_string],
    (err, result) => {
      if (err) console.log(err);
      else res.status(200).send(result);
    }
  );
});

app.get("/api/upcoming/arrivals", async (req, res) => {
  const ct_string = format_date(Date.now());

  db.query(
    "SELECT f.arrivetime time, r.destination city, f.code flight FROM flight f, route r WHERE f.arrivetime >= ? AND f.routeid = r.routeid ORDER BY f.arrivetime ASC LIMIT 3",
    [ct_string],
    (err, result) => {
      if (err) console.log(err);
      else res.status(200).send(result);
    }
  );
});

// todo
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

  let query = "SELECT ... FROM ...";
  if (req.params.mode == 3) {
    query = "";
  } else {
    //
  }

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

// todo
app.get("/api/flight/:id", (req, res) => {
  set_json(res).send({
    id: req.params.id,
  });
});

/**
 * Running the app
 */
const port = 3001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  console.log(`Open via the link: http://localhost:${port}`);
});
