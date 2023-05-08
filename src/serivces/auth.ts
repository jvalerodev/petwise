import axiosClient from '@/config/axios';
import { API_ENDPOINTS } from '@/utils/consts';
import type { LoginFormValues, User } from '@/types/types';

const AuthService = {
  login: async (data: LoginFormValues) => {
    const res = await axiosClient.post(API_ENDPOINTS.LOGIN, data);
    const user: User = res.data;

    return user;
  },

  logout: async () => {
    await axiosClient.post(API_ENDPOINTS.LOGOUT);
  }
};

export default AuthService;
