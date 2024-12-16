//exercise 1
    // imperative code

const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 3, name: 'Alice Johnson', email: 'alice@example.com' }
];

const names = [];
for (let i = 0; i < users.length; i++) {
    names.push(users[i].name);
}

console.log(names);

    // declarative code

const users1 = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 3, name: 'Alice Johnson', email: 'alice@example.com' }
];

const names1 = users.map(user1 => user1.name);

console.log(names1);

    // pure code

const getUserNames = (users) => users.map(user => user.name);

const user2 = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 3, name: 'Alice Johnson', email: 'alice@example.com' }
];

const names2 = getUserNames(users);

console.log(names2);


