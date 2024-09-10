const slider = document.getElementById("slider");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

nextBtn.addEventListener("click", () => {
  slider.scrollBy({
    left: -300, // مقدار پیکسل که اسلایدر به سمت راست حرکت می‌کند
    behavior: "smooth",
  });
});

prevBtn.addEventListener("click", () => {
  slider.scrollBy({
    left: 300, // مقدار پیکسل که اسلایدر به سمت چپ حرکت می‌کند
    behavior: "smooth",
  });
});
