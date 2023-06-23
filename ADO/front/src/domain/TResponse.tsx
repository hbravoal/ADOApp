export interface TResponse<T, TError> {
  error?: string;
  succeeded?: boolean;
  data?: T;
  errorCode?: TError;
}
