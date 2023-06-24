import {ClientResponse} from '../../../client/dtos';
import {CreateClientRequest} from '../../../client/dtos/CreateClientRequest';

export interface ICreateApplication {
  Create: (request: CreateClientRequest) => Promise<ClientResponse>;
}
