// We should always try to test with the minimum arguments possible

// import { test } from 'vitest' or
import { it, expect } from 'vitest'
import { add } from './math';

// test('should summarize all number values in an array'); if import test
it('should summarize all number values in an array', () => {
  // Arrange
  const numbers = [1, 2, 3];
  // Act
  const result = add(numbers);
  // Assert
  const expectedResult = numbers.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );
  expect(result).toEqual(expectedResult)
});

it('should yield NaN if a least one invalid number is provided', () => {
  const inputs = ['invalid', 1];

  const result = add(inputs);

  expect(result).toBeNaN();
});

it('should yield sum if an array of numeric string values is provided', () => {
  const numbers = ['1', '2']

  const result = add(numbers);

  const expectedResult = numbers.reduce(
    (previousValue, currentValue) => +previousValue + +currentValue,
    0
  );
  expect(result).toBe(expectedResult)
});

it('should yield 0 if an empty array is provided', () => {
  const numbers = [];

  const result = add(numbers)

  expect(result).toBe(0)
  // expect(result).not.toBe(); If we expect the opposit that is not the case.
})

it('should throw an error if no value is passed into the function', () => {
  const resultFn = () => {
    add();
  };
  // expect(resultFn).not.toThrow(); // If we expect the opposit that is not the case.
  expect(resultFn).toThrow();
})
// or you can catch error doing like this:
it('should throw an error if no value is passed into the function', () => {
  try {
    const result = add();
  } catch (error) {
    expect(error).toBeDefined();
  }
})

it('should throw an error if provided with multiple arguments instead of an array', () => {
  const num1 = 1;
  const num2 = 2;

  const resultFn = () => {
    add(num1, num2);
  };

  // expect(resultFn).not.toThrow(); // Using 'not' and running the test we'll have the TypeError on results.
  expect(resultFn).toThrow(/is not iterable/);
})