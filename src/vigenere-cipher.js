const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor (dir){
    this.direction = dir;
    
  }

    encrypt(message, key) {
      //creating Vigener square and alphabet
      let symbols = [];
      let alphabet = [];
      let table = [];
      let originAlph = [];

      for (let i = 65; i < 91; i++){
      symbols.push(i);
      };

      for (let i = 0; i < symbols.length; i++) {
        alphabet.push(String.fromCharCode(symbols[i]))
      }
      originAlph = [...alphabet];
      table[0] = [...alphabet];

      for (let y = 1; y < symbols.length; y++){
        alphabet.push(alphabet.shift());
        table[y] = [...alphabet];
      }

      // input processing
      let mess = message.toUpperCase().split('');

      let cleanMess = [];
      let sym =[]
      for (let el in mess){
        if (originAlph.indexOf(mess[el]) > -1) {
          cleanMess.push(mess[el]);
        } else {
          sym.push([mess[el], Number(el)])
        }
      }
      
     

      let k ='';
      while ( k.length < message.length) {
        k += key;
      };
      
      let fullKey = k.toUpperCase().split('').splice(0,cleanMess.length);


    //encrypting
      let crypted = [];
      for (let i = 0; i < cleanMess.length; i++) {
        crypted.push(table[originAlph.indexOf(cleanMess[i])][originAlph.indexOf(fullKey[i])])
      }

      for (let el of sym) {
        crypted.splice(el[1], 0, el[0])
      }
      
      if (this.direction || typeof this.direction == 'undefined') {
       return crypted.join('');
      } else {
        return crypted.reverse().join('');
      }
    }
    decrypt(message, key) {
      //creating Vigener square and alphabet
      let symbols = [];
      let alphabet = [];
      let table = [];
      let originAlph = [];

      for (let i = 65; i < 91; i++){
      symbols.push(i);
      };

      for (let i = 0; i < symbols.length; i++) {
        alphabet.push(String.fromCharCode(symbols[i]))
      }
      originAlph = [...alphabet];
      table[0] = [...alphabet];

      for (let y = 1; y < symbols.length; y++){
        alphabet.push(alphabet.shift());
        table[y] = [...alphabet];
      }

      // input processing
      let mess = message.toUpperCase().split('');
      let cleanMess = [];
      let sym =[]
      for (let el in mess){
        if (originAlph.indexOf(mess[el]) > -1) {
          cleanMess.push(mess[el]);
        } else {
          sym.push([mess[el], Number(el)])
        }
      }
      
      let k ='';
      while ( k.length < message.length) {
        k += key;
      };
      
      let fullKey = k.toUpperCase().split('').splice(0,cleanMess.length);


    //encrypting
      let encrypted = [];
      for (let i = 0; i < cleanMess.length; i++) {
        encrypted.push(originAlph[table[originAlph.indexOf(fullKey[i])].indexOf(cleanMess[i])])
      }

      for (let el of sym) {
        encrypted.splice(el[1], 0, el[0])
      }
      
      if (this.direction || typeof this.direction == 'undefined') {
       return encrypted.join('');
      } else {
      return encrypted.reverse().join('');
      }
  }

}

module.exports = VigenereCipheringMachine;
