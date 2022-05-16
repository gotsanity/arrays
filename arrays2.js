let names = ["Bilbo", "Gandalf", "Samwise"];

let lengths = names.map(item => item.length);

console.log(lengths);

// array.reduce(accumulator, item, index, array)

let sum = lengths.reduce((total, item) => total + item, 0);

// let tot = 0;

// lengths.forEach(item => {
//     tot = tot + item;
// })

console.log("This is the total number of letters in the array: ", sum);



// create a sorting function - we want to sort an array from least to most

let arr = [5, 3, 1, 2, 7, 4, 3, 9, 19];

console.log(arr);

console.log(arr.reverse());

let sortedArr = arr.sort();
console.log("bad sorted", sortedArr);

sortedArr = arr.sort(compare);

function compare(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
}

console.log("better result", sortedArr);

let objArr = [
    {id: 1, first: "jesse"},
    {id: 3, first: "john"},
    {id: 2, first: "bob"},
    {id: 6, first: "frank"}
];

function compareObj(a, b) {
    if (a.id > b.id) return 1;
    if (a.id == b.id) return 0;
    if (a.id < b.id) return -1;
}

let sortedObj = objArr.sort(compareObj);
console.log(sortedObj);

let nameString = "Bilbo, Gandalf, Samwise";
let nameArr = nameString.split(', ');

console.log(nameArr);

// "Bilbo;Gandalf;Samwise"
let csv = nameArr.join("");
console.log(csv);


let one = {};
let two = [];

console.log("var one is: ", Array.isArray(one));
console.log("var two is: ", Array.isArray(two));