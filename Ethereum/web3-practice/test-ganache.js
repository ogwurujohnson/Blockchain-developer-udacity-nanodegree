const Web3 = require('web3');
const web3 = new Web3("HTTP://127.0.0.1:7545");

web3.eth.getTransactionCount("0x776E5b868EB5Ad7066E076b871d5b22f9A838405").then((res) => console.log(res));
const getCount = async (address) => {
    let count = await web3.eth.getTransactionCount(address);
    console.log(count);
}

getCount("0x776E5b868EB5Ad7066E076b871d5b22f9A838405")