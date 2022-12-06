function onFilterClick() {
  let params = new URLSearchParams();
  let fc = document.querySelector("#search-flight #flightcode").value;
  if (fc) params.append("flightcode", fc);

  console.log(`/api/crew?${params.toString()}`);

  fetch(`/api/crew?${params.toString()}`)
    .then(stat)
    .then(json)
    .then((crew) => {
      let board = document.querySelector("#content");
      board.innerHTML = "";

      let header = document.createElement("div");
      header.classList.add("table-row", "header");

      let hname = document.createElement("p");
      hname.innerText = "Name";
      let hrole = document.createElement("p");
      hrole.innerText = "Role";

      header.append(hname, hrole);

      if (fc) {
        header.classList.add("full");
        hrole.classList.add("centered");

        let flightcode = document.createElement("p");
        flightcode.classList.add("centered");
        flightcode.innerText = "Flight Code";

        let origin = document.createElement("p");
        origin.classList.add("centered");
        origin.innerText = "Departure";

        let airplane = document.createElement("img");
        airplane.src = "/assets/images/airplane-0-black.svg";

        let destination = document.createElement("p");
        destination.classList.add("centered");
        destination.innerText = "Arrival";

        header.append(flightcode, origin, airplane, destination);
      }

      board.append(header);

      crew.forEach((c) => {
        let row = document.createElement("div");
        row.classList.add("table-row");

        let name = document.createElement("p");
        name.innerText = c.name;

        let role = document.createElement("p");
        role.innerText = c.role;

        row.append(name, role);

        if (fc) {
          row.classList.add("full");
          role.classList.add("centered");

          let flightcode = document.createElement("p");
          flightcode.classList.add("centered");
          flightcode.innerText = c.code;

          let origin = document.createElement("p");
          origin.classList.add("centered");
          origin.innerHTML = `${c.origincity}, ${
            c.origincountry
          }<br />${format_date(c.deptime, "mmm DD, YYYY")}<br />${format_time(
            c.deptime
          )}`;

          let airplane = document.createElement("img");
          airplane.src = "/assets/images/airplane-0-black.svg";

          let destination = document.createElement("p");
          destination.classList.add("centered");
          destination.innerHTML = `${c.destinationcity}, ${
            c.destinationcountry
          }<br />${format_date(c.deptime, "mmm DD, YYYY")}<br />${format_time(
            c.deptime
          )}`;

          row.append(flightcode, origin, airplane, destination);
        }

        board.append(row);
      });
    })
    .catch((err) => {
      console.log(err);
      showNotification(err);
    });
}

window.onload = () => {
  onFilterClick();
};

function onAddCrewClick(event) {
  event.preventDefault();

  const params = new URLSearchParams();
  let fields = document.querySelectorAll("form input");
  let invalid = false;
  fields.forEach((field) => {
    if (!field.value) invalid = true;
    console.log(field.id + ": " + field.value);
    params.append(field.id, field.value);
  });

  if (invalid) return showNotification("Please fill up all required fields");

  fetch("/api/crew", {
    method: "POST",
    body: params,
  })
    .then(stat)
    .then(json)
    .then((data) => {
      document.querySelector("form button").setAttribute("disabled", "true");
      showNotification("Succesfully added new crew member");

      onFilterClick();
    })
    .catch((err) => {
      showNotification(err);
      console.log(err);
    });
}
