import { Controller, Get, Res } from '@nestjs/common';;
import { Response } from 'express';

@Controller()
export class HealthController {
  constructor() {
  }

  @Get('/')
  async findAll(@Res() response: Response): Promise<any> {
    return response.status(200).send('ok')
  }

  @Get('/health')
  async health(@Res() response: Response): Promise<any> {
    return response.status(200).send('ok')
  }
}
