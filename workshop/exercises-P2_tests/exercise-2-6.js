// Exercise 2-6
// ------------

// Step 1
// Write a function that
// - accepts an array.
// - The array has 3 elements.
// - The first element of the array is a string that represents an operation.
// - If the operation is
//      - "add", return the sum of the two other elements of the array.
//      - "sub" return their difference.
//      - "mult" return their product.
//  - Anything else return undefined.

// For example:
// f(["add", 10, 20]); // 30
// f(["mult", 2, 3]); // 6
// f(["spoof", 10, 10]); // undefined

function calculator(arr) {
  let [action, num1, num2] = arr;

  switch(action) {
    case 'add': return num1 + num2;
    case 'sub': return num1 - num2;
    case 'mult': return num1 * num2;
    default: return undefined;
  }
}

// Step 2
// We need 8 total test cases. The first two is provided.
expect(calculator(['mult', 2, 4]), 8);
expect(calculator(['add', 2, 4]), 6);
expect(calculator(['sub', 2, 4]), -2);

expect(calculator(['mult', -2, 0]), 0);
expect(calculator(['add', -2, 4]), 2);
expect(calculator(['sub', -2, 4]), -6);

expect(calculator(['spoof', 2, 4]), undefined);
expect(calculator([123, 2, 4]), undefined);

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
