const sum = require('./script');

test('Teste: 1 + 4 resulta em 5.', () => {
  expect(sum(1, 4)).toBe(5);
})