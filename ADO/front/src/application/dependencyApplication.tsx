import 'reflect-metadata';
import {container} from 'tsyringe';
import {LogInApplication} from './auth';
import {
  GetAllApplication,
  CreateApplication,
  UpdateApplication,
} from './client';

export const DependencyInjectionApplication = (): void => {
  container.register('ILogInApplication', {
    useClass: LogInApplication,
  });
  container.register('IGetAllClientApplication', {
    useClass: GetAllApplication,
  });
  container.register('ICreateClientApplication', {
    useClass: CreateApplication,
  });
  container.register('IUpdateClientApplication', {
    useClass: UpdateApplication,
  });
};

export default DependencyInjectionApplication;
