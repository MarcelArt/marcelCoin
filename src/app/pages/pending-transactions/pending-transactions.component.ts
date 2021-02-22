import { Component, OnInit } from '@angular/core';
import { BlockchainService } from 'src/app/services/blockchain.service';

@Component({
  selector: 'app-pending-transactions',
  templateUrl: './pending-transactions.component.html',
  styleUrls: ['./pending-transactions.component.css']
})
export class PendingTransactionsComponent implements OnInit {
  public pendingTransactions = [];

  constructor(private blockchainService: BlockchainService) { 
    this.pendingTransactions = blockchainService.getPendingTransactions();
  }

  ngOnInit(): void {
  }

  minePendingTransaction() {
    this.blockchainService.minePendingTransaction();
  }
}
