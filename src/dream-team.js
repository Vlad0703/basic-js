const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
  let team;
  let dream=[];
  if (Array.isArray(arr)){
    if (arr.length != 0){
      for (let el of arr) {
        if (typeof(el) == 'string'){
         dream.push(el.replace(/\s+/g, '')[0].toUpperCase())
      } else {
        continue
      }
    } 
  } else {
    return false
  }
  } else {
    return false
  }


  team = dream.sort().join('');
  return team;
};
