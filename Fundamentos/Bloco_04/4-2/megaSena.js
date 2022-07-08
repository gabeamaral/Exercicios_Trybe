let n1 = Math.floor(Math.random() * 60) + 1;
let n2 = Math.floor(Math.random() * 60) + 1;;
let n3 = Math.floor(Math.random() * 60) + 1;;
let n4 = Math.floor(Math.random() * 60) + 1;;
let n5 = Math.floor(Math.random() * 60) + 1;;
let n6 = Math.floor(Math.random() * 60) + 1;;

let numerosMS = [n1, n2, n3, n4, n5, n6]

let meusNumeros = [11, 31, 24, 7, 59, 33]

let numeroAcertos = 0;

for (let indexMega = 0; indexMega < numerosMS.length; indexMega += 1) {
    //console.log('Número MegaSena', numerosMS[indexMega]);
    for (let indexAposta = 0; indexAposta < meusNumeros.length; indexAposta += 1) {
        //console.log('Número aposta', meusNumeros[indexAposta]);
        if (numerosMS[indexMega] === meusNumeros[indexAposta]) {
            numeroAcertos += 1;
            console.log('Acertou:', meusNumeros[indexAposta]);
        }
    }
}
console.log(numerosMS);
console.log(meusNumeros);
console.log(numeroAcertos);