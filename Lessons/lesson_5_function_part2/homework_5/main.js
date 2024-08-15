//                         1                         //
let calculateRectangleArea = (a, b) => a * b;
console.log(calculateRectangleArea(5, 9));

//                         2                         //
let calculateCircleArea = (radius) => Math.PI * radius * radius;
console.log(calculateCircleArea(7));

//                         3                         //
let calculateCylinderArea = (height, radius) => 2 * Math.PI * radius * radius + 2 * Math.PI * radius * height;
console.log(calculateCylinderArea(9, 16));

//                         4                         //
let printArrayElements = (arr) => {
    for (let item of arr) {
    console.log(item);
    }
};
printArrayElements([5, false, -45, 'true', true, 'hello'])

//                         5                         //
let createParagraph = (text) => {
    document.write(
        `
        <div>
            <p>${text}</p>
        </div>
        `
    )
};

createParagraph('Lorem ipsum dolor sit amet.');

//                           6                          //
let createListWithItems = (text) => {
    document.write(
        `
        <ul>
            <li>${text}</li>
            <li>${text}</li>
            <li>${text}</li>
        </ul>
        `
    )
};

createListWithItems('hello friends');

//                           7                          //
let list = (text, counter) => {
    document.write('<ul>');
    for (let i = 0; i < counter; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write('</ul>');
};

list('hello', 10);

//                           8                          //
let foobar = (arrayOfPrimitives) => {
    document.write('<ul>');
    for (const item of arrayOfPrimitives) {
        document.write(`<li>${item}</li>`);
    }
    document.write('</ul>');
};

foobar(['hello', 125, true, -568, false, 4]);

//                           9                          //
let foobar2 = (users) => {
    for (const user of users) {
        document.write(`<div>${user.id} ${user.name} ${user.age}</div>`);
    }
};

foobar2([
    {id: 1, name: 'kolya', age: 25},
    {id: 2, name: 'vasya', age: 18},
    {id: 3, name: 'petya', age: 32},
    {id: 4, name: 'maxym', age: 21},
    {id: 5, name: 'igor', age: 33},
]);

//                           10                          //
let minValue = (numbers) => {
    let min = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        let number = numbers[i];
        if (number < min) {
            min = number;
        }
    }
    return min;
};

console.log(minValue([12, 452, 75, -41, 27, 3, -759, 16]));

//                           11                          //
let sum = (arr) => {
    let total = 0;
    for (const item of arr) {
        total = total + item;
    }
    return total;
};

console.log(sum([1, 2, 3, 4, 5]));
console.log(sum([5, 2, 9, 24, 3]));
console.log(sum([-4, 8, 69, -42, 15]));

//                           12                          //
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
let swap = (arr, index1, index2) => {
    let cell = arr[index1]; // 11
    arr[index1] = arr[index2]; // 11 => 22
    arr[index2] = cell; // 22 => 11

    return arr;
};

console.log(swap([11, 22, 33, 44], 0, 1));
