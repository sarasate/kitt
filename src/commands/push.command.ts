import axios from 'axios';
import { Command, CommandRunner } from 'nest-commander';
import { parseCredentialsFile, parseFile } from '../utils/file.parse';

@Command({ name: 'push', description: 'Push your changes to github' })
export class PushCommand extends CommandRunner {
  async run() {
    console.log('Pushing your changes to github.');
    const credentials = parseCredentialsFile();

    // TODO Validate credentials

    // Load commands from commands.json
    // TODO Use raw file without parsing
    const commands = parseFile('commands.json');

    // Create file
    const newFile = {
      'commands.json': {
        content: JSON.stringify(commands),
      },
    };

    // TODO Ask to overwrite file if it exists

    // Push to gist
    const gistUrl = `https://api.github.com/gists/${credentials['gist']}`;

    // Send update request to github api
    axios
      .patch(
        gistUrl,
        { files: newFile },
        {
          headers: {
            accept: 'application/vnd.github + json',
            Authorization: `Bearer ${credentials['token']}`,
            'Content-Type': 'application/json',
          },
        },
      )
      .then(() => {
        console.log('Successfully pushed to github!');
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
