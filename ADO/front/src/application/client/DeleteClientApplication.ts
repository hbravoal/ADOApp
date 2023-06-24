import 'reflect-metadata';
import {container} from 'tsyringe';
import {IStorageInfrastructure} from '../../domain/interfaces/infrastructure/storage';
import {ClientResponse} from '../../domain/client/dtos';
import {ICRUDInfrastructure} from '../../domain/interfaces/infrastructure/ICRUDInfrastructure';
import {AUTH_CONFIGURATION_PROXY_CLIENTS} from '../../domain/client/types/ClientConfigurationTypes';
import {IDeleteApplication} from '../../domain/interfaces/application/client';

export class DeleteApplication implements IDeleteApplication {
  private readonly _infrastructure: ICRUDInfrastructure<ClientResponse>;

  constructor() {
    this._infrastructure = container.resolve<
      ICRUDInfrastructure<ClientResponse>
    >('ICRUDInfrastructure');
  }

  public async Delete(request: number): Promise<void> {
    await this._infrastructure.Delete(
      request,
      AUTH_CONFIGURATION_PROXY_CLIENTS,
    );
  }
}
