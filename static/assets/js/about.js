function onSendMessage() {
  event.preventDefault();

  document
    .querySelector("#contact-form #submit")
    .setAttribute("disabled", "true");

  document
    .querySelectorAll('#contact-form input[type="text"]')
    .forEach((n) => n.setAttribute("readonly", "true"));

  let d = {
    name: document.querySelector("#contact-form #name").value,
    email: document.querySelector("#contact-form #email").value,
    message: document.querySelector("#contact-form #message").value,
  };

  fetch("/api/message", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(d),
  })
    .then(stat)
    .then(json)
    .then((data) =>
      showNotification("Your message has been successfully sent!")
    )
    .catch((err) => {
      showNotification(err);
      console.log(err);
    });
}
