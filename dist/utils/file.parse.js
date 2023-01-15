"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseCredentialsFile = exports.parseFile = void 0;
const fs = require("fs");
const os = require("os");
const BASE_PATH = `${os.homedir()}/.kitt`;
const parseFile = (path = 'commands.json') => {
    const file = fs.readFileSync(`${BASE_PATH}/${path}`, 'utf8');
    if (!file)
        return {};
    return JSON.parse(file);
};
exports.parseFile = parseFile;
const parseCredentialsFile = () => {
    const file = fs.readFileSync(`${BASE_PATH}/.credentials.json`, 'utf8');
    if (!file)
        return {};
    return JSON.parse(file);
};
exports.parseCredentialsFile = parseCredentialsFile;
//# sourceMappingURL=file.parse.js.map