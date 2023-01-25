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
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VariableRunQuestions = exports.ExecRunQuestions = exports.QueryRunQuestions = exports.RunCommand = void 0;
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
        var _a, e_1, _b, _c;
        let query = inputs[0];
        if (!query) {
            const values = await this.inquirer.ask('query-run-questions', undefined);
            query = values.query;
        }
        const result = await (0, commands_search_1.searchCommands)(query);
        console.log((0, commands_format_1.formatLibraryCommands)(result));
        const commandIndex = (await this.inquirer.ask('exec-run-questions', undefined)).command;
        let execCommand = result[commandIndex - 1].command;
        const regex = /\[(.*?)\]/gm;
        const variables = execCommand.match(regex);
        try {
            for (var _d = true, variables_1 = __asyncValues(variables), variables_1_1; variables_1_1 = await variables_1.next(), _a = variables_1_1.done, !_a;) {
                _c = variables_1_1.value;
                _d = false;
                try {
                    const variable = _c;
                    const result = await this.inquirer.ask('variable-run-questions', undefined);
                    const input = result.input;
                    console.log(input);
                    execCommand = execCommand.replace(variable, input);
                }
                finally {
                    _d = true;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (!_d && !_a && (_b = variables_1.return)) await _b.call(variables_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
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
        description: 'Search for a command and c&p to run it.',
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
let VariableRunQuestions = class VariableRunQuestions {
    parseInput(value) {
        return value;
    }
};
__decorate([
    (0, nest_commander_1.Question)({
        message: 'Enter value for variable:',
        name: 'input',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VariableRunQuestions.prototype, "parseInput", null);
VariableRunQuestions = __decorate([
    (0, nest_commander_1.QuestionSet)({ name: 'variable-run-questions' })
], VariableRunQuestions);
exports.VariableRunQuestions = VariableRunQuestions;
//# sourceMappingURL=run.command.js.map