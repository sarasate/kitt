import axios from 'axios';
import { Command, CommandRunner } from 'nest-commander';
import { parseCredentialsFile } from '../utils/file.parse';
import { writeFile } from '../utils/files.persist';

@Command({ name: 'pull', description: 'Pull your changes from github' })
export class PullCommand extends CommandRunner {
  async run() {
    console.log('Pull your changes from github.');
    const credentials = parseCredentialsFile();

    // TODO Ask for confirmation

    // TODO Validate credentials

    // Load commands from commands.json
    // TODO Use raw file without parsing

    // TODO Ask to overwrite file if it exists

    // Pull from gist
    const gistUrl = `https://api.github.com/gists/${credentials['gist']}`;

    // Fetch get request via github api
    axios
      .get(gistUrl, {
        headers: {
          accept: 'application/vnd.github + json',
          Authorization: `Bearer ${credentials['token']}`,
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        console.log(res);
        const result = res?.data?.files['commands.json'].content || {};

        writeFile(JSON.parse(result));
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
