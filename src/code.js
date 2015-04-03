/* global -Promise */
var Promise = require('bluebird');

function addSlow(a, b, cb) {
  setTimeout(function () {
    cb(a+b);
  }, 500);
}

function adding(a, b) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(a+b);
    }, 500);
  });
}

module.exports = {
  addSlow: addSlow,
  adding: adding
};