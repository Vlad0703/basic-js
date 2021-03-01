const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample (input) {
  if (typeof(input) === 'string') {
    if (input == '' || input == ' ' || isNaN(Number(input)) || Number(input) == 0 ||typeof(Number(input)) != 'number'){
      return false;
    } else {
      return Math.ceil( Math.log( MODERN_ACTIVITY / Number(input) ) / (0.693/HALF_LIFE_PERIOD) )
    }
  } else {
    return false;
  }

}


