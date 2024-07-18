// Asynchronous 
// Event Loop
// Concurrency
// Callback Hell
// Promises
// .then() .catch()
// async await

console.log(1);

console.log(2);

setTimeout(() => {
    console.log(3)
} , 5000);

// callback hell
//  () => {
//     () => {
//         () => {

//         }
//     }
//  }

// Promises
// 1. new Promise/
// 2. then catch

fetch("https://api.githu.com/users/MunafHajir")
.then(() => console.log(3.5))
.catch(() => console.log("error"))


async () => {
    try {
        const data = await fetch("https://api.githu.com/users/MunafHajir");
    } catch (err) {

    }
}


console.log(4);



// Promise .all() .some()
// new Promise
//