let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {golden: 2,silver: 3},
    bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018],
}

let nomeCompleto = player.name + ' ' + player.lastName;
console.log('A jogadora ' + nomeCompleto + ' tem ' + player.age + ' anos de idade.');

let mundo = player.bestInTheWorld.length;
console.log('A jogadora ' + nomeCompleto + ' foi eleita a melhor do mundo por ' + mundo + ' vezes.')
console.log('A jogadora possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata.')