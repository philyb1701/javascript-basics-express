const getNthElement = (index, array) => {
  return array[index % array.length]; //I get it, kind of. Just not 100%. Need to think a bit more. Maths stuff.
};

const arrayToCSVString = array => {
  return array.toString(array); //Easy.
};

const csvStringToArray = string => {
  return string.split(`,`); //Splits the characters using what was given. Easy.
};

const addToArray = (element, array) => {
  array.push(element); //Add the element select to whatever array selected. Easy. No return because it is pushing.
};

const addToArray2 = (element, array) => {
  return array.concat(element); //If you want to add the items of one array to another array. Essentially - firstArray.concat(secondArray):
};

const removeNthElement = (index, array) => {
  return array.splice(index, 1); //I understood the splice function. Failed with the second paramter - for future note, the 2nd parameter means it removes one item only. 1 means remove only 1.
};

const numbersToStrings = numbers => {
  return numbers.map(number => number.toString()); //.map creates a new array. This one uses a callbackFn to add values to new array. Still fuzzy, but works.
};

const uppercaseWordsInArray = strings => {
  return strings.map(strings => strings.toUpperCase()); //Sme as above. Easy, now that you know....
};

const reverseWordsInArray = strings => {
  return strings.map(strings => strings.split("").reverse().join("")) //This worked somehow creating a new array with map. FCC has good article on this but didn't use .map.
};

const onlyEven = numbers => {
  return numbers.filter(n => n % 2 === 0) //filter creates new element with all numbers that pass the parameter arrow function. Easy enough.
};

const removeNthElement2 = (index, array) => {
  const arrays = [...array]; // Creates a new variable to stop mutation. Uses spread operator.
  arrays.splice(index, 1) // As above in remove NthElement1.
  return arrays; // Returns the const variable created. This was a real pain in the arse.
}; // https://jaketrent.com/post/remove-array-element-without-mutating - really helpful site for this one.

const elementsStartingWithAVowel = strings => {
  return strings.filter(vowel => /^[aeiouAEIOU]/.test(vowel)); //Same as booleans problem with one exception. Easy. Only difference is ^ is an assertion operator that matches the beginning of an input.
};

const removeSpaces = string => {
  return string.replace(/\s/g, ""); //Another regex as above. Had to look up /\s/g but otherwise - easy. \s is spaces and /g is a global flag for all white and not just first.
};

const sumNumbers = numbers => {
  return numbers.reduce((a, b) => a + b) //Easy enough. 
}; 

const sortByLastLetter = strings => {
  return strings.sort((a, b) => a.charCodeAt(a.length -1) - b.charCodeAt(b.length -1)); //Use charCodeAt. Returns a number associated with a character. Letters that occur later in the alphabet have higher value. Substack solution.
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
