const users = [
    { id: 1, name: 'John Doe', eyeColor: 'blue', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', eyeColor: 'green', email: 'jane@example.com' },
    { id: 3, name: 'Alice Johnson', eyeColor: 'blue', email: 'alice@example.com' },
    { id: 4, name: 'Bob Brown', eyeColor: 'brown', email: 'bob@example.com' }
];

const getUsersByEyeColor = (users, color) => {
    return users.filter(user => user.eyeColor === color);
};

const blueEyedUsers = getUsersByEyeColor(users, 'blue');
console.log(blueEyedUsers);
