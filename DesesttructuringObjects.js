//Desestructuring objects
const player = {
  fullName: "Michael Jordan",
  club: "LA Lakers",
  address:{
    city: "Los Angeles"
  }
};
console.log(player.fullName);
console.log(player.address.city);

const {fullName, club, address: {city}} = player;
//console.log(`${fullName} plays for ${club}`)
console.log(`${fullName} lives in ${city}`);
/*
    **** Challenge ****
    
    For this challenge destruture the following object.
*/

const student = {
  name: "Kyle",
  age: 24,
  projects: {
      diceGame: "Two player dice game using JavaScript"
  }
};

const {name, age, projects: {diceGame}} = student;

console.log(`${name} is ${age} years old and has a project game about ${diceGame}`);
