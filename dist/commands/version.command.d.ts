import { CommandRunner } from 'nest-commander';
import { AppService } from '../app.service';
export declare class VersionCommand extends CommandRunner {
    private readonly appService;
    constructor(appService: AppService);
    run(): Promise<void>;
}
