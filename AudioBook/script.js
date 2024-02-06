const audio = document.getElementById("audio");
const btnPlayPause = document.getElementById("btn-playPause");
const btnVoltar = document.getElementById("btn-Voltar");
const btnProximo = document.getElementById("btn-Proximo");
const pCapitulo = document.getElementById("p-Capitulo");

const totalFaixas = 10;
let faixaAtual = 1;
let estaTocando = false;

function tocarFaixa(){
    estaTocando = true;
    audio.play();
    btnPlayPause.className = "bi bi-pause-circle-fill";
}

function pausarFaixa(){
    estaTocando = false;
    audio.pause();
    btnPlayPause.className = "bi bi-play-circle-fill";
}

function playPause(){
    if(estaTocando){
        pausarFaixa();
    }else{
        tocarFaixa();
    }
}

function avancarFaixa(){
    if(faixaAtual < totalFaixas){
        faixaAtual++;
        pCapitulo.innerText = "Capítulo "+ faixaAtual;
        audio.src = "./books/dom-casmurro/"+faixaAtual+".mp3";
        tocarFaixa();
    }
}

function retornarFaixa(){
    if(faixaAtual > 1){
        faixaAtual--;
        pCapitulo.innerText = "Capítulo "+ faixaAtual;
        audio.src = "./books/dom-casmurro/"+faixaAtual+".mp3";
        tocarFaixa();
    }
}

btnPlayPause.addEventListener("click", playPause);
btnProximo.addEventListener("click", avancarFaixa);
btnVoltar.addEventListener("click", retornarFaixa);