export interface ResponseObject {
  message: string;
  ok: boolean;
}

export interface Wallet {
  id: string;
  seller_id: string;
  balance: number;
}
