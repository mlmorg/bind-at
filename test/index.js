'use strict';
var test = require('tape');

var bindAt = require('../');

test('binding at a specific index', function t(assert) {
  var boundFn = bindAt(fn, 'Bob', 1);
  var greeting = boundFn('Hello');

  assert.equal(greeting, 'Hello Bob!',
    'binds arguments correctly');

  assert.end();
});

function fn(greeting, name) {
  return greeting + ' ' + name + '!';
}
