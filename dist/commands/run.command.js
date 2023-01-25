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
exports.ExecRunQuestions = exports.QueryRunQuestions = exports.RunCommand = void 0;
const nest_commander_1 = require("nest-commander");
const commands_format_1 = require("../utils/commands.format");
const commands_search_1 = require("../utils/commands.search");
const childProcess = require("child_process");
let RunCommand = class RunCommand extends nest_commander_1.CommandRunner {
    constructor(inquirer) {
        super();
        this.inquirer = inquirer;
    }
    async run(inputs, options) {
        let query = inputs[0];
        if (!query) {
            const values = await this.inquirer.ask('query-run-questions', undefined);
            query = values.query;
        }
        const result = await (0, commands_search_1.searchCommands)(query);
        console.log((0, commands_format_1.formatLibraryCommands)(result));
        const commandIndex = (await this.inquirer.ask('exec-run-questions', undefined)).command;
        const execCommand = result[commandIndex - 1].command;
        console.log(execCommand.toString());
        console.log('Command is copied to your clipboard, if available. Paste it in your terminal.');
        try {
            const clipboard = childProcess.spawn('pbcopy');
            clipboard.stdin.write(execCommand);
            clipboard.stdin.end();
        }
        catch (error) {
            console.log(error);
        }
    }
};
RunCommand = __decorate([
    (0, nest_commander_1.Command)({
        name: 'run',
    }),
    __metadata("design:paramtypes", [nest_commander_1.InquirerService])
], RunCommand);
exports.RunCommand = RunCommand;
let QueryRunQuestions = class QueryRunQuestions {
    parseQuery(value) {
        return value;
    }
};
__decorate([
    (0, nest_commander_1.Question)({
        message: 'Search for commands:',
        name: 'query',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], QueryRunQuestions.prototype, "parseQuery", null);
QueryRunQuestions = __decorate([
    (0, nest_commander_1.QuestionSet)({ name: 'query-run-questions' })
], QueryRunQuestions);
exports.QueryRunQuestions = QueryRunQuestions;
let ExecRunQuestions = class ExecRunQuestions {
    parseCommand(value) {
        return value;
    }
};
__decorate([
    (0, nest_commander_1.Question)({
        message: 'Which command do you want to run?',
        name: 'command',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ExecRunQuestions.prototype, "parseCommand", null);
ExecRunQuestions = __decorate([
    (0, nest_commander_1.QuestionSet)({ name: 'exec-run-questions' })
], ExecRunQuestions);
exports.ExecRunQuestions = ExecRunQuestions;
//# sourceMappingURL=run.command.js.map