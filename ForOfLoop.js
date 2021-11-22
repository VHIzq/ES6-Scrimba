
const doubleMoney = (incomes) => {
  let doubleMount = incomes.map((income) => {
    return income += income; //income *2;
  })
  console.log(doubleMount);
}
doubleMoney([2750, 2200, 2400, 3000]);



let mount=0;
const totalMoney = (incomes) =>{
  mount = incomes.map((income) => {
    return mount += income;
  })
  console.log(mount);
}
totalMoney([2750, 2200, 2400, 3000]);


let fullName = "Bootcamp Generation";
for(const char of fullName){
  console.log(char);
}



let incomes = [2750, 2200, 2400, 3000];
let total = 0;

for(const income of incomes){
  total += income;
}
console.log(total);

// Challenge - For Of Loop

// Using the For of Loop, iterate through the array and print into the console, a message like:
// Tom lives in Lisbon

const students = [ 
  { name: "John", city: "New York" },
  { name: "Peter", city: "Paris"},
  { name: "Kate", city: "Sidney" }
]
let livesIn = "";

/* for(const student of students){
  livesIn += `${student.name} lives in ${student.city} \n`;
}
console.log(livesIn); */


for(const student of students){
  console.log(`${student.name} lives in ${student.city}`);
}


