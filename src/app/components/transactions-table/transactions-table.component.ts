import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-transactions-table',
  templateUrl: './transactions-table.component.html',
  styleUrls: ['./transactions-table.component.css']
})
export class TransactionsTableComponent implements OnInit {
  @Input() public transactions = [];

  constructor() { }

  ngOnInit(): void {
    console.log('transactions', this.transactions);
  }
}
