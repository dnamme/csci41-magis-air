function stat(res) {
  if (res.status >= 200 && res.status < 300) return Promise.resolve(res);
  else return Promise.reject(new Error(res.statusText));
}

function json(res) {
  return res.json();
}

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function format_date(raw, format) {
  let dt = new Date(raw);

  format = format.replaceAll("YYYY", dt.getFullYear());
  format = format.replaceAll("yy", dt.getFullYear() % 100);

  format = format.replaceAll("MMM", months[dt.getMonth()]);
  format = format.replaceAll("mmm", months[dt.getMonth()].slice(0, 3));
  format = format.replaceAll("MM", dt.getMonth().toString().padStart(2, "0"));
  format = format.replaceAll("mm", dt.getMonth());

  format = format.replaceAll("DD", dt.getDate().toString().padStart(2, "0"));
  format = format.replaceAll("dd", dt.getDate());

  console.log(format);

  return format;
}

function format_time(raw) {
  let dt = new Date(raw);

  return `${(dt.getHours() > 12 ? dt.getHours() - 12 : dt.getHours())
    .toString()
    .padStart(2, "0")}:${dt.getMinutes().toString().padStart(2, "0")} ${
    dt.getHours() >= 12 ? "PM" : "AM"
  }`;
}

function showNotification(msg) {
  let cont = document.createElement("div");
  cont.classList.add("notification");

  let text = document.createElement("span");
  text.innerText = msg;

  let close = document.createElement("img");
  close.setAttribute("src", "./assets/images/close-rounded.svg");
  close.onclick = () => document.body.removeChild(cont);

  cont.appendChild(text);
  cont.appendChild(close);
  document.body.appendChild(cont);

  setTimeout(() => cont.classList.add("slide-in"), 100);

  setTimeout(() => {
    if (!document.body.contains(cont)) return;

    cont.classList.remove("slide-in");
    setTimeout(() => document.body.removeChild(cont), 100);
  }, 5 * 1000);
}
