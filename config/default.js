module.exports = {
    elasticsearch: {
        hosts: [ 'localhost:9200' ]
    },
    timeout: {
        apiTimeout: 30000,
        timeoutOptions: {
            status: 504,
            message: 'service unavailable'
        }
    },
    urlToValidateTokenFacebook: 'https://graph.facebook.com/me/?access_token=XYZ',
    longOfPasswordTemp: 10,
    facebook: {
        appId: '995599163788797',
        appSecret: '4868095834fef8a3538045527b5c7da9',
        version: 'v2.4'
    },
    review: {
        minLengthForComment: 100
    },
    propsToBeEverPrivate: 'settings,password',
    emailSenderingCong: {
        emailRemitentInOpt: 'help@pointters.com',
        sendgridApiKey: process.env.SENDGRID_API_KEY || '',
        subjectOptEmail: 'Password Reset',
        contentOptEmail: 'Your password was resetted'

    },
    schedule:{
        BounceEmail:'00 00 * * * *'
    }
};
