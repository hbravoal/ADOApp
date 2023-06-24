import 'reflect-metadata';
import {container} from 'tsyringe';
import {LogInInfrastructure} from './external/auth/LogInInfrastructure';
import {LocalStorageInfrastructure} from './storage/LocalStorageInfrastructure';

export const DependencyInjectionInfrastructure = (): void => {
  container.register('ILogInInfrastructure', {
    useClass: LogInInfrastructure,
  });
  container.register('IStorageInfrastructure', {
    useClass: LocalStorageInfrastructure,
  });
};

export default DependencyInjectionInfrastructure;
