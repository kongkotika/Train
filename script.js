function scrollToGallery() {
  document.getElementById("gallery").scrollIntoView({ behavior: "smooth" });
}

const facts = [
  "The Prague to Brno route is one of the busiest in Czechia.",
  "Czech trains often have restaurant cars serving local meals.",
  "The country’s first railway opened in 1827 between České Budějovice and Linz!"
];

const factsList = document.getElementById("facts-list");
const addFactButton = document.getElementById("add-fact");

function displayFacts() {
  factsList.innerHTML = "";
  facts.forEach(fact => {
    const li = document.createElement("li");
    li.textContent = fact;
    factsList.appendChild(li);
  });
}

addFactButton.addEventListener("click", () => {
  const newFact = prompt("Enter a fun train fact:");
  if (newFact) {
    facts.push(newFact);
    displayFacts();
    // Scroll to Top Button
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

  }
});

displayFacts();
