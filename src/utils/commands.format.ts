import { table, TableUserConfig } from 'table';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const chalk = require('chalk');

interface CommandOutput {
  description?: string;
  alias?: string;
}

/**
 * Format command output
 */
export const formatCommands = (commands: { [key: string]: CommandOutput }) => {
  const tableData = convertData(commands);
  console.log(table(tableData, tableConfig));
};

export const formatLibraryCommands = (commands) => {
  const tableData = convertLibraryData(commands);
  console.log(table(tableData, tableConfig));
};

/**
 * Convert commands json to array for table output
 *
 * @param json
 * @returns
 */
const convertData = (json: any) => {
  const arr = [];
  arr.push([chalk.bold.blue('Commands'), '', '']);
  arr.push([
    chalk.bold('Command'),
    chalk.bold('Description'),
    chalk.bold('Alias'),
  ]);
  Object.entries(json).forEach(([key, value]: any) => {
    arr.push([chalk.green(key), value.description, value.alias]);
  });
  return arr;
};

/**
 * Convert commands json to array for table output
 *
 * @param json
 * @returns
 */
const convertLibraryData = (json: any) => {
  console.log(typeof json);
  const arr = [];
  arr.push([chalk.bold.blue('Commands'), '', '']);
  arr.push([
    chalk.bold('Command'),
    chalk.bold('Description'),
    chalk.bold('Alias'),
  ]);
  json.forEach((entry: any) => {
    arr.push([chalk.green(entry.command), entry.desc, entry.tags]);
  });
  return arr;
};

const tableConfig: TableUserConfig = {
  // columns: [{ alignment: 'center' }],
  spanningCells: [{ col: 0, row: 0, colSpan: 3 }],
};
