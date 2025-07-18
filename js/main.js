"use strict";

// -----------------------------------------------------------------------------

function hideLoader() {
  const loader = document.getElementById("loader");
  const contents = document.querySelectorAll(".hidden-content");

  let isLoaded = false;
  let isMinimumTimePassed = false;

  setTimeout(() => {
    isMinimumTimePassed = true;
    if (isLoaded) hideNow();
  }, 1500);

  window.addEventListener("load", () => {
    isLoaded = true;
    if (isMinimumTimePassed) hideNow();
  });

  function hideNow() {
    loader.classList.add("hidden");
    contents.forEach((el) => el.classList.add("show"));
  }
}

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
  hideLoader();
  // toggleTheme();
  updateScrollProgressBar();
  toggleHamburgerMenu();
});

// -----------------------------------------------------------------------------

document.querySelectorAll(".directors__card").forEach((card) => {
  const btn = card.querySelector(".directors__btn");
  const extra = card.querySelector(".directors__extra");

  card.addEventListener("mouseenter", () => {
    document
      .querySelectorAll(".directors__extra")
      .forEach((el) => el.classList.remove("directors__extra__active"));
    document
      .querySelectorAll(".directors__btn")
      .forEach((el) => el.classList.remove("is__active"));

    extra.classList.add("directors__extra__active");
    btn.classList.add("is__active");
  });

  card.addEventListener("mouseleave", () => {
    extra.classList.remove("directors__extra__active");
    btn.classList.remove("is__active");
  });

  btn.addEventListener("click", (e) => {
    e.stopPropagation();

    const isActive = extra.classList.contains("directors__extra__active");

    document
      .querySelectorAll(".directors__extra")
      .forEach((el) => el.classList.remove("directors__extra__active"));
    document
      .querySelectorAll(".directors__btn")
      .forEach((el) => el.classList.remove("is__active"));

    if (!isActive) {
      extra.classList.add("directors__extra__active");
      btn.classList.add("is__active");
    }
  });
});

// -----------------------------------------------------------------------------

const form = document.querySelector(".contact__form");
const inputs = document.querySelectorAll(".contact__input");

inputs.forEach((input) => {
  input.addEventListener("focus", () => {
    input.classList.remove("contact__input__invalid");
  });

  input.addEventListener("blur", () => {
    if (input.required && !input.value.trim()) {
      input.classList.add("contact__input__invalid");
    }
  });

  input.addEventListener("input", () => {
    if (input.value.trim()) {
      input.classList.remove("contact__input__invalid");
    }
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const firstInvalid = Array.from(inputs).find(
    (input) => input.required && !input.value.trim()
  );

  if (firstInvalid) {
    firstInvalid.focus();
    firstInvalid.classList.add("contact__input__invalid");
  } else {
    inputs.forEach((input) => {
      input.value = "";
      input.classList.remove("contact__input__invalid");
    });
  }
});

// -----------------------------------------------------------------------------
