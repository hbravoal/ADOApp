/**
 * Type for Login
 */
export interface LoginByMailForm {
  email: string;
  password: string;
}

/**
 * Default value for FORM Login redux
 */
export const LoginFormInitialValues: LoginByMailForm = {
  email: '',
  password: '',
};
