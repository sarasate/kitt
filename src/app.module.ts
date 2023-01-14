import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AddCommand, CommandQuestions } from './commands/add.command';
import {
  GithubTokenCommand,
  TokenQuestions,
} from './commands/github_token.command';
import { InitCommand } from './commands/init.command';
import { ListCommand } from './commands/list.command';
import { PushCommand } from './commands/push.command';
import { VersionCommand } from './commands/version.command';

@Module({
  imports: [],
  providers: [
    AppService,
    AddCommand,
    GithubTokenCommand,
    InitCommand,
    ListCommand,
    PushCommand,
    VersionCommand,
    CommandQuestions,
    TokenQuestions,
  ],
})
export class AppModule {}
