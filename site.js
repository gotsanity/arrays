// let arr = new Array();

let arr = [];

let fruits = [
    "Apple",
    "Orange",
    "Plum"
];

console.log("fruits", fruits);

console.log("the fruit array contains " + fruits.length + " elements");

console.log("I like this fruit: ", fruits[1]);

fruits[3] = "Lemon";

// you could do this to add to the end... but
fruits[fruits.length] = "Kiwi";

// this is better
fruits.push("Lime");

console.log("The last element in the array is: ", fruits[fruits.length -1]);

let myFruit = fruits.pop();

console.log("the popped element is ", myFruit);
console.log(fruits);

//fruits[128] = "soda pop";

// range based for loop
for (let i = 0; i < fruits.length; i++) {
    if (i === 5) {
        break;
    }

    console.log(fruits[i]);
}

// for .. of loop
for (let fruit of fruits) {
    console.log("Elem", fruit);
}

// for .. in
for (let key in fruits) {
    console.log("key", fruits[key]);
}

// forEach
fruits.forEach((value, index, arr) => {
    console.log("forEach", value);
});


let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matrix);

console.log(fruits.toString());

let fruitcomp = fruits;

console.log(fruits == fruitcomp);

console.log( 0 == [] );
console.log( '0' == [] );



fruits.push(...["lime", "strawberry", "blackberry"]);
console.log(fruits);

// splicing (removing elements from the middle of an array)

// let lemon = fruits.splice(3, 3); // returns an array

// console.log(lemon);
// console.log(fruits);



// slicing (like splice, but doest modify the source array)

// let myFruits = fruits.slice(3, 7);

// console.log("sliced", myFruits);
// console.log("sliced", fruits);


// add two arrays together
let customers = ["bob", "alice", "jim"];
let newCustomers = ["steve", "jane"];

// customers = customers + newCustomers; (this wont work)

customers = customers.concat(newCustomers);

console.log(customers);