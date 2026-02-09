console.log(1);
const body = document.querySelector("body");
const header = document.querySelector("header");
const logo = document.querySelector(".logo");
const menu = document.querySelector(".menu");
const navList = document.querySelector(".menu__list");
const menuLinks = document.querySelectorAll(".menu__list-link");

const heroSection = document.querySelector("#hero");
const aboutSection = document.querySelector("#about");
const servicesSection = document.querySelector("#services");
const pricesSection = document.querySelector("#prices");
const contactSection = document.querySelector("#contacts");

const hamburgerBtn = document.querySelector(".hamburger__btn");
const langContainer = document.querySelector(".menu__list-language");
const acc = document.getElementsByClassName("accordion");

const langUa = document.querySelector(".ua");
const langRu = document.querySelector(".ru");

// const selectElement = function (el) {
//   return document.querySelector(el);
// };

// logo.addEventListener("click", () => scrollTo(0, 0));

hamburgerBtn.addEventListener("click", () => {
  hamburgerBtn.classList.toggle("open");
  menu.classList.toggle("open");
});

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.toggle("open");
    hamburgerBtn.classList.toggle("open");
  });
});

//LANGUAGE
setLang(localStorage.getItem("lang") || "ua");

langUa.addEventListener("click", () => {
  setLang("ua");
  menu.classList.toggle("open");
  hamburgerBtn.classList.toggle("open");
});

langRu.addEventListener("click", () => {
  setLang("ru");
  menu.classList.toggle("open");
  hamburgerBtn.classList.toggle("open");
});

//FIXED HEADER
document.addEventListener("scroll", () => {
  let scrollPosition = window.scrollY;
  if (scrollPosition > 100) {
    header.classList.add("fix__nav");
  } else {
    header.classList.remove("fix__nav");
  }
});

//ACTIVE MENU LINKS with SCROLL
window.addEventListener("scroll", (e) => {
  e.preventDefault();
  const scrollHeight = window.pageYOffset;
  const navHeight = header.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    header.classList.add("fix__nav");
  } else {
    header.classList.remove("fix__nav");
  }

  changeActiveNavLink(
    scrollY < aboutSection.offsetTop - 120
      ? "#hero"
      : scrollY < servicesSection.offsetTop - 120
      ? "#about"
      : scrollY < pricesSection.offsetTop - 120
      ? "#services"
      : scrollY < contactSection.offsetTop - 120
      ? "#prices"
      : "#contacts"
  );
});

//ACCORDION
for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");

    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// FUNCTION
function fillTextContent(lang) {
  document.querySelectorAll("[data-line]").forEach((el) => {
    el.innerText = lines[lang][el.dataset.line];
  });
}

function setLang(lang) {
  fillTextContent(lang);
  langContainer
    .querySelector(".lang__active")
    ?.classList.remove("lang__active");
  langContainer.querySelector("." + lang).classList.add("lang__active");
  localStorage.setItem("lang", lang);
}

function changeActiveNavLink(selector) {
  document
    .querySelector(".menu__list-link--active")
    .classList.remove("menu__list-link--active");
  document
    .querySelector(`[href="${selector}"]`)
    .classList.add("menu__list-link--active");
}
