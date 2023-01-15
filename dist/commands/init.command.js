"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitCommand = void 0;
const nest_commander_1 = require("nest-commander");
const fs = require("fs");
const os = require("os");
const BASE_PATH = `${os.homedir()}/.kitt`;
let InitCommand = class InitCommand extends nest_commander_1.CommandRunner {
    async run() {
        if (fs.existsSync(BASE_PATH) === false) {
            fs.mkdirSync(BASE_PATH);
        }
        fs.writeFileSync(`${BASE_PATH}/commands.json`, '');
        console.log('Initialized kitt');
    }
};
InitCommand = __decorate([
    (0, nest_commander_1.Command)({ name: 'init', description: 'Initialize kitt' })
], InitCommand);
exports.InitCommand = InitCommand;
//# sourceMappingURL=init.command.js.map