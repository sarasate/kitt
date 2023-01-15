"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PushCommand = void 0;
const axios_1 = require("axios");
const nest_commander_1 = require("nest-commander");
const file_parse_1 = require("../utils/file.parse");
let PushCommand = class PushCommand extends nest_commander_1.CommandRunner {
    async run() {
        console.log('Pushing your changes to github.');
        const credentials = (0, file_parse_1.parseCredentialsFile)();
        const commands = (0, file_parse_1.parseFile)('commands.json');
        const newFile = {
            'commands.json': {
                content: JSON.stringify(commands),
            },
        };
        const gistUrl = `https://api.github.com/gists/${credentials['gist']}`;
        axios_1.default
            .patch(gistUrl, { files: newFile }, {
            headers: {
                accept: 'application/vnd.github + json',
                Authorization: `Bearer ${credentials['token']}`,
                'Content-Type': 'application/json',
            },
        })
            .then(() => {
            console.log('Successfully pushed to github!');
        })
            .catch((err) => {
            console.log(err);
        });
    }
};
PushCommand = __decorate([
    (0, nest_commander_1.Command)({ name: 'push', description: 'Push your changes to github' })
], PushCommand);
exports.PushCommand = PushCommand;
//# sourceMappingURL=push.command.js.map