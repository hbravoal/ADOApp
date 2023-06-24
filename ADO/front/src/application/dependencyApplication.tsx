import 'reflect-metadata';
import {container} from 'tsyringe';
import {LogInApplication} from './auth';

export const DependencyInjectionApplication = (): void => {
  container.register('ILogInApplication', {
    useClass: LogInApplication,
  });
};

export default DependencyInjectionApplication;
