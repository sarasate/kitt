import {
  Command,
  CommandRunner,
  InquirerService,
  Question,
  QuestionSet,
} from 'nest-commander';
import { writeCredentialsFile } from '../utils/files.persist';

interface TokenInput {
  token: string;
  gist: string;
}

@Command({ name: 'github_token', description: 'Set your github token' })
export class GithubTokenCommand extends CommandRunner {
  constructor(private readonly inquirer: InquirerService) {
    super();
  }
  async run() {
    // TODO Validate input
    console.log('Set your github token');
    const values = await this.inquirer.ask<TokenInput>('add-token', undefined);
    const { token, gist } = values;

    // TODO Check for existing token

    writeCredentialsFile({ token, gist });
  }
}

@QuestionSet({ name: 'add-token' })
export class TokenQuestions {
  @Question({
    message: 'Please enter your github token.',
    name: 'token',
  })
  parseToken(value: string) {
    return value;
  }

  @Question({ message: 'Please enter your gist id.', name: 'gist' })
  parseGist(value: string) {
    return value;
  }
}
