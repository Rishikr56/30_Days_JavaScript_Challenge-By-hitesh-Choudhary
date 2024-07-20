// Activity 1: Variable Declaration
// Task 1: Declare a variable using var, assign it a number, and log the value to the console.
// Task 2: Declare a variable using let, assign it a string, and log the value to the console.


var num = 23;
console.log(num);

let name = "Sujit";
console.log(name);

// Activity 2: Constant Declaration
// • Task 3: Declare a variable using const, assign it a boolean value, and log the value to the console.

const s = true;
console.log(s);


// Activity 3: Data Types
// • Task 4: Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the typeof operator.

let a = 45 //Number
let b = "Rishi"; //String
let c = false;
let d = {
    name : "Rishi Kumar",
    roll : 45,
    Town : "Kolkata"
}

let e = [1,2,3,4,5,6,4,5,6];

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

// Activity 4: Reassigning Variables
// • Task 5: Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console.

let f = 45;

console.log("previous value of f is :",f);

f = "rishi"

console.log("after changing value of f is:",f);

// Activity 5: Understanding const
// Task 6: Try reassigning a variable declared with const and observe the error.

const h = 45;

h = 56; // Here error is [TypeError: Assignment to constant variable.]