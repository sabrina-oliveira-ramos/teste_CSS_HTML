document.addEventListener('DOMContentLoaded', function () {
    const slide = document.querySelector('.slide');
    const slides = document.querySelectorAll('.slide-item');
    let index = 0;
    let intervalo;

    function mostrarSlide(n) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active', 'prev', 'next');
            if (i === n) slide.classList.add('active');
            else if (i === n - 1) slide.classList.add('prev');
            else if (i === n + 1) slide.classList.add('next');
        });
    }

    function proximoSlide() {
        index = (index + 1) % slides.length;
        mostrarSlide(index);
    }

    function slideAnterior() {
        index = (index - 1 + slides.length) % slides.length;
        mostrarSlide(index);
    }

    function iniciarSlide() {
        intervalo = setInterval(proximoSlide, 5000);
    }

    function pararSlide() {
        clearInterval(intervalo);
    }

    iniciarSlide(); 
});
