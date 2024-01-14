import {
  // Body,
  Controller,
  Get,
  // HttpException,
  // HttpStatus,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
// import { AuthPayloadDto } from './dto/auth.dto';
import { AuthService } from './auth.service';
// import { AuthGuard } from '@nestjs/passport';
import { LocalGuard } from './guards/local.guard';
import { Request } from 'express';
import { JwtAuthGuard } from './guards/jwt.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @UseGuards(LocalGuard)
  login(@Req() req: Request) {
    return req.user; //  returns JWT
  }

  //  old implementation
  // @Post('login')
  // @UseGuards(AuthGuard('local'))
  // login(@Body() authPayload: AuthPayloadDto) {
  //   const user = this.authService.validateUser(authPayload);

  //   //  no need, since it's handled by AuthGuard / local strategy
  //   // if (!user)
  //   //   return new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);

  //   return user; //  returns JWT
  // }

  @Get('status')
  @UseGuards(JwtAuthGuard)
  status(@Req() req: Request) {
    console.log('Inside AuthController status method, req.user: ', req.user);
    return req.user;
  }
}
