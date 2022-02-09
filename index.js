const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Olá Ricardo</h1>');
});

app.get('/users', (req, res) => {

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

app.listen(port, '127.0.0.1', () => {

    console.log("Server running!");
});