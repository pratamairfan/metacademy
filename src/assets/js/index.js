// navbar
const navbar = document.getElementById("glass");
const navbarGlass = navbar.offsetTop;
const menuIcon = document.getElementById("menu-icon");
const menuList = document.getElementById("menu-list");
let topButton = document.getElementById("top");

function scrollFunc() {
  if (window.scrollY >= 10) {
    navbar.classList.add("navbar-glass");
    topButton.style.display = "block";
  } else {
    navbar.classList.remove("navbar-glass");
    topButton.style.display = "none";
  }
}

// toggle
menuIcon.addEventListener("click", () => {
  menuList.classList.toggle("hidden");
  navbar.classList.toggle("navbar-glass");
});

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides =
    document.getElementsByClassName("testi-slide");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(
      " active",
      ""
    );
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}

// accordion
const acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    const panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
