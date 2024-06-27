import { it, expect, describe } from 'vitest';

import { validateNotEmpty } from './validation';

describe('class validateNotEmpty', () => {
  it('should throw an error if an empty string is provided as value', () => {
    const testInput = '';

    const validationFn = () => validateNotEmpty(testInput);

    expect(validationFn).toThrow();
  })

  it('should throw an error if an string with blank space is provided as value', () => {
    const testInput = '   ';

    const validationFn = () => validateNotEmpty(testInput);

    expect(validationFn).toThrow();
  })

  it('should throw an error with the provided error message', () => {
    const testInput = '';
    const testErrorMessage = 'Test';

    const validationFn = () => validateNotEmpty(testInput, testErrorMessage);

    expect(validationFn).toThrow(testErrorMessage);
  })
})
