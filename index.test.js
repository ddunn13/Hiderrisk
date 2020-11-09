const hiderrisk = require('./index');

const testVar = 'testString';

test('check text output is in desired format', () => {
  expect(typeof hiderrisk(testVar)).toBe('string');
});

test('check text output length is correct', () => {
  expect(hiderrisk(testVar).length).toBe(10);
});

test('check lib default output includes asterisk', () => {
  expect(hiderrisk(testVar).includes('*')).toBe(true);
});

test('check lib accepts custom symbol', () => {
  expect(hiderrisk(testVar, '$').includes('$')).toBe(true);
});