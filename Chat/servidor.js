const http = require("http"); //Protocolo http
const express = require("express"); //Configurar o protocolo http
const configHttp = express(); //Objeto de configuração

configHttp.use(express.static("public"));
const servidorHttp = http.createServer(configHttp);
servidorHttp.listen(1000, "192.168.2.117");

const socketServidor = require("socket.io")(servidorHttp);
socketServidor.addListener("connection", (socket) => 

{ 
    socket.addListener("nova-Mensagem", (mensagemCliente) => socket.emit("nova-Mensagem", mensagemCliente));
 });