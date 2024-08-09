let array = [10, 25, -52.45, {name: 'vasya'}, true, [1, 2, 3], false, undefined, 1524, 29];
console.log(array);
// or //
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);
console.log(array[5]);
console.log(array[6]);
console.log(array[7]);
console.log(array[8]);
console.log(array[9]);


// objects that describe books //

let book1 = {
    title: 'The Great Gatsby',
    pageCount: 180,
    genre: 'Classic'
}

let book2 = {
    title: 'Don Quixote',
    pageCount: 992,
    genre: 'Adventure'
}

let book3 = {
    title: 'A Tale of Two Cities',
    pageCount: 489,
    genre: 'Classic'
}
console.log(book1);
console.log(book2);
console.log(book3);


// objects that describe books + array //

let book_1 = {
    title: 'The Great Gatsby',
    pageCount: 180,
    genre: 'Classic',
    authors: [
        {name: 'F. Scott Fitzgerald', age: 65},
        {name: 'Charles Dickens', age: 57},
    ]
}
let book_2 = {
    title: 'Don Quixote',
    pageCount: 992,
    genre: 'Adventure',
    authors: [
        {name: 'Miguel de Cervantes', age: 95},
        {name: 'F. Scott Fitzgerald', age: 65}
    ]
}
let book_3 = {
    title: 'A Tale of Two Cities',
    pageCount: 489,
    genre: 'Classic',
    authors: [
        {name: 'Charles Dickens', age: 57},
        {name: 'Miguel de Cervantes', age: 95}
    ]
}

console.log(book_1);
console.log(book_2);
console.log(book_3);


// console.log(password) //

let users = [
    {name: 'Іван Петренко', username: 'ivan_petrenko', password: 'password123'},
    {name: 'Марія Коваленко', username: 'maria_kovalenko', password: 'securepass456'},
    {name: 'Олександр Сидоренко', username: 'oleksandr_sydorenko', password: 'alex1234'},
    {name: 'Анна Шевченко', username: 'anna_shevchenko', password: 'annapass789'},
    {name: 'Дмитро Іванов', username: 'dmytro_ivanov', password: 'dmitry987'},
    {name: 'Олена Романенко', username: 'olena_romanenko', password: 'olena654'},
    {name: 'Сергій Кравченко', username: 'serhiy_kravchenko', password: 'serhiy321'},
    {name: 'Катерина Бондаренко', username: 'kateryna_bondarenko', password: 'katya852'},
    {name: 'Вікторія Левченко', username: 'viktoria_levchenko', password: 'viktoria147'},
    {name: 'Михайло Ткаченко', username: 'mykhailo_tkachenko', password: 'mykhailo369'}
];
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);


// weather for the week //

let weatherForTheWeek = [
    {day: 'Monday', morning: 16, afternoon: 25, evening: 20},
    {day: 'Tuesday', morning: 17, afternoon: 26, evening: 21},
    {day: 'Wednesday', morning: 15, afternoon: 24, evening: 19},
    {day: 'Thursday', morning: 14, afternoon: 23, evening: 18},
    {day: 'Friday', morning: 18, afternoon: 27, evening: 22},
    {day: 'Saturday', morning: 19, afternoon: 28, evening: 23},
    {day: 'Sunday', morning: 20, afternoon: 29, evening: 24}
];

console.log(weatherForTheWeek);


// Logical ramifications //

let x = 0;
if (x !== 0) {
    console.log(true);
} else {
    console.log(false);
}

//     a = 1, 0, -3      //
let a1 = 1;
if (a1 !== 0) {
    console.log(true);
} else {
    console.log(false);
}

let a2 = 0;
if (a2 !== 0) {
    console.log(true);
} else {
    console.log(false);
}

let a3 = -3;
if (a3 !== 0) {
    console.log(true);
} else {
    console.log(false);
}


//      time      //

let time1 = 11; // First quarter
if (time1 >= 0 && time1 <= 15) {
    console.log('First quarter');
} else if (time1 >= 16 && time1 <= 30) {
    console.log('Second quarter');
} else if (time1 >= 31 && time1 <= 45) {
    console.log('Third quarter');
} else if (time1 >= 46 && time1 <= 59) {
    console.log('Fourth quarter');
} else {
    console.log('Invalid value');
}

