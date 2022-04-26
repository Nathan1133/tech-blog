const { Post } = require('../models');

const postData = [{
        title: 'Test',
        content: 'Is this working?',
        user_id: 1

    },
    {
        title: 'Cool new application',
        content: 'I found this cool new app',
        user_id: 2
    },
    {
        title: 'Object-Relational Mapping',
        content: 'ORMs have fun to learn about',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;