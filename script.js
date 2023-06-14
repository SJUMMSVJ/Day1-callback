
let count = 10;

function displayCountdown() {
  document.getElementById("countdown").innerHTML = count;
  count--;
  if (count >= 0) {
    setTimeout(displayCountdown, 1000);
  } else {
    document.getElementById("message").innerHTML = "Happy New Year";
  }
}



