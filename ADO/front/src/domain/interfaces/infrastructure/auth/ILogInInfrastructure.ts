import {TResponse} from '../../../TResponse';
import {LogInResponse} from '../../../auth/dtos/LogInResponse';
import {ErrorLogInCodes} from '../../../auth/enums/ErrorCodeLogIn';

/**
 * [Interface]Log in user infrastructure interface.
 */
export interface ILogInInfrastructure {
  /**
   * Login user .
   */
  LogIn: (
    email: string,
    password: string,
  ) => Promise<TResponse<LogInResponse, ErrorLogInCodes>>;
}
