'use strict';

module.exports = require('../Resource').extend({
  path: 'transactions/',
  operations: ['create', 'list', 'retrieve'],
  get: method({
    method: 'GET',
    path: '{id}/',
    urlParams: ['id']
  })
});

