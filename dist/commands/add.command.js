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
exports.AddCommand = exports.CommandQuestions = void 0;
const nest_commander_1 = require("nest-commander");
const file_parse_1 = require("../utils/file.parse");
const files_persist_1 = require("../utils/files.persist");
let CommandQuestions = class CommandQuestions {
    parseCommand(value) {
        return value;
    }
    parseDesc(value) {
        return value;
    }
    parseAlias(value) {
        return value;
    }
};
__decorate([
    (0, nest_commander_1.Question)({
        message: 'What command would you like to add?',
        name: 'command',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CommandQuestions.prototype, "parseCommand", null);
__decorate([
    (0, nest_commander_1.Question)({ message: "What's the description?", name: 'description' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CommandQuestions.prototype, "parseDesc", null);
__decorate([
    (0, nest_commander_1.Question)({ message: "What's the alias?", name: 'alias' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CommandQuestions.prototype, "parseAlias", null);
CommandQuestions = __decorate([
    (0, nest_commander_1.QuestionSet)({ name: 'add-questions' })
], CommandQuestions);
exports.CommandQuestions = CommandQuestions;
let AddCommand = class AddCommand extends nest_commander_1.CommandRunner {
    constructor(inquirer) {
        super();
        this.inquirer = inquirer;
    }
    async run(inputs, options) {
        let values = {};
        values = await this.inquirer.ask('add-questions', undefined);
        const { command, description, alias } = values;
        const json = (0, file_parse_1.parseFile)();
        Object.assign(json, { [command]: { description, alias } });
        (0, files_persist_1.writeFile)(json);
    }
};
AddCommand = __decorate([
    (0, nest_commander_1.Command)({ name: 'add', description: 'Add a new command' }),
    __metadata("design:paramtypes", [nest_commander_1.InquirerService])
], AddCommand);
exports.AddCommand = AddCommand;
//# sourceMappingURL=add.command.js.map