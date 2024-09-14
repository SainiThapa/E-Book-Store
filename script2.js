document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var formData = new FormData(this);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "process.php", true);
    xhr.onload = function() {
        if (xhr.status === 200) {
            document.getElementById("response").innerHTML = "<p>Thank you! Your message has been sent.</p>";
            document.getElementById("contact-form").reset();
        } else {
            document.getElementById("response").innerHTML = "<p>There was a problem sending your message. Please try again later.</p>";
        }
    };
    xhr.send(formData);
  });