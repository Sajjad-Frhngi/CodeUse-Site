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

    let tiltX = (offsetX / startElement.offsetWidth - 0.5) * 30;
    let tiltY = (offsetY / startElement.offsetHeight - 0.5) * 30;

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
      image: "../src/images/courseImg/jadi.png.webp",
      link: "../src/pages/python-page.html",
      author: "جادی میرمیرانی",
      presentor: "مکتب خونه",
      price: "پریمیوم",
    },
    {
      title: "آموزش مقدماتی جاوااسکریپت",
      image: "../src/images/courseImg/js.png.jpg",
      link: "../src/pages/js-rocet.html",
      author: "حسام موسوی",
      presentor: "راکت",
      price: "پریمیوم",
    },
    {
      title: "آموزش جامع html & css",
      image: "../src/images/courseImg/CSS1.png",
      link: "../src/pages/html&css-boto.html",
      author: "میلاد عظمی",
      presentor: "بوتواستارت",
      price: "اقتصادی",
    },
    {
      title: "آموزش هوش مصنوعی",
      image: "../src/images/courseImg/ai.png",
      link: "../src/pages/ai-fanit.html",
      author: "محمدرضا شاقوزی",
      presentor: "مجتمع فنی تهران",
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

function closeMenu() {
  menuToggle.classList.remove("active");
  mobileMenu.classList.remove("translate-x-0");
  mobileMenu.classList.add("-translate-x-full");
}

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  mobileMenu.classList.toggle("-translate-x-full");
  mobileMenu.classList.toggle("translate-x-0");
});

closeMenuBtn.addEventListener("click", closeMenu);

function executeSearch() {
  const searchTerm = document.getElementById("searchInputField").value.trim();

  document.querySelectorAll(".search-highlighted").forEach((el) => {
    el.outerHTML = el.innerHTML;
  });

  if (searchTerm.length < 2) {
    document.getElementById("searchResultsContainer").classList.add("hidden");
    return;
  }

  fetch("../../pages.json")
    .then((response) => response.json())
    .then((pages) => {
      const foundResults = [];

      const pagePromises = pages.map((page) => {
        return fetch(page)
          .then((response) => response.text())
          .then((content) => {
            // استخراج عنوان صفحه
            const doc = new DOMParser().parseFromString(content, "text/html");
            const title = doc.querySelector("title").innerText;

            if (title.toLowerCase().includes(searchTerm.toLowerCase())) {
              foundResults.push({
                text: title,
                url: page,
              });
            }
          });
      });
      Promise.all(pagePromises).then(() => {
        displaySearchResults(foundResults, searchTerm);
      });
    });
}

// نمایش نتایج جستجو
function displaySearchResults(results, term) {
  const container = document.getElementById("searchResultsContent");
  container.innerHTML = "";

  if (results.length === 0) {
    container.innerHTML = `<div class="px-4 py-3 text-gray-500">نتیجه‌ای برای "${term}" یافت نشد</div>`;
  } else {
    results.forEach((result) => {
      const resultItem = document.createElement("div");
      resultItem.className =
        "px-4 py-3 hover:bg-gray-100 cursor-pointer border-b border-gray-100";
      resultItem.textContent = result.text; // نمایش عنوان به جای متن
      resultItem.addEventListener("click", () => {
        window.location.href = result.url; // رفتن به صفحه مربوطه
      });
      container.appendChild(resultItem);
    });
  }

  document.getElementById("searchResultsContainer").classList.remove("hidden");
}

// رویدادهای جستجو
document
  .getElementById("searchActionBtn")
  .addEventListener("click", executeSearch);
document
  .getElementById("searchInputField")
  .addEventListener("input", executeSearch);

// بستن باکس نتایج با کلیک خارج
document.addEventListener("click", (e) => {
  const searchBox = document.getElementById("searchResultsContainer");
  if (
    !searchBox.contains(e.target) &&
    e.target.id !== "searchInputField" &&
    e.target.id !== "searchActionBtn"
  ) {
    searchBox.classList.add("hidden");
  }
});

const text = "بهترین استاد، بهترین کیفیت!";
const typingText = document.getElementById("typing-text");

let i = 0;

function typeText() {
  if (i < text.length) {
    setTimeout(typeText, 200);
    typingText.textContent += text.charAt(i);
    i++;
  }
}
typingText.classList.add("typing-animation");
typeText();