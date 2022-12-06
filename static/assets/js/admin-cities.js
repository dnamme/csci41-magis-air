window.onload = () => {
  fetch("/api/cities")
    .then(stat)
    .then(json)
    .then((cities) => {
      let content = document.querySelector("#content");

      cities.forEach((c) => {
        let row = document.createElement("div");
        row.classList.add("table-row");
        row.innerText = `${c.cityname}, ${c.country}`;

        content.appendChild(row);
      });
    })
    .catch((err) => {
      showNotification(err);
      console.log(err);
    });
};

function onAddCityClick(event) {
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

  fetch("/api/city", {
    method: "POST",
    body: params,
  })
    .then(stat)
    .then(json)
    .then((data) => {
      document.querySelector("form button").setAttribute("disabled", "true");
      showNotification("Succesfully added new city");
    })
    .catch((err) => {
      showNotification(err);
      console.log(err);
    });
}
