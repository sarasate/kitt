import { CommandRunner, InquirerService } from 'nest-commander';
export declare class RunCommand extends CommandRunner {
    private readonly inquirer;
    constructor(inquirer: InquirerService);
    run(inputs: string[], options: Record<string, any>): Promise<void>;
}
export declare class QueryRunQuestions {
    parseQuery(value: string): string;
}
export declare class ExecRunQuestions {
    parseCommand(value: string): string;
}
export declare class VariableRunQuestions {
    parseInput(value: string): string;
}
