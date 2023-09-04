import { Module, Controller, Get, Query, Param, Res, Render } from '@nestjs/common';
import { TfaService } from './tfa.service';
import { Response } from 'express';

@Controller('2fa')
export class TfaController {
  constructor(private readonly tfaService: TfaService) {}
  @Get('verify')
  async verifyToken(@Query('secret') secret: string, @Query('cookie') cookie: string, @Res() res: Response) {
    const valid = await this.tfaService.verifyToken(secret, cookie);
    res.send({ valid });
  }
}