let express = require('express');
let router = express.Router();

router.get('/', (req, res) => {

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');

    let users = ({
        users: [{
            name: 'Ricardo',
            email: 'ricardo@gmail.com',
            id: 1
        }]
    });
    
    res.json(users);
});

router.get('/admin', (req, res) => {

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');

    let users = ({
        users: []
    });
    
    res.json(users);
});

module.exports = router;