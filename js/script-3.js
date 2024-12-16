const users = [
    { id: 1, name: 'John Doe', gender: 'male', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', gender: 'female', email: 'jane@example.com' },
    { id: 3, name: 'Alice Johnson', gender: 'female', email: 'alice@example.com' },
    { id: 4, name: 'Bob Brown', gender: 'male', email: 'bob@example.com' }
];

const getUserNamesByGender = (users, gender) => {
    return users.filter(user => user.gender === gender).map(user => user.name);
};

const femaleUserNames = getUserNamesByGender(users, 'female');
console.log(femaleUserNames);

const maleUserNames = getUserNamesByGender(users, 'male');
console.log(maleUserNames);
