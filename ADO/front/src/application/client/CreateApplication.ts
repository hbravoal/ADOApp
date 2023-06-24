import 'reflect-metadata';
import {container} from 'tsyringe';
import {IStorageInfrastructure} from '../../domain/interfaces/infrastructure/storage';
import {ClientResponse} from '../../domain/client/dtos';
import {ICRUDInfrastructure} from '../../domain/interfaces/infrastructure/ICRUDInfrastructure';
import {AUTH_CONFIGURATION_PROXY_CLIENTS} from '../../domain/client/types/ClientConfigurationTypes';
import {ICreateApplication} from '../../domain/interfaces/application/client';
import {CreateClientRequest} from '../../domain/client/dtos/CreateClientRequest';

export class CreateApplication implements ICreateApplication {
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
