import {
  Command,
  CommandRunner,
  InquirerService,
  Question,
  QuestionSet,
} from 'nest-commander';
import { parseFile } from '../utils/file.parse';
import { writeFile } from '../utils/files.persist';

interface CommandInput {
  command: string;
  description: string;
  alias: string;
}

/**
 * Questions for the add command
 */
@QuestionSet({ name: 'add-questions' })
export class CommandQuestions {
  @Question({
    message: 'What command would you like to add?',
    name: 'command',
  })
  parseCommand(value: string) {
    return value;
  }

  @Question({ message: "What's the description?", name: 'desc' })
  parseDesc(value: string) {
    return value;
  }

  @Question({ message: "What's the alias?", name: 'alias' })
  parseAlias(value: string) {
    return value;
  }
}

@Command({ name: 'add', description: 'Add a new command' })
export class AddCommand extends CommandRunner {
  constructor(private readonly inquirer: InquirerService) {
    super();
  }
  async run(inputs: string[], options: Record<string, any>): Promise<void> {
    let values = {} as any; //
    values = await this.inquirer.ask<CommandInput>('add-questions', undefined);
    const { command, desc, alias } = values;

    // TODO validate command

    // TODO Check if command already exists

    // Save command in config file
    const json = parseFile();

    json.push({ command, desc, alias });

    // Object.assign(json, { []: {command, description, alias } });

    writeFile(json);
  }
}
