const prompt = require("prompt-sync")();

let notaTotal = 0;
let pesoTotal = 0;
let contador = 0;

let nota = parseFloat(prompt("Insira a nota (insira 0 ou um número negativo para encerrar): "));
while (nota > 0) {
    let peso = parseFloat(prompt("Insira o peso para a nota: "));
    
    notaTotal += nota * peso;
    pesoTotal += peso;
    
    contador++;
    
    nota = parseFloat(prompt("Insira a próxima nota (insira 0 ou um número negativo para encerrar): "));
}

if (contador > 0) {
    const mediaPond = notaTotal / pesoTotal;
    console.log("Média Ponderada: " + mediaPond);
} else {
    console.log("Nenhuma nota válida foi inserida.");
}