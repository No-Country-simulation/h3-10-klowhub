export interface ResponseObject {
  message: string;
  ok: boolean;
}

export interface LoginResponse {
  id: string;
  name: string;
  email: string;
}

export interface LoginResponseWithToken extends LoginResponse {
  token: string;
}

export interface DeleteResponseObject {
  id: number;
  user_id: string;
  date: Date;
}

export interface Wallet {
  id: string;
  seller_id: string;
  balance: number;
}

export interface CreateTransaction {
  wallet_id: string;
  type_transaction: number;
  amount: number;
}

export interface CreatePaypalOrder {
  courseId: string;
  amount: string;
  currency: string;
  title: string;
  description: string;
  seller_email: string;
}
