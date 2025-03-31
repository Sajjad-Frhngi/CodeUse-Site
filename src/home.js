window.onload = function () {
  setTimeout(() => {
    document.body.classList.add("loaded");
  }, 1400);
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

document.addEventListener("DOMContentLoaded", function () {
  const startElement = document.getElementById("start");

  document.addEventListener("mousemove", function (event) {
    const offsetX = event.clientX - startElement.offsetLeft;
    const offsetY = event.clientY - startElement.offsetTop;

    let tiltX = (offsetX / startElement.offsetWidth - 0.5) * 30; // محدود کردن تا 30 پیکسل
    let tiltY = (offsetY / startElement.offsetHeight - 0.5) * 30; // محدود کردن تا 30 پیکسل

    tiltX = Math.max(Math.min(tiltX, 10), -10);
    tiltY = Math.max(Math.min(tiltY, 0), 0);

    startElement.style.transform = `translate(${tiltX}px, ${tiltY}px)`;
  });

  document.addEventListener("mouseleave", function () {
    startElement.style.transform = `translate(0px, 0px)`; // بازگشت به حالت اولیه
  });

  const courseContainer = document.getElementById("courseContainer");
  const topCourse = [
    {
      title: "آموزش مقدماتی پایتون",
      image: "../src/images/courseImg/python1.png",
      link: "../src/pages/best-music.html",
      author: "جادی میرمیرانی",
      presentor: "مکتب خونه",
      price: "پریمیوم",
    },
    {
      title: "آموزش مقدماتی پایتون",
      image: "../src/images/courseImg/python1.png",
      link: "../src/pages/best-music.html",
      author: "جادی میرمیرانی",
      presentor: "مکتب خونه",
      price: "پریمیوم",
    },
    {
      title: "آموزش مقدماتی پایتون",
      image: "../src/images/courseImg/python1.png",
      link: "../src/pages/best-music.html",
      author: "جادی میرمیرانی",
      presentor: "مکتب خونه",
      price: "پریمیوم",
    },
    {
      title: "آموزش مقدماتی پایتون",
      image: "../src/images/courseImg/python1.png",
      link: "../src/pages/best-music.html",
      author: "جادی میرمیرانی",
      presentor: "مکتب خونه",
      price: "پریمیوم",
    },
  ];

  courseContainer.classList.add(
    "grid",
    "grid-cols-1",
    "sm:grid-cols-2",
    "md:grid-cols-4",
    "gap-6",
    "p-4"
  );

  topCourse.forEach((course) => {
    const courseElement = document.createElement("div");
    courseElement.classList.add(
      "p-6",
      "bg-gray-100",
      "border",
      "rounded-lg",
      "shadow-md"
    );

    const imageElement = document.createElement("img");
    imageElement.src = course.image;
    imageElement.classList.add(
      "w-full",
      "mx-auto",
      "mb-4",
      "rounded",
      "transition-transform",
      "duration-300",
      "ease-in-out",
      "hover:scale-125"
    );
    courseElement.appendChild(imageElement);

    const imageWrapper = document.createElement("div");
    imageWrapper.classList.add(
      "relative",
      "rounded",
      "w-full",
      "mx-auto",
      "mb-4",
      "overflow-hidden"
    );

    imageWrapper.appendChild(imageElement);
    courseElement.appendChild(imageWrapper);

    const titleElement = document.createElement("h4");
    titleElement.textContent = course.title;
    titleElement.classList.add(
      "text-lg",
      "font-semibold",
      "mb-4",
      "text-center"
    );
    courseElement.appendChild(titleElement);

    const infoContainer = document.createElement("div");
    infoContainer.classList.add(
      "text-gray-700",
      "text-center",
      "space-y-2",
      "mb-4"
    );

    const createInfoElement = (iconClass, text) => {
      const wrapper = document.createElement("div");
      wrapper.classList.add("flex", "items-center", "justify-center", "gap-2");

      const icon = document.createElement("i");
      icon.classList.add("fas", iconClass);

      const link = document.createElement("a");
      link.textContent = text;
      link.href = "#";
      link.classList.add("text-gray-700", "hover:text-gray-900");

      wrapper.appendChild(icon);
      wrapper.appendChild(link);
      return wrapper;
    };

    infoContainer.appendChild(createInfoElement("fa-user", course.author));
    infoContainer.appendChild(createInfoElement("fa-school", course.presentor));
    infoContainer.appendChild(createInfoElement("fa-tag", course.price));
    courseElement.appendChild(infoContainer);

    const linkElement = document.createElement("a");
    linkElement.href = course.link;
    linkElement.textContent = "بریم سراغش...";
    linkElement.classList.add(
      "text-blue-500",
      "hover:underline",
      "block",
      "text-center"
    );
    courseElement.appendChild(linkElement);

    courseContainer.appendChild(courseElement);
  });
});
const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const closeMenuBtn = document.getElementById("close-menu");

// تابع برای بستن منو
function closeMenu() {
  menuToggle.classList.remove("active");
  mobileMenu.classList.remove("translate-x-0");
  mobileMenu.classList.add("-translate-x-full");
}

// رویداد کلیک برای دکمه همبرگر
menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  mobileMenu.classList.toggle("-translate-x-full");
  mobileMenu.classList.toggle("translate-x-0");
});

// رویداد کلیک برای دکمه بستن
closeMenuBtn.addEventListener("click", closeMenu);
