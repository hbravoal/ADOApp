import 'reflect-metadata';
import {container} from 'tsyringe';
import {LogInInfrastructure} from './external/auth/LogInInfrastructure';
import {LocalStorageInfrastructure} from './storage/LocalStorageInfrastructure';
import {GetAllClientInfrastructure} from './external/client';
import {ClientResponse} from '../domain/client/dtos';
import {CRUDInfrastructure} from './external/generic';

export const DependencyInjectionInfrastructure = (): void => {
  container.register('ILogInInfrastructure', {
    useClass: LogInInfrastructure,
  });
  container.register('ICRUDInfrastructure', {
    useClass: CRUDInfrastructure,
  });
  container.register('IStorageInfrastructure', {
    useClass: LocalStorageInfrastructure,
  });
};

export default DependencyInjectionInfrastructure;
