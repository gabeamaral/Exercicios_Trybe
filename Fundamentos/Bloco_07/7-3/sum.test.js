// sum.test.js
const sum = require('./sum.js');

test('Testando se a soma: 5 + 4 é igual a 9', () => {
  expect(sum(4, 5)).toBe(9);
})
it('Testando se a soma: 0 + 0 é igual a 0', () => {
  expect(sum(0, 0)).toBe(0);
})
it('Joga um erro quando bla', () => {
  expect(sum(4, '5')).toThrow(Error);
});






// test('sums two values', () => {
//   expect(sum(2, 3)).toBe(5);
// });