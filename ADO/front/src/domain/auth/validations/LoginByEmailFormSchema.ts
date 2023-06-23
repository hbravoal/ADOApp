import * as Yup from 'yup';
import {
  USER_MUST_EMAIL_ADDRESS,
  USER_MUST_PASSWORD,
} from '../types/AuthMessageTypes';

export const LoginByEmailFormSchema = Yup.object().shape({
  email: Yup.string().required(USER_MUST_EMAIL_ADDRESS),
  password: Yup.string().required(USER_MUST_PASSWORD),
});
