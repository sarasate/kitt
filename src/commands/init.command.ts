import { Command, CommandRunner } from 'nest-commander';
import * as fs from 'fs';
import * as os from 'os';

const BASE_PATH = `${os.homedir()}/.kitt`;

@Command({ name: 'init', description: 'Initialize kitt' })
export class InitCommand extends CommandRunner {
  async run() {
    if (fs.existsSync(BASE_PATH) === false) {
      fs.mkdirSync(BASE_PATH);
    }
    fs.writeFileSync(`${BASE_PATH}/commands.json`, ''); //[encoding], [callback]);
    console.log('Initialized kitt');
  }
}
