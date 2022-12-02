var loc_animation;
var loc_index = 0;
function start_location_animation() {
  const locations = ["Manila", "Singapore", "Beijing", "Tokyo"];

  loc_animation = setInterval(() => {
    let elem = document.querySelector("#explore #location-anim");
    elem.classList.add("anim-disappear");

    setTimeout(() => {
      elem.classList.remove("anim-disappear");

      loc_index++;
      if (loc_index >= locations.length) loc_index = 0;

      elem.innerText = locations[loc_index];
      elem.classList.add("anim-appear");

      setTimeout(() => {
        elem.classList.remove("anim-appear");
      }, 500);
    }, 500);
  }, 3 * 1000);
}

window.onload = () => {
  start_location_animation();

  let keys = ["Departures", "Arrivals"];

  let parent = document.querySelector("#upcoming-flights #board-wrapper");
  let loader = document.querySelector(
    "#upcoming-flights #board-wrapper .lds-ring"
  );

  for (let i = 0; i < 2; i++) {
    fetch(`./api/upcoming/${keys[i].toLowerCase()}`)
      .then(stat)
      .then(json)
      .then((data) => {
        // add text
        let c_dept = document.createElement("div");
        c_dept.classList.add("board-wrapper");

        let text_dept = document.createElement("h2");
        text_dept.innerText = keys[i];

        c_dept.appendChild(text_dept);

        // add departures board
        let b_dept = document.createElement("div");
        b_dept.classList.add("board", "frosted");

        for (let j = 0; j < data.length; j++) {
          let time = document.createElement("p");
          time.classList.add("time");
          time.innerText = `${format_date(
            data[j].time,
            "mmm dd, YYYY"
          )} | ${format_time(data[j].time)}`;

          let dts = document.createElement("p");
          dts.classList.add("dts");
          dts.innerText = `${data[j].city} - ${data[j].flight}`;

          b_dept.appendChild(time);
          b_dept.appendChild(dts);

          if (j + 1 != data.length)
            b_dept.appendChild(document.createElement("hr"));
        }

        c_dept.appendChild(b_dept);

        parent.insertBefore(c_dept, loader);

        // add arrivals board
        let b_arrv = document.createElement("div");
        b_arrv.classList.add("board");

        // remove loader
        if (i == 1) parent.removeChild(loader);
      })
      .catch((err) => showNotification(err));
  }
};
