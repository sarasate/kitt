import { CommandRunner, InquirerService } from 'nest-commander';
export declare class CommandQuestions {
    parseCommand(value: string): string;
    parseDesc(value: string): string;
    parseAlias(value: string): string;
}
export declare class AddCommand extends CommandRunner {
    private readonly inquirer;
    constructor(inquirer: InquirerService);
    run(inputs: string[], options: Record<string, any>): Promise<void>;
}
