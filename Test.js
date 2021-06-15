const Main = require('./index.js');

let txt = `Hello World!`;
let HexCode = `#0916A4`;


let A = Main.TextToBinary(txt);
let R = Main.BinaryToText(A);
let Hex_Code = Main.HexToRGB(HexCode);
let Aasss = JSON.stringify(Hex_Code);
let RGB_Code = Main.RGBToHex(Aasss);
let Num = Main.randNum(0, 10);




let Uq1 = Main.uniqueIncrementingId(5);
let Uq2 = Main.uuidv4();

let result = `TextToBinary:\n${A}\n\nBinaryToText:\n${R}\n\n\nHexToRGB: ${Hex_Code}\nRGBToHex: ${RGB_Code}\n\nRandom Number: ${Num}\n\nIncrementingId: ${Uq1}\nuuidv4: ${Uq2}`;

 
console.log(result);

