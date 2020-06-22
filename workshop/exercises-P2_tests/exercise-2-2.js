// Exercise 2-2
// ------------

// Step 1
// Write a function that returns the LAST character of the string that is
// passed to it.
// - If it's an empty string, return `undefined`
// - If it's a number, return `undefined`

const lastCharacter = str => {
  if(Number.isInteger(str))
    return undefined;
  else {
    let lastChar = str.charAt(str.length - 1);
    return lastChar == '' ? undefined : lastChar;
  }
}

// Step 2
// You're given 1 test case. Add 4 more, making sure to cover all of the
// conditions specified above (don't forget empty string and number!!)

expect(lastCharacter('max'), 'x');

// Add 4 more test cases here!
expect(lastCharacter('max.'), '.');
expect(lastCharacter('max '), ' ');
expect(lastCharacter(''), undefined);
expect(lastCharacter(123), undefined);
expect(lastCharacter(-123), undefined);

// 🌠 NOTE 🌠
// Be creative with your tests!
// There's an old joke about QA (Quality Assurance) testers:
//
//   “A QA tester walks into a bar. He orders a beer, and then 1000 beers,
//    and then -1 beers, and then "malaise" beers, and then -Infinity beers…”
//
// 😂

/**
 * -------------------------------------------------------------------
 * ⚠️ No changes necessary below. ⚠️
 * -------------------------------------------------------------------
 */
function expect(result, value) {
  console.log(result === value ? '✅ Test succeeded' : `⛔️ Expected “${result}” to equal “${value}”`);
}