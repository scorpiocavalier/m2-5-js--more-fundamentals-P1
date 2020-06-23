// Exercise 2-8
// ------------

// Write a function that returns the input string, reversed.
// For example "hello" would return "olleh" and "how are you" would return "uoy era woh".
//
// You are NOT ALLOWED to use the `reverse` method.
// You must use a loop of some kind (for, while, forEach, map, etc)
//
// HINT (one possible approach):
//  - Split your string into an array of characters
//  - Create an empty array
//  - Loop over the array of split characters in reverse order and fill the
//    empty array by pushing each character into it
//  - Convert the filled array into a string (use the join method) and return it

function reverse(str) {
  
  const strArray = str.split('');
  
  let reversedArray = strArray.map((letter, index) => {
    let lastIndex = str.length - 1 - index;
    return strArray[lastIndex];
  });
  
  let reversedString = reversedArray.join('');

  return reversedString;
}

// We need 5 test cases
expect(reverse('hello'), 'olleh');
expect(reverse('hello world!'), '!dlrow olleh');
expect(reverse('hello world to you!'), '!uoy ot dlrow olleh');
expect(reverse('how are you?'), '?uoy era woh');
expect(reverse('anna civic level wow racecar'), 'racecar wow level civic anna');

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
