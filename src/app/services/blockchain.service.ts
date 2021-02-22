import { Injectable } from '@angular/core';
import EC from 'elliptic';
import { Blockchain } from '../../myCrypto/blockchain';
// declare var Blockchain: any;


@Injectable({
  providedIn: 'root'
})
export class BlockchainService {
  public blockChainInstance = new Blockchain();
  public walletKeys = [];

  constructor() {
    this.blockChainInstance.difficulty = 1;
    this.blockChainInstance.minePendingTransactions('my-wallet-address');

    this.generateWalletKeys();
  }

  getBlocks() {
    return this.blockChainInstance.chain;
  }

  addTransaction(tx) {
    this.blockChainInstance.addTransaction(tx);
  }

  getPendingTransactions() {
    return this.blockChainInstance.pendingTransactions;
  }

  minePendingTransaction() {
    this.blockChainInstance.minePendingTransactions(this.walletKeys[0].publicKey);
  }

  private generateWalletKeys() {
    const ec = new EC.ec('secp256k1');
    const key = ec.genKeyPair();

    this.walletKeys.push({
      keyObj: key,
      publicKey: key.getPublic('hex'),
      privateKey: key.getPrivate('hex')
    })
  }
}
