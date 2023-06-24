import BaseAPI from '../../BaseAPI';
import {TResponse} from '../../../domain/TResponse';
import {ErrorLogInCodes} from '../../../domain/auth/enums/ErrorCodeLogIn';
import {ILogInInfrastructure} from '../../../domain/interfaces/infrastructure/auth';
import {AUTH_CONFIGURATION_PROXY_LOG_IN} from '../../../domain/auth/types/AuthConfigurationTypes';
import {UnauthorizeError} from '../../../domain/exceptions/UnauthorizeError.';
import {LogInResponse} from '../../../domain/auth/dtos/LogInResponse';

export class LogInInfrastructure
  extends BaseAPI
  implements ILogInInfrastructure
{
  /**
   * Generate code (OTP) by User Id
   * @param userId User identifier
   * @returns bool
   */
  public async LogIn(
    email: string,
    password: string,
  ): Promise<TResponse<LogInResponse, ErrorLogInCodes>> {
    let response = {succeeded: false} as TResponse<
      LogInResponse,
      ErrorLogInCodes
    >;
    response = await this.post<TResponse<LogInResponse, ErrorLogInCodes>>(
      `${AUTH_CONFIGURATION_PROXY_LOG_IN}`,
      {
        email: email,
        password: password,
      },
      undefined,
      undefined,
    );
    response.succeeded = true;
    return response;
  }
}
