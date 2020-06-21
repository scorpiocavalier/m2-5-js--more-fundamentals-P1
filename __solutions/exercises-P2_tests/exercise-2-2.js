// Exercise 2-2
// ---------

function f(str) {
  if (str.charAt(str.length - 1) === '') return undefined;
  return str.charAt(str.length - 1);
}

// Other solution
function g(str) {
  if (str.slice(-1) === '') return undefined;
  return str.slice(-1);
}
