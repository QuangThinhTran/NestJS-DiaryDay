import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Auth } from './schema/auth.schema';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
}
