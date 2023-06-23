import BaseAPI from '../../../infrastructure/BaseAPI';
import {TResponse} from '../../../domain/TResponse';
import {ErrorCodeLogIn} from '../../../domain/auth/enums/ErrorCodeLogIn';
import {ILogInInfrastructure} from '../../../domain/interfaces/infrastructure/auth';
import {AUTH_CONFIGURATION_PROXY_LOG_IN} from '../../../domain/auth/types/AuthConfigurationTypes';
import {UserModel} from '../../../domain/auth/model';

export class LogInInfrastructure
  extends BaseAPI
  implements ILogInInfrastructure
{
  /**
   * Generate code (OTP) by User Id
   * @param userId User identifier
   * @returns bool
   */
  public async LogIn(email: string, password: string): Promise<boolean> {
    let response = await this.post<TResponse<UserModel, ErrorCodeLogIn>>(
      `${AUTH_CONFIGURATION_PROXY_LOG_IN}`,
      {
        Email: email,
        Password: password,
      },
      undefined,
      undefined,
    );
    console.log('Response' + response);
    return true;
  }
}
