const saudacao = (nome, callback) => {
    // let nome = 'Michel';
    // return `Oi ${nome}, tudo bem?`
    return callback(nome);
}

const saudacaoFormal = (nome) => {
    return `Olá ${nome}, como você está, tudo bem?`
}

console.log(saudacao('Gabriel', saudacaoFormal));