const express = require("express");
const path = require("path");
const cors = require("cors");
const mysql = require("mysql");
const bodyParser = require("body-parser");

const app = express();
/**
 * App and connection setup
 */
app.use(
  cors({
    origin: "*",
  }),
  express.json(),
  express.static("static"),
  // bodyParser.urlencoded(),
  bodyParser.urlencoded({ extended: true })
);

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "magisdb",
  multipleStatements: true,
});

/**
 * Helper functions
 */
const sampmsg = { message: "ok" };

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

function query_response(res, err, result) {
  if (err) send_error(res, err);
  else res.status(200).send(result);
}

/**
 * Pages
 */
app.get("/", (req, res) => {
  send_file(res, "./static/index.html");
});

app.get("/flights", (req, res) => {
  send_file(res, "./static/flights.html");
});

app.get("/book", (req, res) => {
  send_file(res, "./static/booking.html");
});

app.get("/book/flight/:id", (req, res) => {
  send_file(res, "./static/booking/forms.html");
});

app.get("/book/success/:id", (req, res) => {
  send_file(res, "./static/booking/success.html");
});

app.get("/about", (req, res) => {
  send_file(res, "./static/about.html");
});

app.get("/admin", (req, res) => {
  send_file(res, "./static/admin.html");
});

app.get("/admin/cities", (req, res) => {
  send_file(res, "./static/admin/cities.html");
});

app.get("/admin/crew", (req, res) => {
  send_file(res, "./static/admin/crew.html");
});

app.get("/admin/passengers", (req, res) => {
  send_file(res, "./static/admin/passengers.html");
});

app.get("/error", (req, res) => {
  send_file(res, "./static/404.html");
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
    return send_error(res, "No name, email, or message!");
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
    (err, result) => query_response(res, err, result)
  );
});

app.get("/api/upcoming/arrivals", async (req, res) => {
  const ct_string = format_date(Date.now());

  db.query(
    "SELECT f.arrivetime time, r.destination city, f.code flight FROM flight f, route r WHERE f.arrivetime >= ? AND f.routeid = r.routeid ORDER BY f.arrivetime ASC LIMIT 3",
    [ct_string],
    (err, result) => query_response(res, err, result)
  );
});

/*
  getting flights

  SELECT f.code, r.origin, f.deptime, r.destination, f.arrivetime, TIMEDIFF(f.arrivetime, f.deptime) duration, f.cost
  FROM flight f, route r
  WHERE f.routeid = r.routeid
  AND (
    (f.deptime >= "2022-12-22 00:00:00" AND f.deptime < "2022-12-23 00:00:00")
    OR (f.arrivetime >= "2022-12-22 00:00:00" AND f.arrivetime < "2022-12-23 00:00:00")
  )
  ORDER BY LEAST(f.deptime, f.arrivetime) ASC;

  SELECT f.code, r.origin, f.deptime, r.destination, f.arrivetime, TIMEDIFF(f.arrivetime, f.deptime) duration, f.cost
  FROM flight f, route r
  WHERE f.routeid = r.routeid
  AND (
    (f.deptime >= "2022-12-22 00:00:00" AND f.deptime < "2022-12-23 00:00:00")
    OR (f.arrivetime >= "2022-12-22 00:00:00" AND f.arrivetime < "2022-12-23 00:00:00")
  )
  ORDER BY LEAST(f.deptime, f.arrivetime) ASC;

  SELECT f.code, CONCAT(r.origin, ", ", c1.country) origin, f.deptime, CONCAT(r.destination, ", ", c2.country) destination, f.arrivetime, f.cost
  FROM flight f, route r, city c1, city c2
  WHERE f.routeid = r.routeid
  AND (
    (f.deptime >= "2010-01-01 00:00:00" AND f.deptime < "2010-01-02 00:00:00")
    OR (f.arrivetime >= "2010-01-01 00:00:00" AND f.deptime < "2010-01-02 00:00:00")
  )
  AND r.origin = "Manila"
  AND r.origin = c1.cityname
  AND r.destination = "Beijing"
  AND r.destination = c2.cityname
  ORDER BY LEAST(f.deptime, f.arrivetime) ASC
*/
app.get("/api/flights/:mode/:year/:month/:day", (req, res) => {
  if (!["all", "departures", "arrivals"].includes(req.params.mode)) {
    return send_error(res, "Invalid mode");
  }

  let c = new Date(
    req.params.year,
    req.params.month - 1,
    req.params.day,
    0,
    0,
    0
  );
  let n = new Date(
    req.params.year,
    req.params.month - 1,
    req.params.day,
    0,
    0,
    0
  );
  n.setDate(n.getDate() + 1);

  let cdate = format_date(c);
  let ndate = format_date(n);

  let query =
    "SELECT f.flightid id, f.code, r.origin origincity, c1.country origincountry, f.deptime, r.destination destinationcity, c2.country destinationcountry, f.arrivetime, TIMEDIFF(f.arrivetime, f.deptime) duration, f.cost FROM flight f, route r, city c1, city c2 WHERE f.routeid = r.routeid AND (";
  let params = [];

  if (req.params.mode === "departures" || req.params.mode === "all") {
    query += "(f.deptime >= ? AND f.deptime < ?)";
    if (req.params.mode === "all") query += " OR ";
    params.push(cdate, ndate);
  }

  if (req.params.mode === "arrivals" || req.params.mode === "all") {
    query += "(f.arrivetime >= ? AND f.arrivetime < ?)";
    params.push(cdate, ndate);
  }

  query += ")";

  if (req.query.from) {
    query += " AND r.origin = ?";
    params.push(req.query.from);
  }

  if (req.query.to) {
    query += " AND r.destination = ?";
    params.push(req.query.to);
  }

  query +=
    " AND r.origin = c1.cityname AND r.destination = c2.cityname ORDER BY LEAST(f.deptime, f.arrivetime) ASC";

  db.query(query, params, (err, result) => query_response(res, err, result));
});

