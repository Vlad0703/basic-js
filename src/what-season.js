const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
    if  (typeof date != "undefined") {
      if ( toString.call(date) == toString.call(new Date())){
        let mounth = date.getMonth();
        if (  mounth >= 2  && mounth <= 4){
          return 'spring';
        } else if ( mounth >= 5 && mounth <= 7 ){
          return 'summer';
        } else if ( mounth >= 8  &&  mounth <= 10){
          return 'autumn';
        } else {
          return 'winter';
        }
      } else {
        throw new Error();
      };
    } else {
      return 'Unable to determine the time of year!';
    }
};

