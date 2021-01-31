'use strict';

const isMonkey = function(val) {
  return (val.split(" ").join("") === 'monkey'); //returns if string is 'monkey' or not
};

module.exports = isMonkey;
