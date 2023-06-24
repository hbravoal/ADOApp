import 'reflect-metadata';
import {container} from 'tsyringe';
import {LogInApplication} from './auth';
import {GetAllClientApplication} from './client';
import {CreateClientApplication} from './client/CreateClientApplication';

export const DependencyInjectionApplication = (): void => {
  container.register('ILogInApplication', {
    useClass: LogInApplication,
  });
  container.register('IGetAllClientApplication', {
    useClass: GetAllClientApplication,
  });
  container.register('ICreateClientApplication', {
    useClass: CreateClientApplication,
  });
};

export default DependencyInjectionApplication;
