var btn = document.querySelector(".mode");
var currentMode = sessionStorage.getItem("mode");


if (currentMode == "dark") {
  // ...then use the .dark-theme class
  document.body.classList.add("dark-mode");
}

function myFunction() {
  document.body.classList.toggle("dark-mode");
  let mode = "light";

  if (document.body.classList.contains("dark-mode")) {
    mode = "dark";
  }
  sessionStorage.setItem("mode", mode);
}
