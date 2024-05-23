const fb = require('../fizzbuzz');

test('Sanity check', () => {
  expect(2+2).toBe(4);
});

test('FIZZ should be equal to "fizz"', () => {
  expect(fb.FIZZ).toBe('fizz');
});

test('BUZZ should be equal to "buzz"', () => {
  expect(fb.BUZZ).toBe('buzz');
});

test('FIZZBUZZ should be equal to "fizzbuzz"', () => {
  expect(fb.FIZZBUZZ).toBe('fizzbuzz');
});

test('isFizzy should return true when n is divisible by 3', () => {
  expect(fb.isFizzy(3)).toBe(true);
});

test('isBuzzy should return true when n is divisible by 5', () => {
  expect(fb.isBuzzy(5)).toBe(true);
});

test('fizzyBuzzy should return "fizz" when n is divisible by 3, "buzz" when n is divisible by 5, and "fizzbuzz" if divisible by both 3 and 5', () => {
  expect(fb.fizzyBuzzy(3)).toBe('fizz');
  expect(fb.fizzyBuzzy(5)).toBe('buzz');
  expect(fb.fizzyBuzzy(15)).toBe('fizzbuzz');
});

test('fizzBuzz should return an object with the fizziness and buzziness of the count', () => {
  expect(fb.fizzBuzz(15)).toEqual({ count: 15, fizz: 4, buzz: 2, fizzBuzz: 1 });
});