app.get("/api/flight/:id", (req, res) => {
  db.query(
    "SELECT f.flightid id, f.code, r.origin origincity, c1.country origincountry, f.deptime, r.destination destinationcity, c2.country destinationcountry, f.arrivetime, TIMEDIFF(f.arrivetime, f.deptime) duration, f.cost FROM flight f, route r, city c1, city c2 WHERE f.routeid = r.routeid AND f.flightid = ? AND r.origin = c1.cityname AND r.destination = c2.cityname",
    [req.params.id],
    (err, result) => query_response(res, err, result)
  );
});

app.post("/api/book/:flightid/:passengerid", (req, res) => {
  db.query(
    "INSERT INTO FLIGHTBOOKING(bookingdate, totalcost, passengerid) VALUES (?, ?, ?)",
    [format_date(Date.now()), 300, req.params.passengerid],
    (err, result) => query_response(res, err, result)
  );
});

app.get("/api/cities", (req, res) => {
  db.query("SELECT * FROM city c ORDER BY country ASC", [], (err, result) =>
    query_response(res, err, result)
  );
});

app.post("/api/city", (req, res) => {
  db.query(
    "INSERT INTO city(cityname, country) VALUES (?, ?)",
    [req.body.cityname, req.body.country],
    (err, result) => query_response(res, err, result)
  );
});

app.get("/api/passengers", (req, res) => {
  db.query(
    'SELECT CONCAT(fname, " ", middleinitial, ". ", lname) name, gender, birthdate FROM passenger ORDER BY lname ASC, fname ASC, middleinitial ASC',
    [],
    (err, result) => query_response(res, err, result)
  );
});

app.get("/api/passenger", (req, res) => {
  db.query(
    "SELECT * FROM passenger WHERE fname = ? AND middleinitial = ? AND lname = ? AND birthdate = ?",
    [
      req.query.firstname,
      req.query.middleinitial,
      req.query.lastname,
      req.query.birthdate,
    ],
    (err, result) => query_response(res, err, result)
  );
});

app.post("/api/passenger", (req, res) => {
  db.query(
    "INSERT INTO passenger(fname, lname, middleinitial, gender, birthdate) VALUES (?, ?, ?, ?, ?)",
    [
      req.body.firstname,
      req.body.lastname,
      req.body.middleinitial,
      req.body.gender,
      req.body.birthdate,
    ],
    (err, result) => query_response(res, err, result)
  );
});

app.get("/api/crew", (req, res) => {
  if (req.query.flightcode) {
    db.query(
      'SELECT CONCAT(c.fname, " ", c.middleinitial, ". ", c.lname) name, c.role, f.code, r.origin origincity, c1.country origincountry, f.deptime, r.destination destinationcity, c2.country destinationcountry, f.arrivetime FROM crew_assignment ca, crew c, flight f, route r, city c1, city c2 WHERE ca.flightid = f.flightid AND ca.crewid = c.crewid AND f.routeid = r.routeid AND r.origin = c1.cityname AND r.destination = c2.cityname AND f.code = ?',
      [req.query.flightcode],
      (err, result) => query_response(res, err, result)
    );
  } else {
    db.query(
      'SELECT CONCAT(fname, " ", middleinitial, ". ", lname) name, role FROM crew ORDER BY lname ASC, fname ASC, middleinitial ASC',
      [],
      (err, result) => query_response(res, err, result)
    );
  }
});

app.post("/api/crew", (req, res) => {
  db.query(
    "INSERT INTO crew(fname, lname, middleinitial, role) VALUES (?, ?, ?, ?)",
    [
      req.body.firstname,
      req.body.lastname,
      req.body.middleinitial,
      req.body.role,
    ],
    (err, result) => query_response(res, err, result)
  );
});

/**
 * 404 errors
 */
app.get("/api/*", (req, res) => {
  set_json(res).send({
    message: "Endpoint does not exist",
  });
});

app.get("*", (req, res) => {
  send_file(res, "./static/404.html");
});

/**
 * Running the app
 */
const port = 3001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  console.log(`Open via the link: http://localhost:${port}`);
});
