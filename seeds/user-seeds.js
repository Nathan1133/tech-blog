
const { User } = require('../models');

const userData = [{
        username: 'Bill',
        password: 'bill'

    },
    {
        username: 'Nate',
        password: 'nate'
    },
    {
        username: 'Tim',
        password: 'tim'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;