import { Routes } from '@nestjs/core';
import { modulesRoutes } from './modules';

export const appRoutes: Routes = [
  {
    path: 'v1',
    // module: ModulesModule,
    children: modulesRoutes
  },
];