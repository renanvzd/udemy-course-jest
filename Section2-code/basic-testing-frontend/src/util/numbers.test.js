import { describe, it, expect } from 'vitest'
import { cleanNumbers, transformToNumber } from './numbers';

describe('transformToNumber()', () => {
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
})

describe('cleanNumbers()', () => {
  it('should return an array of number values if an array of string number values is provided', () => {
    const numberValues = ['1', '2'];

    const cleanedNumbers = cleanNumbers(numberValues);

    expect(cleanedNumbers[0]).toBeTypeOf('number');
  });
  it('should return an array of number values if an array of string number values is provided', () => {
    const numberValues = ['1', '2'];
    const cleanedNumbers = cleanNumbers(numberValues);

    expect(cleanedNumbers[0]).toBeTypeOf('number');
  });
  it('should return an array of number values if an array of string number values is provided', () => {
    const numberValues = ['1', '2'];
    const cleanedNumbers = cleanNumbers(numberValues);

    expect(cleanedNumbers).toEqual([1, 2]);
  });

  // it('should return an array of number values if an array of string number values is provided', () => {
  //   const numberValues = ['1', '2'];
  //   const cleanedNumbers = cleanNumbers(numberValues);

  //   expect(cleanedNumbers).toBe([1, 2]);   // This is false because "toBe" compares two objects (False) -> {} == {}
  // });

  it('should throw an error if an array with at least one empty string is provided', () => {
    const numberValues = ['', 1];

    const cleanFn = () => cleanNumbers(numberValues);

    expect(cleanFn).toThrow();
  });
});

