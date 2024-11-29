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

export interface Wallet {
  id: string;
  seller_id: string;
  balance: number;
}