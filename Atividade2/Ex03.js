// Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em
// Km. Calcule o preço da passagem, cobrando R$ 0.50 por Km para viagens até 200 Km e
// R$ 0.45 para viagens mais longas.

const prompt = require("prompt-sync")();

//pedindo input:
let distancia = parseInt(prompt("Insira a distância que você quer percorrer em Km: "));

//calculando passagem: 
if(distancia <= 200) {
    let passagem = distancia * 0.5;
    console.log(`Valor da passagem será de R$${passagem}`)

} else {
    let passagem = distancia * 0.45;
    console.log(`Valor da passagem será de R$${passagem}`)
}

