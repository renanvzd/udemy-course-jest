export function validateStringNotEmpty(value) {
  const removeSpaces = value.trim()
  // console.log(value.length); 27
  // console.log(removeSpaces.length);  21
  if (value.trim().length === 0) {
    throw new Error('Invalid input - must not be empty.');
  }
  return removeSpaces
}

export function validateNumber(number) {
  if (isNaN(number) || typeof number !== 'number') {
    throw new Error('Invalid number input.');
  }
}

// It needs to remove the 'export' at the beggining of the function
// test('');
// function test(...params) {
//   console.log('\n (', ...params, ')\n');
//   console.log('\ =>', validateStringNotEmpty(...params), '\n\n');
// }