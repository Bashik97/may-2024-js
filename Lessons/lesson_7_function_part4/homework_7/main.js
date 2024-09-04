//                  1                 //
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let newUsers = [new User(1, 'John', 'Doe', 'john.doe@example.com', '+1234567890'),
    new User(2, 'Jane', 'Smith', 'jane.smith@example.com', '+0987654321'),
    new User(3, 'Alice', 'Jonson', 'alice.jonson@example.com', '+1122334455'),
    new User(4, 'Bob', 'Brown', 'bob.brown@example.com', '+1223344556'),
    new User(5, 'Charlie', ' Williams', 'charlie.williams@example.com', '+1334455667'),
    new User(6, 'David', 'Jones', 'david.jones@example.com', '+1445566778'),
    new User(7, 'Eve', 'Miller', 'eve.miller@example.com', '+1556677889'),
    new User(8, 'Frank', 'Davis', 'frank.davis@example.com', '+1667788990'),
    new User(9, 'Grace', 'Garcia', 'grace.garcia@example.com', '+1778899001'),
    new User(10, 'Hank', 'Martinez', 'hank.martinez@example.com', '+1889900112'),];
console.log(newUsers);

//                  2                 //
function User2(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let newUsers2 = [new User(1, 'John', 'Doe', 'john.doe@example.com', '+1234567890'),
    new User(2, 'Jane', 'Smith', 'jane.smith@example.com', '+0987654321'),
    new User(3, 'Alice', 'Jonson', 'alice.jonson@example.com', '+1122334455'),
    new User(4, 'Bob', 'Brown', 'bob.brown@example.com', '+1223344556'),
    new User(5, 'Charlie', ' Williams', 'charlie.williams@example.com', '+1334455667'),
    new User(6, 'David', 'Jones', 'david.jones@example.com', '+1445566778'),
    new User(7, 'Eve', 'Miller', 'eve.miller@example.com', '+1556677889'),
    new User(8, 'Frank', 'Davis', 'frank.davis@example.com', '+1667788990'),
    new User(9, 'Grace', 'Garcia', 'grace.garcia@example.com', '+1778899001'),
    new User(10, 'Hank', 'Martinez', 'hank.martinez@example.com', '+1889900112'),];

const filterUsers = newUsers2.filter((user) => user.id % 2 === 0);
console.log(filterUsers);

//                  3                 //
function User3(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let newUsers3 = [new User(5, 'John', 'Doe', 'john.doe@example.com', '+1234567890'),
    new User(2, 'Jane', 'Smith', 'jane.smith@example.com', '+0987654321'),
    new User(9, 'Alice', 'Jonson', 'alice.jonson@example.com', '+1122334455'),
    new User(4, 'Bob', 'Brown', 'bob.brown@example.com', '+1223344556'),
    new User(7, 'Charlie', ' Williams', 'charlie.williams@example.com', '+1334455667'),
    new User(6, 'David', 'Jones', 'david.jones@example.com', '+1445566778'),
    new User(3, 'Eve', 'Miller', 'eve.miller@example.com', '+1556677889'),
    new User(8, 'Frank', 'Davis', 'frank.davis@example.com', '+1667788990'),
    new User(1, 'Grace', 'Garcia', 'grace.garcia@example.com', '+1778899001'),
    new User(10, 'Hank', 'Martinez', 'hank.martinez@example.com', '+1889900112'),];

const usersSort = newUsers3.sort((user1, user2) => {
    return user1.id - user2.id;
});
console.log(usersSort);

//                  4                 //
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let clients = [];

clients.push(new Client(1, 'John', 'Doe', 'john.doe@example.com', '123-456-7890', ['item1', 'item2']));
clients.push(new Client(2, 'Jane', 'Smith', 'jane.smith@example.com', '234-567-8901', ['item3']));
clients.push(new Client(3, 'Alice', 'Johnson', 'alice.johnson@example.com', '345-678-9012', ['item4', 'item5', 'item6']));
clients.push(new Client(4, 'Bob', 'Brown', 'bob.brown@example.com', '456-789-0123', ['item7']));
clients.push(new Client(5, 'Charlie', 'Davis', 'charlie.davis@example.com', '567-890-1234', ['item8', 'item9']));
clients.push(new Client(6, 'David', 'Wilson', 'david.wilson@example.com', '678-901-2345', ['item10']));
clients.push(new Client(7, 'Eve', 'Garcia', 'eve.garcia@example.com', '789-012-3456', ['item11', 'item12', 'item13']));
clients.push(new Client(8, 'Frank', 'Martinez', 'frank.martinez@example.com', '890-123-4567', ['item14']));
clients.push(new Client(9, 'Grace', 'Hernandez', 'grace.hernandez@example.com', '901-234-5678', ['item15', 'item16']));
clients.push(new Client(10, 'Henry', 'Lopez', 'henry.lopez@example.com', '012-345-6789', ['item17', 'item18', 'item19']));
console.log(clients);

//                  5                 //
class Client2 {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let clients2 = [new Client(1, 'John', 'Doe', 'john.doe@example.com', '123-456-7890', ['item1', 'item2']),
    new Client(2, 'Jane', 'Smith', 'jane.smith@example.com', '234-567-8901', ['item3']),
    new Client(3, 'Alice', 'Johnson', 'alice.johnson@example.com', '345-678-9012', ['item4', 'item5', 'item6']),
    new Client(4, 'Bob', 'Brown', 'bob.brown@example.com', '456-789-0123', ['item7']),
    new Client(5, 'Charlie', 'Davis', 'charlie.davis@example.com', '567-890-1234', ['item8', 'item9']),
    new Client(6, 'David', 'Wilson', 'david.wilson@example.com', '678-901-2345', ['item10']),
    new Client(7, 'Eve', 'Garcia', 'eve.garcia@example.com', '789-012-3456', ['item11', 'item12', 'item13']),
    new Client(8, 'Frank', 'Martinez', 'frank.martinez@example.com', '890-123-4567', ['item14']),
    new Client(9, 'Grace', 'Hernandez', 'grace.hernandez@example.com', '901-234-5678', ['item15', 'item16']),
    new Client(10, 'Henry', 'Lopez', 'henry.lopez@example.com', '012-345-6789', ['item17', 'item18', 'item19']),];
const sort = clients2.sort((a, b) => a.order.length - b.order.length);
console.log(sort);

//                  6                 //
function Car(model, producer, year, maxSpeed, engineVolume) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;
    this.drive = function () {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`);
    };
    this.info = function () {
        for (const key in this) {
            console.log(key, this[key]);
        }
    };
    this.increaseMaxSpeed = function (speedToAdd) {
        if (speedToAdd > 0) this.maxSpeed = this.maxSpeed + speedToAdd;
    };
    this.changeYear = function (newValue) {
        this.year = newValue;
    };
    this.addDriver = function (driver) {
        if (driver) this.driver = driver;
    }
}

// drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

let car1 = new Car('Mustang', 'Ford', 2021, 250, 5.0);
console.log(car1);
car1.drive();
car1.info();
car1.increaseMaxSpeed(110);
car1.changeYear(2009);
car1.addDriver({name: 'David', age: 30});
console.log(car1);

let car2 = new Car('Civic', 'Honda', 2020, 220, 1.5);
console.log(car2);
car2.drive();
car2.info();
car2.increaseMaxSpeed(90);
car2.changeYear(2015);
car2.addDriver({name: 'Kelvin', age: 34});
console.log(car2);

let car3 = new Car('911 Carrera', 'Porsche', 2019, 293, 3.0);
console.log(car3);
car3.drive();
car3.info();
car3.increaseMaxSpeed(70);
car3.changeYear(2018);
car3.addDriver({name: 'Nathan', age: 28});
console.log(car3);

//                  7                 //
class Car1 {
    constructor(model, producer, year, maxSpeed, engineVolume) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
    };

    drive() {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`);
    };

    info() {
        for (const key in this) {
            console.log(key, this[key]);
        }
    };

    increaseMaxSpeed(speedToAdd) {
        if (speedToAdd > 0) this.maxSpeed = this.maxSpeed + speedToAdd;
    };

    changeYear(newValue) {
        this.year = newValue;
    };

    addDriver(driver) {
        if (driver) this.driver = driver;
    };
}

let car4 = new Car('Mustang', 'Ford', 2021, 250, 5.0);
console.log(car4);
car4.drive();
car4.info();
car4.increaseMaxSpeed(110);
car4.changeYear(2009);
car4.addDriver({name: 'David', age: 30});
console.log(car4);

let car5 = new Car('Civic', 'Honda', 2020, 220, 1.5);
console.log(car5);
car5.drive();
car5.info();
car5.increaseMaxSpeed(90);
car5.changeYear(2015);
car5.addDriver({name: 'Kelvin', age: 34});
console.log(car5);

let car6 = new Car('911 Carrera', 'Porsche', 2019, 293, 3.0);
console.log(car6);
car6.drive();
car6.info();
car6.increaseMaxSpeed(70);
car6.changeYear(2018);
car6.addDriver({name: 'Nathan', age: 28});
console.log(car6);

//                  8                 //
class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

class Prince {
    constructor(name, age, shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }
}

const cinderellas = [
    new Cinderella('Cinderella 1', 18, 36),
    new Cinderella('Cinderella 2', 19, 37),
    new Cinderella('Cinderella 3', 20, 38),
    new Cinderella('Cinderella 4', 21, 39),
    new Cinderella('Cinderella 5', 22, 40),
    new Cinderella('Cinderella 6', 23, 36),
    new Cinderella('Cinderella 7', 24, 37),
    new Cinderella('Cinderella 8', 25, 38),
    new Cinderella('Cinderella 9', 26, 39),
    new Cinderella('Cinderella 10', 27, 40)
];

const prince = new Prince('Prince Charming', 30, 37);

// for (const cinderella of cinderellas) {
//     if (cinderella.footSize === prince.shoe) {
//         prince.wife = cinderella;
//     }
// }
// console.log(prince.wife);

const cinderellaWife = cinderellas.find(cinderella => cinderella.footSize === prince.shoe);
prince.wife = cinderellaWife;
console.log(prince.wife);

//                  9                 //
Array.prototype.myForEach = function (callback) {
    const yourArray = this;
    for (const item of yourArray) {
        callback(item);
    }
};
[11, 22, 33, 44, 55].myForEach((x) => console.log(x));


Array.prototype.myFilter = function (callback) {
    const arr = [];
    for (const item of this) {
        if (callback(item)) {
            arr.push(item);
        }
    }
    return arr;
};
let users = [
    {name: 'Alice', age: 25, status: true},
    {name: 'Bob', age: 30, status: false},
    {name: 'Charlie', age: 22, status: true},
    {name: 'Diana', age: 27, status: false},
    {name: 'Edward', age: 35, status: true},
    {name: 'Fiona', age: 28, status: true},
    {name: 'George', age: 31, status: false},
    {name: 'Hannah', age: 24, status: true},
    {name: 'Isaac', age: 29, status: false},
    {name: 'Julia', age: 26, status: true}
];
const result = users.myFilter((user) => user.status);
console.log(result);

