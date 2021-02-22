import { Component, OnInit } from '@angular/core';
import { Transaction } from '../../../myCrypto/blockchain';
import { BlockchainService } from 'src/app/services/blockchain.service';

@Component({
  selector: 'app-create-transaction',
  templateUrl: './create-transaction.component.html',
  styleUrls: ['./create-transaction.component.css']
})
export class CreateTransactionComponent implements OnInit {
  public newTx: Transaction;
  public walletKey;
  
  constructor(private blockChainService: BlockchainService) {
    this.walletKey = blockChainService.walletKeys[0];
   }

  ngOnInit(): void {
    this.newTx = new Transaction('', '', 0);
  }

  createTransaction() {
    this.newTx.fromAddress = this.walletKey.publicKey;
    this.newTx.signTransaction(this.walletKey.keyObj);

    this.blockChainService.addTransaction(this.newTx);

    this.newTx = new Transaction('', '', 0);
  }

}
