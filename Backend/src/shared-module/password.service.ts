import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class PasswordService {

    async hashPassword (password: string) : Promise<string> {
        return bcrypt.hash(password, 10);
    }

    async comparePassword (password:string, hashedPassword: string) : Promise<boolean> {
        return bcrypt.compare(password, hashedPassword);
    }
}