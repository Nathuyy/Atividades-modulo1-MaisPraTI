const prompt = require("prompt-sync")();

let numEleitores = parseInt(prompt("Digite o número de eleitores: "));
let numVotosBrancos = parseInt(prompt("Digite o número de votos brancos: "));
let numVotosNulos = parseInt(prompt("Digite o número de votos nulos: "));
let numVotoValidos = parseInt(prompt("Digite o número de votos válidos: "));

let percentualVotosBrancos = (numVotosBrancos / numEleitores) * 100;
let percentualVotosNulos = (numVotosNulos / numEleitores) * 100;
let percentualVotosValidos = (numVotoValidos / numEleitores) * 100;

console.log("Percentual de votos brancos: " + percentualVotosBrancos + "%");
console.log("Percentual de votos nulos: " + percentualVotosNulos + "%");
console.log("Percentual de votos válidos: " + percentualVotosValidos + "%");