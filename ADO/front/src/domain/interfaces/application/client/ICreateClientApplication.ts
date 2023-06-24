import {ClientResponse} from '../../../client/dtos';
import {CreateClientRequest} from '../../../client/dtos/CreateClientRequest';

export interface ICreateClientApplication {
  Create: (request: CreateClientRequest) => Promise<ClientResponse>;
}
