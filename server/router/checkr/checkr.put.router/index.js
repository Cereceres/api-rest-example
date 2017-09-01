const { putCheckr } = require('../../../controllers/checkr');
const body = require('./body-schema');
const params = require('./params-schema');
const validate = require('koa2-validation');
const Router = require('koa-router');
const router = new Router();

router
    .put('/checkr/:idCheckr', validate({ body, params }), putCheckr);

module.exports = router;
