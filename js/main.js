"use strict";

// -----------------------------------------------------------------------------

// function hideLoader() {
//   const loader = document.getElementById("loader");
//   const contents = document.querySelectorAll(".hidden-content");

//   let isLoaded = false;
//   let isMinimumTimePassed = false;

//   setTimeout(() => {
//     isMinimumTimePassed = true;
//     if (isLoaded) hideNow();
//   }, 1500);

//   window.addEventListener("load", () => {
//     isLoaded = true;
//     if (isMinimumTimePassed) hideNow();
//   });

//   function hideNow() {
//     loader.classList.add("hidden");
//     contents.forEach((el) => el.classList.add("show"));
//   }
// }

// -----------------------------------------------------------------------------

// function toggleTheme() {
//   const body = document.body;
//   const toggleBtn = document.getElementById("themeToggle");
//   const icon = document.getElementById("themeIcon");

//   const lightIcon = "./images/moon.png";
//   const darkIcon = "./images/sun.png";

//   const currentTheme = localStorage.getItem("theme");
//   if (currentTheme === "dark") {
//     body.classList.add("dark");
//     icon.src = darkIcon;
//   }

//   toggleBtn.addEventListener("click", () => {
//     body.classList.toggle("dark");

//     if (body.classList.contains("dark")) {
//       localStorage.setItem("theme", "dark");
//       icon.src = darkIcon;
//     } else {
//       localStorage.setItem("theme", "light");
//       icon.src = lightIcon;
//     }
//   });
// }

// -----------------------------------------------------------------------------

function updateScrollProgressBar() {
  const scrollProgressBar = document.getElementById("scrollProgressBar");

  window.addEventListener("scroll", () => {
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;

    const scrollHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrollPercent = (scrollTop / scrollHeight) * 100;

    scrollProgressBar.style.width = `${scrollPercent}%`;
  });
}

// -----------------------------------------------------------------------------

function toggleHamburgerMenu() {
  const menuToggle = document.querySelector(".header__menu");
  const nav = document.querySelector(".header__nav");
  const contactButton = document.querySelector(".header__btn");
  const links = document.querySelectorAll(".header__links");

  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    nav.classList.toggle("active");
    contactButton.classList.toggle("active");
  });

  links.forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.classList.remove("active");
      nav.classList.remove("active");
      contactButton.classList.remove("active");
    });
  });

  contactButton.addEventListener("click", () => {
    menuToggle.classList.remove("active");
    nav.classList.remove("active");
    contactButton.classList.remove("active");
  });

  document.addEventListener("click", (e) => {
    if (
      !nav.contains(e.target) &&
      !menuToggle.contains(e.target) &&
      !contactButton.contains(e.target)
    ) {
      menuToggle.classList.remove("active");
      nav.classList.remove("active");
      contactButton.classList.remove("active");
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      menuToggle.classList.remove("active");
      nav.classList.remove("active");
      contactButton.classList.remove("active");
    }
  });
}

// -----------------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", () => {
  // hideLoader();
  // toggleTheme();
  updateScrollProgressBar();
  toggleHamburgerMenu();
});

// -----------------------------------------------------------------------------
