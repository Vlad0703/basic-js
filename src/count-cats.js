const CustomError = require("../extensions/custom-error");

module.exports = function countCats(input) {
  let counter = 0;
  for (let mas in input) {
    for (let mass in input[mas]) {
      if (input[mas][mass] == '^^') {
        counter+=1;
      }
    }
  }
  return counter;
};
