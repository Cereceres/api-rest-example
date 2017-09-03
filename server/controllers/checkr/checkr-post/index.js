const createCandidateAsync = require('./create-report-async');


module.exports = async(ctx) => {
    await createCandidateAsync(ctx.request.body, ctx.state);
    ctx.body = { success: true };
};
