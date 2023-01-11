import { exec } from 'child_process';
import { Command, CommandRunner } from 'nest-commander';

@Command({
  name: 'run',
  arguments: '<command>',
  // options: { isDefault: true },
})
export class RunCommand extends CommandRunner {
  async run(inputs: string[], options: Record<string, any>): Promise<void> {
    // Execute command
    console.log('%crun.command.ts line:12 inputs', 'color: #007acc;', inputs);
    exec('ls -la', (error, stdout, stderr) => {
      if (error) {
        console.log(`error: ${error.message}`);
        return;
      }
      if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
      }
      console.log(stdout);
    });
  }
}
