// $ node ./app/playground/spread.js

function add(a, b) {
    return a + b;
}

console.log(add(6, 9));

var toAdd = [9, 5];

console.log(add(...toAdd));

var groupA = ['健太', '一郎'];
var groupB = ['二郎'];

var final = [3, ...groupA, ...groupB];

console.log(final);

var person = ['太郎', 25];
var personTwo = ['花子', 29];

function greet(name, age) {
    console.log('Hi ' + name + ', you are ' + age);
}

greet(...person);
greet(...personTwo);

var names = ['太郎', '花子'];
var final = ['三郎', ...names];

final.forEach(function (name) {
   console.log('Hi ' + name);
});






