import { prettyIntegerValue, prettyValue } from '../../src/utils/numbers';


test('Pretty value', () => {
  expect(prettyValue(1000)).toBe('10.00');
  expect(prettyValue(100000)).toBe('1,000.00');
  expect(prettyValue(100000000)).toBe('1,000,000.00');
  expect(prettyValue(-1000)).toBe('-10.00');
});

test('Pretty integer value', () => {
  expect(prettyIntegerValue(1000)).toBe('1,000');
  expect(prettyIntegerValue(100000)).toBe('100,000');
  expect(prettyIntegerValue(100000000)).toBe('100,000,000');
  expect(prettyIntegerValue(-1000)).toBe('-1,000');
});
