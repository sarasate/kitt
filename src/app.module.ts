import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AddCommand, CommandQuestions } from './commands/add.command';
import {
  GithubTokenCommand,
  TokenQuestions,
} from './commands/github_token.command';
import { InitCommand } from './commands/init.command';
import { ListCommand } from './commands/list.command';
import { PullCommand } from './commands/pull.command';
import { PushCommand } from './commands/push.command';
import { RemoveCommand } from './commands/remove.command';
import { VersionCommand } from './commands/version.command';

@Module({
  imports: [],
  providers: [
    AppService,
    AddCommand,
    // EditCommand,
    GithubTokenCommand,
    InitCommand,
    ListCommand,
    PullCommand,
    PushCommand,
    RemoveCommand,
    VersionCommand,
    CommandQuestions,
    // EditQuestions,
    TokenQuestions,
  ],
})
export class AppModule {}
