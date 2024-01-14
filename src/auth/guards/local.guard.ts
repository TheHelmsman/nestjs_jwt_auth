import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Observable } from 'rxjs';

@Injectable()
export class LocalGuard extends AuthGuard('local') {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    console.log('LocalGuard, canActive called...');
    //  if there is need additional things and implement additional logic
    //  during authentication, it can be written inside this method
    return super.canActivate(context);
  }
}
