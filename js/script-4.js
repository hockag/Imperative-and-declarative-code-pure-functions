const users = [
    { id: 1, name: 'John Doe', isActive: true, email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', isActive: false, email: 'jane@example.com' },
    { id: 3, name: 'Alice Johnson', isActive: true, email: 'alice@example.com' },
    { id: 4, name: 'Bob Brown', isActive: false, email: 'bob@example.com' }
];

const getInactiveUsers = (users) => {
    return users.filter(user => !user.isActive);
};

const inactiveUsers = getInactiveUsers(users);
console.log(inactiveUsers);
