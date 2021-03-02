const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    if (!Array.isArray(arr)) {
    throw new Error('input is not array')
  }
  let inp = arr.slice();
  let last_itt;
  for (let el of inp){
    if (typeof el == 'string'){
      switch (el) {
        case '--discard-next':
          if (inp.indexOf(el) + 1 < inp.length) {
            inp.splice(inp.indexOf(el) + 1, 1);
          break;
          } else {
           break;
          }
        case '--discard-prev':
          if ((inp.indexOf(el) - 1 != -1) && (typeof inp[inp.indexOf(el) - 1] != 'string')) {
            inp.splice(inp.indexOf(el) - 1, 1);
            break;
          } else {
            break;
          }
        case '--double-next':
          if (inp.indexOf(el) + 1 < inp.length) {
            inp.splice(inp.indexOf(el) +1, 0, inp[inp.indexOf(el) + 1 ]);
          break;
          } else {
           break;
          };
          case '--double-prev':
            if ((inp.indexOf(el) - 1 != -1) && (typeof inp[inp.indexOf(el) - 1] != 'string')) {
              inp.splice( inp.indexOf(el) , 1, inp[inp.indexOf(el) - 1 ]);
              break;
            } else {
              break;
            }
      }
    }
  }
  
  for (let i = 0; i < inp.length; ) {
    if (typeof inp[i] == 'string') {
      inp.splice(i, 1);
    } else {
      i++;
    }
  }

  return inp;
};
