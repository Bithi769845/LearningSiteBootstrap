// JavaScript for Bootstrap form validation
(function () {
    'use strict';
    var forms = document.querySelectorAll('.needs-validation');
    Array.prototype.slice.call(forms).forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  })();



   // Countdown target date (set it to your desired date)
   const targetDate = new Date("December 31, 2024 23:59:59").getTime();

   // Update the countdown every second
   const countdown = setInterval(function() {
       const now = new Date().getTime();
       const timeLeft = targetDate - now;

       // Time calculations for days, hours, minutes, and seconds
       const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
       const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
       const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
       const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

       // Display the result in the HTML
       document.getElementById("days").innerHTML = days;
       document.getElementById("hours").innerHTML = hours;
       document.getElementById("minutes").innerHTML = minutes;
       document.getElementById("seconds").innerHTML = seconds;

       // If the countdown is finished, display "EXPIRED"
       if (timeLeft < 0) {
           clearInterval(countdown);
           document.getElementById("timer").innerHTML = "EXPIRED";
       }
   }, 1000);