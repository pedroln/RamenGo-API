import {
    Injectable,
    CanActivate,
    ExecutionContext,
    UnauthorizedException,
  } from '@nestjs/common';
  
  @Injectable()
  export class ApiKeyGuard implements CanActivate {
    async canActivate(context: ExecutionContext): Promise<boolean> {
      const request = context.switchToHttp().getRequest();
  
      const apiKey = request.headers['x-api-key']; // give the name you want
  
      if (!apiKey) {
        throw new UnauthorizedException('x-api-key header missing');
      }
  
      // call your env. var the name you want
      if (apiKey !== process.env.API_KEY) {
        throw new UnauthorizedException('x-api-key header missing');
      }
  
      return true;
    }
  }