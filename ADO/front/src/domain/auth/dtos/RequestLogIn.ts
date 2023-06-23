/**
 * [DTO] Authentication
 */
export interface RequestLogIn {
  /**
   * User's phone
   */
  Email: string;

  /**
   * Device token
   */
  Password: string;
}
