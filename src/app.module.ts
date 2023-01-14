import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AddCommand, CommandQuestions } from './commands/add.command';
import { InitCommand } from './commands/init.command';
import { ListCommand } from './commands/list.command';
import { VersionCommand } from './commands/version.command';

@Module({
  imports: [],
  providers: [
    AppService,
    AddCommand,
    InitCommand,
    ListCommand,
    VersionCommand,
    CommandQuestions,
  ],
})
export class AppModule {}
