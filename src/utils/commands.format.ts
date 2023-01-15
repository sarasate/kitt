import { table, TableUserConfig } from 'table';

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

/**
 * Convert commands json to array for table output
 *
 * @param json
 * @returns
 */
const convertData = (json: any) => {
  const arr = [];
  arr.push(['Commands', '', '']);
  arr.push(['Command', 'Description', 'Alias']);
  Object.entries(json).forEach(([key, value]: any) => {
    arr.push([key, value.description, value.alias]);
  });
  return arr;
};

const tableConfig: TableUserConfig = {
  // columns: [{ alignment: 'center' }],
  spanningCells: [{ col: 0, row: 0, colSpan: 3 }],
};
