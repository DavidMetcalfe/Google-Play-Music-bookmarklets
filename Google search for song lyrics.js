javascript: (function() {
  var song = document.querySelector("#currently-playing-title").innerHTML;
  song = song.replace(/amp;/g, "");
  var artist = document.querySelector("#player-artist").innerHTML;
  var text = encodeURIComponent(artist + " - " + song + " lyrics");
  window.open("https://www.google.ca/search?q=" + text);
})();
