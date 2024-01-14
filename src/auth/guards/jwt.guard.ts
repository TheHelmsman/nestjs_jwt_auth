import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Observable } from 'rxjs';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    console.log('JwtAuthGuard, canActive called...');
    //  if there is need additional things and implement additional logic
    //  during authentication, it can be written inside this method
    return super.canActivate(context);
  }
}
