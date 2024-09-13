const prompt = require("prompt-sync")();

let num;
let soma = 0;
let contador = 0;

num = parseFloat(prompt("Insira um número decimal: "));
while (num > 0) {
    soma += num;
    contador++;
    num = parseFloat(prompt("Insira um número decimal: "));
}

if (contador > 0) {
    const mediaAr = soma / contador;
    console.log("Média Aritmética: " + mediaAr);
} else {
    console.log("Nenhum número válido foi inserido.");
}