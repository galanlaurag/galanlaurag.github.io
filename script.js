
//functions for managing modes
//adjusted and modified source: https://stackoverflow.com/questions/63635300/html-local-storage-dark-mode-using-javascript
function onload() {
  document.getElementsByTagName('html')[0].classList.toggle('dark-mode', localStorage.getItem('darkmode') === 'true');
  document.querySelector(".mode_img").addEventListener('click', manageMode);

  function manageMode() {
    var mode = localStorage.getItem('darkmode') === 'true';
    localStorage.setItem('darkmode', !mode);
    document.getElementsByTagName('html')[0].classList.toggle('dark-mode', !mode);
  }
}
//variables & functions for audio
function playAudio() {
  var audio = new Audio("../sound/click.mp3");
         audio.play();
         audio.volume = 1;
}
function playAudio1() {
  var audio1 = new Audio("../sound/click1.mp3");
         audio1.play();
         audio1.volume = 1;
}
function playDeathAudio() {
  var death_audio = new Audio("../sound/death.mp3");
        death_audio.play();
        death_audio.volume = 1;
}
function playWinAudio() {
  var win_audio = new Audio("../sound/win.mp3");
        win_audio.play();
        win_audio.volume = 1;
}
function playPageAudio() {
  var page_audio = new Audio("../sound/page.mp3");
        page_audio.play();
        page_audio.volume = 1;
}

//alert function when user wants to go back to homepage
function alert() {
    if (confirm("Are you sure you want to go back to the homepage? You will loose the chance to experience the outcome of this story!")) {
    } else {
      document.getElementsByTagName("a")[0].removeAttribute("href");
    }
}
