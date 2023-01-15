import { CommandRunner } from 'nest-commander';
export declare class RunCommand extends CommandRunner {
    run(inputs: string[], options: Record<string, any>): Promise<void>;
}
