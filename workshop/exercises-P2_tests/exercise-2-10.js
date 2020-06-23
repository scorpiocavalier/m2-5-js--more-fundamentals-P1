// Exercise 2-10
// -------------

// Make this function return the input string, capitalized.
// f("hello world"); // Hello World
// f("ALL YOUR BASE ARE BELONG"); // All Your Base Are Belong

// HINT:
//  - Write a function that capitalizes a single word.
//  - Split the input sentence into an array of words
//  - Iterate over each word, calling your "capitalize word" function
//  - Join the results into a string

function makeIntoTitle(sentence) {
  // lowercap everything
  let lowercasedSentence = sentence.toLowerCase();

  // split into array
  let lowSentenceArray = lowercasedSentence.split(' ');

  // capitalize first letter of each word of array
  let capSentenceArray = lowSentenceArray.map(word => {
    let firstLetterCapitalized = word[0].toUpperCase();
    let restOfWord = word.slice(1);
    return firstLetterCapitalized.concat(restOfWord);
  });

  // join into string
  let title = capSentenceArray.join(' ');
  
  return title;
}

// Add 6 total (5 more)
expect(makeIntoTitle('the longest road is a great song'), 'The Longest Road Is A Great Song');
expect(makeIntoTitle('ALL YOUR BASE ARE BELONG'), 'All Your Base Are Belong');
expect(makeIntoTitle('hello world'), 'Hello World');

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
