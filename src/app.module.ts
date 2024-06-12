import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { appRoutes } from './app.routes';
import { ModulesModule } from './modules/modules.module';

@Module({
  imports: [
    ModulesModule,
    RouterModule.register(appRoutes),
  ],
})
export class AppModule {}
