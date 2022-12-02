function allFlights() {
  let row = document.querySelectorAll(".row-wrapper");

  if (row != null) {
    for (let n = 0; n < row.length; n++) {
      row[n].innerHTML = "";
    }
  }

  let keys = ["All/2010/01/01"]; //to be changed

  let parent = document.querySelector("#flight-schedule #flight-rows");
  let loader = document.querySelector("#flight-schedule #flight-rows .blank");

  for (let i = 0; i < 1; i++) {
    fetch(`./api/flights/${keys[i].toLowerCase()}`)
      .then(json)
      .then((data) => {
        //add flight row wrapper??
        let flight_wrapper = document.createElement("div");
        flight_wrapper.classList.add("row-wrapper");

        for (let j = 0; j < data.length; j++) {
          //add flight row
          let flight_row = document.createElement("div");
          flight_row.classList.add("row");

          //flight code
          let code = document.createElement("p");
          code.classList.add("code");
          code.innerText = `${data[j].code}`;

          //origin country
          let origin = document.createElement("p");
          origin.classList.add("origin");
          origin.innerText = `${data[j].origin} `;

          //departing time
          let deptime = document.createElement("p");
          deptime.classList.add("depttime");
          deptime.innerText = `${format_time(data[j].deptime)}`;

          //airplane
          let airplane = document.createElement("img");
          airplane.src = "./assets/images/airplane-45-black.svg";

          //arriving time
          let arrivetime = document.createElement("p");
          arrivetime.classList.add("arrivetime");
          arrivetime.innerText = `${format_time(data[j].arrivetime)}`;

          //destination country
          let destination = document.createElement("p");
          destination.classList.add("destination");
          destination.innerText = `${data[j].destination} `;

          //city
          let cost = document.createElement("p");
          cost.classList.add("cost");
          cost.innerText = `${data[j].cost} `;

          flight_row.appendChild(code);
          flight_row.appendChild(origin);
          flight_row.appendChild(deptime);
          flight_row.appendChild(airplane);
          flight_row.appendChild(arrivetime);
          flight_row.appendChild(destination);
          flight_row.appendChild(cost);

          flight_wrapper.appendChild(flight_row);

          parent.insertBefore(flight_wrapper, loader);
        }
        // remove loader
        if (i == 1) parent.removeChild(loader);
      })
      .catch((err) => console.log(err));
  }
}

function allDepartures() {
  let row = document.querySelectorAll(".row-wrapper");

  if (row != null) {
    for (let n = 0; n < row.length; n++) {
      row[n].innerHTML = "";
    }
  }

  let keys = ["All/2010/01/01?from=Manila"]; //to be changed

  let parent = document.querySelector("#flight-schedule #flight-rows");
  let loader = document.querySelector("#flight-schedule #flight-rows .blank");

  for (let i = 0; i < 1; i++) {
    fetch(`./api/flights/${keys[i].toLowerCase()}`)
      .then(json)
      .then((data) => {
        //add flight row wrapper??
        let flight_wrapper = document.createElement("div");
        flight_wrapper.classList.add("row-wrapper");

        for (let j = 0; j < data.length; j++) {
          //add flight row
          let flight_row = document.createElement("div");
          flight_row.classList.add("row");

          //flight code
          let code = document.createElement("p");
          code.classList.add("code");
          code.innerText = `${data[j].code}`;

          //origin country
          let origin = document.createElement("p");
          origin.classList.add("origin");
          origin.innerText = `${data[j].origin} `;

          //departing time
          let deptime = document.createElement("p");
          deptime.classList.add("depttime");
          deptime.innerText = `${format_time(data[j].deptime)}`;

          //airplane
          let airplane = document.createElement("img");
          airplane.src = "./assets/images/airplane-45-black.svg";

          //arriving time
          let arrivetime = document.createElement("p");
          arrivetime.classList.add("arrivetime");
          arrivetime.innerText = `${format_time(data[j].arrivetime)}`;

          //destination country
          let destination = document.createElement("p");
          destination.classList.add("destination");
          destination.innerText = `${data[j].destination} `;

          //city
          let cost = document.createElement("p");
          cost.classList.add("cost");
          cost.innerText = `${data[j].cost} `;

          flight_row.appendChild(code);
          flight_row.appendChild(origin);
          flight_row.appendChild(deptime);
          flight_row.appendChild(airplane);
          flight_row.appendChild(arrivetime);
          flight_row.appendChild(destination);
          flight_row.appendChild(cost);

          flight_wrapper.appendChild(flight_row);

          parent.insertBefore(flight_wrapper, loader);
        }
        // remove loader
        if (i == 1) parent.removeChild(loader);
      })
      .catch((err) => console.log(err));
  }
}

function allArrivals() {
  let row = document.querySelectorAll(".row-wrapper");

  if (row != null) {
    for (let n = 0; n < row.length; n++) {
      row[n].innerHTML = "";
    }
  }

  let keys = ["All/2010/01/01?to=Manila"]; //to be changed

  let parent = document.querySelector("#flight-schedule #flight-rows");
  let loader = document.querySelector("#flight-schedule #flight-rows .blank");

  for (let i = 0; i < 1; i++) {
    fetch(`./api/flights/${keys[i].toLowerCase()}`)
      .then(json)
      .then((data) => {
        //add flight row wrapper??
        let flight_wrapper = document.createElement("div");
        flight_wrapper.classList.add("row-wrapper");

        for (let j = 0; j < data.length; j++) {
          //add flight row
          let flight_row = document.createElement("div");
          flight_row.classList.add("row");

          //flight code
          let code = document.createElement("p");
          code.classList.add("code");
          code.innerText = `${data[j].code}`;

          //origin country
          let origin = document.createElement("p");
          origin.classList.add("origin");
          origin.innerText = `${data[j].origin} `;

          //departing time
          let deptime = document.createElement("p");
          deptime.classList.add("depttime");
          deptime.innerText = `${format_time(data[j].deptime)}`;

          //airplane
          let airplane = document.createElement("img");
          airplane.src = "./assets/images/airplane-45-black.svg";

          //arriving time
          let arrivetime = document.createElement("p");
          arrivetime.classList.add("arrivetime");
          arrivetime.innerText = `${format_time(data[j].arrivetime)}`;

          //destination country
          let destination = document.createElement("p");
          destination.classList.add("destination");
          destination.innerText = `${data[j].destination} `;

          //city
          let cost = document.createElement("p");
          cost.classList.add("cost");
          cost.innerText = `${data[j].cost} `;

          flight_row.appendChild(code);
          flight_row.appendChild(origin);
          flight_row.appendChild(deptime);
          flight_row.appendChild(airplane);
          flight_row.appendChild(arrivetime);
          flight_row.appendChild(destination);
          flight_row.appendChild(cost);

          flight_wrapper.appendChild(flight_row);

          parent.insertBefore(flight_wrapper, loader);
        }
        // remove loader
        if (i == 1) parent.removeChild(loader);
      })
      .catch((err) => console.log(err));
  }
}
