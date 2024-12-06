import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { WalletService } from 'src/wallet/wallet.service';
import { TransactionCreated } from 'src/interfaces/types';

@Injectable()
export class TransactionsService {
    constructor(
        private prisma: PrismaService,
        private wallet: WalletService
    ) { }

    async createTransaction(dataTransaction: CreateTransactionDto): Promise<TransactionCreated | null> {
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

    async findTransactionById (id: number) : Promise<TransactionCreated | null> {
        const transaction = await this.prisma.transactions.findUnique({
            where: { id },
        })
        if (!transaction) {
            throw new NotFoundException("Transaction not found")
        }
        return transaction
    }

    async getAllTransaction (): Promise<TransactionCreated[] | null> {
        return await this.prisma.transactions.findMany()
    }
    
    async findTransactionByWallet_id (wallet_id: string) : Promise<TransactionCreated[] | null> {
        return await this.prisma.transactions.findMany({
            where: { wallet_id }
        })
    }
    // async calcularMontoDeWallet
    async updateBalanceInWallet (wallet_id: string, amount: number) {}
}