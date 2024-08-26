//                  1                 //
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let newUsers = [
    new User(1, 'John', 'Doe', 'john.doe@example.com', '+1234567890'),
    new User(2, 'Jane', 'Smith', 'jane.smith@example.com', '+0987654321'),
    new User(3, 'Alice', 'Jonson', 'alice.jonson@example.com', '+1122334455'),
    new User(4, 'Bob', 'Brown', 'bob.brown@example.com', '+1223344556'),
    new User(5, 'Charlie', ' Williams', 'charlie.williams@example.com', '+1334455667'),
    new User(6, 'David', 'Jones', 'david.jones@example.com', '+1445566778'),
    new User(7, 'Eve', 'Miller', 'eve.miller@example.com', '+1556677889'),
    new User(8, 'Frank', 'Davis', 'frank.davis@example.com', '+1667788990'),
    new User(9, 'Grace', 'Garcia', 'grace.garcia@example.com', '+1778899001'),
    new User(10, 'Hank', 'Martinez', 'hank.martinez@example.com', '+1889900112'),
];
console.log(newUsers);
//                  OR                 //
let newUsers2 = [];
for (let i = 1; i <= 10; i++) {
    newUsers2.push(new User(id = `${i}`, name = `Igor${i}`, surname = `Igorovych${i}`, email = `igor${i}@example.com`, phone = `0965812601`));
}
console.log(newUsers2);

//                  2                 //


//                  3                 //


//                  4                 //


//                  5                 //


//                  6                 //


//                  7                 //


//                  8                 //


//                  9                 //