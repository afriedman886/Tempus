exports.render = function(req, res) {
    res.render('index', {
        title: 'MERN MVC',
        user: req.user ? req.user.username : ''
    });
};

// app.get('/', function(req, res) {
//     res.send('This is a GET request');
// });