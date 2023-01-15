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
exports.TokenQuestions = exports.GithubTokenCommand = void 0;
const nest_commander_1 = require("nest-commander");
const files_persist_1 = require("../utils/files.persist");
let GithubTokenCommand = class GithubTokenCommand extends nest_commander_1.CommandRunner {
    constructor(inquirer) {
        super();
        this.inquirer = inquirer;
    }
    async run() {
        console.log('Set your github token');
        const values = await this.inquirer.ask('add-token', undefined);
        const { token, gist } = values;
        (0, files_persist_1.writeCredentialsFile)({ token, gist });
    }
};
GithubTokenCommand = __decorate([
    (0, nest_commander_1.Command)({ name: 'github_token', description: 'Set your github token' }),
    __metadata("design:paramtypes", [nest_commander_1.InquirerService])
], GithubTokenCommand);
exports.GithubTokenCommand = GithubTokenCommand;
let TokenQuestions = class TokenQuestions {
    parseToken(value) {
        return value;
    }
    parseGist(value) {
        return value;
    }
};
__decorate([
    (0, nest_commander_1.Question)({
        message: 'Please enter your github token.',
        name: 'token',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TokenQuestions.prototype, "parseToken", null);
__decorate([
    (0, nest_commander_1.Question)({ message: 'Please enter your gist id.', name: 'gist' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TokenQuestions.prototype, "parseGist", null);
TokenQuestions = __decorate([
    (0, nest_commander_1.QuestionSet)({ name: 'add-token' })
], TokenQuestions);
exports.TokenQuestions = TokenQuestions;
//# sourceMappingURL=github_token.command.js.map