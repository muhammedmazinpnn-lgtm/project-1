// FAQ Accordion Script
// Works with .faq-question and .faq-answer

document.addEventListener("DOMContentLoaded", () => {
  const faqQuestions = document.querySelectorAll(".faq-question");

  faqQuestions.forEach(question => {
    question.addEventListener("click", () => {

      // Close all other open FAQs
      faqQuestions.forEach(item => {
        if (item !== question) {
          item.classList.remove("active");
          item.nextElementSibling.style.maxHeight = null;
        }
      });

      // Toggle current FAQ
      question.classList.toggle("active");
      const answer = question.nextElementSibling;

      if (answer.style.maxHeight) {
        answer.style.maxHeight = null;
      } else {
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });
});
