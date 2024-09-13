const prompt = require("prompt-sync")();

const valor1 = parseInt(prompt("Insira o primeiro valor: "));
const valor2 = parseInt(prompt("Insira o segundo valor: "));

if (valor1 < valor2) {
    console.log("Os valores em ordem crescente são:" + valor1, valor2);
} else {
    console.log("Os valores em ordem crescente são:" + valor2, valor1);
}