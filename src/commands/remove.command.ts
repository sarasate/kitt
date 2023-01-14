import { exec } from 'child_process';
import {
  Command,
  CommandRunner,
  InquirerService,
  // Question,
  // QuestionSet,
} from 'nest-commander';
import { writeFile } from '../utils/files.persist';
import { parseFile } from '../utils/file.parse';

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
    // Get all existing commands
    const commands = parseFile();

    // Remove command from config file
    delete commands[inputs[0]];

    // Persist changes
    writeFile(commands);
  }
}

// @QuestionSet({ name: 'edit-questions' })
// export class EditQuestions {
//   @Question({
//     message: 'What command would you like to edit?',
//     name: 'command',
//   })
//   parseCommand(value: string) {
//     return value;
//   }
// }
