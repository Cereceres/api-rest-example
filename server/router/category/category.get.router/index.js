const { getCategory } = require('../../../controllers/category');
const body = require('./body-schema');
const params = require('./params-schema');
const validate = require('koa2-validation');
const Router = require('koa-router');
const router = new Router();

router.get('/(category|categorys)/:idCategory?', validate({ body, params }), getCategory);

module.exports = router;
