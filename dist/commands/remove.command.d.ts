import { CommandRunner, InquirerService } from 'nest-commander';
export declare class RemoveCommand extends CommandRunner {
    private readonly inquirer;
    constructor(inquirer: InquirerService);
    run(inputs: string[], options: Record<string, any>): Promise<void>;
}
export declare class RemoveQuestions {
    parseCommand(value: string): string;
}
