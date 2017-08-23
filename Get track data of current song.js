javascript: (function() {
    // Various pieces of data documented here.
    var song = document.querySelector("#currently-playing-title").innerHTML;
    var artist = document.querySelector("#player-artist").innerHTML;
    var album = document.querySelector(".player-album").innerHTML;
    var artist_img = encodeURIComponent(document.querySelector("img.image").src.split("=")[0]);
    var text = "Now playing on Google Play Music: " + artist + " - " + song + " in " + album;
    console.log(text);
    console.log("Artist image URL: " + decodeURIComponent(artist_img));
})();