//                 1               //
for (let i = 1; i <= 10; i++) {
    document.write(`<div>Div block</div>`);
}

document.write('-------------------------------------------------') // Separate tasks

//                 2               //
for (let i = 1; i <= 10; i++) {
    document.write(`<div>Div block number - ${i}</div>`);
}

document.write('-------------------------------------------------') // Separate tasks

//                 3               //
let i = 1;
while (i <= 20) {
    document.write(`<h1>Some text</h1>`);
    i++
}

document.write('-------------------------------------------------') // Separate tasks

//                 4               //
let s = 1;
while (s <= 20) {
    document.write(`<h1>Some text - ${s}</h1>`);
    s++
}

document.write('-------------------------------------------------') // Separate tasks

//                 5               //
let listOfItems = [
    'html',
    'css',
    'javascript',
    'mysql',
    'mongodb',
    'react',
    'angular',
    'node.js'
];

document.write('<ul>');
for (let j = 0; j < listOfItems.length; j++) {
    document.write('<li>' + listOfItems[j] + '</li>');
}
document.write('</ul>');

document.write('-------------------------------------------------') // Separate tasks

//                 6               //
let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://www.yogi-life.com/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2FnZ9c4snS4ytPRImATDfl&w=640&q=75'
    },
];

for (let b = 0; b < products.length; b++) {
    const product = products[b];
    document.write(`<div class="product-card">
                        <h3 class="product-title">
                            ${product.title}. Price - ${product.price}
                        </h3>
                        <img src="${product.image}" alt="" class="product-image">
                    </div>`);
}
document.write(product);

document.write('-------------------------------------------------') // Separate tasks

//                 7               //
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

let arrTrue = [];
let arrFalse = [];
let arrAge = [];

let  i3 = 0;
while (i3 < users.length) {
    let user = users[i3];
    if (user.status) {
        arrTrue[arrTrue.length] = user;
    } else {
        arrFalse[arrFalse.length] = user;
    }
    if (user.age > 30) {
        arrAge[arrAge.length] = user;
    }
        i3++;
}
        console.log(arrTrue);
        console.log(arrFalse);
        console.log(arrAge);
