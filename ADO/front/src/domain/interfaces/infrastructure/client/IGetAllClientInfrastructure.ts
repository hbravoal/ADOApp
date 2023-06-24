import {ClientResponse} from '../../../client/dtos';

export interface IGetAllClientInfrastructure {
  GetAll: (pageNumber: number, pageSize: number) => Promise<ClientResponse[]>;
}
