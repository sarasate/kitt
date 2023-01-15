import { CommandRunner } from 'nest-commander';
export declare class ListCommand extends CommandRunner {
    run(inputs: string[], options: Record<string, any>): Promise<void>;
}
