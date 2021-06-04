window.onscroll = function () {
  myFunction();
};

var navbar = document.getElementById("navbar");

var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("menu")[0];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

const onscroll = (el, listener) => {
  el.addEventListener("scroll", listener);
};

// Making Menu Colorfull when scroll

const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav .menu ul li");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
});
