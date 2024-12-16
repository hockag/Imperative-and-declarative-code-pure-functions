const users = [
    { id: 1, name: 'John Doe', age: 25, email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', age: 30, email: 'jane@example.com' },
    { id: 3, name: 'Alice Johnson', age: 22, email: 'alice@example.com' },
    { id: 4, name: 'Bob Brown', age: 35, email: 'bob@example.com' }
];

const getUsersByAgeRange = (users, min, max) => {
    return users.filter(user => user.age >= min && user.age <= max);
};

const ageRangeUsers = getUsersByAgeRange(users, 25, 30);
console.log(ageRangeUsers);
