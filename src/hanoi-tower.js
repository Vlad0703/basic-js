const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi( discNumber, turnsSpeed ) {
  let result = {};
  result.turns = Math.pow(2, discNumber) - 1;
  result.seconds = Math.floor(result.turns / (turnsSpeed / 3600));
  return result;
};
