import axios from 'axios';
import { formatLibraryCommands } from './commands.format';

const COMMAND_REPO_URL =
  // 'https://api.github.com/search/code?q=index.json+repo:sarasate/commands';
  'https://api.github.com/repos/sarasate/commands/contents/index.json';

export const searchCommands = async (query) => {
  try {
    const res = await axios.get(COMMAND_REPO_URL);
    // Convert base64 to utf-8
    const jsonString = Buffer.from(res.data.content, 'base64').toString(
      'utf-8',
    );
    // Parse JSON
    const json = JSON.parse(jsonString);
    // Search data
    const result = json.filter((object) =>
      Object.values(object).some((value) =>
        value
          .toString()
          .toLowerCase()
          .match(new RegExp(query.toLowerCase(), 'i')),
      ),
    );
    return result;
    // return formatLibraryCommands(result);
  } catch (err) {
    console.log(err);
  }
};
