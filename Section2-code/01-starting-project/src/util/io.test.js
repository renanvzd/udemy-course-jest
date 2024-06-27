// Testing whether the function is beeing executed

import { it, expect, vi } from 'vitest';
import { promises as fs } from 'fs'

import writeData from './io';

vi.mock('fs') // jest.mock('fs') must be imported from the top.

it('should execute the writeFile method', () => {
  const testData = 'Test';
  const testFilename = 'test.txt'

  writeData(testData, testFilename)
  expect(fs.writeFile).toBeCalled();

  // return expect(writeData(testData, testFilename)).resolves.toBeUndefined();
})