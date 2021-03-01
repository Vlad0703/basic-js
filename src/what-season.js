const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(/* date */) {
    if  (typeof date != 'object') {
      if (typeof date != "undefined"){
        let mounth = date.getMonth();
        if ( (mounth <= 1) && (mounth = 11)) {
          return 'winter';
        } else if ( mounth <= 4 && mounth >= 2 ){
          return 'spring';
        } else if ( mounth <= 7 && mounth >= 5 ){
          return 'summer';
        } else if ( mounth <= 10 && mounth >= 8 ){
          return 'autumn';
        }
      } else {
        return 'Unable to determine the time of year!';
      }
    } else {
      c
      
    }
};
