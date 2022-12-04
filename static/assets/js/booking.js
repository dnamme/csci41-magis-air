function onFilterClick() {
  let from = document.querySelector("#filters #from").value.trim();
  let to = document.querySelector("#filters #to").value.trim();
  let date = new Date(document.querySelector("#filters #date").value);

  // if (!from || !to || !document.querySelector("#filters #date").value)
  if (!document.querySelector("#filters #date").value)
    return showNotification("Please fill up all the required fields");

  let url = `./api/flights/all/${date.getFullYear()}/${
    date.getMonth() + 1
  }/${date.getDate()}`;

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
      // empty out
      const board = document.querySelector("#results");
      board.innerHTML = "";

      if (data.length === 0) {
        let text = document.createElement("p");
        text.innerText = "No flights found";

        board.append(text);
      }

      data.forEach((flight) => {
        // row
        let row = document.createElement("a");
        row.href = `./book/flight/${flight.id}`;
        row.classList.add("table-row");

        // code
        let code = document.createElement("p");
        code.classList.add("code");
        code.innerText = flight.code;

        // origin
        let origin = document.createElement("p");
        origin.classList.add("city");
        origin.innerText = flight.origin;

        // departure time
        let deptime = document.createElement("p");
        deptime.classList.add("time");
        deptime.innerHTML = `${format_date(
          flight.deptime,
          "mmm dd, YYYY"
        )}<br />${format_time(flight.deptime)}`;

        // airplane
        let airplane = document.createElement("img");
        airplane.src = "./assets/images/airplane-45-black.svg";

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
        destination.innerText = flight.destination;

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

        // let anchor = document.createElement("a");
        // anchor.href = `./booking/flight/${flight.id}`;
        // anchor.append(row);
        // board.appendChild(anchor);
        board.appendChild(row);
      });
    });
}
