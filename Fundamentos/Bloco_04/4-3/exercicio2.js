let div = 0;

for (let index = 15; index <= 155; index += 1) {
    if (index % 3 === 0) {
        div += 1;
    }
} if (div >= 50) {
    console.log('Mensagem secreta')
}