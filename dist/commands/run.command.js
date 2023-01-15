"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RunCommand = void 0;
const child_process_1 = require("child_process");
const nest_commander_1 = require("nest-commander");
let RunCommand = class RunCommand extends nest_commander_1.CommandRunner {
    async run(inputs, options) {
        console.log('%crun.command.ts line:12 inputs', 'color: #007acc;', inputs);
        (0, child_process_1.exec)('ls -la', (error, stdout, stderr) => {
            if (error) {
                console.log(`error: ${error.message}`);
                return;
            }
            if (stderr) {
                console.log(`stderr: ${stderr}`);
                return;
            }
            console.log(stdout);
        });
    }
};
RunCommand = __decorate([
    (0, nest_commander_1.Command)({
        name: 'run',
        arguments: '<command>',
    })
], RunCommand);
exports.RunCommand = RunCommand;
//# sourceMappingURL=run.command.js.map