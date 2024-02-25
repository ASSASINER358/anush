  document.addEventListener("DOMContentLoaded", function() {
// Get audio element and mute button
const audio = document.getElementById("audio");
const muteButton = document.getElementById("muteButton");

// Add event listener to mute button
muteButton.addEventListener("click", function() {
  // Toggle mute/unmute
  if (audio.muted) {
      audio.muted = false;
      muteButton.textContent = "Toggle Mute";
  } else {
      audio.muted = true;
      muteButton.textContent = "Toggle Unmute";
  }
});
});
