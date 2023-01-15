import { CommandRunner, InquirerService } from 'nest-commander';
export declare class GithubTokenCommand extends CommandRunner {
    private readonly inquirer;
    constructor(inquirer: InquirerService);
    run(): Promise<void>;
}
export declare class TokenQuestions {
    parseToken(value: string): string;
    parseGist(value: string): string;
}
