const { Blockchain, Transaction } = require('./blockchain');
// import { Blockchain, Transaction } from './blockchain'
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('57ac9158f432b90d1fc8777e47d34abbc78356d728b4b55dec28b5700fb06e00');
const myWalletAddress = myKey.getPublic('hex');

let marcelCoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'public key goes here', 10);
tx1.signTransaction(myKey); 
marcelCoin.addTransaction(tx1);

console.log('\nStarting the miner...');
marcelCoin.minePendingTransactions(myWalletAddress);

console.log('\nBalance of xavier is', marcelCoin.getBalanceOfAddress(myWalletAddress));










// console.log('Mining Block 1...');
// marcelCoin.addBlock(new Block(1, '01/10/2021', { amount: 4 }));

// console.log('Mining Block 1...');
// marcelCoin.addBlock(new Block(2, '03/10/2021', { amount: 10 }));


// console.log(JSON.stringify(marcelCoin, null, 4));

// marcelCoin.chain[1].data = {amount: 100};
// marcelCoin.chain[1].hash = marcelCoin.chain[1].calculateHash();
// console.log('is blockchain valid? ' + marcelCoin.isChainValid());