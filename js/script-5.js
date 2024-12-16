const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', isActive: true },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', isActive: false },
    { id: 3, name: 'Alice Johnson', email: 'alice@example.com', isActive: true },
    { id: 4, name: 'Bob Brown', email: 'bob@example.com', isActive: false }
];

const getUserByEmail = (users, email) => {
    return users.find(user => user.email === email);
};

const user = getUserByEmail(users, 'alice@example.com');
console.log(user);
