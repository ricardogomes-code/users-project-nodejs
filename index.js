const express = require('express');
const app = express();
const port = 3000;

let routerIndex = require('./routes/index');
let routerUsers = require('./routes/users');

app.use(routerIndex);

app.use(routerUsers);

app.listen(port, '127.0.0.1', () => {

    console.log("Server running!");
});