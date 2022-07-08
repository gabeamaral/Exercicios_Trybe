// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
// };

// console.log('Bem-vinda,', info.personagem);

// info['recorrente'] = 'Sim';

// for (let key in info) {
//     console.log(key, info[key])
// }

// console.log(info)

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
        {
            titulo: 'O Pior Dia de Todos',
            autor: 'Daniela Kopsch',
            editora: 'Tordesilhas',
        },
    ],
};

leitor['nomeCompleto'] = leitor['nome'] + ' ' + leitor['sobrenome'];

console.log('O livro favorito de', leitor['nomeCompleto'], 'se chama',leitor.livrosFavoritos['titulo']);
