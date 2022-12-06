window.onload = () => {
  fetch("/api/passengers")
    .then(stat)
    .then(json)
    .then((passengers) => {
      let content = document.querySelector("#content");

      passengers.forEach((p) => {
        let row = document.createElement("div");
        row.classList.add("table-row");

        let name = document.createElement("p");
        name.innerText = p.name;

        let gender = document.createElement("p");
        gender.innerText = p.gender;

        let birthdate = document.createElement("p");
        birthdate.innerText = format_date(p.birthdate, "MMM DD, YYYY");

        row.append(name, gender, birthdate);

        content.appendChild(row);
      });
    })
    .catch((err) => {
      showNotification(err);
      console.log(err);
    });
};
