import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  signup(@Body() createAuthDto: AuthDto) {
    return this.authService.signup(createAuthDto);
  }

  @HttpCode(HttpStatus.OK)
  @Post('signin')
  signin(@Body() createAuthDto: AuthDto) {
    return this.authService.signin(createAuthDto);
  }
}
