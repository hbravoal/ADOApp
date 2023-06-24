import 'reflect-metadata';
import {container} from 'tsyringe';

import {IStorageInfrastructure} from '../../domain/interfaces/infrastructure/storage';
import {ClientResponse, UpdateClientRequest} from '../../domain/client/dtos';
import {ICRUDInfrastructure} from '../../domain/interfaces/infrastructure/ICRUDInfrastructure';
import {AUTH_CONFIGURATION_PROXY_CLIENTS} from '../../domain/client/types/ClientConfigurationTypes';
import {IUpdateApplication} from '../../domain/interfaces/application/client';

export class UpdateApplication implements IUpdateApplication {
  private readonly _infrastructure: ICRUDInfrastructure<ClientResponse>;

  constructor() {
    this._infrastructure = container.resolve<
      ICRUDInfrastructure<ClientResponse>
    >('ICRUDInfrastructure');
  }

  public async Update(request: UpdateClientRequest): Promise<ClientResponse> {
    let response: ClientResponse = await this._infrastructure.Update(
      request,
      AUTH_CONFIGURATION_PROXY_CLIENTS,
    );

    console.log('update', response);
    return response;
  }
}
