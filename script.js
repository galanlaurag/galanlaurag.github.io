
//functions for managing modes
//modified code from: https://stackoverflow.com/questions/63635300/html-local-storage-dark-mode-using-javascript
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
}
function playAudioIndex() {
  var audio = new Audio("sound/click.mp3");
         audio.play();
}
function playAudio1() {
  var audio1 = new Audio("../sound/click1.mp3");
         audio1.play();
}
function playAudio1Index() {
  var audio1 = new Audio("sound/click1.mp3");
         audio1.play();
}
function playDeathAudio() {
  var death_audio = new Audio("../sound/death.mp3");
        death_audio.play();
}
function playWinAudio() {
  var win_audio = new Audio("../sound/win.mp3");
        win_audio.play();

}
function playPageAudio() {
  var page_audio = new Audio("../sound/page.mp3");
        page_audio.play();
}

//alert function when user wants to go back to homepage
function alert() {
    if (confirm("Are you sure you want to go back to the homepage? You will loose the chance to experience the outcome of this story!")) {
      document.getElementsByTagName("a")[0].href = "../index.html";
    } else {
      document.getElementsByTagName("a")[0].removeAttribute("href");
    }
}
