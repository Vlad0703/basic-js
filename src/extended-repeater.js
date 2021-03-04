const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let opt = {};
  let inp = String(str);
//проверка на наличие свойства repeatTimes
  if (options.hasOwnProperty('repeatTimes')) {
    opt.repeatTimes = options.repeatTimes;
  } else {
    opt.repeatTimes = 1;
  }
//проверка на наличие свойства addition
    if (options.hasOwnProperty('addition')) {
    opt.addition = String(options.addition);
  } else {
    opt.addition = '';
  }
//проверка на наличие свойства separator
    if (options.hasOwnProperty('separator')) {
    opt.separator = options.separator;
  } else {
    opt.separator = '+';
  }
  //проверка на наличие свойства additionRepeatTimes
    if (options.hasOwnProperty('additionRepeatTimes')) {
    opt.additionRepeatTimes = options.additionRepeatTimes;
  } else {
    opt.additionRepeatTimes = 1;
  }
  //проверка на наличие свойства additionSeparator
    if (options.hasOwnProperty('additionSeparator')) {
    opt.additionSeparator = options.additionSeparator;
  } else {
    opt.additionSeparator = '|';
  }


  let res =[];
    for (let i = 1; i <= opt.additionRepeatTimes; i++) {
      if (res.length <= opt.additionRepeatTimes - 2) {
        if (opt.additionRepeatTimes == 1) {
          res.push(opt.addition);
        } else {
          res.push(opt.addition + opt.additionSeparator);
        }
      } else {
        res.push(opt.addition);
      }
    };

  res = res.join('');
  console.log(res);
  let final = [];

  for (let i = 1; i <= opt.repeatTimes; i++) {
    if (final.length < opt.repeatTimes - 1) {
    final.push(inp + res + opt.separator);
    } else {
      final.push(inp + res);
    }
  };
  return final.join('');
};
  
