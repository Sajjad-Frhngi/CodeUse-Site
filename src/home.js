window.onload = function() {
  setTimeout(() => {
    document.body.classList.add("loaded");
  }, 2000);
};


window.onscroll = function () {
  var navbar = document.querySelector(".navbar");

  if (window.scrollY > 50) {
    navbar.classList.add(
      "bg-[#00000044]",
      "shadow-lg",
      "py-2",
      "w-full",
      "fixed",
      "left-0",
      "right-0"
    );
    navbar.classList.remove("bg-transparent");
  } else {
    navbar.classList.remove(
      "bg-[#00000044]",
      "shadow-lg",
      "py-2",
      "fixed",
      "left-0",
      "right-0"
    );
    navbar.classList.add("bg-transparent");
  }
};
