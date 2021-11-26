import {data} from "./Data_export";

let dataUpdate = data;
dataUpdate.push("Banana");

console.log(dataUpdate);


/* **Challenge**

Inside of the file data.js, create a function add, that will receive 2 numbers and return the sum of them.
Make sure to export this function.

- Import the function add, into the index.js file
- Create a variable result, that will hold the result of the function add when you call it and pass 2 numbers into it.
- print into the console the value of the variable result; */

import {add} from "./data.js"

let result = add(9, 1);
console.log(result);