import {
  Command,
  CommandRunner,
  InquirerService,
  Question,
  QuestionSet,
} from 'nest-commander';
import { formatLibraryCommands } from '../utils/commands.format';
import { searchCommands } from '../utils/commands.search';
import * as childProcess from 'child_process';

@Command({
  name: 'run',
  description: 'Search for a command and c&p to run it.',
  // arguments: '<command>',
  // options: { isDefault: true },
})
export class RunCommand extends CommandRunner {
  constructor(private readonly inquirer: InquirerService) {
    super();
  }
  async run(inputs: string[], options: Record<string, any>): Promise<void> {
    // Execute command
    let query = inputs[0];
    if (!query) {
      const values = await this.inquirer.ask<any>(
        'query-run-questions',
        undefined,
      );
      query = values.query;
    }

    // Log search result
    const result = await searchCommands(query);
    console.log(formatLibraryCommands(result));

    // Ask for command
    const commandIndex = (
      await this.inquirer.ask<{ command: number }>(
        'exec-run-questions',
        undefined,
      )
    ).command;

    // Extract chosen command
    let execCommand = result[commandIndex - 1].command;

    // Parse command variables
    const regex = /\[(.*?)\]/gm;

    const variables = execCommand.match(regex);

    // Ask for variable values (async iteration)
    for await (const variable of variables) {
      // Ask for variable value
      const result = await this.inquirer.ask<{ input: string }>(
        'variable-run-questions',
        undefined,
      );
      const input = result.input;
      console.log(input);
      // Replace variable with value
      execCommand = execCommand.replace(variable, input);
    }

    // Log command and info
    console.log(execCommand.toString());
    console.log(
      'Command is copied to your clipboard, if available. Paste it in your terminal.',
    );

    // Pipe command to clipboard if available
    try {
      // NOTE: Always spawn (end) a childProcess within a command function.
      const clipboard = childProcess.spawn('pbcopy');
      clipboard.stdin.write(execCommand);
      clipboard.stdin.end();
    } catch (error) {
      console.log(error);
    }
  }
}

@QuestionSet({ name: 'query-run-questions' })
export class QueryRunQuestions {
  @Question({
    message: 'Search for commands:',
    name: 'query',
  })
  parseQuery(value: string) {
    return value;
  }
}

@QuestionSet({ name: 'exec-run-questions' })
export class ExecRunQuestions {
  @Question({
    message: 'Which command do you want to run?',
    name: 'command',
  })
  parseCommand(value: string) {
    return value;
  }
}
@QuestionSet({ name: 'variable-run-questions' })
export class VariableRunQuestions {
  @Question({
    message: 'Enter value for variable:',
    name: 'input',
  })
  parseInput(value: string) {
    return value;
  }
}
