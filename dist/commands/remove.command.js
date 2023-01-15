"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveCommand = void 0;
const nest_commander_1 = require("nest-commander");
const files_persist_1 = require("../utils/files.persist");
const file_parse_1 = require("../utils/file.parse");
let RemoveCommand = class RemoveCommand extends nest_commander_1.CommandRunner {
    constructor(inquirer) {
        super();
        this.inquirer = inquirer;
    }
    async run(inputs, options) {
        const commands = (0, file_parse_1.parseFile)();
        delete commands[inputs[0]];
        (0, files_persist_1.writeFile)(commands);
    }
};
RemoveCommand = __decorate([
    (0, nest_commander_1.Command)({
        name: 'remove',
        description: 'Edit a command',
        aliases: ['rm'],
    }),
    __metadata("design:paramtypes", [nest_commander_1.InquirerService])
], RemoveCommand);
exports.RemoveCommand = RemoveCommand;
//# sourceMappingURL=remove.command.js.map