function openFAQ(category) {
  localStorage.setItem("faqCategory", category);
  window.location.href = "faq.html";
}

document.addEventListener("DOMContentLoaded", () => {
  const category = localStorage.getItem("faqCategory");

  if (category) {
    document.getElementById("categoryTitle").innerText =
      category.charAt(0).toUpperCase() + category.slice(1) + " FAQs";
  }
});

function toggleAnswer(index) {
  const answers = document.querySelectorAll(".answer");
  answers[index].style.display =
    answers[index].style.display === "block" ? "none" : "block";
}
function toggleAnswer(index) {
  const answers = document.querySelectorAll(".answer");
  answers[index].classList.toggle("show");
}
