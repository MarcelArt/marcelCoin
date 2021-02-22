declare class Transaction {
	fromAddress: string;
	toAddress: string;
	amount: number;
	timestamp: string;

	constructor(fromAddress: string, toAddress: string, amount: number);

	calculateHash(): string;
	signTransaction(signingKey: any): void;
	isValid(): boolean;
}

declare class Block {
	timestamp: string;
	transactions: Transaction[];
	previousHash: string;
	hash: string;
	nonce: number;

	constructor(
		timestamp: string,
		transactions: Transaction[],
		previousHash: string
	);

	calculateHash(): string;

	mineBlock(difficulty: number): void;

	hasValidTransaction(): boolean;
}

declare class Blockchain {
	chain: Block[];
	difficulty: number;
	pendingTransactions: Transaction[];
	miningReward: number;

	constructor();

	createGenesisBlock(): Block;

	getLatestBlock(): Block;

	minePendingTransactions(miningRewardAddress: string): void;

	addTransaction(transaction: Transaction): void;

	getBalanceOfAddress(address: string): number;

	isChainValid(): boolean;
}
export { Blockchain, Block, Transaction };
// declare module 'blockchain';
