import * as fs from 'fs';
import * as os from 'os';

const BASE_PATH = `${os.homedir()}/.kitt`;
/**
 * Parse the commands.json file and return the containing JSON
 */
export const parseFile = (path = 'commands.json') => {
  const file = fs.readFileSync(`${BASE_PATH}/${path}`, 'utf8');

  if (!file) return {};

  return JSON.parse(file);
};

export const parseCredentialsFile = () => {
  try {
    const file = fs.readFileSync(`${BASE_PATH}/.credentials.json`, 'utf8');
    return JSON.parse(file);
  } catch (error) {
    throw new Error('File not found');
  }
};
