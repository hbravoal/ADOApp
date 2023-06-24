import 'reflect-metadata';
import {container} from 'tsyringe';

import {IStorageInfrastructure} from '../../domain/interfaces/infrastructure/storage';

import {ClientResponse} from '../../domain/client/dtos';
import {ICRUDInfrastructure} from '../../domain/interfaces/infrastructure/ICRUDInfrastructure';
import {AUTH_CONFIGURATION_PROXY_GET_CLIENTS} from '../../domain/client/types/ClientConfigurationTypes';
import {IGetAllApplication} from '../../domain/interfaces/application/client';

export class GetAllApplication implements IGetAllApplication {
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

  public async GetAll(
    pageNumber: number,
    pageSize: number,
  ): Promise<ClientResponse[]> {
    let response: ClientResponse[] = await this._infrastructure.GetAll(
      pageNumber,
      pageSize,
      AUTH_CONFIGURATION_PROXY_GET_CLIENTS,
    );

    console.log('getall', response);
    return response;
  }
}
