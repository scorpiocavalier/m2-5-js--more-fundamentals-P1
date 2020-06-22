// Exercise 2-3
// ------------

// This function expects an array of 2 numbers as input (e.g. [1, 2])
// Make this function return the sum of the two numbers that are passed to it.
// If anything other than an array with 2 numbers is passed, return undefined.
//
// HINT: You can use the typeof function to check the type of each element:
//   - `typeof 3` returns 'number')

// 1. Check if input is an array, otherwise return undefined.
// 2. Check if the array consists exactly 2 elements, otherwise return undefined.
// 3. Return the sum of both elements if they are numbers, otherwise return undefined.
const sumDigits = input => {
  return (
      input.length == 2 
        && input.every(element => Number.isInteger(element))
        ? input.reduce((total, num) => total + num) : undefined
  );
}

// Add 5 more test cases here! 7 total
expect(sumDigits([2, 5]), 7);
expect(sumDigits([-1, 0]), -1);
expect(sumDigits(-1), undefined);
expect(sumDigits('a'), undefined);
expect(sumDigits({'a': 'b', 'c': 'd'}), undefined);
expect(sumDigits("error"), undefined);
expect(sumDigits(["error", -1]), undefined);
expect(sumDigits([-1, 0, 5]), undefined);
expect(sumDigits([-1]), undefined);

/**
 * -------------------------------------------------------------------
 * ⚠️ No changes necessary below. ⚠️
 * -------------------------------------------------------------------
 */
function expect(result, value) {
  if (result === value) {
    console.log('✅ Test succeeded');
  } else {
    console.log(`⛔️ Expected “${result}” to equal “${value}”`);
  }
}