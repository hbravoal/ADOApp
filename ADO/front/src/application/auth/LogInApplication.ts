import 'reflect-metadata';
import {container} from 'tsyringe';

import {ILogInApplication} from '../../domain/interfaces/application/auth/ILogInApplication';
import {
  ILogInInfrastructure,
  ILogOutInfrastructure,
} from '../../domain/interfaces/infrastructure/auth';
import {IStorageInfrastructure} from '../../domain/interfaces/infrastructure/storage';
import {TResponse} from '../../domain/TResponse';
import {LogInResponse} from '../../domain/auth/dtos/LogInResponse';
import {ErrorLogInCodes} from '../../domain/auth/enums/ErrorCodeLogIn';
import {STORAGE_KEY_USER_TOKEN} from '../../domain/types/StorageKeyTypes';
import {UnauthorizeError} from '../../domain/exceptions/UnauthorizeError.';

/**
 * [Application] Generate code
 */
export class LogInApplication implements ILogInApplication {
  private readonly _infrastructure: ILogInInfrastructure;
  private readonly _storage: IStorageInfrastructure;

  constructor() {
    this._infrastructure = container.resolve<ILogInInfrastructure>(
      'ILogInInfrastructure',
    );
    this._storage = container.resolve<IStorageInfrastructure>(
      'IStorageInfrastructure',
    );
  }

  public async LogIn(email: string, password: string): Promise<void> {
    let response: TResponse<LogInResponse, ErrorLogInCodes> =
      await this._infrastructure.LogIn(email, password);
    if (response?.succeeded && response.data) {
      this._storage.setGlobal(STORAGE_KEY_USER_TOKEN, response.data.jwToken);
    } else {
      throw new UnauthorizeError('Not found error');
    }
  }
}
