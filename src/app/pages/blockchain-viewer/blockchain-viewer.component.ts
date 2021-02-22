import { Component, OnInit } from '@angular/core';
import { BlockchainService } from 'src/app/services/blockchain.service';

@Component({
  selector: 'app-blockchain-viewer',
  templateUrl: './blockchain-viewer.component.html',
  styleUrls: ['./blockchain-viewer.component.css']
})
export class BlockchainViewerComponent implements OnInit {
  public blocks = [];
  public selectedBlock = null;

  constructor(private blockchainService: BlockchainService) {
    this.blocks = blockchainService.getBlocks();
    this.selectedBlock = this.blocks[0];
  }

  ngOnInit(): void {
  }

  showTransactions(block) {
    this.selectedBlock = block;
    console.log('this.selectedBlock.transactions', this.selectedBlock.transactions);
  }
}
