function setBackground(project) {
  document.getElementById('bg-video').style.opacity = '0';
  const backgrounds = {
    rise: "assets/thumbnails/backgrounds/Rise.webp",
    lostark: "assets/thumbnails/backgrounds/Lostark_Mobile.webp",
    xrx: "assets/thumbnails/backgrounds/XRX.webp",
    giant: "assets/thumbnails/backgrounds/Giant_Fishing.webp",
    aboutme: "assets/thumbnails/backgrounds/aboutme.webp"
  };

  const image = backgrounds[project];
  if (image) {
    document.body.style.backgroundImage = `url('${image}')`;
  }
}

function resetBackground() {
  document.body.style.backgroundImage = "none";
  document.getElementById('bg-video').style.opacity = '1';
}
