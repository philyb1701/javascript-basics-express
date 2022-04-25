function negate(a) {
  return !a; //Logical NOT
};

function both(a, b) {
  return a && b;
};

function either(a, b) {
  return a || b;
};

function none(a, b) {
  return !(a || b); // Logical NOT
};

function one(a, b) {
  return a !== b; //If a does not strictly equal
};

function truthiness(a) {
  return !!a; // !! - check string if it is falsey.
};

function isEqual(a, b) {
  return a === b;
};

function isGreaterThan(a, b) {
  return a > b;
};

function isLessThanOrEqualTo(a, b) {
  return a <= b;
};

function isOdd(a) {
  return !!(a % 2); //! returns true if the object is false. If you negate it again you get true for values that exist and false for the ones that do not.
};

function isEven(a) {
  return !(a % 2); //! returns true if the object is false. If you negate it again you get true for values that exist and false for the ones that do not.
};

function isSquare(a) {
  return Number.isInteger(Math.sqrt(a)); // number.isinteger checks if number is integer (whole number remember) or if it isn't (false). Math.sqrt does what it says. 
};

function startsWith(char, string) {
  return string.charAt(0) === char;
};

function containsVowels(string) {
  return /[aeiouAEIOU]/.test(string); // RegExp.test(string) matches text with a pattern. RegExp - regular expression. Test executes search for a match between expression and string.
};

function isLowerCase(string) {
  return string === string.toLowerCase() && string !== string.toUpperCase(); // If string strictly equal to lower case AND string is strictly NOT EQUAL to uppercase.
};

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
