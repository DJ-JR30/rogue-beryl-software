const main = require('../index.js');


exports.BinaryToText = function(Message) {
  if(typeof Message == 'undefined') {
    let msg = 'Sorry enter a message please';
    return msg;
  }
  if(typeof Message == 'string') {
    let msg = Message;
    const res = msg.split(' ').map(b =>parseInt(b, 2)).map(num => String.fromCharCode(num)).join('');
    return res;
  }else{
    let msg = 'Sorry Please enter a the Binary to string';
    return msg;
  }
}


exports.TextToBinary = function(str) {
  let res = '';
  res = str.split('').map(char => {
    return char.charCodeAt(0).toString(2);
  }).join(' ');
  return res;
}


