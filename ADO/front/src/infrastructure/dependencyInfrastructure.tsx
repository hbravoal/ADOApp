import {container} from 'tsyringe';
import {LogInInfrastructure} from './external/auth/GenerateCodeInfrastructure';

export const DependencyInjectionInfrastructure = (): void => {
  container.register('ILogInInfrastructure', {
    useClass: LogInInfrastructure,
  });
};

export default DependencyInjectionInfrastructure;
