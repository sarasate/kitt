"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatLibraryCommands = exports.formatCommands = void 0;
const table_1 = require("table");
const chalk = require('chalk');
const formatCommands = (commands) => {
    const tableData = convertData(commands);
    return (0, table_1.table)(tableData, tableConfig);
};
exports.formatCommands = formatCommands;
const formatLibraryCommands = (commands, numbered = false) => {
    const tableData = convertLibraryData(commands);
    return (0, table_1.table)(tableData, tableConfig);
};
exports.formatLibraryCommands = formatLibraryCommands;
const convertData = (json) => {
    const arr = [];
    arr.push([chalk.bold.blue('Commands'), '', '']);
    arr.push([
        chalk.bold('Command'),
        chalk.bold('Description'),
        chalk.bold('Alias'),
    ]);
    Object.entries(json).forEach(([key, value]) => {
        arr.push([chalk.green(key), value.description, value.alias]);
    });
    return arr;
};
const convertLibraryData = (json) => {
    const arr = [];
    arr.push([chalk.bold.blue('Commands'), '', '', '']);
    arr.push([
        chalk.bold('No.'),
        chalk.bold('Command'),
        chalk.bold('Description'),
        chalk.bold('Tags'),
    ]);
    json.forEach((entry, index) => {
        arr.push([index + 1, chalk.green(entry.command), entry.desc, entry.tags]);
    });
    return arr;
};
const tableConfig = {
    spanningCells: [{ col: 0, row: 0, colSpan: 3 }],
};
//# sourceMappingURL=commands.format.js.map