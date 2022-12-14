function onFilterClick() {
  let from = document.querySelector("#filters #from").value.trim();
  let to = document.querySelector("#filters #to").value.trim();
  let date = new Date(document.querySelector("#filters #date").value);

  if (!from || !to || !document.querySelector("#filters #date").value)
    // if (!document.querySelector("#filters #date").value)
    return showNotification("Please fill up all the required fields");

  let url = `/api/flights/all/${date.getFullYear()}/${
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

      document.querySelector("#results-wrapper").classList.add("active");

      if (data.length === 0) {
        let text = document.createElement("p");
        text.innerText = "No flights found";

        board.append(text);

        document
          .querySelector("#results-wrapper #flight-details #details")
          .classList.remove("active");
      }

      data.forEach((flight, i) => {
        if (i == 0) {
          document
            .querySelector("#results-wrapper #flight-details #details")
            .classList.add("active");

          document.querySelector("#results-wrapper #origin-city").innerText =
            flight.origincity;
          document.querySelector("#results-wrapper #origin-country").innerText =
            flight.origincountry;
          document.querySelector(
            "#results-wrapper #destination-city"
          ).innerText = flight.destinationcity;
          document.querySelector(
            "#results-wrapper #destination-country"
          ).innerText = flight.destinationcountry;
        }

        // row
        let row = document.createElement("a");
        row.href = `/book/flight/${flight.id}`;
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
      showNotification(err);
      console.log(err);
    });
}
