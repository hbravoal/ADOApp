import {ClientResponse} from '../../../client/dtos';
import {ICreateClientApplication} from './ICreateClientApplication';

export interface IGetAllClientApplication {
  GetAll: (pageNumber: number, pageSize: number) => Promise<ClientResponse[]>;
}
