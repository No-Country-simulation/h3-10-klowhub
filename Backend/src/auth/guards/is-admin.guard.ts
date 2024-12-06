import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class IsAdminGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}
  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    const authorization = request.headers.authorization;
    const token = authorization?.split(' ')[1];

    if (!token) {
      throw new UnauthorizedException('No hay token');
    }

    try {
      const tokenPayload = await this.jwtService.verifyAsync(token);
      if (tokenPayload.role !== 'ADMIN') {
        throw new UnauthorizedException('No tienes permisos de administrador');
      }

      request.user = {
        id: tokenPayload.sub,
        email: tokenPayload.email,
        name: tokenPayload.name,
        role: tokenPayload.role,
      };

      return true;
    } catch (error) {
      throw new UnauthorizedException('Token inválido', error);
    }
  }
}
