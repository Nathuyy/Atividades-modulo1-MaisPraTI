let num = 101;
let contador = 0;

while (contador < 50) {
    let ehPrimo = true;
    let divisor = 2;

    while (divisor < num) {
        if (num % divisor === 0) {
            ehPrimo = false;
            break;
        }
        divisor++;
    }

    if (ehPrimo) {
        console.log(num);
        contador++;
    }
    
    num++;
}