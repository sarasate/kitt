"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const add_command_1 = require("./commands/add.command");
const github_token_command_1 = require("./commands/github_token.command");
const init_command_1 = require("./commands/init.command");
const list_command_1 = require("./commands/list.command");
const pull_command_1 = require("./commands/pull.command");
const push_command_1 = require("./commands/push.command");
const remove_command_1 = require("./commands/remove.command");
const version_command_1 = require("./commands/version.command");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        providers: [
            app_service_1.AppService,
            add_command_1.AddCommand,
            github_token_command_1.GithubTokenCommand,
            init_command_1.InitCommand,
            list_command_1.ListCommand,
            pull_command_1.PullCommand,
            push_command_1.PushCommand,
            remove_command_1.RemoveCommand,
            version_command_1.VersionCommand,
            add_command_1.CommandQuestions,
            github_token_command_1.TokenQuestions,
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map