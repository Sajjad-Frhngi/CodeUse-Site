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

// تابع اصلی جستجو
function executeSearch() {
  const searchTerm = document.getElementById("searchInputField").value.trim();

  // 1. پاک کردن هایلایت‌های قبلی
  document.querySelectorAll(".search-highlighted").forEach((el) => {
    el.outerHTML = el.innerHTML;
  });

  // 2. اگر جستجو کوتاه است
  if (searchTerm.length < 2) {
    document.getElementById("searchResultsContainer").classList.add("hidden");
    return;
  }

  // 3. جستجو فقط در عناصر دارای کلاس 'searchable'
  const textNodes = [];
  document.querySelectorAll(".searchable").forEach((parent) => {
    const walker = document.createTreeWalker(
      parent,
      NodeFilter.SHOW_TEXT,
      null,
      false
    );
    let node;
    while ((node = walker.nextNode())) {
      if (node.nodeValue.trim() !== "") {
        textNodes.push(node);
      }
    }
  });

  const foundResults = [];
  textNodes.forEach((textNode) => {
    const content = textNode.nodeValue;
    if (content.includes(searchTerm)) {
      const parent = textNode.parentNode;

      const highlighted = content.replace(
        new RegExp(searchTerm.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "gi"),
        (match) =>
          `<span class="search-highlighted bg-yellow-300">${match}</span>`
      );

      const wrapper = document.createElement("span");
      wrapper.innerHTML = highlighted;
      parent.replaceChild(wrapper, textNode);

      foundResults.push({
        text: content.trim().substring(0, 60),
        element: parent,
      });
    }
  });

  // 4. نمایش حداکثر 8 نتیجه
  displaySearchResults(foundResults.slice(0, 8), searchTerm);

  // 5. اسکرول به اولین نتیجه
  if (foundResults.length > 0) {
    setTimeout(() => {
      foundResults[0].element.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      // هایلایت موقت
      foundResults[0].element.classList.add(
        "bg-blue-100",
        "ring-2",
        "ring-blue-400"
      );
      setTimeout(() => {
        foundResults[0].element.classList.remove(
          "bg-blue-100",
          "ring-2",
          "ring-blue-400"
        );
      }, 2000);
    }, 100);
  }
}

// نمایش نتایج جستجو
function displaySearchResults(results, term) {
  const container = document.getElementById("searchResultsContent");
  container.innerHTML = "";

  if (results.length === 0) {
    container.innerHTML = `<div class="px-4 py-3 text-gray-500">نتیجه‌ای برای "${term}" یافت نشد</div>`;
  } else {
    results.forEach((result, index) => {
      const resultItem = document.createElement("div");
      resultItem.className =
        "px-4 py-3 hover:bg-gray-100 cursor-pointer border-b border-gray-100";
      resultItem.textContent = result.text;
      resultItem.addEventListener("click", () => {
        result.element.scrollIntoView({ behavior: "smooth", block: "center" });
        result.element.classList.add("bg-blue-100", "ring-2", "ring-blue-400");
        setTimeout(() => {
          result.element.classList.remove(
            "bg-blue-100",
            "ring-2",
            "ring-blue-400"
          );
        }, 2000);
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
