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

export interface PaypalItem {
  name: string;
  description: string;
  quantity: string;
  unit_amount: {
    currency_code: string;
    value: string;
  };
  type: 'course' | 'plan';
}

export interface PaypalAmountBreakdown {
  item_total: {
    currency_code: string;
    value: string;
  };
}

export interface PaypalAmount {
  currency_code: string;
  value: string;
  breakdown: PaypalAmountBreakdown;
}

export interface PaypalPurchaseUnit {
  amount: PaypalAmount;
  items: PaypalItem[];
  paye: { sellerEmail: string };
}

export interface CreatePaypalOrderWithItems {
  purchase_units: PaypalPurchaseUnit[];
}
