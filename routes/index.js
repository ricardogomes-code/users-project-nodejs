let express = require('express');
let router = express.Router();

router.get('/', (req, res) => {

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Olá Ricardo</h1>');
});

module.exports = router;