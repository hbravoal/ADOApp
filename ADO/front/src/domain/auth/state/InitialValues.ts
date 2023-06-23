/**
 * Type for Login redux
 */
export interface LoginByMailForm {
  email: string;
}

/**
 * Default value for FORM Login redux
 */
export const LoginFormInitialValues: LoginByMailForm = {
  email: '',
};
