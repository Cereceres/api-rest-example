/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors');

module.exports = function(app) {
  // Insert routes below
    app.use('/api/user', require('./api/user'));


// All undefined asset or api routes should return a 404
    app.route('/:url(api|auth|components)/*')
   .get(errors[404]);


// All other routes should redirect to the index.html
    app.route('/*')
    .get((req, res) => {
        res.json({name: 'Pointters API v1'});
    });
};
