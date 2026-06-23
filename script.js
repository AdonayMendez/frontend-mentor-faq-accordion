const buttons = document.querySelectorAll('.toggle-btn'); 

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const answer = button.closest(".faq-item").querySelector('.answer'); 

    answer.classList.toggle("show"); 

    const img = button.querySelector("img");

    if(answer.classList.contains("show")){
      img.src = "assets/images/icon-minus.svg"; 
    } else {
      img.src = "assets/images/icon-plus.svg";
    }
  });
});
