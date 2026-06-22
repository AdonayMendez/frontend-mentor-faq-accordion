const buttons = document.querySelectorAll('.toggle-btn'); 

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const answer = button.closest(".faq-item").querySelector('.answer'); 

    answer.classList.toggle("show"); 
  });
});
