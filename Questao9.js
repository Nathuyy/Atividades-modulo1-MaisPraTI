const prompt = require("prompt-sync")();

let codigoDeOrigem = parseInt(prompt("Insira o código de origem: "));

switch (codigoDeOrigem) {
    case 1:
        console.log("Sul");
        break;
    case 2:
        console.log("Norte");
        break;
    case 3:
        console.log("Leste");
        break;
    case 4:
        console.log("Oeste");
        break;
    case 5: case 6:
        console.log("Nordeste");
        break;
    case 7: case 8: case 9:
        console.log("Sudeste");
        break;
    default:
        if (codigoDeOrigem >= 10 && codigoDeOrigem <= 20) {
            console.log("Centro-Oeste");
        } else if (codigoDeOrigem >= 25 && codigoDeOrigem <= 50) {
            console.log("Nordeste");
        } else {
            console.log("Produto Importado");
        }
        break;
}