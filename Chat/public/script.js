const btnOK = document.getElementById("btn-OK");
const btnEnviar = document.getElementById("btn-Enviar");
const textNome = document.getElementById("text-Nome");
const textMensagem = document.getElementById("text-CaixaMsg");
const divAplicacao = document.getElementById("div-Aplicação");
const divInformarNome = document.getElementById("div-InformarNome");
const pNome = document.getElementById("p-Nome");
const ulChat = document.getElementById("ul-Chat");
const socketCliente = io();

const mensagemCliente = {
    nome: null,
    mensagem: null
};

btnOK.addEventListener("click", () => {
    const nomeInformado = textNome.value;

    if(nomeInformado !== ""){
        divAplicacao.style.display = "flex";
        divInformarNome.style.display = "none";
        pNome.innerHTML = nomeInformado;
        pNome.style.display = "flex";
        mensagemCliente.nome = nomeInformado;
    }
}    
);

btnEnviar.addEventListener("click", () => {
    const mensagem = textMensagem.value;

    if(mensagem !== ""){
        mensagemCliente.mensagem = mensagem;
        socketCliente.emit("nova-Mensagem", mensagemCliente);
        textMensagem.value = "";
    }
});

socketCliente.addEventListener("nova-Mensagem", (mensagemRecebida) => {
    const mensagem = document.createElement("li");
    mensagem.textContent = mensagemRecebida.nome +": "+ mensagemRecebida.mensagem;
    if(mensagemCliente.nome === pNome.innerHTML){
        console.log("Aqui")
        mensagem.classList.add("li-Transmissor");
    }else{
        mensagem.classList.add("li-Receptor");    
    }
    ulChat.appendChild(mensagem);
});

