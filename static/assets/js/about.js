function onSendMessage(event) {
  event.preventDefault();

  let name = document.querySelector("#contact-form #name").value;
  let email = document.querySelector("#contact-form #email").value;
  let message = document.querySelector("#contact-form #message").value;

  if (!name || !email || !message)
    return showNotification("Please fill up all the required fields");

  document
    .querySelector("#contact-form #submit")
    .setAttribute("disabled", "true");

  document
    .querySelectorAll('#contact-form input[type="text"]')
    .forEach((n) => n.setAttribute("readonly", "true"));

  let d = {
    name: name,
    email: email,
    message: message,
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
