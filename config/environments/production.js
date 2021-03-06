
module.exports = {
    apiName: 'example-API',
    error: {
        stackTraceLimit: 12
    },
    optExpiresIn: 24 * 3600 * 1000,
    rateLimit: 1000,
    port: 9000,
    neo4j:{
        url:'http://localhost:7474'
    },
    jwt: {
        secret: 'examples-secret-key',
        expiresIn: 3600000 * 24 * 365,
    },
    dbpath: 'mongodb://localhost/examples-api',

    mongo: {
        options: {
            db: {
                safe: true
            }
        }
    },
    pagination: {
        requests: 100,
        offers: 100,
        postComments:100,
        requestOffers:100,
        categories:100,
        serviceReviews:100
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
