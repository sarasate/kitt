"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatCommands = void 0;
const table_1 = require("table");
const formatCommands = (commands) => {
    const tableData = convertData(commands);
    console.log((0, table_1.table)(tableData, tableConfig));
};
exports.formatCommands = formatCommands;
const convertData = (json) => {
    const arr = [];
    arr.push(['Commands', '', '']);
    arr.push(['Command', 'Description', 'Alias']);
    Object.entries(json).forEach(([key, value]) => {
        arr.push([key, value.description, value.alias]);
    });
    return arr;
};
const tableConfig = {
    spanningCells: [{ col: 0, row: 0, colSpan: 3 }],
};
//# sourceMappingURL=commands.format.js.map