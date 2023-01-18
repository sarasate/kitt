"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PullCommand = void 0;
const axios_1 = require("axios");
const nest_commander_1 = require("nest-commander");
const file_parse_1 = require("../utils/file.parse");
const files_persist_1 = require("../utils/files.persist");
let PullCommand = class PullCommand extends nest_commander_1.CommandRunner {
    async run() {
        console.log('Pull your changes from github.');
        const credentials = (0, file_parse_1.parseCredentialsFile)();
        const gistUrl = `https://api.github.com/gists/${credentials['gist']}`;
        axios_1.default
            .get(gistUrl, {
            headers: {
                accept: 'application/vnd.github + json',
                Authorization: `Bearer ${credentials['token']}`,
                'Content-Type': 'application/json',
            },
        })
            .then((res) => {
            var _a;
            const result = ((_a = res === null || res === void 0 ? void 0 : res.data) === null || _a === void 0 ? void 0 : _a.files['commands.json'].content) || {};
            (0, files_persist_1.writeFile)(JSON.parse(result));
        })
            .catch((err) => {
            console.log(err);
        });
    }
};
PullCommand = __decorate([
    (0, nest_commander_1.Command)({ name: 'pull', description: 'Pull your changes from github' })
], PullCommand);
exports.PullCommand = PullCommand;
//# sourceMappingURL=pull.command.js.map