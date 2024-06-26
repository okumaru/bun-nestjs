
import { Controller, Get, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Put()
  create(): string {
    this.appService.create('asd');
    return "Success";
  }

  @Get()
  findAll(): string {
    return JSON.stringify(this.appService.findAll());
  }
}
