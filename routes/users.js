let NeDB = require('nedb');
let db = new NeDB({
    filename: 'users.db',
    autoload: true
});

module.exports = app => {

    let route = app.route('/users');
    let routeId = app.route('/users/:id');

    route.get((req, res) => {

        db.find({}).sort({ name: 1 }).exec((err, user) => {

            if (err) {
                app.utils.error.send(err, req, res);

            } else {
                res.status(200).json(user);
            }
        })
    });

    routeId.get((req, res) => {

        db.findOne({ _id: req.params.id }).exec((err, user) => {

            if (err) {
                app.utils.error.send(err, req, res);

            } else {
                res.status(200).json(user);
            }
        })
    });

    routeId.put((req, res) => {

        console.log(req.params.id)

        db.update({ _id: req.params.id }, req.body, err => {

            if (err) {
                app.utils.error.send(err, req, res);
            } else {
                res.status(200).json(Object.assign(req.params, req.body));
            }

        });

    });

    route.post((req, res) => {

        db.insert(req.body, (err, user) => {

            if (err) {
                app.utils.error.send(err, req, res);

            } else {

                res.status(200).json(user);
            }
        })
    });
}