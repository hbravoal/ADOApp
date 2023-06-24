import {
  GENERAL_MESSAGE_ANY_ERROR,
  GENERAL_MESSAGE_UNAUTHORIZE,
} from '../types/GeneralMessageTypes';

/**
 * UnauthorizeError. error
 */
export class UnauthorizeError extends Error {
  constructor(stack: string | undefined = undefined) {
    super();
    this.name = 'Unauthorize';
    this.message = GENERAL_MESSAGE_UNAUTHORIZE;
    this.stack = stack;
  }
}
