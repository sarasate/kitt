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
exports.VersionCommand = void 0;
const nest_commander_1 = require("nest-commander");
const app_service_1 = require("../app.service");
let VersionCommand = class VersionCommand extends nest_commander_1.CommandRunner {
    constructor(appService) {
        super();
        this.appService = appService;
    }
    async run() {
        console.log(this.appService.getVersion());
    }
};
VersionCommand = __decorate([
    (0, nest_commander_1.Command)({ name: 'version', description: 'Get kitt version' }),
    __metadata("design:paramtypes", [app_service_1.AppService])
], VersionCommand);
exports.VersionCommand = VersionCommand;
//# sourceMappingURL=version.command.js.map