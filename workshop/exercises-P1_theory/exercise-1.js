// Given the following functions, answer the questions below.
const square = x => x * x;

const decrement = x => x - 1;

const duplicateString = x => x.concat(x);

const reverseString = str => str.split('').reverse().join('');

// Expand each of the following and get the result of the expression

// 1-1
square(decrement(square(decrement(3))));
// decrement(3) => 2
// square(2) => 4
// decrement(4) => 3
// square(3) => 9

// 1-2
decrement(decrement(square(square(3))));
// square(3) => 9
// square(9) => 81
// decrement(81) => 80
// decrement(80) => 79

// 1-3
duplicateString(reverseString('hello'));
// reverseString('hello') => ['h', 'e', 'l', 'l', 'o'] => ['o', l', 'l', 'e', 'h'] => 'olleh'
// duplicateString('olleh') => 'olleholleh'

// 1-4
reverseString(duplicateString(duplicateString('foo')));
// duplicateString('foo') => 'foofoo'
// duplicateString('foofoo') => 'foofoofoofoo'
// reverseString('foofoofoofoo') => 'oofoofoofoof'