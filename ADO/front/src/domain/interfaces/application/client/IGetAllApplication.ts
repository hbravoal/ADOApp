import {ClientResponse} from '../../../client/dtos';

export interface IGetAllApplication {
  GetAll: (pageNumber: number, pageSize: number) => Promise<ClientResponse[]>;
}
