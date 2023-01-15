"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeCredentialsFile = exports.writeFile = void 0;
const fs = require("fs");
const os = require("os");
const BASE_PATH = `${os.homedir()}/.kitt`;
const writeFile = (data) => {
    fs.writeFileSync(`${BASE_PATH}/commands.json`, JSON.stringify(data));
};
exports.writeFile = writeFile;
const writeCredentialsFile = (data) => {
    fs.writeFileSync(`${BASE_PATH}/.credentials.json`, JSON.stringify(data));
};
exports.writeCredentialsFile = writeCredentialsFile;
//# sourceMappingURL=files.persist.js.map