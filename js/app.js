const boton = document.getElementById('boton') //ESTO CREARÁ UNA VARIABLE Y VA A LLAMAR AL ID QUE ESTÁ DEFINIDO EN EL BUTTON
const menu = document.getElementById('menu') //ESTO CREARÁ UNA VARIABLE Y VA A LLAMAR AL ID QUE ESTÁ DEFINIDO EN EL MENÚ

/* FUNCIÓN DEL BOTÓN */
boton.addEventListener("click", () => {
    menu.classList.toggle("hidden")
})

/* FUNCIÓN DEL CUADRO DEL MENÚ*/ 
const clickBtn = document.getElementById('clickBtn');
  const popup = document.getElementById('popup');
  const popupText = document.getElementById('popupText');
  let timeoutId;

  clickBtn.addEventListener('mouseenter', () => {
    clearTimeout(timeoutId);
    popup.classList.remove('invisible');
    popup.classList.add('opacity-100');
    setTimeout(() => {
      popupText.classList.add('opacity-100');
    }, 100);
  });

  popup.addEventListener('mouseleave', () => {
    popupText.classList.remove('opacity-100');
    timeoutId = setTimeout(() => {
      popup.classList.remove('opacity-100');
      popup.classList.add('invisible');
    }, 300);
  });



/* FUNCIÓN CARROUSE */
document.addEventListener('DOMContentLoaded', function() {
  const carousel = document.getElementById('carouselContainer');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  let currentIndex = 0;
  
  nextBtn.addEventListener('click', () => {
    if (currentIndex < carousel.children.length - 2) {
      console.log(currentIndex,carousel.children.length)
      currentIndex++;
      updateCarousel();
    }
  });
  
  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });
  
  function updateCarousel() {
    carousel.style.transform = `translateX(-${currentIndex * 600}px)`;
    prevBtn.classList.toggle('hidden', currentIndex === 0);
    nextBtn.classList.toggle('hidden', currentIndex === carousel.children.length - 2);
  }
});