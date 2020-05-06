const {SHA256} = require('crypto-js');

const generateHash = (data) => {
    try {
        const stringifyObj = JSON.stringify(data);
        const hashedValue = SHA256(stringifyObj);
        return hashedValue;
    } catch (err) {
        console.log(err)
    }
}

const data1 = "Blockchain Rock!";
const dataObject = {
	id: 1,
    body: "With Object Works too",
    time: new Date().getTime().toString().slice(0,-3)
};

console.log(`SHA256 Hash: ${generateHash(data1)}`);
console.log("************************************");
console.log(`SHA256 Hash: ${generateHash(dataObject)}`);