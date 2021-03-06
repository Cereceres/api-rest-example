module.exports = {
    elasticsearch: {
        hosts: [ 'localhost:9200' ]
    },
    neo4j:{
        url:'http://localhost:7474'
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
        appId: '',
        appSecret: '',
        version: 'v2.10'
    },
    review: {
        minLengthForComment: 100
    },
    propsToBeEverPrivate: 'settings,password',
    emailSenderingCong: {
        emailRemitentInOpt: 'help@examples.com',
        sendgridApiKey: process.env.SENDGRID_API_KEY || '',
        subjectOptEmail: 'Password Reset',
        contentOptEmail: 'Your password was resetted with: '

    },
    pathUnprotected: [
        '/user/login',
        '/user/signup',
        '/user/facebook/token',
        '/user/otp',
        '/user/reset',
        '/user/reset/password',
        {
            path:'/category/:idCategory/sub-category/:idSubCategory',
            method: 'GET'
        },
        {
            path:'/category/:idCategory?',
            method: 'GET'
        },
        {
            path:'/categories/:idCategory?',
            method: 'GET'
        }
    ],
    schedule: {
        BounceEmail: '00 00 * * * *',
        SpamEmail: '00 00 * * * *',
        InvalidEmail: '00 00 * * * *'
    },
    checkr: {
        authToken: ''
    },
    pagination: {
        serviceReviews:100,
        requests: 100,
        offers: 100,
        postComments:100,
        requestOffers:100,
        categories:100
    },
    easyPost:{
        ApiKey: ''
    },
    redis:{
        url:'redis://127.0.0.1:6379'
    },
    rateLimitCalls:{
        duration: 60000,
        max: 100,
        blacklist: [],
        whitelist: []
    },
    compress:{threshold:1024}
};
