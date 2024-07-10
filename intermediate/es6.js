// Ecmascript

// ES6
// 1. LET / CONST / VAR
// 2. Template Literals -> `${} `
// 3. Array Methods -> Map, Filter, Reduce
// 4. Arrow Function
// 5. Spread operators
// 6. Rest Parameters
// 7. Destructuring
// 8. Promises
// 9. Async Await
// 10. Class

// function name () {
//     //code
//     return value
// }

// Anonymous FUnction
// function () {

// }

// Function as a variable

const greet = function () {
  console.log("Hello");
};

greet();

// Anonymous Function -> Callbacks

// Arrow function

// () => {}

function add(a, b) {
  return a + b;
}

const add2 = (a, b) => {
  return a + b;
};

// 1. Syntactical Beautify 2. Lexical This

1;
const add3 = (a) => {
  return a + 1;
};

2;

const add4 = (a) => a + 1;

// Normal Function -> Parent k this bind nhi hota h
// Arrow Function -> Parent k this bibnd hota h

// Spread Operator

const batchDetails = { batchId: "TP_RP_05", mentor: "Munaf", tech: "ReactJS" };

const sandeshStudent = {
  name: "sandesh",
  ...batchDetails,
};

console.log(sandeshStudent);

// Rest Parameters

function sum(...value) {
  console.log(value);
}

sum(1, 2, 4, 5, 6, 7, 8);

// Destructuring

// 1. Object

const { mentor, batchId, tech } = batchDetails;

// batch["mentor"]
// batch.mentor
console.log(mentor, batchId, tech);

// 2. Array

const num = [1, 2, 3, 5, 6];

// const first = num[0]
// const second = num[1]

let [first, second, , fourth] = num;
console.log(first, second, fourth);

const contactNo = [99999, 111111, 888888];

// const updateValue = (value, index) => {
//   return '+91' + value;
// }

const updatedContactNo = contactNo.map((value) => "+91" + value);

console.log(updatedContactNo);

contactNo.forEach((value) => {
  console.log("for", value);
});

// includes
// forEach
// filter
// reduce
// splice
// join

// string method
// object method

// debugger;

console.log("Munaf Arun Smita Sandesh".split(" "));

function debug() {
  try {
    // Condition
    // Loop
    // API INtegrate
    // SetTimeout
  } catch (exception) {}
}

let response;
const api = async () => {
  response = await fetch("https://api.github.com/users/MunafHajir");
  response = await response.json();
  console.log(response);
};

api();
