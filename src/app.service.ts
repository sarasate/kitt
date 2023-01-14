import { Injectable } from '@nestjs/common';
const pjson = require('../package.json');

@Injectable()
export class AppService {
  getVersion(): string {
    return pjson.version;
  }
}
