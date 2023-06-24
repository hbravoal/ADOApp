import {TResponse} from '../../../TResponse';
import {LogInResponse} from '../../../auth/dtos/LogInResponse';
import {ErrorLogInCodes} from '../../../auth/enums/ErrorCodeLogIn';

/**
 * [Interface] - Application Log in user
 */
export interface ILogInApplication {
  /**
   * Login user .
   */
  LogIn: (email: string, password: string) => Promise<void>;
}
