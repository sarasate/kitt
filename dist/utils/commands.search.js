"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchCommands = void 0;
const axios_1 = require("axios");
const COMMAND_REPO_URL = 'https://api.github.com/repos/sarasate/commands/contents/index.json';
const searchCommands = async (query) => {
    try {
        const res = await axios_1.default.get(COMMAND_REPO_URL);
        const jsonString = Buffer.from(res.data.content, 'base64').toString('utf-8');
        const json = JSON.parse(jsonString);
        const result = json.filter((object) => Object.values(object).some((value) => value
            .toString()
            .toLowerCase()
            .match(new RegExp(query.toLowerCase(), 'i'))));
        return result;
    }
    catch (err) {
        console.log(err);
    }
};
exports.searchCommands = searchCommands;
//# sourceMappingURL=commands.search.js.map