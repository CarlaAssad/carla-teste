let imagemAtual = 0;

const slides = document.querySelectorAll(".slide");
const indicadores = document.querySelectorAll(".indicador");

function trocarImagem() {

    slides[imagemAtual].classList.remove("ativo");
    indicadores[imagemAtual].classList.remove("ativo");

    imagemAtual++;

    if (imagemAtual >= slides.length) {
        imagemAtual = 0;
    }

    slides[imagemAtual].classList.add("ativo");
    indicadores[imagemAtual].classList.add("ativo");
}

slides[0].classList.add("ativo");

setInterval(trocarImagem, 5000);