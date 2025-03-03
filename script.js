document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".contact-form").addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    let params = {
      from_name: name,
      from_email: email,
      message: message,
      reply_to: email // Ensures proper reply-to functionality
    };

    emailjs.send("service_1ltzgej", "template_g16fe4a", params)
      .then(function (response) {
        alert("Message sent successfully!");
        document.querySelector(".contact-form").reset();
      })
      .catch(function (error) {
        alert("Failed to send message. Check your EmailJS configuration.");
        console.error("EmailJS Error:", error);
      });
  });
});
