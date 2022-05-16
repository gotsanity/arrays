let arr = ["apple", "banana", "kiwi", "banana"];

arr.push("strawberry");

//arr.splice(0,100);

console.log(arr);

// arr.forEach((element, index, array) => {
//     console.log(`${element} is at index ${index} in ${array}`);
// })

//console.log("index of banana:", arr.includes("banana"));


let customers = [
    {id: 1, name: "john"},
    {id: 2, name: "mary"},
    {id: 3, name: "sue"},
    {id: 3, name: "sue"}
];

let cust = customers.find(elem => elem.id == 3);

console.log(cust);

// function findCustomer(id) {
//     return customers.find(elem => elem.id == id);
// }

// console.log(findCustomer(3));
// console.log(findCustomer(2));
// console.log(findCustomer(1));

let fruit = arr.find(f => f == "strawberry");
console.log(fruit);

let filteredArray = arr.filter(f => f == "banana");
console.log(filteredArray);

let custs = customers.filter(cust => cust.id > 1);
console.log(custs);

let numbers = [1, 2, 3, 4, 5, 6];

let doubles = numbers.map(double);

console.log(numbers, doubles);

let names = customers.map((elem, index, array) => {
    return elem.name;
});


function double(num, index, array) {
    return num * 2;
}

console.log(names);

let name = ['j', 'e', 's', 's', 'e'];
console.log(name);

console.log(name.join());