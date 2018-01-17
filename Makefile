
test:
	DEBUG=*api* mocha --recursive test/bootstrap test
test_small:
	mocha  --recursive test/small 

test_big:
	DEBUG=*api* mocha --recursive test/bootstrap test/big
start:
	DEBUG=*error pm2 start index.js --name example-app
restart:
	pm2 restart example-app --update-env
stop:
	pm2 stop example-app 

.PHONY: test start test_small stop restart
