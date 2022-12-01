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

function showNotification(msg) {
  alert(msg);
}
