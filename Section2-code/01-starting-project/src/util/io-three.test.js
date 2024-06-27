// This test is using the fs.js file within the __mocks__ folder.
import { it, expect, vi } from 'vitest';

import writeData from './io';

vi.mock('fs')
vi.mock('path', () => {
  return {
    default: {
      join: (...args) => {
        return args[args.length - 1]
      }
    }
  }
});

it('should return a promise that resolves to no value if called correctly', () => {
  const testData = 'Test';
  const testFilename = 'test.txt'

  writeData(testData, testFilename)
  return expect(writeData(testData, testFilename)).resolves.toBeUndefined();
})