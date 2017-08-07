const { get: getToWatching } = require('../../../stores/user/watching');
const { findOne: findOneService } = require('../../../stores/service');

const errorMessage = 'Service does not exists';
const errorInGetWatching = 'Error in get to watching';

module.exports = async (ctx) => {
    console.log('ctx.params.idService', ctx.params.idService);
    const service = await findOneService({ _id: ctx.params.idService });

    if (!service) ctx.throw(400, errorMessage);

    const watching = await getToWatching(ctx.queryToFindUserById);

    if (watching.error) ctx.throw(500, errorInGetWatching);

    console.log('ctx.body ', ctx.body);
    ctx.body = {
        watching: new Set(watching).has(ctx.params.idService)
    };
};
