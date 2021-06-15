const main = require('../index.js');

exports.randNum = function(min = 0, max) {
  if (min >= max) {
    return max;
  }
  return Math.floor(Math.random() * (max - min) + min);
}