"use strict";
function sendMessage(userName, isLogged) {
    console.log(`Olá ${userName}. Você ${!isLogged ? " não" : ""} pode logar.`);
}
const userName = "Beto";
const isLogged = true;
sendMessage(userName, isLogged);
