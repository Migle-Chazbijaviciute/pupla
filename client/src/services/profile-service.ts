import axios, { AxiosInstance } from 'axios';
import AuthService from './auth-service';
import store from '../store';
import { updateUser } from '../store/auth';
import UserProfile from '../types/user-profile';
import { LoggedInUser } from '../types';

const ProfileService = new (class ProfileService {
  private requester: AxiosInstance;

  static validateToken() {
    const token = AuthService.getToken();
    if (!token) {
      throw new Error('Not authentificated');
    }

    return token;
  }

  constructor() {
    this.requester = axios.create({
      baseURL: 'http://localhost:5000/api',
      headers: { 'Content-Type': 'application/json' },
    });
  }

  async updateUserData(body: UserProfile): Promise<void> {
    const token = ProfileService.validateToken();
    const { data } = await this.requester.patch<LoggedInUser>('/users/', body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    store.dispatch(updateUser({ user: data }));
  }
})();

export default ProfileService;
