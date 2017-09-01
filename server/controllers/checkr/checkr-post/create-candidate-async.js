const { create: createCheckr } = require('../../../../stores/background-check');
const { create: createLog } = require('../../../../stores/unhandled-log');

const {createCandidate, createReport, getReport} = require('../../../../services/checkr');

module.exports = async(candidate, state) => {
    const candidateCreated = await createCandidate(candidate);
    const report = await createReport({
        package:'driver_pro',
        candidate_id:candidateCreated.id
    });

    const reportCompleted = await getReport(report.id);

    const checkrToCreate = Object.assign({
        userId: state.user.id,
    }, reportCompleted);
    const checkr = await createCheckr(checkrToCreate);

    if (checkr.error) await createLog({
        error:checkr.error,
        body: candidate,
        user:state.user
    });
};
