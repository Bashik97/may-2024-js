//                           1                         //
function calculateRectangleArea(a, b) {
    return a * b;
}

let example1 = calculateRectangleArea(5, 13);
console.log(example1);

//                           2                         //
function calculateCircleArea(radius) {
    return Math.PI * radius * radius;
}

let example2 = calculateCircleArea(5);
console.log(example2);

//                           3                          //
// S(повн.)=2S(осн.)+S(біч.)= 2πR2 + 2πRH
function calculateCylinderArea(height, radius) {
    return 2 * Math.PI * radius * radius + 2 * Math.PI * radius * height;
}

let example3 = calculateCylinderArea(8, 4);
console.log(example3);

//                           4                          //
function printArrayElements(arr) {
    for (let item of arr) {
        console.log(item);
    }
}

let example4 = [5, false, -45, true, 'hello'];
printArrayElements(example4);

//                           5                          //
function createParagraph(text) {
    document.write(
        `
        <div>
            <p>${text}</p>
        </div>
        `
    );
}

createParagraph('Lorem ipsum dolor sit amet.');

//                           6                          //
function createListWithItems(text) {
    document.write(
        `
        <ul>
            <li>${text}</li>
            <li>${text}</li>
            <li>${text}</li>
        </ul>
        `
    )
}

createListWithItems('hello friends');

//                           7                          //
function list(text, counter) {
    document.write('<ul>');
    for (let i = 0; i < counter; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write('</ul>');
}

list('hello', 10);

//                           8                          //
function foobar(arrayOfPrimitives) {
    document.write('<ul>');
    for (const item of arrayOfPrimitives) {
        document.write(`<li>${item}</li>`);
    }
    document.write('</ul>');
}

foobar(['hello', 125, true, -568, false, 4]);

//                           9                          //
function foobar2(users) {
    for (const user of users) {
        document.write(`<div>${user.id} ${user.name} ${user.age}</div>`);
    }
}

foobar2([
    {id: 1, name: 'kolya', age: 25},
    {id: 2, name: 'vasya', age: 18},
    {id: 3, name: 'petya', age: 32},
    {id: 4, name: 'maxym', age: 21},
    {id: 5, name: 'igor', age: 33},
])

//                           10                          //
function minValue(numbers) {
    let min = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        let number = numbers[i];
        if (number < min) {
            min = number;
        }
    }
    return min;
}

console.log(minValue([12, 452, 75, -41, 27, 3, -759, 16]));

//                           11                          //
function sum(arr) {
    let total = 0;
    for (const item of arr) {
        total = total + item;
    }
    return total;
}

console.log(sum([1, 2, 3, 4, 5]));
console.log(sum([5, 2, 9, 24, 3]));
console.log(sum([-4, 8, 69, -42, 15]));

//                           12                          //
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function swap(arr, index1, index2) {
    let cell = arr[index1]; // 11
    arr[index1] = arr[index2]; // 11 => 22
    arr[index2] = cell; // 22 => 11

    return arr;
}

console.log(swap([11, 22, 33, 44], 0, 1));

//                           13                          //
// Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400
function exchange(sumUAH,currencyValues,exchangeCurrency) {

}