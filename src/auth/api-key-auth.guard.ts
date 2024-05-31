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
      if (apiKey !== 'cb54119f-fc0e-4d4f-b8e1-30bc7c54dc4e') {
        throw new UnauthorizedException('x-api-key header missing');
      }
  
      return true;
    }
  }