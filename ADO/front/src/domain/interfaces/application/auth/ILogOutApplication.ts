/**
 * [Interface] - Application Log out user
 */
export interface ILogOutApplication {
  /**
   *  Log out user .
   * @param userId user identifier
   * @returns  if was possible to LogOut
   */
  LogOut: () => Promise<boolean>;
}
