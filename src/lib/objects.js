const createPerson = (name, age) => {
  return {name, age} //Easy.
};

const getName = object => {
  return object.name; //Easy. Dot notation.
};

const getProperty = (property, object) => {
  return object[property]; // Bracket notation. Instead of using an index number to select an item, you are using the name associated with each member's value. Easy.
};

const hasProperty = (property, object) => {
  return object.hasOwnProperty([property]); // Easy but had to use MDN. Returns true if the object has the specified property as own property.
}; // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty

const isOver65 = person => {
  return person.age > 65; //Easy. Just remember the object notation.
};

const getAges = people => {
  return people.map(person => person.age) //Struggled a bit. Kind of cheaty, as went back to arrays and used .map to creat new array.
};

const findByName = (name, people) => {
  return people.find (person => person.name === name) //Not too hard, still struggle a bit with the function parameters sometimes. Easyish.
};

const findHondas = cars => {
  return cars.filter (car => car.manufacturer === `Honda`); //Filter instead of find. Find returns first result, filter shows them all. Easy.
};

const averageAge = people => {
  return people.reduce((a, b) => a + b.age, 0) / people.length; // Difficult. b.age -> had to declare .age. 
}; //https://javascript.info/task/average-age#:~:text=Write%20the%20function%20getAverageAge(users,%2B%20ageN)%20%2F%20N%20. - helped with solution.

const createTalkingPerson = (name, age) => {
  return {
    name: name,
    age: age,
    introduce: talkingPerson => {
      return `Hi ${talkingPerson}, my name is ${name} and I am ${age}!`;
    }
  }
}; //This wasn't hard per se, but it was unusual for me to go from writing short solutions to a longer function. Need more practice.


module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
