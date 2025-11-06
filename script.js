// 1️⃣ Scroll to Gallery (if used)
function scrollToGallery() {
  const gallery = document.getElementById("gallery");
  if (gallery) gallery.scrollIntoView({ behavior: "smooth" });
}

// 2️⃣ Fun Facts Section (optional)
const facts = [
  "The Prague to Brno route is one of the busiest in Czechia.",
  "Czech trains often have restaurant cars serving local meals.",
  "The country's first railway opened in 1827 between České Budějovice and Linz!"
];

const factsList = document.getElementById("facts-list");
const addFactButton = document.getElementById("add-fact");

function displayFacts() {
  if (!factsList) return;
  factsList.innerHTML = "";
  facts.forEach(fact => {
    const li = document.createElement("li");
    li.textContent = fact;
    factsList.appendChild(li);
  });
}

if (addFactButton) {
  addFactButton.addEventListener("click", () => {
    const newFact = prompt("Enter a fun train fact:");
    if (newFact) {
      facts.push(newFact);
      displayFacts();
    }
  });
}

displayFacts();

// 3️⃣ Scroll-to-Top Button
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.onscroll = function () {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
};

scrollTopBtn.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// 4️⃣ Theme Toggle (Light/Dark Mode)
const themeToggle = document.getElementById("themeToggle");
const body = document.body;

// Set default theme if not saved
if (!localStorage.getItem("theme")) {
  localStorage.setItem("theme", "light");
  body.classList.add("light");
}

const savedTheme = localStorage.getItem("theme");
body.classList.add(savedTheme);
themeToggle.textContent =
  savedTheme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode";

themeToggle.addEventListener("click", () => {
  if (body.classList.contains("dark")) {
    body.classList.replace("dark", "light");
    localStorage.setItem("theme", "light");
    themeToggle.textContent = "🌙 Dark Mode";
  } else {
    body.classList.replace("light", "dark");
    localStorage.setItem("theme", "dark");
    themeToggle.textContent = "☀️ Light Mode";
  }
});
