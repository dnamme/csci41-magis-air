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

      document.querySelector("#content #flight #origin-city").innerText =
        flight.origincity;
      document.querySelector("#content #flight #origin-country").innerText =
        flight.origincountry;
      document.querySelector("#content #flight #destination-city").innerText =
        flight.destinationcity;
      document.querySelector(
        "#content #flight #destination-country"
      ).innerText = flight.destinationcountry;

      document.querySelector("#content #datetime").innerHTML = `${format_date(
        flight.deptime,
        "MMM DD, YYYY"
      )} ${format_time(flight.deptime)} — ${format_date(
        flight.arrivetime,
        "MMM DD, YYYY"
      )} ${format_time(flight.arrivetime)}`;
    })
    .catch((err) => {
      showNotification(err);
      console.log(err);
    });
}
