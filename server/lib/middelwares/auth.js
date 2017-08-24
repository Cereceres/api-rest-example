const { findOne } = require('../../../stores/user');
const unless = require('./unless');

const middelware = async (ctx, next) => {
    console.log('In auth = ', ctx.state.user, ctx.session);
    const userUsingJwt = await findOne(ctx.queryToFindUserById);

    const userUsingSession = await findOne({ _id: ctx.session.id });

    let isAuth = userUsingJwt || userUsingSession;

    if (userUsingJwt && userUsingSession) isAuth = isAuth &&
        userUsingJwt._id === userUsingSession._id;

    if (!isAuth) return ctx.throw(403, 'Unauthorized User');

    if (next) await next();
};

middelware.unless = unless(middelware);

module.exports = middelware;
