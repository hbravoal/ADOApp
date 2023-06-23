import {GENERAL_MESSAGE_ANY_ERROR} from '../../domain/types/GeneralMessageTypes';

/**
 * Network error
 */
export class GeneralError extends Error {
  constructor(stack: string | undefined = undefined) {
    super();
    this.name = 'GeneralError';
    this.message = GENERAL_MESSAGE_ANY_ERROR;
    this.stack = stack;
  }
}
