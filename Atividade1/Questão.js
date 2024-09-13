const prompt = require("prompt-sync")();

let tempC = parseFloat(prompt("Digite a temperatura em graus Celsius: "));
let tempF = (tempC * 1.8 ) + 32;

console.log(tempC + " graus Celsius correspondem a " + tempF + " graus Fahrenheit.");