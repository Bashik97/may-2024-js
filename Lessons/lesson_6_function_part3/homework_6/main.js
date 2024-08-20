//                    1                     //
let string1 = 'hello world';
let string2 = 'lorem ipsum';
let string3 = 'javascript is cool';

const strings = [string1, string2, string3];
for (const string of strings) {
    console.log(`Довжина рядка '${string}' дорівнює ${string.length}`);
}
// or //
console.log(`Довжина рядка '${string1}' дорівнює ${string1.length}`);
console.log(`Довжина рядка '${string2}' дорівнює ${string2.length}`);
console.log(`Довжина рядка '${string3}' дорівнює ${string3.length}`);


//                    2                     //
let str1 = 'hello world';
let str2 = 'lorem ipsum';
let str3 = 'javascript is cool';

const strs = [str1, str2, str3];
for (const str of strs) {
    console.log(str.toUpperCase());
}
// or //
console.log(str1.toUpperCase());
console.log(str2.toUpperCase());
console.log(str3.toUpperCase());


//                    3                     //
let st1 = 'HELLO WORLD';
let st2 = 'LOREM IPSUM';
let st3 = 'JAVASCRIPT IS COOL';

const sts = [st1, st2, st3]
for (const st of sts) {
    console.log(st.toLowerCase());
}
// or //
console.log(st1.toLowerCase());
console.log(st2.toLowerCase());
console.log(st3.toLowerCase());


//                    4                     //
let str = ' dirty string   ';
const x = str.trim();
console.log(x);
console.log(x.length);
console.log(str.length);


//                    5                     //
let s = 'Ревуть воли як ясла повні';
console.log(s.split(' '));


//                    6                     //
let arrNumbers = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
let arrNumbersToString = arrNumbers.map(number => number.toString());
console.log(arrNumbersToString);


//                    7                     //
function sortNums(arrayOfNums, direction) {
    if (direction === 'ascending') {
        return arrayOfNums.sort((a, b) => a - b);
    } else if (direction === 'descending') {
        return arrayOfNums.sort((a, b) => b - a);
    }
}

let nums = [11, 21, 3];
console.log(sortNums(nums, 'ascending'));
console.log(sortNums(nums, 'descending'));


//                    8                     //
const coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
const sort = coursesAndDurationArray
    .sort((a, b) => b.monthDuration - a.monthDuration)
    .filter(value => value.monthDuration > 5)
    .map((value, index) => {
        value.id = index + 1;
        return value;
    });
console.log(sort);


//                    9                     //
const suits = ['spade', 'diamond', 'heart', 'club'];
const values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];

const cards = [];
for (const suit of suits) {
    for (const value of values) {
        const card = {cardSuit: suit, value: value};
        if (suit === 'heart' || suit === 'diamond') {
            card.color = 'red';
        } else {
            card.color = 'black';
        }
        cards.push(card);
    }
}
console.log(cards);

// - знайти піковий туз
console.log(cards.find(card => card.value === 'ace' && card.cardSuit === 'spade'));
// - всі шістки
console.log(cards.filter(card => card.value === '6'));
// - всі червоні карти
console.log(cards.filter(card => card.color === 'red'));
// - всі буби
console.log(cards.filter(card => card.cardSuit === 'diamond'));
// - всі трефи від 9 та більше
console.log(cards.filter(card => card.cardSuit === 'club' && (card.value !== '6' || card.value !== '7' || card.value !== '8' || card.value !== '9')));

cards.reduce((accum, card) => {
    switch (card.cardSuit) {
        case 'spade':
            accum.spades.push(card);
            break;
        case 'diamond':
            accum.diamonds.push(card);
            break;
        case 'club':
            accum.clubs.push(card);
            break;
        case 'heart':
            accum.hearts.push(card);
            break;
    }
    return accum;
}, {
    spades: [],
    diamonds: [],
    hearts: [],
    clubs: []
});
console.log(reduce);

//                    10                     //
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

console.log(coursesArray.filter(course => {
    return course.modules.includes('sass');
}));

console.log(coursesArray.filter(course => {
    return course.modules.includes('docker');
}));