export interface LogInResponse {
  id: string;
  userName: string;
  provider: string;
  email: string;
  roles: string[];
  isVerified: boolean;
  jwToken: string;
  refreshToken: string;
}
