import { Command, CommandRunner } from 'nest-commander';
import { formatCommands } from '../utils/commands.format';
import { parseFile } from '../utils/file.parse';

@Command({
  name: 'list',
  aliases: ['ls'],
  description: 'List all commands',
  // arguments: '<task>',
  // options: { isDefault: true },
})
export class ListCommand extends CommandRunner {
  async run(inputs: string[], options: Record<string, any>): Promise<void> {
    const json = parseFile();

    // Show all commands
    formatCommands(json);
    // Object.entries(json).forEach((command: any) => {
    // });
  }
}
