// Toggle Class Active
const navbarNav = document.querySelector(".navbar-nav");
// Ketika menu diklik
document.querySelector("#menu-teh").onclick = () => {
  navbarNav.classList.toggle("active");
};

// menghilangkan nav burger
const hamburger = document.querySelector("#menu-teh");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
