import { Command, CommandRunner } from 'nest-commander';
import { AppService } from '../app.service';

@Command({ name: 'version', description: 'Get kitt version' })
export class VersionCommand extends CommandRunner {
  constructor(private readonly appService: AppService) {
    super();
  }

  async run() {
    console.log(this.appService.getVersion());
  }
}
