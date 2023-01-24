import {
  Command,
  CommandRunner,
  InquirerService,
  Question,
  QuestionSet,
} from 'nest-commander';
import { formatLibraryCommands } from '../utils/commands.format';
import { searchCommands } from '../utils/commands.search';

const COMMAND_REPO_URL =
  // 'https://api.github.com/search/code?q=index.json+repo:sarasate/commands';
  'https://api.github.com/repos/sarasate/commands/contents/index.json';

interface CommandInput {
  query: string;
}

@Command({
  name: 'search',
  description: 'Search for a command in the command library',
  aliases: ['s'],
})
export class SearchCommand extends CommandRunner {
  constructor(private readonly inquirer: InquirerService) {
    super();
  }
  async run(inputs: string[], options: Record<string, any>): Promise<void> {
    let query = inputs[0];
    if (!query) {
      const values = await this.inquirer.ask<CommandInput>(
        'search-questions',
        undefined,
      );
      query = values.query;
    }

    searchCommands(query).then((output) => {
      console.log(formatLibraryCommands(output));
    });
  }
}

@QuestionSet({ name: 'search-questions' })
export class SearchQuestions {
  @Question({
    message: 'What are you looking for?',
    name: 'query',
  })
  parseCommand(value: string) {
    return value;
  }
}
