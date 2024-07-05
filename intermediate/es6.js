let contactNo = [123, 1211, 1099, 1222];

// for (let i = 0; i < contactNo.length; i++) {
//     contactNo[i] = '+91' + contactNo[i];
// }
// console.log(contactNo)

// callback
// function(value) {
// return '+91' + value
// }

const contact = contactNo.map((value, idex) => {
  console.log(value, idex);
  return "+91" + value;
});

console.log(contact, contactNo);
