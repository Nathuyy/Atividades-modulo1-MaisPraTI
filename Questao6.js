const prompt = require("prompt-sync")();

let ladoA = parseInt(prompt("Insira o lado A: "));
let ladoB = parseInt(prompt("Insira o lado B: "));
let ladoC = parseInt(prompt("Insira o lado C: "));

// Verificando se é um triângulo válido
if (ladoA + ladoB > ladoC && ladoB + ladoC > ladoA && ladoC + ladoA > ladoB) {
    if (ladoA === ladoB && ladoB === ladoC) {
        console.log("É um triângulo equilátero");
    } else if (ladoA === ladoB || ladoB === ladoC || ladoA === ladoC) {
        console.log("É um triângulo isósceles");
    } else {
        console.log("É um triângulo escaleno");
    }
} else {
    console.log("Os lados fornecidos não formam um triângulo válido.");
}