import { it, expect } from 'vitest'
import { transformToNumber } from './numbers';

it('should transform a string number to a number of type number', () => {
  // Arrange
  const numbers = "1";
  // Act
  const result = transformToNumber(numbers);
  // Assert
  expect(result).toBeTypeOf('number')
});

it('should return 0 if array is null', () => {
  // Arrange
  const numbers = "";
  // Act
  const result = transformToNumber(numbers);
  // Assert
  expect(result).toEqual(0)
});

it('should yield NaN for non-transformable values', () => {
  // Arrange
  const input = "invalid";
  const input2 = {};
  // Act
  const result = transformToNumber(input);
  const result2 = transformToNumber(input2);
  // Assert
  expect(result).toBeNaN();
  expect(result2).toBeNaN();
});

it('should return a number when the argument is a negative string', () => {
  // Arrange
  const numbers = "-1";
  // Act
  const result = transformToNumber(numbers);
  // Assert
  expect(result).toBeTypeOf('number')
});
