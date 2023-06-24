import BaseAPI from '../../BaseAPI';
import {AUTH_CONFIGURATION_PROXY_LOG_IN} from '../../../domain/auth/types/AuthConfigurationTypes';
import {IGetAllClientInfrastructure} from '../../../domain/interfaces/infrastructure/client/IGetAllClientInfrastructure';
import {ClientResponse} from '../../../domain/client/dtos';
import {AUTH_CONFIGURATION_PROXY_GET_CLIENTS} from '../../../domain/client/types/ClientConfigurationTypes';

export class GetAllClientInfrastructure
  extends BaseAPI
  implements IGetAllClientInfrastructure
{
  public async GetAll(
    pageNumber: number,
    pageSize: number,
  ): Promise<ClientResponse[]> {
    return await this.get<ClientResponse[]>(
      `${AUTH_CONFIGURATION_PROXY_GET_CLIENTS}`,
      {
        pageNumber: pageNumber,
        pageSize: pageSize,
      },
      undefined,
    );
  }
}
