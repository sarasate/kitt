"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListCommand = void 0;
const nest_commander_1 = require("nest-commander");
const commands_format_1 = require("../utils/commands.format");
const file_parse_1 = require("../utils/file.parse");
let ListCommand = class ListCommand extends nest_commander_1.CommandRunner {
    async run(inputs, options) {
        const json = (0, file_parse_1.parseFile)();
        console.log((0, commands_format_1.formatCommands)(json));
    }
};
ListCommand = __decorate([
    (0, nest_commander_1.Command)({
        name: 'list',
        aliases: ['ls'],
        description: 'List all commands',
    })
], ListCommand);
exports.ListCommand = ListCommand;
//# sourceMappingURL=list.command.js.map