const prompt = require("prompt-sync")();

let numUm = parseInt(prompt("Digite o primeiro número: "));
let numDois = parseInt(prompt("Digite o segundo número: "));
let numTres = parseInt(prompt("Digite o terceiro número: "));
let numQuarto;

console.log(numUm + 25);
console.log(numDois * 3);
console.log(numTres * 0.12); // Calculando 12% de numTres
numQuarto = numUm + numDois + numTres;
console.log(numQuarto);