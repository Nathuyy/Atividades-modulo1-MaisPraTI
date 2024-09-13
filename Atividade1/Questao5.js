const prompt = require("prompt-sync")();

let nota1 = parseInt(prompt("Digite a nota da primeira avaliação: "));
let nota2 = parseInt(prompt("Digite a nota da segunda avaliação: "));

let mediaSemestral = (nota1 + nota2) / 2;

if (mediaSemestral >= 6.0) {
    console.log("PARABÉNS! Você foi aprovado.");
} else {
    console.log("Você foi REPROVADO! Estude mais");
}