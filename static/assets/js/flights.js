let c_mode;

function onFilterClick(mode = null) {
  if (mode) c_mode = mode;

  let buttons = document.querySelectorAll("#flight-type button");
  buttons.forEach((b) => {
    b.classList.remove("active");
    if (b.id == c_mode) b.classList.add("active");
  });

  updateTable();
}

function updateTable() {
  const mode = {
    "all-flights": "all",
    "departures-only": "departures",
    "arrivals-only": "arrivals",
  }[c_mode];

  let date = new Date(document.querySelector("#search-flight #date").value);

  let url = `/api/flights/${mode}/${date.getFullYear()}/${
    date.getMonth() + 1
  }/${date.getDate()}`;

  let from = document.querySelector("#search-flight #from").value.trim();
  let to = document.querySelector("#search-flight #to").value.trim();

  if (from) url += `?from=${from}`;
  if (to) {
    if (from) url += "&";
    else url += "?";

    url += `to=${to}`;
  }

  fetch(url)
    .then(stat)
    .then(json)
    .then((data) => {
      // empty out schedule
      const board = document.querySelector("#flight-schedule");
      board.innerHTML = "";

      if (data.length === 0) {
        let text = document.createElement("p");
        text.innerText = "No flights found";

        board.append(text);
      }

      data.forEach((flight) => {
        // row
        let row = document.createElement("div");
        row.classList.add("table-row");

        // code
        let code = document.createElement("p");
        code.classList.add("code");
        code.innerText = flight.code;

        // origin
        let origin = document.createElement("p");
        origin.classList.add("city");
        origin.innerText = `${flight.origincity}, ${flight.origincountry}`;

        // departure time
        let deptime = document.createElement("p");
        deptime.classList.add("time");
        deptime.innerHTML = `${format_date(
          flight.deptime,
          "mmm dd, YYYY"
        )}<br />${format_time(flight.deptime)}`;

        // airplane
        let airplane = document.createElement("img");
        airplane.src = "/assets/images/airplane-45-black.svg";

        // arrival time
        let arrivetime = document.createElement("p");
        arrivetime.classList.add("time");
        arrivetime.innerHTML = `${format_date(
          flight.arrivetime,
          "mmm dd, YYYY"
        )}<br />${format_time(flight.arrivetime)}`;

        // destination
        let destination = document.createElement("p");
        destination.classList.add("city");
        destination.innerText = `${flight.destinationcity}, ${flight.destinationcountry}`;

        // duration
        let duration = document.createElement("p");
        duration.classList.add("duration");
        duration.innerText = flight.duration;

        // cost
        let cost = document.createElement("p");
        cost.classList.add("cost");
        cost.innerText = `$${flight.cost}`;

        // adding all
        row.append(
          code,
          origin,
          deptime,
          airplane,
          arrivetime,
          destination,
          duration,
          cost
        );
        board.appendChild(row);
      });
    })
    .catch((err) => {
      const board = document.querySelector("#flight-schedule");
      board.innerHTML = "";

      let text = document.createElement("p");
      text.innerText = "An error has occurred";

      board.append(text);

      showNotification(err);
    });
}

function init() {
  // set date
  const date_elem = document.querySelector("#search-flight #date");
  date_elem.value = new Date().toISOString().substring(0, 10);

  // show all flights
  onFilterClick("all-flights");
}
