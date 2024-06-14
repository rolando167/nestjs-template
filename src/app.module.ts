import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { appRoutes } from './app.routes';
import { ModulesModule } from './modules/modules.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ModulesModule,
    RouterModule.register(appRoutes),
    ConfigModule.forRoot({
      envFilePath: ['.env'],
    })
  ],
})
export class AppModule {}
