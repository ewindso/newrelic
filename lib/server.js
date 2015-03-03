if(!process.env.NEW_RELIC_LICENSE_KEY) { return; }
newrelic = Npm.require('newrelic');
