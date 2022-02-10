module.exports = app => {

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
    
    app.get('/users/admin', (req, res) => {
    
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
    
        let users = ({
            users: []
        });
        
        res.json(users);
    });
}