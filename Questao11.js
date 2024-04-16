const prompt = require("prompt-sync")();

let num;

do {
    num = parseInt(prompt("Insira o número: "));
    
    if (!isNaN(num)) {
        if (num % 2 === 0) {
            console.log("É par");
        } else {
            console.log("É ímpar");
        }
    } else {
        console.log("Por favor, insira um número válido.");
    }
} while (num !== null && num >= 0);