const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

consign().include('routes').into(app);

app.listen(port, '127.0.0.1', () => {

    console.log("Server running!");
});

