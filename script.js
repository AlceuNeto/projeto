let slideIndex = 0;
const slides = document.getElementsByClassName("kuromi");

function showSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active"); // Remove a classe "active" de todas as imagens
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].classList.add("active"); // Adiciona a classe "active" à imagem atual
  setTimeout(showSlides, 2000); // Altera a imagem a cada 2 segundos
}

showSlides();