import 'reflect-metadata';
import {container} from 'tsyringe';

import {ILogInApplication} from '../../domain/interfaces/application/auth/ILogInApplication';
import {ILogInInfrastructure} from '../../domain/interfaces/infrastructure/auth';
import {IStorageInfrastructure} from '../../domain/interfaces/infrastructure/storage';
import {TResponse} from '../../domain/TResponse';
import {LogInResponse} from '../../domain/auth/dtos/LogInResponse';
import {ErrorLogInCodes} from '../../domain/auth/enums/ErrorCodeLogIn';
import {STORAGE_KEY_USER_TOKEN} from '../../domain/types/StorageKeyTypes';
import {UnauthorizeError} from '../../domain/exceptions/UnauthorizeError.';
import {IGetAllClientApplication} from '../../domain/interfaces/application/client';
import {ClientResponse} from '../../domain/client/dtos';
import {IGetAllClientInfrastructure} from '../../domain/interfaces/infrastructure/client/IGetAllClientInfrastructure';
import {ICRUDInfrastructure} from '../../domain/interfaces/infrastructure/ICRUDInfrastructure';
import {
  AUTH_CONFIGURATION_PROXY_CLIENTS,
  AUTH_CONFIGURATION_PROXY_GET_CLIENTS,
} from '../../domain/client/types/ClientConfigurationTypes';
import {ICreateClientApplication} from '../../domain/interfaces/application/client/ICreateClientApplication';
import {CreateClientRequest} from '../../domain/client/dtos/CreateClientRequest';

export class CreateClientApplication implements ICreateClientApplication {
  private readonly _infrastructure: ICRUDInfrastructure<ClientResponse>;
  private readonly _storage: IStorageInfrastructure;

  constructor() {
    this._infrastructure = container.resolve<
      ICRUDInfrastructure<ClientResponse>
    >('ICRUDInfrastructure');
    this._storage = container.resolve<IStorageInfrastructure>(
      'IStorageInfrastructure',
    );
  }

  public async Create(request: CreateClientRequest): Promise<ClientResponse> {
    let response: ClientResponse = await this._infrastructure.Post(
      request,
      AUTH_CONFIGURATION_PROXY_CLIENTS,
    );

    console.log('Create', response);
    return response;
  }
}
