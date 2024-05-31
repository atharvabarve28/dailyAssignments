//callback function

const async = require("hbs/lib/async")

// function x(y) {
//     y()
//     console.log("x");
// }

// x(function y() {
//     console.log("y");
// })


//without async/await

// const p = new Promise((resolve, reject) => {
//     resolve("Promise Resolved")
// })

// getData = () => {
//     console.log("Before promise resolved");
//     p.then((res) => {
//         console.log(res);
//     })
// }

// getData()

//with async/await

// const p = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve("Promise resolved")
//     },5000)
// })

// async function handlePromise() {
//     console.log("val");
//     const val = await p
//     console.log(val);
// }

// handlePromise()