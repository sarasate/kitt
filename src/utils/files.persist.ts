import * as fs from 'fs';
import * as os from 'os';

const BASE_PATH = `${os.homedir()}/.kitt`;

/**
 * Write the commands.json file
 */
export const writeFile = (data): void => {
  fs.writeFileSync(`${BASE_PATH}/commands.json`, JSON.stringify(data));
};
