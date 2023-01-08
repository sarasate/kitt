import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AddCommand, CommandQuestions } from './commands/add.command';
import { InitCommand } from './commands/init.command';
import { ListCommand } from './commands/list.command';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    AddCommand,
    InitCommand,
    ListCommand,
    CommandQuestions,
  ],
})
export class AppModule {}
