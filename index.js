'use strict';

module.exports = bindAt;

function bindAt() {
  var spliceArgs = Array.prototype.slice.call(arguments);
  var fn = spliceArgs.shift();
  spliceArgs.unshift(spliceArgs.pop(), 0);

  return function callBoundFn() {
    var args = Array.prototype.slice.call(arguments);
    Array.prototype.splice.apply(args, spliceArgs);
    return fn.apply(null, args);
  };
}
