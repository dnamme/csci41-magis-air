var id;

function init() {
  id = window.location.href.split("?")[0].split("/");
  id = id[id.length - 1];

  fetch(`/api/flight/${id}`)
    .then(stat)
    .then(json)
    .then((flight) => {
      if (!flight.length) throw Error("Flight not found");

      flight = flight[0];

      document.querySelector("#flight-details #origin-city").innerText =
        flight.origincity;
      document.querySelector("#flight-details #origin-country").innerText =
        flight.origincountry;
      document.querySelector("#flight-details #destination-city").innerText =
        flight.destinationcity;
      document.querySelector("#flight-details #destination-country").innerText =
        flight.destinationcountry;

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
      document
        .querySelector("#flight-details #flight-row")
        .append(
          code,
          origin,
          deptime,
          airplane,
          arrivetime,
          destination,
          duration,
          cost
        );
    })
    .catch((err) => {
      showNotification(err);
      console.log(err);

      window.location.href = "/error";
    });
}

// todo
function onAddAnotherItemClick(event) {
  event.preventDefault();
  showNotification("new item");
}

function onSubmitForm(event) {
  event.preventDefault();

  const params = new URLSearchParams();

  let fields = document.querySelectorAll("#flight-form input");
  let invalid = false;
  fields.forEach((field) => {
    if (field.id !== seniorid && !field.value) invalid = true;
    console.log(field.id + ": " + field.value);
    params.append(field.id, field.value);
  });

  if (invalid)
    return showNotification("Please fill up all the required fields");

  fetch(`/api/book/3/2`, {
    method: "POST",
    body: params,
  })
    .then(stat)
    .then(json)
    .then((data) => {
      window.location.href = `/book/success/${id}`;
    })
    .catch((err) => {
      showNotification(err);
      console.log(err);
    });
}
