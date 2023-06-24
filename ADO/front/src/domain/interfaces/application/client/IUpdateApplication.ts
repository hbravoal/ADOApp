import {ClientResponse} from '../../../client/dtos';
import {UpdateClientRequest} from '../../../client/dtos';

export interface IUpdateApplication {
  Update: (request: UpdateClientRequest) => Promise<ClientResponse>;
}
