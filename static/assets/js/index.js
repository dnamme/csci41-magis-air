function stat(res) {
  if (res.status >= 200 && res.status < 300) return Promise.resolve(res);
  else return Promise.reject(new Error(res.statusText));
}

function json(res) {
  return res.json();
}

function format_time(raw) {
  let dt = new Date(raw);

  return `${dt.getHours().toString().padStart(2, "0")}:${dt
    .getMinutes()
    .toString()
    .padStart(2, "0")} ${dt.getHours() >= 12 ? "PM" : "AM"}`;
}

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

  fetch("http://localhost:3001/api/upcoming-flights")
    .then(stat)
    .then(json)
    .then((data) => {
      let parent = document.querySelector("#upcoming-flights #board-wrapper");
      let loader = document.querySelector(
        "#upcoming-flights #board-wrapper .lds-ring"
      );

      let keys = ["Departures", "Arrivals"];

      for (let i = 0; i < 2; i++) {
        // add text
        let c_dept = document.createElement("div");
        c_dept.classList.add("board-wrapper");

        let text_dept = document.createElement("h2");
        text_dept.innerText = keys[i];

        c_dept.appendChild(text_dept);

        // add departures board
        let b_dept = document.createElement("div");
        b_dept.classList.add("board");

        for (let j = 0; j < data.departures.length; j++) {
          let key = keys[i].toLowerCase();

          let time = document.createElement("p");
          time.classList.add("time");
          time.innerText = format_time(data[key][j].time);

          let dts = document.createElement("p");
          dts.classList.add("dts");
          dts.innerText = `${data[key][j].city} - ${data[key][j].flight}`;

          b_dept.appendChild(time);
          b_dept.appendChild(dts);

          if (j + 1 != data[key].length)
            b_dept.appendChild(document.createElement("hr"));
        }

        c_dept.appendChild(b_dept);

        parent.insertBefore(c_dept, loader);
      }

      // add arrivals board
      let b_arrv = document.createElement("div");
      b_arrv.classList.add("board");

      // remove loader
      parent.removeChild(loader);
      // loader.parentNode.removeChild(loader);

      console.log(data);
    })
    .catch((err) => console.log(err));
};
