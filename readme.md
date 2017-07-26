# Pointers API REST


# Enviroments Variables

| Variable        | Mean           | 
| ------------- |:-------------:|
| NODE_ENV      | enviroment to run, default is test. Set to PROD to run in production mode|

# Test

You need to be isntalled nyc and mocha to run the tests.
```bash
npm test
```

We are using the istanbul to get the coverage, the ideal coverage is 100% please is hard to get this coverage try to do you better work.
# Unit Test 

The test are based of paradigm [The test size pyramid][1] [Other][other] please be consistent and add UT for every module added, integration flow and service created.
Use nock and proxyquire to mock the dependencies and http requests.

# API project structure

## Stores

Every interaction is here, wrape the database client used and export the functionality required like a function.

## Services

The interation with third party service is here, please wrape the service client used and export the functionality like a function.

## routes 

The routes to every endpoint or service are here, validate the params in every request there and auth session. We are using Joi to validate params.

## lib

utilities are here.

## database

The database object connection is here, please export a singleton and connected object, is this layer manage the database errors and exceptions.

## controllers

The controllers for every endpoint and services exposed is here. Respect and be consistent with the structure.

## domain

The business rules are here, the important decision are taken here and the intelligence too.

## config

All config is here, create a file for every enviroment to run the project. And add to index file in config the enviroment returned.

# Guideline Code 

We are eslint like linter and a eslintrc is added. Install eslint linter in your IDE to get a code consistent with project.

In general is prefered promises over callback, co-routines are wellcome, evite the if-else hell. The async function are wellcome too :). Arrow function is prefered over others and functional paragidm development is used here, evite the OOP paradigm.

Someone say the best documentation is what is not written. The code has to be as explicit as possible.

# Documentation

Documentation is may be the part more important in a API, then for every module, every service, every functionality please add the corresponding documentation.
## '/signup'

```js
body = {
    email: string().email().required(),
    password: string().required()
}
```

## '/login'

```js
body = {
    email: string().email().required(),
    password: string().required()
}
```

## '/'

```js
params = {
    id: string().required(),
}
```

[1]: https://github.com/18F/automated-testing-playbook/blob/master/pages/principles-practices-idioms.md#small-medium-and-large-test-sizes-the-test-size-pyramid
[other]:https://testing.googleblog.com/2010/12/test-sizes.html
