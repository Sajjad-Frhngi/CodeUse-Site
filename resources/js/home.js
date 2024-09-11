const slider = document.getElementById("slider");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

const autoScrollInterval = 800;
const scrollAmount = 275;
const scrollAmountBack = 1000;

function autoScroll() {
  slider.scrollBy({
    left: scrollAmountBack,
    behavior: "smooth",
  });

  if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
    slider.scrollTo({
      left: 0,
      behavior: "smooth",
    });
  }
}

let autoScrollIntervalId = setInterval(autoScroll, autoScrollInterval);

function stopAutoScroll() {
  clearInterval(autoScrollIntervalId);
}

function startAutoScroll() {
  autoScrollIntervalId = setInterval(autoScroll, autoScrollInterval);
}

slider.addEventListener("mouseover", stopAutoScroll);
slider.addEventListener("mouseout", startAutoScroll);

nextBtn.addEventListener("mouseover", stopAutoScroll);
nextBtn.addEventListener("mouseout", startAutoScroll);

prevBtn.addEventListener("mouseover", stopAutoScroll);
prevBtn.addEventListener("mouseout", startAutoScroll);

nextBtn.addEventListener("click", () => {
  slider.scrollBy({
    left: -scrollAmount,
    behavior: "smooth",
  });
});

prevBtn.addEventListener("click", () => {
  slider.scrollBy({
    left: scrollAmount,
    behavior: "smooth",
  });
});

window.onscroll = function () {
  var navbar = document.querySelector(".navbar");
  var sticky = navbar.offsetTop;
  if (window.pageYOffset > sticky) {
    navbar.style.background = "#ddddddaa";
    navbar.style.position = "fixed";
    navbar.style.top = "0";
    navbar.style.animation = "switch-navbar 0.4s normal";
  } else {
    navbar.style.position = "relative";
    navbar.style.top = "auto";
    navbar.style.background = "transparent";
    navbar.style.animation = "";
  }
};
