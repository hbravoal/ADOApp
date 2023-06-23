/**
 * [Interface]Log in user infrastructure interface.
 */
export interface ILogInInfrastructure {
  /**
   * Login user .
   */
  LogIn: (email: string, password: string) => Promise<boolean>;
}
