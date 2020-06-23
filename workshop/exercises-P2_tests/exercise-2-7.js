// Exercise 2-7
// ------------

// Step 1
// - The function's parameter is an array.
// - The first element of the array is a string. The second is a number.
// - Make this function return the string repeated as many times as specified by the second element of the array.
// - If a negative number or zero is specified, return an empty string. If any invalid parameters are supplied return undefined.

// f(["foo", 3]) // "foofoofoo"
// f(["fo", 3]) // "fofofo"
// f(["foo", -1]) // ""

function repeat(arr) {
  let [aString, aNumber] = arr;

  if(!Array.isArray(arr)
    || typeof(aString) !== 'string'
    || !Number.isInteger(aNumber))
    return undefined;

  let repeatedString = '';
  
  if(aNumber > 0)
    for(let i=0; i<aNumber; i++)
      repeatedString = repeatedString.concat(aString);
  
  return repeatedString;
}

// We need 7 test cases.
// Don't forget to test all of the question parameters
expect(repeat(['foo', 3]), 'foofoofoo');
expect(repeat(['foo', 0]), '');
expect(repeat(['foo', -3]), '');
expect(repeat([123, -3]), undefined);
expect(repeat(['foo', 'abc']), undefined);
expect(repeat('foo'), undefined);
expect(repeat('f2'), undefined);

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