const { BinaryToText, TextToBinary } = require('./src/Binary.js');
const { HexToRGB, RGBToHex } = require('./src/HexAndRGB.js');
const { randNum } = require('./src/Misc.js');
const { uniqueId, uniqueIncrementingId, uniqueAlphaNumericId, uuidv4 } = require('./src/uniquelDgenerator.js');






module.exports = {
  BinaryToText,
  TextToBinary,
  HexToRGB,
  RGBToHex,
  randNum,
  uniqueId,
  uniqueIncrementingId,
  uniqueAlphaNumericId,
  uuidv4
}

