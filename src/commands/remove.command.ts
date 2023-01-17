import { exec } from 'child_process';
import {
  Command,
  CommandRunner,
  InquirerService,
  Question,
  QuestionSet,
  // Question,
  // QuestionSet,
} from 'nest-commander';
import { writeFile } from '../utils/files.persist';
import { parseFile } from '../utils/file.parse';

interface CommandInput {
  command: string;
}

@Command({
  name: 'remove',
  description: 'Edit a command',
  aliases: ['rm'],
})
export class RemoveCommand extends CommandRunner {
  constructor(private readonly inquirer: InquirerService) {
    super();
  }
  async run(inputs: string[], options: Record<string, any>): Promise<void> {
    let command = inputs[0];
    if (!command) {
      const values = await this.inquirer.ask<CommandInput>(
        'remove-questions',
        undefined,
      );
      command = values.command;
    }

    // Get all existing commands
    const commands = parseFile();

    // Remove command from config file
    delete commands[command];

    // Persist changes
    writeFile(commands);
  }
}

@QuestionSet({ name: 'remove-questions' })
export class RemoveQuestions {
  @Question({
    message: 'What command would you like to edit?',
    name: 'command',
  })
  parseCommand(value: string) {
    return value;
  }
}
