
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private readonly strings: String[] = [];

  create(string: String) {
    this.strings.push(string);
  }

  findAll(): String[] {
    return this.strings;
  }
}
