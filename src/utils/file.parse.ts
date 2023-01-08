import * as fs from 'fs';
import * as os from 'os';

const BASE_PATH = `${os.homedir()}/.kitt`;
/**
 * Parse the commands.json file and return the containing JSON
 */
export const parseFile = () => {
  const file = fs.readFileSync(`${BASE_PATH}/commands.json`, 'utf8');

  if (!file) return {};

  return JSON.parse(file);
};
