import { Controller, Get } from '@nestjs/common';
import { HealthService } from './health.app.service';

@Controller()
export class HealthController {
  constructor(private readonly appService: HealthService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
