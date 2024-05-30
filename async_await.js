//callback function

// function x(y) {
//     y()
//     console.log("x");
// }

// x(function y() {
//     console.log("y");
// })


//without async/await

const p = new Promise((resolve, reject) => {
    resolve("Promise Resolved")
})

getData = () => {
    console.log("Before promise resolved");
    p.then((res) => {
        console.log(res);
    })
}

getData()

//with async/await

