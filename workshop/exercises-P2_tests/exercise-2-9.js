// Exercise 2-9
// ------------

// Make this function return the longest word in the input string. If the input
// string is empty then return an empty string.
// If multiple words have the same length, return the last one that matches.

// Example
//   longestWord("hey hello morning") returns "morning"

// HINTS:
//  - You'll need to use the split string method
//  - `forEach` might be helpful

function longestWord(str) {
  let longestWord = '';
  let strArray = str.split(' ');

  strArray.forEach(word => {
    if(word.length > longestWord.length)
      longestWord = word;
  });

  return longestWord;
}

// We need 5 test cases
expect(longestWord("hey hello morning"), 'morning');
expect(longestWord("heyhello morning"), 'heyhello');
expect(longestWord("heyhellomorning"), 'heyhellomorning');
expect(longestWord("hey.hello morning"), 'hey.hello');
expect(longestWord("12345 12345"), '12345');

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
