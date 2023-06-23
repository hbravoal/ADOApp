import {GENERAL_NETWORK_ERROR} from '../../domain/types/GeneralMessageTypes';

/**
 * Network error
 */
export class NetworkError extends Error {
  constructor(stack: string | undefined = undefined) {
    super();
    this.name = 'NetworkError';
    this.message = GENERAL_NETWORK_ERROR;
    this.stack = stack;
  }
}
