import { exec } from 'child_process';
import {
  Command,
  CommandRunner,
  InquirerService,
  Question,
  QuestionSet,
} from 'nest-commander';
import axios from 'axios';

const COMMAND_REPO_URL =
  // 'https://api.github.com/search/code?q=index.json+repo:sarasate/commands';
  'https://api.github.com/repos/sarasate/commands/contents/index.json';

interface CommandInput {
  command: string;
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
      query = values.command;
    }

    // Search command library
    axios
      .get(COMMAND_REPO_URL)
      .then((res) => {
        if (!res) return;
        // Convert base64 to utf-8
        const jsonString = Buffer.from(res.data.content, 'base64').toString(
          'utf-8',
        );
        // Parse JSON
        const json = JSON.parse(jsonString);
        // Search data
        const result = json.filter((object) =>
          object.command.toLowerCase().match(new RegExp(query, 'i')),
        );
        // TODO Format result
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
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