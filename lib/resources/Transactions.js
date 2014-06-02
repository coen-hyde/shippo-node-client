'use strict';
var method = require('../Method');
module.exports = require('../Resource').extend({
  path: 'transactions/',
  operations: ['create', 'list', 'retrieve'],
  get: method({
    method: 'GET',
    path: '{id}/',
    urlParams: ['id']
  })
});

