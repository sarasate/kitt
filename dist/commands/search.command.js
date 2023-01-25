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
exports.SearchQuestions = exports.SearchCommand = void 0;
const nest_commander_1 = require("nest-commander");
const commands_format_1 = require("../utils/commands.format");
const commands_search_1 = require("../utils/commands.search");
const COMMAND_REPO_URL = 'https://api.github.com/repos/sarasate/commands/contents/index.json';
let SearchCommand = class SearchCommand extends nest_commander_1.CommandRunner {
    constructor(inquirer) {
        super();
        this.inquirer = inquirer;
    }
    async run(inputs, options) {
        let query = inputs[0];
        if (!query) {
            const values = await this.inquirer.ask('search-questions', undefined);
            query = values.query;
        }
        (0, commands_search_1.searchCommands)(query).then((output) => {
            console.log((0, commands_format_1.formatLibraryCommands)(output));
        });
    }
};
SearchCommand = __decorate([
    (0, nest_commander_1.Command)({
        name: 'search',
        description: 'Search for a command in the command library',
        aliases: ['s'],
    }),
    __metadata("design:paramtypes", [nest_commander_1.InquirerService])
], SearchCommand);
exports.SearchCommand = SearchCommand;
let SearchQuestions = class SearchQuestions {
    parseCommand(value) {
        return value;
    }
};
__decorate([
    (0, nest_commander_1.Question)({
        message: 'What are you looking for?',
        name: 'query',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SearchQuestions.prototype, "parseCommand", null);
SearchQuestions = __decorate([
    (0, nest_commander_1.QuestionSet)({ name: 'search-questions' })
], SearchQuestions);
exports.SearchQuestions = SearchQuestions;
//# sourceMappingURL=search.command.js.map