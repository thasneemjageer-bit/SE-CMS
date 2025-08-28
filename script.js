// Contact form alert

var form = document.getElementById("contactForm");

form.onsubmit = function (e) {

  e.preventDefault();

  alert("Your message has been sent!");

};