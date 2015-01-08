'use strict';
var statsServer = require('../lib/server');

statsServer.start({
  port : 9300,
  host : 'localhost',
  uri : 'mongodb://localhost:10020/stats'
});