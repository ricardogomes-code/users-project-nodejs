const express = require('express');
const app = express();
const port = 3000;
const consign = require('consign');

consign().include('routes').into(app);

app.listen(port, '127.0.0.1', () => {

    console.log("Server running!");
});

