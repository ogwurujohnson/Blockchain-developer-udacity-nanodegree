const Web3 = require('web3');
const EthereumTransaction = require('ethereumjs-tx').Transaction;

const web3 = new Web3('http://127.0.0.1:7545');

let sendingAddress = '0x776E5b868EB5Ad7066E076b871d5b22f9A838405';
let receivingAddress = '0x0a046eF676c67d78522DCf6e6B903bd2B6a9c94e';

// Get balance
web3.eth.getBalance(sendingAddress).then(console.log);
web3.eth.getBalance(receivingAddress).then(console.log);

const gasPrice = web3.utils.toHex(web3.eth.getGasPrice());
const txCount = web3.eth.getTransactionCount(sendingAddress).then((count) => console.log(count));

let rawTransaction = {
    nonce: 3,
    to: receivingAddress,
    gasPrice: gasPrice,
    gasLimit: web3.utils.toHex(2000000),
    value: web3.utils.toHex(1)
}

let privateKeySender = '8289c1f983b86af448a8e9bf4e8d3b5da55ca16dce9e751bf7386e36f73342ac';
let privateKeySenderHex = new Buffer.from(privateKeySender, 'hex')
let transaction = new EthereumTransaction(rawTransaction);
transaction.sign(privateKeySenderHex);

let serializedTransaction = transaction.serialize();

web3.eth.sendSignedTransaction(serializedTransaction);