import { describe, expect, it } from 'vitest';

import { HttpError, ValidationError } from './errors';

describe('class HttpError', () => {
  it('should contain the provided status code, message and data', () => {
    const testStatus = 1;
    const testMessage = 'Test';
    const testData = { key: 'test' };

    const testError = new HttpError(testStatus, testMessage, testData);

    expect(testError.statusCode).toBe(testStatus);
    expect(testError.message).toBe(testMessage);
    expect(testError.data).toBe(testData);
  });

  it('should contain undefined as data if no data is provided', () => {
    const testStatus = 1;
    const testMessage = 'Test';

    const testError = new HttpError(testStatus, testMessage);

    expect(testError.statusCode).toBe(testStatus);
    expect(testError.message).toBe(testMessage);
    expect(testError.data).toBeUndefined();
  })

  it('should contain the provided status code, message, and data', () => {
    const testStatus = 404;
    const testMessage = 'Not Found';
    const testData = { key: 'test' };

    const testError = new HttpError(testStatus, testMessage, testData);

    expect(testError.statusCode).toBe(testStatus);
    expect(testError.message).toBe(testMessage);
    expect(testError.data).toBe(testData);
  });

  it('should contain undefined as data if no data is provided', () => {
    const testStatus = 500;
    const testMessage = 'Internal Server Error';

    const testError = new HttpError(testStatus, testMessage);

    expect(testError.statusCode).toBe(testStatus);
    expect(testError.message).toBe(testMessage);
    expect(testError.data).toBeUndefined();
  });

  // it('should throw an error if an invalid status code is provided', () => {
  //   const invalidStatus = 'invalid';
  //   const testMessage = 'Invalid Status Code';

  //   const invalidCode = new HttpError(invalidStatus, testMessage);

  //   expect(() => {
  //     new HttpError(invalidStatus, testMessage);
  //   }).toThrow('Invalid Status Code');

  // }); // Chatgpt criou esse, mas nao funciona
})

describe('class ValidationError', () => {
  it('should contain the provided error message', () => {
    const testMessage = 'Validation failed';

    const validationError = new ValidationError(testMessage);

    expect(validationError.message).toBe(testMessage);
  });
});