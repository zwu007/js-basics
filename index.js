// my first javascript
console.log('aloha, world!');

// primitive type: string, number, boolean, undefined, null
let firstName = 'Winston';
let isApproved = true;
let age = 30;
let title = undefined;
let salary = null;
const sex = 'M';

console.log(firstName);

// reference type: object, array, function
let person = {
    name: 'Jimmy',
    age: 32
};

// dot notation
person.name = 'George';

// bracket notation
person['name'] = 'Philips';

console.log(person.name);

// array
let selectedColor = ['red', 'blue'];
selectedColor[2] = 3;

console.log(selectedColor);
console.log(selectedColor.length);

// function, performing a task
function greet(first, title) {
    console.log('Hello ' + first + ', Title ' + title);
}

greet('Marry', 'Manager');

// function, calculating a value
function square(number) {
    return number * number;
}

console.log(square(5));
