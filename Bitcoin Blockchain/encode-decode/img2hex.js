const fs = require('fs'); 
const imgReadBuffer = fs.readFileSync('test-pattern.jpg');
const imgHexEncode = new Buffer(imgReadBuffer).toString('hex');

console.log(imgHexEncode);

// Decode hex
var imgHexDecode = new Buffer(imgHexEncode, 'hex');

// Save decoded file file system 
fs.writeFileSync('decodedHexImage.jpg', imgHexDecode);
