import { CommandRunner, InquirerService } from 'nest-commander';
export declare class SearchCommand extends CommandRunner {
    private readonly inquirer;
    constructor(inquirer: InquirerService);
    run(inputs: string[], options: Record<string, any>): Promise<void>;
}
export declare class SearchQuestions {
    parseCommand(value: string): string;
}
