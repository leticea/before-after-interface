const slider = document.getElementById("slider");
const before = document.querySelector(".before-image");

slider.addEventListener("input", (e) => {
  before.style.width = e.target.value + "%";
});
