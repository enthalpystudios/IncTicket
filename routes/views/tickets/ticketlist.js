var keystone = require('keystone');

exports = module.exports = function(req, res) {

    var view = new keystone.View(req, res);
    var locals = res.locals;

    locals.section = 'tickets';

    locals.data = {
        tickets: [],
    };

    // load all tickets
    view.on('init', function(next) {

        var q = keystone.list('Ticket').model.find();
        q.exec(function(err, results) {
            locals.data.tickets = results;
            next(err);
        });

    });

    // render the view
    view.render('tickets/ticketlist');

};