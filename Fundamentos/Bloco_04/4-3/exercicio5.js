// let ademar = Math.floor(Math.random() * 99) + 1;
// let adriana = Math.floor(Math.random() * 99) + 1;
// let julia = Math.floor(Math.random() * 99) + 1;

// let idadeTodos = [ademar, adriana, julia]
// let menorIdade = 100;

// for (let index = 0; index < idadeTodos.length; index += 1) {
//     if (idadeTodos[index] < menorIdade) {
//         menorIdade = idadeTodos[index]
//     }
// }
// console.log('A menor idade é: ', menorIdade)

let idadeAdemar = 10;
let idadeAdriana = 11;
let idadeJulia = 29;

if (idadeAdemar < idadeAdriana && idadeAdemar < idadeJulia) {
    console.log('Ademar é o mais novo')
}
else if (idadeAdriana < idadeAdemar && idadeAdriana < idadeJulia) {
    console.log('Adriana é a mais nova')
}
else {
    console.log('Julia é a mais nova')
}