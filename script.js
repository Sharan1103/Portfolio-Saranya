var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";  // Fully open
}

function closemenu() {
    sidemenu.style.right = "-250px";  // Fully hidden
}

function openLightbox(src) {
  document.getElementById("lightbox-img").src = src;
  document.getElementById("lightbox").style.display = "block";
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

