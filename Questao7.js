const prompt = require("prompt-sync")();

let  quantidade = parseInt(prompt("Insira o número de maçãs compradas: "));
let total;
if (quantidade < 12) {
    total = 0.30 * quantidade;
} else {
    total = 0.25 * quantidade;
}

console.log(total);