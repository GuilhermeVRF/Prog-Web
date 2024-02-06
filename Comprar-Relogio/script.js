const tituloRelogio = document.getElementById("h1-Titulo");
const subTituloRelogio = document.getElementById("h2-subTituloCor");
const imagemVizualizacao = document.getElementById("img-Vizualização");
const miniatura_0 = document.getElementById("img-Miniatura0");
const miniatura_1 = document.getElementById("img-Miniatura1");
const miniatura_2 = document.getElementById("img-Miniatura2");

const azulInverno = {
    nome: "Azul Inverno",
    pasta: "imagens-azul-inverno"
}

const estelar = {
    nome: "Estelar",
    pasta: "imagens-estelar"
}

const meiaNoite = {
    nome: "Meia-noite",
    pasta: "imagens-meia-noite"
}

const rosaClaro = {
    nome: "Rosa Claro",
    pasta: "imagens-rosa-claro"
}

const verdeCipreste = {
    nome: "Verde Cipreste",
    pasta: "imagens-verde-cipreste"
}

const opcaoCores = [azulInverno, estelar, meiaNoite, rosaClaro, verdeCipreste];
const opcaoTamanho = ["41mm", "45mm"];

let corSelecionada = 0;

function trocarCor(){
    corSelecionada = document.querySelector("[name='opçãoCores']:checked").value;

    tituloRelogio.innerText = "Relógio Apple Watch cor "+ opcaoCores[corSelecionada].nome + " de tamanho "+ opcaoTamanho[tamanhoSelecionado];
    subTituloRelogio.innerText = "Cor - "+ opcaoCores[corSelecionada].nome;

    imagemVizualizacao.src = "./imagens/opcoes-cores/"+ opcaoCores[corSelecionada].pasta +"/imagem-"+imagemSelecionada+".jpeg";
    miniatura_0.src = "./imagens/opcoes-cores/"+ opcaoCores[corSelecionada].pasta +"/imagem-0.jpeg";
    miniatura_1.src = "./imagens/opcoes-cores/"+ opcaoCores[corSelecionada].pasta +"/imagem-1.jpeg";
    miniatura_2.src = "./imagens/opcoes-cores/"+ opcaoCores[corSelecionada].pasta +"/imagem-2.jpeg";
}

let imagemSelecionada = 1;

function trocarImagem(){
    imagemSelecionada = document.querySelector("[name='opçãoMiniaturas']:checked").value;

    imagemVizualizacao.src = "./imagens/opcoes-cores/"+ opcaoCores[corSelecionada].pasta +"/imagem-"+imagemSelecionada+".jpeg";
}

let tamanhoSelecionado = 1;

function trocarTamanho(){
    tamanhoSelecionado = document.querySelector("[name='opçãoTamanho']:checked").value;
    
    if(opcaoTamanho[tamanhoSelecionado] === "41mm"){
          
        imagemVizualizacao.classList.add("caixaPequena");
    }else{         
        imagemVizualizacao.classList.remove("caixaPequena");   
    }

    tituloRelogio.innerText = "Relógio Apple Watch cor "+ opcaoCores[corSelecionada].nome + " de tamanho "+ opcaoTamanho[tamanhoSelecionado];
}