let time2 = 24; // Second quarter
if (time2 >= 0 && time2 <= 15) {
    console.log('First quarter');
} else if (time2 >= 16 && time2 <= 30) {
    console.log('Second quarter');
} else if (time2 >= 31 && time2 <= 45) {
    console.log('Third quarter');
} else if (time2 >= 46 && time2 <= 59) {
    console.log('Fourth quarter');
} else {
    console.log('Invalid value');
}

let time3 = 37; // Third quarter
if (time3 >= 0 && time3 <= 15) {
    console.log('First quarter');
} else if (time3 >= 16 && time3 <= 30) {
    console.log('Second quarter');
} else if (time3 >= 31 && time3 <= 45) {
    console.log('Third quarter');
} else if (time3 >= 46 && time3 <= 59) {
    console.log('Fourth quarter');
} else {
    console.log('Invalid value');
}

let time4 = 52; // Fourth quarter
if (time4 >= 0 && time4 <= 15) {
    console.log('First quarter');
} else if (time4 >= 16 && time4 <= 30) {
    console.log('Second quarter');
} else if (time4 >= 31 && time4 <= 45) {
    console.log('Third quarter');
} else if (time4 >= 46 && time4 <= 59) {
    console.log('Fourth quarter');
} else {
    console.log('Invalid value');
}


// decade of the month //

let day1 = 9; // First decade
if (day1 >= 1 && day1 <= 10) {
    console.log('First decade');
} else if (day1 >= 11 && day1 <= 20) {
    console.log('Second decade')
} else if (day1 >= 21 && day1 <= 31) {
    console.log('Third decade')
} else {
    console.log('Invalid value')
}

let day2 = 17; // Second decade
if (day2 >= 1 && day2 <= 10) {
    console.log('First decade');
} else if (day2 >= 11 && day2 <= 20) {
    console.log('Second decade')
} else if (day2 >= 21 && day2 <= 31) {
    console.log('Third decade')
} else {
    console.log('Invalid value')
}

let day3 = 26; // Third decade
if (day3 >= 1 && day3 <= 10) {
    console.log('First decade');
} else if (day3 >= 11 && day3 <= 20) {
    console.log('Second decade')
} else if (day3 >= 21 && day3 <= 31) {
    console.log('Third decade')
} else {
    console.log('Invalid value')
}

let day4 = 46 // Invalid value
if (day4 >= 1 && day4 <= 10) {
    console.log('First decade');
} else if (day4 >= 11 && day4 <= 20) {
    console.log('Second decade')
} else if (day4 >= 21 && day4 <= 31) {
    console.log('Third decade')
} else {
    console.log('Invalid value')
}


// Schedule for the week //

let weekday1 = prompt('Enter the day of the week')
switch (weekday1) {
    case '1':
        console.log('19:00 PM - 22:30 PM: Javascript lesson');
        break;
    case '2':
        console.log('19:00 PM - 22:30 PM: Javascript consultation');
        break;
    case '3':
        console.log('19:00 PM - 22:30 PM: Javascript lesson');
        break;
    case '4':
        console.log('19:00 PM - 22:30 PM: Javascript consultation');
        break;
    case '5':
        console.log('19:00 PM - 22:30 PM: Javascript lesson');
        break;
    case '6':
        console.log('11:00 AM - 12:00 PM: English lesson');
        break;
    case '7':
        console.log('Day off');
        break;
}


// The max number //

let a = prompt('Enter the first number:');
let b = prompt('Enter the second number:');
if (a > b) {
    console.log(`The maximum number is: ${a}`);
} else if (b > a) {
    console.log(`The maximum number is: ${b}`);
} else {
    console.log('Both numbers are equal')
}


// value assignment default //




// array coursesAndDurationArray //

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log(coursesAndDurationArray[0].title + ' ' + '- Super');
}
if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log(coursesAndDurationArray[1].title + ' ' + '- Super');
}
if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log(coursesAndDurationArray[2].title + ' ' + '- Super');
}
if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log(coursesAndDurationArray[3].title + ' ' + '- Super');
}
if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log(coursesAndDurationArray[4].title + ' ' + '- Super');
}
if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log(coursesAndDurationArray[5].title + ' ' + '- Super');
}








