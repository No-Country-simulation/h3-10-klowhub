import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PasswordService } from 'src/shared-module/password.service';
import { UsersService } from 'src/users/users.service';
import {
  LoginDto,
  LoginResponse,
  LoginResponseWithToken,
} from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private passwordService: PasswordService,
  ) {}

  async authenticateUser(input: LoginDto): Promise<LoginResponseWithToken> {
    const user = await this.validateUser(input);

    if (!user) throw new UnauthorizedException('User not found');

    return this.signIn(user);
  }

  async validateUser(input: LoginDto): Promise<LoginResponse | null> {
    const user = await this.usersService.findByMail(input.email);

    const isValidPassword = await this.passwordService.comparePassword(
      input.password,
      user.password,
    );

    if (!isValidPassword) throw new UnauthorizedException('Invalid password');

    if (user && isValidPassword) {
      return {
        id: user.user_id,
        email: user.email,
        name: user.name,
      };
    }
    return null;
  }

  async signIn(user: LoginResponse): Promise<LoginResponseWithToken> {
    const tokenPayload = {
      email: user.email,
      sub: user.id,
      name: user.name,
    };

    const accessToken = await this.jwtService.signAsync(tokenPayload);

    return {
      ...user,
      token: accessToken,
    };
  }
}
