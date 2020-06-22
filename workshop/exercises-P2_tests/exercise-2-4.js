// Exercise 2-4
// ------------

// Write a function that returns the letter at the specified position in the
// string. If no such letter exists, it should return undefined.
//
// For example:
// getLetterAtIndex("hello", 1); // e
// getLetterAtIndex("", 4);      // undefined
// getLetterAtIndex("abc", 0);   // a

const getLetterAtIndex = (str, index) => {
  let lastIndex = str.length - 1;
  return index > lastIndex ? undefined : str[index];
}

// Add 6 more test cases
expect(getLetterAtIndex('', 0), undefined);
expect(getLetterAtIndex('g', 1), undefined);
expect(getLetterAtIndex('g', -1), undefined);
expect(getLetterAtIndex('g', 0), 'g');
expect(getLetterAtIndex('hello', 4), 'o');
expect(getLetterAtIndex(' goodbye', 0), ' ');
expect(getLetterAtIndex('good bye', 4), ' ');
expect(getLetterAtIndex('g ', 1), ' ');

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
