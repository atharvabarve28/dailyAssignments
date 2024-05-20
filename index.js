let name = {
    firstName: "Atharva",
    lastName: 'Barve',
}

let printFullName = function (city, state) {
    console.log(this.firstName + " " + this.lastName + " " + "from" + " " + city + "," + state)
}

console.log()
printFullName.call(name, "Thane", "Maharashtra")
console.log()

// we can use this method for the 
// call()method
// function borrowing
// it used 

let name2 = {
    firstName: "Atharva1",
    lastName: "Barve1",
}

printFullName.call(name2, "Mumbai", "Maharashtra");

console.log()
// apply
// here we pass arguments in [] format
// array list as param
//similar to call() method
printFullName.apply(name2, ["Mumbai", "Maharashtra"]);

console.log()

// bind
// bind() method returns a function
// but it does not calls by itself
// we have to invoke that function
let printName = printFullName.bind(name2, "Mumbai", "Maharashtra");
console.log(printName)
console.log()
printName()
console.log()