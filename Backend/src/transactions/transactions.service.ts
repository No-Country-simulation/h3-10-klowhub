import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
// import { CreateTransactionDto } from './dto/create-transaction.dto';
import { WalletService } from 'src/wallet/wallet.service';
// import { CreateTransaction } from 'src/interfaces/types';

@Injectable()
export class TransactionsService {
    constructor(
        private prisma: PrismaService,
        private wallet: WalletService
    ) { }

    async createTransaction(dataTransaction: any): Promise<any | null> {
        // const { amount, type_transaction, wallet_id } = dataTransaction;
        const validWallet_id = await this.wallet.findOne(dataTransaction.wallet_id)
        if (!validWallet_id) {
            throw new NotFoundException("wallet_id no match in database")
        }
        const transaction = await this.prisma.transactions.create({
            data: dataTransaction
        })
        return transaction
    }
}