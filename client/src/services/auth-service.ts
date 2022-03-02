import axios, { AxiosInstance } from 'axios';
import SessionService from './session-service';
import reduxStore from '../store/index';
import { login, logout, authFailed } from '../store/auth';
import { LoggedInUser, InitialRegistration } from '../types';

type AuthResponse = {
  user: LoggedInUser,
  token: string
};

type CheckEmailResponse = {
  available: boolean,
};

type LoginInfo = {
  email: string,
  password: string,
};

const AuthService = new (class AuthService {
  private requester: AxiosInstance;

  private token?: string;

  constructor() {
    const token = SessionService.get('auth_token');

    this.requester = axios.create({
      baseURL: 'http://localhost:5000/api/auth',
      headers: { 'Content-Type': 'application/json' },
    });

    if (token) {
      this.authenticate(token);
    } else {
      reduxStore.dispatch(authFailed());
    }
  }

  setAuth(token: string): void {
    this.token = token;
    this.requester.defaults.headers.common.Authorization = `Bearer ${token}`;
  }

  getToken() {
    return this.token;
  }

  async login({ email, password }: LoginInfo): Promise<LoggedInUser | string> {
    try {
      const response = await this.requester.post<AuthResponse>('/login', { email, password });
      const { user, token } = response.data;
      SessionService.set('auth_token', token);
      this.setAuth(token);
      return user;
    } catch (error) {
      if (error instanceof Error) return error.message;

      return error as unknown as string;
    }
  }

  async register(formData: InitialRegistration): Promise<LoggedInUser | string> {
    try {
      const response = await this.requester.post('/register', formData);
      const { user, token } = response.data;
      SessionService.set('auth_token', token);
      this.setAuth(token);

      return user;
    } catch (error) {
      if (error instanceof Error) return error.message;

      return error as unknown as string;
    }
  }

  logout(): void {
    SessionService.clear('auth_token');
    delete this.requester.defaults.headers.common.Authorization;
    reduxStore.dispatch(logout());
  }

  async authenticate(token: string): Promise<string | true> {
    try {
      const { data: user } = await this.requester.post('/', { token });
      reduxStore.dispatch(login({ user }));
      this.setAuth(token);

      return true;
    } catch (error) {
      reduxStore.dispatch(authFailed());
      if (error instanceof Error) return error.message;

      return error as unknown as string;
    }
  }

  async checkEmail(email: string): Promise<boolean | string> {
    try {
      const { data } = await this.requester.get<CheckEmailResponse>(`/check-email?email=${email}`);
      return data.available;
    } catch (error) {
      if (error instanceof Error) return error.message;

      return error as unknown as string;
    }
  }
})();

export default AuthService;
