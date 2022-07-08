let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]
let soma = 0;

for (let index = 0; index < numbers.length; index += 1) {
    soma += numbers[index]
}

console.log(soma);

// como descobrir o maior número de um array
let maior = 0;

for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > maior) {
        maior = numbers[i]
    }
}
console.log(maior)

//exercise.js
let fruits = [390, 4, 10, 200, 12];
let sum = 0;

for (let ind = 0; ind < fruits.length; ind += 1) {
    if (fruits[ind] > sum) {
        sum = fruits[ind]
    }
}
console.log(sum, '< esse é o maior número')
