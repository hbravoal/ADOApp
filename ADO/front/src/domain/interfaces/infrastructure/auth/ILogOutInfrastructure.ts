/**
 * [Interface]Log out user infrastructure interface.
 */
export interface ILogOutInfrastructure {
  /**
   * Log out user .
   * @returns  boolean if was possible to LogOut
   */
  LogOut: () => Promise<boolean>;
}
